
export type ProjectCategoryKey = 'games-entertainment' | 'tools-utilities' | 'educational-apps' | 'creative-experimental';

export interface Translatable {
  en: string;
  es: string;
  pt: string;
  it: string;
  ja: string;
  zh: string;
}

export interface Project {
  title: Translatable;
  description: Translatable;
  language: string;
  liveUrl: string;
  liveButtonText: Translatable;
  githubUrl: string;
  category: ProjectCategoryKey;
}