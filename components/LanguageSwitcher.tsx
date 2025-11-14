import React from 'react';
import { useTranslation } from '../i18n/LanguageContext';
import ARFlagIcon from './icons/ARFlagIcon';
import USFlagIcon from './icons/USFlagIcon';
import BRFlagIcon from './icons/BRFlagIcon';
import ITFlagIcon from './icons/ITFlagIcon';
import JPFlagIcon from './icons/JPFlagIcon';
import CNFlagIcon from './icons/CNFlagIcon';

const LanguageSwitcher: React.FC = () => {
  const { locale, setLocale } = useTranslation();

  return (
    <div className="absolute top-4 right-4 flex flex-wrap justify-end items-center gap-3 z-10 max-w-[150px] sm:max-w-none">
      <button
        onClick={() => setLocale('en-US')}
        className={`transition-opacity duration-200 ${locale === 'en-US' ? 'opacity-100' : 'opacity-50 hover:opacity-100'}`}
        aria-label="Change language to English"
      >
        <USFlagIcon />
      </button>
      <button
        onClick={() => setLocale('es-AR')}
        className={`transition-opacity duration-200 ${locale === 'es-AR' ? 'opacity-100' : 'opacity-50 hover:opacity-100'}`}
        aria-label="Cambiar idioma a Español"
      >
        <ARFlagIcon />
      </button>
      <button
        onClick={() => setLocale('pt-BR')}
        className={`transition-opacity duration-200 ${locale === 'pt-BR' ? 'opacity-100' : 'opacity-50 hover:opacity-100'}`}
        aria-label="Mudar idioma para Português"
      >
        <BRFlagIcon />
      </button>
      <button
        onClick={() => setLocale('it-IT')}
        className={`transition-opacity duration-200 ${locale === 'it-IT' ? 'opacity-100' : 'opacity-50 hover:opacity-100'}`}
        aria-label="Cambia lingua in Italiano"
      >
        <ITFlagIcon />
      </button>
      <button
        onClick={() => setLocale('ja-JP')}
        className={`transition-opacity duration-200 ${locale === 'ja-JP' ? 'opacity-100' : 'opacity-50 hover:opacity-100'}`}
        aria-label="言語を日本語に変更"
      >
        <JPFlagIcon />
      </button>
      <button
        onClick={() => setLocale('zh-CN')}
        className={`transition-opacity duration-200 ${locale === 'zh-CN' ? 'opacity-100' : 'opacity-50 hover:opacity-100'}`}
        aria-label="将语言更改为中文"
      >
        <CNFlagIcon />
      </button>
    </div>
  );
};

export default LanguageSwitcher;