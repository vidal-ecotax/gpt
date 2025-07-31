
import React, { useState, useEffect, useCallback } from 'react';
import SideNav from './components/SideNav';
import Introduction from './sections/Introduction';
import OrgStructure from './sections/OrgStructure';
import Roles from './sections/Roles';
import Procedures from './sections/Procedures';
import Policies from './sections/Policies';
import Chatbot from './components/Chatbot';
import { SectionData } from './types';

const SECTIONS: SectionData[] = [
  { id: 'introduction', title: '1. Introducción', shortTitle: 'Introducción', component: Introduction },
  { id: 'org-structure', title: '2. Estructura Organizativa', shortTitle: 'Estructura', component: OrgStructure },
  { id: 'roles', title: '3. Funciones y Responsabilidades', shortTitle: 'Funciones', component: Roles },
  { id: 'procedures', title: '4. Procedimientos Generales', shortTitle: 'Procedimientos', component: Procedures },
  { id: 'policies', title: '5. Políticas y Normas', shortTitle: 'Políticas', component: Policies },
];

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>(SECTIONS[0].id);
  const [isChatOpen, setChatOpen] = useState(false);

  const handleNavigation = useCallback(() => {
    const hash = window.location.hash.replace('#/', '');
    const section = SECTIONS.find(s => s.id === hash);
    if (section) {
      setActiveSection(section.id);
    } else {
      setActiveSection(SECTIONS[0].id);
      window.location.hash = `/${SECTIONS[0].id}`;
    }
  }, []);

  useEffect(() => {
    window.addEventListener('hashchange', handleNavigation);
    handleNavigation(); // Initial check

    return () => {
      window.removeEventListener('hashchange', handleNavigation);
    };
  }, [handleNavigation]);
  
  const navigateTo = (id: string) => {
    window.location.hash = `/${id}`;
  };

  const ActiveComponent = SECTIONS.find(s => s.id === activeSection)?.component || Introduction;

  return (
    <div className="flex h-screen bg-slate-100 text-slate-800">
      <SideNav 
        sections={SECTIONS} 
        activeSection={activeSection}
        onNavigate={navigateTo}
      />
      <main className="flex-1 overflow-y-auto p-4 sm:p-6 md:p-10">
        <div className="max-w-4xl mx-auto">
          <ActiveComponent />
        </div>
      </main>
      <Chatbot isChatOpen={isChatOpen} setChatOpen={setChatOpen} />
    </div>
  );
};

export default App;
