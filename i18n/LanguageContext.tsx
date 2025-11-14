import React, { createContext, useState, useContext, useEffect, ReactNode } from 'react';
import { en } from './locales/en';
import { es } from './locales/es';
import { pt } from './locales/pt';
import { it } from './locales/it';
import { ja } from './locales/ja';
import { zh } from './locales/zh';

type Locale = 'en-US' | 'es-AR' | 'pt-BR' | 'it-IT' | 'ja-JP' | 'zh-CN';
export type LanguageKey = 'en' | 'es' | 'pt' | 'it' | 'ja' | 'zh';

const translations = { en, es, pt, it, ja, zh };

interface LanguageContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: string) => string;
  langKey: LanguageKey;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const getNavigatorLanguage = (): Locale => {
  const lang = navigator.language;
  if (lang.startsWith('es')) return 'es-AR';
  if (lang.startsWith('pt')) return 'pt-BR';
  if (lang.startsWith('it')) return 'it-IT';
  if (lang.startsWith('ja')) return 'ja-JP';
  if (lang.startsWith('zh')) return 'zh-CN';
  return 'en-US';
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [locale, setLocale] = useState<Locale>(() => {
    try {
      const storedLocale = localStorage.getItem('locale');
      return (storedLocale as Locale) || getNavigatorLanguage();
    } catch (e) {
      return getNavigatorLanguage();
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('locale', locale);
    } catch (e) {
      console.error('Failed to save locale to localStorage');
    }
  }, [locale]);

  const langKey = locale.slice(0, 2) as LanguageKey;

  const t = (key: string): string => {
    const keys = key.split('.');
    let result = translations[langKey] as any;
    for (const k of keys) {
      if (result) {
        result = result[k];
      } else {
        return key;
      }
    }
    return result || key;
  };

  const value = { locale, setLocale, t, langKey };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useTranslation = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useTranslation must be used within a LanguageProvider');
  }
  return context;
};