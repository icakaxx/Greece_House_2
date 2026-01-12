import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { propertyData } from '@/content/property';

export default function About() {
  const t = useTranslations('about');
  const attractions = t.raw('attractions') as string[];

  return (
    <section id="about" className="grid md:grid-cols-2 gap-12 items-center">
      <div>
        <h2 className="text-3xl font-serif font-bold text-slate-900 mb-6 relative inline-block">
          {t('title')}
          <span className="absolute bottom-0 left-0 w-1/2 h-1 bg-blue-500 rounded-full"></span>
        </h2>
        <p className="text-slate-600 leading-relaxed mb-6 text-lg">
          {t('description')}
        </p>

        <h3 className="text-lg font-bold text-slate-900 mb-4">{t('whyLoveIt')}</h3>
        <ul className="space-y-3 mb-8">
          {attractions.map((item, index) => (
            <li key={index} className="flex items-start gap-3 text-slate-700">
              <i className="fa-solid fa-check text-green-500 mt-1"></i>
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <div className="flex gap-4">
          <div className="text-center p-4 bg-blue-50 rounded-xl border border-blue-100 min-w-[100px]">
            <div className="text-2xl font-bold text-blue-600 mb-1">6</div>
            <div className="text-xs text-blue-800 font-medium uppercase tracking-wide">{t('guests')}</div>
          </div>
          <div className="text-center p-4 bg-blue-50 rounded-xl border border-blue-100 min-w-[100px]">
            <div className="text-2xl font-bold text-blue-600 mb-1">3</div>
            <div className="text-xs text-blue-800 font-medium uppercase tracking-wide">{t('bedrooms')}</div>
          </div>
        </div>
      </div>
      <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl group">
        <Image
          src={propertyData.galleryImages[1] || propertyData.heroImage}
          alt="Villa Interior"
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        <div className="absolute bottom-6 left-6 text-white">
          <p className="text-sm font-medium opacity-90">{t('experienceLuxury')}</p>
          <p className="text-xl font-serif font-bold">{t('homeAwayFromHome')}</p>
        </div>
      </div>
    </section>
  );
}