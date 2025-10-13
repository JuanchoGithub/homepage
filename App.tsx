
import React from 'react';
import Header from './components/Header';
import ProjectCard from './components/ProjectCard';
import Footer from './components/Footer';
import { projects } from './constants';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-900 text-slate-300 font-sans">
      <Header />
      <main className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;
