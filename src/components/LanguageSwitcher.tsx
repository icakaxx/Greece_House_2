'use client';

import { useLocale, useTranslations } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';
import { useTransition } from 'react';

const locales = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'bg', name: 'Български', flag: '🇧🇬' },
  { code: 'el', name: 'Ελληνικά', flag: '🇬🇷' }
];

export default function LanguageSwitcher({ isScrolled }: { isScrolled: boolean }) {
  const t = useTranslations('languages');
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  const switchLocale = (newLocale: string) => {
    startTransition(() => {
      // Remove the current locale from pathname and add new locale
      const pathWithoutLocale = pathname.replace(/^\/(en|bg|el)/, '') || '/';
      router.push(`/${newLocale}${pathWithoutLocale}`);
    });
  };

  return (
    <div className="relative">
      <select
        value={locale}
        onChange={(e) => switchLocale(e.target.value)}
        disabled={isPending}
        className={`backdrop-blur-sm border px-3 py-1.5 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none cursor-pointer disabled:opacity-50 transition-all font-medium text-sm ${
          isScrolled 
            ? 'bg-slate-100 border-slate-200 text-slate-600 hover:bg-slate-200' 
            : 'bg-white/40 border-white/20 text-slate-700 hover:bg-white/60'
        }`}
        style={{ backgroundImage: 'none' }}
      >
        {locales.map((lang) => (
          <option key={lang.code} value={lang.code} className="text-slate-800 bg-white">
            {lang.flag} {t(lang.code)}
          </option>
        ))}
      </select>
      <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
        <svg className={`h-4 w-4 ${isScrolled ? 'text-slate-500' : 'text-slate-600'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </div>
  );
}