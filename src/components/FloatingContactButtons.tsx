'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { propertyData } from '@/content/property';

export default function FloatingContactButtons() {
  const t = useTranslations('floatingButtons');
  const [isFabOpen, setIsFabOpen] = useState(false);

  const openLink = (type: string) => {
    const { whatsapp, viber, telegram, phone, email } = propertyData.contacts;
    let url = "";

    switch(type) {
      case 'whatsapp':
        url = `https://wa.me/${whatsapp}`;
        break;
      case 'viber':
        url = `viber://chat?number=${viber}`;
        break;
      case 'telegram':
        url = `https://t.me/${telegram}`;
        break;
      case 'tel':
        url = `tel:${phone}`;
        break;
      case 'email':
        url = `mailto:${email}`;
        break;
    }
    if (url) window.open(url, '_blank');
  };

  const toggleFab = () => {
    setIsFabOpen(!isFabOpen);
  };

  return (
    <div className="fixed right-4 bottom-24 z-40 flex flex-col items-end gap-3 pointer-events-none">
      {/* Toggle Button (Mobile) */}
      <button
        id="fab-toggle"
        onClick={toggleFab}
        className="pointer-events-auto md:hidden w-12 h-12 rounded-full bg-blue-600 text-white shadow-lg flex items-center justify-center text-xl transition-transform hover:scale-110 active:scale-95 focus:outline-none"
      >
        <i className={`fa-solid ${isFabOpen ? 'fa-xmark' : 'fa-message'}`}></i>
      </button>

      {/* Buttons Container */}
      <div className={`flex-col items-end gap-3 pointer-events-auto transition-all duration-300 origin-bottom-right transform ${
        isFabOpen ? 'scale-100 opacity-100 flex' : 'scale-0 opacity-0 md:scale-100 md:opacity-100 md:flex'
      }`}>

        <a href="#" onClick={(e) => { e.preventDefault(); openLink('whatsapp'); }} className="flex items-center gap-2 group">
          <span className="bg-white text-slate-800 text-xs font-bold py-1 px-2 rounded shadow-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap hidden md:block">{t('whatsapp')}</span>
          <div className="w-10 h-10 md:w-12 md:h-12 bg-[#25D366] rounded-full flex items-center justify-center text-white shadow-lg hover:scale-110 transition-transform">
            <i className="fa-brands fa-whatsapp md:text-xl"></i>
          </div>
        </a>

        <a href="#" onClick={(e) => { e.preventDefault(); openLink('viber'); }} className="flex items-center gap-2 group">
          <span className="bg-white text-slate-800 text-xs font-bold py-1 px-2 rounded shadow-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap hidden md:block">{t('viber')}</span>
          <div className="w-10 h-10 md:w-12 md:h-12 bg-[#7360f2] rounded-full flex items-center justify-center text-white shadow-lg hover:scale-110 transition-transform">
            <i className="fa-brands fa-viber md:text-xl"></i>
          </div>
        </a>

        <a href="#" onClick={(e) => { e.preventDefault(); openLink('telegram'); }} className="flex items-center gap-2 group">
          <span className="bg-white text-slate-800 text-xs font-bold py-1 px-2 rounded shadow-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap hidden md:block">{t('telegram')}</span>
          <div className="w-10 h-10 md:w-12 md:h-12 bg-[#0088cc] rounded-full flex items-center justify-center text-white shadow-lg hover:scale-110 transition-transform">
            <i className="fa-brands fa-telegram md:text-xl"></i>
          </div>
        </a>

        <a href="#" onClick={(e) => { e.preventDefault(); openLink('tel'); }} className="flex items-center gap-2 group">
          <span className="bg-white text-slate-800 text-xs font-bold py-1 px-2 rounded shadow-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap hidden md:block">{t('call')}</span>
          <div className="w-10 h-10 md:w-12 md:h-12 bg-blue-600 rounded-full flex items-center justify-center text-white shadow-lg hover:scale-110 transition-transform">
            <i className="fa-solid fa-phone md:text-xl"></i>
          </div>
        </a>
      </div>
    </div>
  );
}