from flask import Flask, render_template, request, redirect, url_for, send_file
import sqlite3
from datetime import datetime
import pandas as pd
import io

app = Flask(__name__)
DATABASE = 'database.db'


def get_db():
    return sqlite3.connect(DATABASE)


def init_db():
    with get_db() as conn:
        conn.execute('CREATE TABLE IF NOT EXISTS clients (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT)')
        conn.execute('CREATE TABLE IF NOT EXISTS tasks (id INTEGER PRIMARY KEY AUTOINCREMENT, client_id INTEGER, name TEXT, status TEXT)')
        conn.execute('CREATE TABLE IF NOT EXISTS time_entries (id INTEGER PRIMARY KEY AUTOINCREMENT, client_id INTEGER, task_id INTEGER, start_time TEXT, end_time TEXT)')
        # Datos de ejemplo si las tablas estan vacias
        if conn.execute('SELECT COUNT(*) FROM clients').fetchone()[0] == 0:
            conn.execute('INSERT INTO clients (name) VALUES (?)', ('Cliente A',))
            conn.execute('INSERT INTO clients (name) VALUES (?)', ('Cliente B',))
        if conn.execute('SELECT COUNT(*) FROM tasks').fetchone()[0] == 0:
            conn.execute('INSERT INTO tasks (client_id, name, status) VALUES (1, "Tarea 1", "open")')
            conn.execute('INSERT INTO tasks (client_id, name, status) VALUES (1, "Tarea 2", "open")')
            conn.execute('INSERT INTO tasks (client_id, name, status) VALUES (2, "Tarea 1", "open")')
        conn.commit()


@app.before_first_request
def setup():
    init_db()


@app.route('/', methods=['GET'])
def index():
    conn = get_db()
    clients = conn.execute('SELECT id, name FROM clients').fetchall()
    selected_client = request.args.get('client_id')
    tasks = []
    if selected_client:
        tasks = conn.execute(
            'SELECT id, name FROM tasks WHERE client_id=? AND status="open"',
            (selected_client,)
        ).fetchall()
    running_entry = conn.execute(
        'SELECT id, client_id, task_id FROM time_entries WHERE end_time IS NULL'
    ).fetchone()
    conn.close()
    return render_template(
        'index.html',
        clients=clients,
        tasks=tasks,
        selected_client=selected_client,
        running_entry=running_entry,
    )


@app.route('/start', methods=['POST'])
def start():
    client_id = request.form['client_id']
    task_id = request.form['task_id']
    now = datetime.now().isoformat(timespec='seconds')
    with get_db() as conn:
        conn.execute(
            'INSERT INTO time_entries (client_id, task_id, start_time) VALUES (?, ?, ?)',
            (client_id, task_id, now),
        )
        conn.commit()
    return redirect(url_for('index', client_id=client_id))


@app.route('/stop', methods=['POST'])
def stop():
    now = datetime.now().isoformat(timespec='seconds')
    with get_db() as conn:
        entry = conn.execute(
            'SELECT id FROM time_entries WHERE end_time IS NULL ORDER BY start_time DESC LIMIT 1'
        ).fetchone()
        if entry:
            conn.execute('UPDATE time_entries SET end_time=? WHERE id=?', (now, entry[0]))
            conn.commit()
    return redirect(url_for('index'))


@app.route('/report')
def report():
    date = request.args.get('date')
    query = (
        'SELECT t.start_time, t.end_time, c.name as client, ta.name as task '
        'FROM time_entries t '
        'JOIN clients c ON t.client_id=c.id '
        'JOIN tasks ta ON t.task_id=ta.id'
    )
    params = []
    if date:
        query += ' WHERE date(t.start_time)=?'
        params.append(date)
    with get_db() as conn:
        entries = conn.execute(query, params).fetchall()
    return render_template('report.html', entries=entries, date=date)


@app.route('/export')
def export():
    date = request.args.get('date')
    query = (
        'SELECT t.start_time, t.end_time, c.name as client, ta.name as task '
        'FROM time_entries t '
        'JOIN clients c ON t.client_id=c.id '
        'JOIN tasks ta ON t.task_id=ta.id'
    )
    params = []
    if date:
        query += ' WHERE date(t.start_time)=?'
        params.append(date)
    with get_db() as conn:
        df = pd.read_sql_query(query, conn, params=params)
    output = io.BytesIO()
    df.to_excel(output, index=False)
    output.seek(0)
    return send_file(output, download_name='reporte.xlsx', as_attachment=True)


if __name__ == '__main__':
    app.run(debug=True)
