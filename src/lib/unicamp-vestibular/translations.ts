// UNICAMP Vestibular UI Translations

export const TRANSLATIONS = {
  en: {
    hero_title: "Ace UNICAMP Vestibular with confidence",
    hero_subtitle: "Practice questions · AI tutor · Score prediction",
    start_practice: "Start free practice",
    view_plans: "View plans",
    loading: "Loading...",
    error: "Something went wrong",
    back_home: "Back to Home",
    daily_limit: "Daily limit reached",
    upgrade_premium: "Upgrade to Premium",
    disclaimer: "Study aid only. Not affiliated with official examination boards.",
  },
  "pt-BR": {
    hero_title: "UNICAMP Vestibular — prepare with Koydo",
    hero_subtitle: "Practice · AI tutor · Score prediction",
    start_practice: "Start practice",
    view_plans: "View plans",
    loading: "Loading...",
    error: "Error",
    back_home: "Back",
    daily_limit: "Daily limit reached",
    upgrade_premium: "Upgrade to Premium",
    disclaimer: "Study aid only. Not affiliated with official examination boards.",
  },
} as const;

export type TranslationKey = keyof typeof TRANSLATIONS.en;
export type Locale = keyof typeof TRANSLATIONS;
