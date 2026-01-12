'use client';

import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { propertyData } from '@/content/property';

export default function Gallery() {
  const t = useTranslations('gallery');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  useEffect(() => {
    if (lightboxIndex !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [lightboxIndex]);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const nextImage = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % propertyData.galleryImages.length);
    }
  };

  const prevImage = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + propertyData.galleryImages.length) % propertyData.galleryImages.length);
    }
  };

  return (
    <>
      <section id="gallery" className="scroll-mt-24">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-serif font-bold text-slate-900">{t('title')}</h2>
          <span className="text-sm text-slate-500 hidden sm:inline-block">{t('clickToExpand')}</span>
        </div>

        {/* Mobile: Swipeable | Desktop: Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:auto-rows-[200px]">
          {propertyData.galleryImages.map((src, index) => (
            <div
              key={index}
              className={`relative group cursor-pointer overflow-hidden rounded-xl shadow-md ${
                index === 0 ? 'md:col-span-2 md:row-span-2 h-64 md:h-auto' : 'h-64 md:h-full'
              }`}
              onClick={() => openLightbox(index)}
            >
              <Image
                src={src}
                alt={`Gallery image ${index + 1}`}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes={index === 0 ? "(max-width: 768px) 100vw, 50vw" : "(max-width: 768px) 100vw, 25vw"}
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                <i className="fa-solid fa-magnifying-glass-plus text-white opacity-0 group-hover:opacity-100 text-3xl transition-opacity duration-300 drop-shadow-lg"></i>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-[60] bg-black/95 flex items-center justify-center p-4 opacity-0 lightbox"
          style={{ opacity: 1 }}
          onClick={closeLightbox}
        >
          <button
            className="absolute top-6 right-6 text-white/70 hover:text-white text-4xl focus:outline-none"
            onClick={closeLightbox}
          >
            &times;
          </button>
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white text-3xl md:text-5xl p-2 focus:outline-none"
            onClick={(e) => { e.stopPropagation(); prevImage(); }}
          >
            <i className="fa-solid fa-chevron-left"></i>
          </button>
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white text-3xl md:text-5xl p-2 focus:outline-none"
            onClick={(e) => { e.stopPropagation(); nextImage(); }}
          >
            <i className="fa-solid fa-chevron-right"></i>
          </button>

          <Image
            src={propertyData.galleryImages[lightboxIndex]}
            alt={`Gallery image ${lightboxIndex + 1}`}
            width={800}
            height={600}
            className="max-h-[85vh] max-w-[90vw] object-contain rounded-sm shadow-2xl"
          />
        </div>
      )}
    </>
  );
}