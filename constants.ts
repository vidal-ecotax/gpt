
import { Person, ProcedureStep } from './types';

export const MANUAL_CONTENT_FOR_AI = `
Esquema del Manual de Procedimientos de Ecotax Consultores

1. Introducción
- Objetivo del manual: Establecer una guía clara y estructurada para el funcionamiento interno, estandarizar procesos, definir roles y garantizar la eficiencia y cumplimiento normativo.
- Alcance del manual: Abarca todas las actividades y procedimientos clave (fiscal, contable, laboral, subvenciones) y es aplicable a todos los empleados.
- Responsables de su cumplimiento: Todos los empleados. Vidal (general), Alberto (laboral), Raquel, Beatriz y Maika (fiscal/contable).

2. Estructura Organizativa
- Organigrama: Vidal (Responsable General) -> Alberto (Responsable Área Laboral), Raquel y Beatriz (Especialistas Área Fiscal y Contable), Maika (Especialista Área Fiscal y Contable, Responsable Subvenciones).
- Áreas:
  - Fiscal: Gestión y cumplimiento de obligaciones tributarias, preparación de declaraciones, revisión de impuestos.
  - Contable: Contabilización de operaciones, gestión de libros contables, informes financieros, conciliación bancaria.
  - Laboral: Gestión de contratos, nóminas, seguros sociales, asesoramiento en conflictos laborales.
  - Subvenciones: Identificación de oportunidades, preparación de documentación, presentación y seguimiento de solicitudes.

3. Funciones y Responsabilidades
- Vidal (Responsable General): Supervisión general, toma de decisiones estratégicas, coordinación de áreas.
- Alberto (Responsable Dept. Laboral): Gestión de nóminas, contratos laborales, asesoramiento en derecho laboral.
- Raquel y Beatriz (Área Fiscal y Contable): Preparación de declaraciones fiscales, seguimiento de impuestos, contabilización e informes financieros.
- Maika (Área Fiscal y Contable, Responsable de Subvenciones): Contabilización, informes financieros, gestión fiscal y contable, tramitación de subvenciones, apoyo administrativo al área laboral.

4. Procedimientos Generales
- 4.1 Atención al Cliente:
  - Recepción de solicitudes: Correo electrónico, teléfono, presencial, plataformas digitales.
  - Asignación de responsable: Fiscal (Raquel, Beatriz, Maika), Laboral (Alberto), Subvenciones (Maika). Vidal coordina casos complejos.
  - Gestión en Planner: Crear tarea, asignar responsables, resumir en Notas, definir hitos, adjuntar archivos, fijar fechas, usar Comentarios para comunicación.
  - Registro y archivo: Recopilar y registrar documentos del cliente.
  - Comunicación: Confirmación de recepción, informes de progreso, cierre de solicitud.
- 4.2 Procedimiento de Contabilidad: Recopilación y clasificación de documentos, registro de operaciones, revisión, elaboración de informes, conciliación bancaria, archivo.
- 4.3 Procedimiento Fiscal: Recopilación de documentación, elaboración de declaraciones, contabilización, elaboración de informes, revisión y presentación, control de plazos.
- 4.4 Procedimiento Laboral: Elaboración de nóminas, contratos y alta/baja, asesoramiento, presentación de seguros sociales, apoyo administrativo (Maika).
- 4.5 Procedimiento de Subvenciones: Identificación de oportunidades, preparación de documentación, presentación y seguimiento (responsabilidad de Maika).

5. Normas y Políticas Internas
- Política de Calidad del Servicio
- Normativa sobre Manejo de Documentos y Confidencialidad
- Política de Comunicación Interna
- Política de Gestión del Tiempo y Plazos

6. Comunicación Interna
- Coordinación entre áreas, reuniones periódicas, uso de herramientas tecnológicas.

7. Gestión de Clientes y Archivo de Información
- Protocolo de alta de nuevos clientes, archivo físico y digital, seguridad de la información.

8. Revisión y Actualización del Manual
- Frecuencia de revisión, procedimiento de actualización, responsable de actualización (Vidal).
`;

