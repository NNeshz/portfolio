export const languages = {
    es: "Español",
    en: "English",
  } as const;
  
  export type Language = keyof typeof languages;
  
  export const defaultLanguage: Language = "es";
  
  export const languagesPicker: Record<Language, { label: string; value: Language; image: string }> = {
    es: {
      label: languages.es,
      value: "es",
      image: "/assets/es.png",
    },
    en: {
      label: languages.en,
      value: "en",
      image: "/assets/en.png",
    },
  };
  