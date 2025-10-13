
import React from 'react';
import { Project } from '../types';
import GitHubIcon from './icons/GitHubIcon';
import ExternalLinkIcon from './icons/ExternalLinkIcon';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="bg-slate-800/50 rounded-lg p-6 flex flex-col ring-1 ring-slate-700/50 hover:ring-sky-400/50 transition-all duration-300 ease-in-out transform hover:-translate-y-1 shadow-lg hover:shadow-sky-500/10">
      <div className="flex-grow">
        <h3 className="text-xl font-bold text-slate-100 mb-2">{project.title}</h3>
        <p className="text-slate-400 mb-4 leading-relaxed">{project.description}</p>
        <div className="mb-4">
          <span className="inline-block bg-sky-500/10 text-sky-400 px-3 py-1 rounded-full text-sm font-medium">
            {project.language}
          </span>
        </div>
      </div>
      <div className="mt-auto flex flex-col sm:flex-row gap-4">
        <a
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 inline-flex items-center justify-center gap-2 bg-sky-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-sky-600 transition-colors duration-200 text-center"
        >
          <ExternalLinkIcon />
          {project.liveButtonText}
        </a>
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 inline-flex items-center justify-center gap-2 bg-slate-700 text-slate-300 font-semibold py-2 px-4 rounded-md hover:bg-slate-600 transition-colors duration-200 text-center"
        >
          <GitHubIcon />
          GitHub
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
