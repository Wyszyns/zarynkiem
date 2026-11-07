// Tłumaczenia strony.
// Teksty interfejsu: src/translations/pl.json i src/translations/en.json
// Nowy język: dodaj plik src/translations/<kod>.json, wpisz go poniżej
// oraz w astro.config.mjs (i18n.locales) i utwórz src/pages/<kod>/index.astro.
import pl from './translations/pl.json';
import en from './translations/en.json';

export const defaultLang = 'pl';
export const languages = { pl: 'Polski', en: 'English' } as const;
export type Lang = keyof typeof languages;

const dictionaries: Record<Lang, unknown> = { pl, en };

// Missing keys in a translation fall back to Polish, so a forgotten
// entry shows Polish text instead of breaking the page.
function withFallback<T>(base: T, override: unknown): T {
  if (Array.isArray(base)) return (Array.isArray(override) ? override : base) as T;
  if (base && typeof base === 'object') {
    const out: Record<string, unknown> = { ...(base as Record<string, unknown>) };
    const o = (override ?? {}) as Record<string, unknown>;
    for (const key of Object.keys(out)) out[key] = withFallback(out[key], o[key]);
    return out as T;
  }
  return (override === undefined || override === null || override === '' ? base : override) as T;
}

export function useTranslations(lang: Lang) {
  return withFallback(pl, dictionaries[lang]);
}

// Text stored as { "pl": "...", "en": "..." } in data files (reviews, gallery).
export function pick(value: string | Partial<Record<Lang, string>>, lang: Lang): string {
  if (typeof value === 'string') return value;
  return value[lang] ?? value[defaultLang] ?? '';
}

// "{count} opinii" + { count: 13 } -> "13 opinii"
export function fill(template: string, vars: Record<string, string | number>): string {
  return template.replace(/\{(\w+)\}/g, (m, key) => (key in vars ? String(vars[key]) : m));
}
