import { es } from "./es";
import { en } from "./en";
import { defaultLanguage } from "./languages";
import type { UIContent } from "./types";

// Este objeto asocia los idiomas con su contenido respectivo
export const translations: Record<string, UIContent> = {
  es,
  en,
};

export function getLangFromUrl(url: URL): string {
  const [, lang] = url.pathname.split("/");
  if (lang in translations) return lang;
  return defaultLanguage;
}

export function useTranslations(lang: string): UIContent {
  return translations[lang] ?? translations[defaultLanguage];
}