export const introductionContent = {
    objective: "El objetivo principal de este manual de procedimientos es establecer una guía clara y estructurada para el funcionamiento interno de Ecotax Consultores. Este documento busca estandarizar los procesos operativos, definir roles y responsabilidades, y garantizar que las tareas se realicen de manera eficiente y conforme a las normativas legales vigentes.",
    scope: "Este manual abarca todas las actividades y procedimientos clave de Ecotax Consultores, incluyendo las áreas fiscal, contable, laboral y de subvenciones. Es aplicable a todos los empleados y es un recurso esencial para los nuevos empleados en su proceso de inducción.",
    responsibility: "El cumplimiento de este manual es responsabilidad de todos los empleados. Vidal, como responsable general, supervisará la correcta implementación. Cada responsable de área (Alberto, Raquel, Beatriz, Maika) garantizará el cumplimiento en sus respectivos departamentos."
};

export const orgStructureContent = {
    orgChart: "Ecotax Consultores está organizado en tres áreas clave: fiscal, contable, laboral y la tramitación de subvenciones. Vidal, como responsable general, coordina todas las áreas, mientras que cada miembro del equipo tiene asignadas responsabilidades específicas.",
    areas: [
        { name: "Área Fiscal", description: "Se encarga de la gestión y cumplimiento de las obligaciones tributarias de los clientes. Incluye la preparación y presentación de declaraciones fiscales, la revisión de impuestos y la elaboración de informes financieros." , image: "https://picsum.photos/seed/fiscal/600/400"},
        { name: "Área Contable", description: "Enfocada en la contabilización de todas las operaciones económicas de los clientes. Incluye la gestión de libros contables, preparación de informes financieros precisos, y conciliación bancaria.", image: "https://picsum.photos/seed/contable/600/400" },
        { name: "Área Laboral", description: "Gestiona todos los aspectos relacionados con los empleados de los clientes, incluidos contratos, nóminas, seguros sociales y asesoramiento en conflictos laborales.", image: "https://picsum.photos/seed/laboral/600/400" },
        { name: "Área de Subvenciones", description: "Un área clave para clientes que buscan acceder a fondos públicos. Se encarga de identificar oportunidades, preparar la documentación requerida, y presentar y hacer seguimiento de las solicitudes.", image: "https://picsum.photos/seed/subvenciones/600/400" }
    ]
};

export const people: Person[] = [
    { name: "Vidal", role: "Responsable General", area: "Dirección", responsibilities: ["Supervisión general de todos los departamentos.", "Toma de decisiones estratégicas.", "Coordinación entre las áreas para un servicio holístico."], imageUrl: "https://picsum.photos/seed/vidal/400/400" },
    { name: "Alberto", role: "Responsable Departamento Laboral", area: "Laboral", responsibilities: ["Gestión de nóminas y contratos laborales.", "Asesoramiento en materia de derecho laboral.", "Gestión de altas y bajas de empleados."], imageUrl: "https://picsum.photos/seed/alberto/400/400" },
    { name: "Raquel y Beatriz", role: "Especialistas en Área Fiscal y Contable", area: "Fiscal y Contable", responsibilities: ["Preparación de declaraciones fiscales (IRPF, IVA, etc.).", "Revisión y seguimiento de impuestos.", "Contabilización y elaboración de informes financieros."], imageUrl: "https://picsum.photos/seed/raquel/400/400" },
    { name: "Maika", role: "Área Fiscal y Contable, Responsable de Subvenciones", area: "Fiscal, Contable y Subvenciones", responsibilities: ["Contabilización e informes financieros.", "Apoyo en gestión fiscal y contable.", "Liderar la tramitación y seguimiento de subvenciones.", "Apoyo administrativo al departamento laboral."], imageUrl: "https://picsum.photos/seed/maika/400/400" }
];

