
import React from 'react';
import Header from './components/Header';
import ProjectCard from './components/ProjectCard';
import Footer from './components/Footer';
import { projects, projectCategories } from './constants';
import { Project, ProjectCategoryKey } from './types';
import { useTranslation } from './i18n/LanguageContext';

const App: React.FC = () => {
  const { t } = useTranslation();

  const groupedProjects = projects.reduce((acc, project) => {
    if (!acc[project.category]) {
      acc[project.category] = [];
    }
    acc[project.category].push(project);
    return acc;
  }, {} as Record<ProjectCategoryKey, Project[]>);

  return (
    <div className="min-h-screen bg-slate-900 text-slate-300 font-sans">
      <Header />
      <main className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        {projectCategories.map(category => (
          groupedProjects[category] && (
            <section key={category} className="mb-16 last:mb-0">
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-slate-200 mb-8 border-b-2 border-slate-700 pb-4">
                {t(`categories.${category}`)}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {groupedProjects[category].map((project, index) => (
                  <ProjectCard key={index} project={project} />
                ))}
              </div>
            </section>
          )
        ))}
      </main>
      <Footer />
    </div>
  );
};

export default App;