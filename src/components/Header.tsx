'use client';

import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { propertyData } from '@/content/property';
import LanguageSwitcher from './LanguageSwitcher';

export default function Header() {
  const t = useTranslations('nav');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'shadow-md bg-white/95 backdrop-blur-md'
          : 'glass border-b border-white/20 shadow-sm'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <i className="fa-solid fa-house-chimney text-blue-600 text-xl"></i>
          <span className="font-serif font-bold text-xl text-slate-800 tracking-tight">
            {propertyData.houseName}
          </span>
        </div>
        <div className="flex items-center gap-4">
          {/* Language Switcher */}
          <LanguageSwitcher isScrolled={isScrolled} />

          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-6 text-sm font-medium text-slate-600">
            <a href="#gallery" className="hover:text-blue-600 transition-colors">{t('gallery')}</a>
            <a href="#amenities" className="hover:text-blue-600 transition-colors">{t('amenities')}</a>
            <a href="#location" className="hover:text-blue-600 transition-colors">{t('location')}</a>
          </nav>
          <a
            href="#contact"
            className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-5 py-2 rounded-full transition-colors shadow-lg shadow-blue-600/20"
          >
            {t('contact')}
          </a>
        </div>
      </div>
    </header>
  );
}