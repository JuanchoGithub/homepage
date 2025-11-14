
import React from 'react';
import { useTranslation } from '../i18n/LanguageContext';

const Footer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <footer className="text-center py-8 bg-slate-900/50 border-t border-slate-800">
      <p className="text-slate-500">
        {t('footer.checkOut')}{' '}
        <a href="https://github.com/JuanchoGithub" target="_blank" rel="noopener noreferrer" className="font-medium text-sky-400 hover:text-sky-300 transition-colors">
          {t('footer.github')}
        </a>{' '}
        | {t('footer.liveProjects')}{' '}
        <a href="https://vercel.com/juanchogithubs-projects" target="_blank" rel="noopener noreferrer" className="font-medium text-sky-400 hover:text-sky-300 transition-colors">
          {t('footer.vercel')}
        </a>
      </p>
    </footer>
  );
};

export default Footer;