export const procedures: ProcedureStep[] = [
    {
        title: "4.1 Proceso de Atención al Cliente",
        description: "Diseñado para garantizar que las necesidades de los clientes sean atendidas de manera rápida, eficiente y profesional.",
        points: [
            "Recepción de solicitudes: A través de correo electrónico, teléfono, presencial o plataformas digitales.",
            "Asignación de responsable: La solicitud se deriva al área correspondiente (Fiscal, Laboral, Subvenciones). Vidal coordina casos complejos.",
            "Registro y archivo de documentos: Se registra y archiva toda la documentación relevante.",
            "Comunicación con el cliente: Se mantiene una comunicación fluida sobre el progreso y cierre de la solicitud."
        ],
        image: "https://picsum.photos/seed/cliente/600/400"
    },
    {
        title: "Uso de Planner para Gestión de Tareas",
        description: "Cuando una solicitud requiere una tarea específica, se utiliza la herramienta Planner.",
        points: [
            "Alta de la tarea: Se crea una nueva tarea en el plan del área correspondiente.",
            "Asignación de responsables: Se asigna la tarea a los miembros del equipo implicados.",
            "Detalles de la tarea: Se incluye un resumen en 'Notas', se definen 'hitos' o pasos, y se adjuntan archivos relevantes.",
            "Fijación de fechas: Se establece una fecha de inicio y vencimiento.",
            "Comunicación: Se utiliza la pestaña de 'Comentarios' para toda la comunicación relacionada con la tarea."
        ],
        image: "https://picsum.photos/seed/planner/600/400"
    },
    {
        title: "4.2 Procedimiento de Contabilidad",
        description: "Garantiza la precisión y el orden en los registros financieros de los clientes.",
        points: [
            "Recopilación y clasificación de documentación contable.",
            "Registro de operaciones en el software contable.",
            "Revisión y ajuste de registros.",
            "Elaboración de informes contables periódicos.",
            "Conciliación bancaria."
        ],
        image: "https://picsum.photos/seed/procedimiento-contable/600/400"
    },
     {
        title: "4.3 Procedimiento Fiscal",
        description: "Asegura el cumplimiento de todas las obligaciones tributarias de los clientes.",
        points: [
            "Recopilación de documentación fiscal.",
            "Elaboración de declaraciones fiscales.",
            "Contabilización de operaciones con implicaciones fiscales.",
            "Revisión y presentación de declaraciones en tiempo y forma.",
            "Control de plazos fiscales."
        ],
        image: "https://picsum.photos/seed/procedimiento-fiscal/600/400"
    },
    {
        title: "4.4 Procedimiento Laboral",
        description: "Cubre todas las gestiones relacionadas con los empleados de nuestros clientes.",
        points: [
            "Elaboración de nóminas.",
            "Gestión de contratos, altas y bajas de empleados.",
            "Asesoramiento en conflictos laborales.",
            "Presentación de seguros sociales."
        ],
        image: "https://picsum.photos/seed/procedimiento-laboral/600/400"
    },
    {
        title: "4.5 Procedimiento de Subvenciones",
        description: "Proceso para ayudar a los clientes a obtener financiación pública.",
        points: [
            "Identificación de oportunidades de subvenciones.",
            "Preparación de la documentación requerida.",
            "Presentación y seguimiento de la solicitud (responsabilidad de Maika)."
        ],
        image: "https://picsum.photos/seed/procedimiento-subvencion/600/400"
    },
];

export const policies = [
    { title: "Política de Calidad del Servicio", description: "Compromiso con la excelencia, la eficiencia y la satisfacción del cliente en todos nuestros servicios.", icon: "StarIcon" },
    { title: "Manejo de Documentos y Confidencialidad", description: "Se sigue una política estricta de confidencialidad y protección de datos, en cumplimiento con la normativa legal.", icon: "LockClosedIcon" },
    { title: "Comunicación Interna", description: "Fomentamos la coordinación entre áreas, reuniones periódicas y el uso de herramientas tecnológicas para una colaboración fluida.", icon: "ChatBubbleLeftRightIcon" },
    { title: "Gestión del Tiempo y Plazos", description: "Es fundamental el cumplimiento de los plazos establecidos para garantizar un servicio puntual y eficaz.", icon: "ClockIcon" },
    { title: "Gestión de Clientes y Archivo", description: "Protocolos claros para el alta de nuevos clientes y el archivo seguro, tanto físico como digital, de los expedientes.", icon: "FolderIcon" },
    { title: "Revisión y Actualización del Manual", description: "El manual se revisa periódicamente para asegurar su vigencia, bajo la responsabilidad de Vidal y los jefes de área.", icon: "ArrowPathIcon" },
];
