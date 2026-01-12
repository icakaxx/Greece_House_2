'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { propertyData } from '@/content/property';

export default function Hero() {
  const t = useTranslations('hero');
  const tHighlights = useTranslations('highlights');

  const openWhatsAppAvailability = () => {
    const message = encodeURIComponent(`Hi, I am interested in ${propertyData.houseName}. Is it available for dates...?`);
    window.open(`https://wa.me/${propertyData.contacts.whatsapp}?text=${message}`, '_blank');
  };

  return (
    <section className="relative h-[85vh] min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={propertyData.heroImage}
          alt="Villa exterior"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/40 to-slate-900/10"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto text-white mt-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-xs font-semibold tracking-wider uppercase mb-4 animate-fade-in-up">
          <i className="fa-solid fa-location-dot"></i> {t('location')}
        </div>
        <h1 className="text-4xl md:text-6xl font-serif font-bold mb-4 leading-tight shadow-sm">
          {t('title')}
        </h1>
        <p className="text-lg md:text-xl text-slate-200 mb-8 max-w-2xl mx-auto font-light">
          {t('tagline')}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#gallery"
            className="w-full sm:w-auto px-8 py-3.5 bg-white text-slate-900 font-medium rounded-full hover:bg-slate-100 transition-all shadow-lg"
          >
            {t('viewGallery')}
          </a>
          <button
            onClick={openWhatsAppAvailability}
            className="w-full sm:w-auto px-8 py-3.5 bg-blue-600 text-white font-medium rounded-full hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/30 flex items-center justify-center gap-2"
          >
            <i className="fa-brands fa-whatsapp text-lg"></i> {t('checkAvailability')}
          </button>
        </div>

        {/* Hero Key Chips */}
        <div className="mt-12 flex flex-wrap justify-center gap-3 md:gap-6 text-sm font-medium text-slate-200">
          <span className="flex items-center gap-2 bg-black/20 px-4 py-2 rounded-full backdrop-blur-sm border border-white/10">
            <i className="fa-solid fa-umbrella-beach text-blue-300"></i> {tHighlights('nearBeach')}
          </span>
          <span className="flex items-center gap-2 bg-black/20 px-4 py-2 rounded-full backdrop-blur-sm border border-white/10">
            <i className="fa-solid fa-wifi text-blue-300"></i> {tHighlights('wifi')}
          </span>
          <span className="flex items-center gap-2 bg-black/20 px-4 py-2 rounded-full backdrop-blur-sm border border-white/10">
            <i className="fa-solid fa-parking text-blue-300"></i> {tHighlights('parking')}
          </span>
        </div>
      </div>
    </section>
  );
}