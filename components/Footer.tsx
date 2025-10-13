
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="text-center py-8 bg-slate-900/50 border-t border-slate-800">
      <p className="text-slate-500">
        Check out more on{' '}
        <a href="https://github.com/JuanchoGithub" target="_blank" rel="noopener noreferrer" className="font-medium text-sky-400 hover:text-sky-300 transition-colors">
          GitHub
        </a>{' '}
        | Live projects on{' '}
        <a href="https://vercel.com/juanchogithubs-projects" target="_blank" rel="noopener noreferrer" className="font-medium text-sky-400 hover:text-sky-300 transition-colors">
          Vercel
        </a>
      </p>
    </footer>
  );
};

export default Footer;
