import { useTranslations } from 'next-intl';

export default function Footer() {
  const t = useTranslations('footer');
  const tHero = useTranslations('hero');

  return (
    <footer className="bg-slate-950 text-slate-600 py-8 border-t border-slate-900 text-center text-sm">
      <p>&copy; <span>{new Date().getFullYear()}</span> <span>{tHero('title')}</span>. {t('rights')}</p>
      <p className="mt-2 text-xs">{t('invoice')}</p>
    </footer>
  );
}