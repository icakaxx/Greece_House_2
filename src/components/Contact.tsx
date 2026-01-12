'use client';

import { useTranslations } from 'next-intl';
import { propertyData } from '@/content/property';

export default function Contact() {
  const t = useTranslations('contact');
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

  return (
    <section id="contact" className="bg-slate-900 text-white py-16 md:py-24 relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>

      <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
        <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">{t('title')}</h2>
        <p className="text-slate-300 text-lg mb-10 max-w-2xl mx-auto">
          {t('subtitle')}
        </p>

        <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/10 max-w-lg mx-auto mb-10">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-xl font-bold">M</div>
            <div className="text-left">
              <div className="font-bold text-lg">{propertyData.contacts.ownerName}</div>
              <div className="text-slate-300 text-sm">{t('owner')}</div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 mb-6">
            <button onClick={() => openLink('whatsapp')} className="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white py-3 px-4 rounded-xl transition-transform hover:scale-105 font-medium">
              <i className="fa-brands fa-whatsapp text-xl"></i> {t('whatsapp')}
            </button>
            <button onClick={() => openLink('viber')} className="flex items-center justify-center gap-2 bg-[#7360f2] hover:bg-[#6655d8] text-white py-3 px-4 rounded-xl transition-transform hover:scale-105 font-medium">
              <i className="fa-brands fa-viber text-xl"></i> {t('viber')}
            </button>
            <button onClick={() => openLink('tel')} className="flex items-center justify-center gap-2 bg-slate-700 hover:bg-slate-600 text-white py-3 px-4 rounded-xl transition-transform hover:scale-105 font-medium">
              <i className="fa-solid fa-phone text-xl"></i> {t('call')}
            </button>
            <button onClick={() => openLink('email')} className="flex items-center justify-center gap-2 bg-slate-700 hover:bg-slate-600 text-white py-3 px-4 rounded-xl transition-transform hover:scale-105 font-medium">
              <i className="fa-solid fa-envelope text-xl"></i> {t('email')}
            </button>
          </div>

          <p className="text-xs text-slate-400">
            {t('spokenLanguages')}
          </p>
        </div>

        <div className="flex justify-center gap-6">
          <a href={propertyData.contacts.facebook} className="text-slate-400 hover:text-white transition-colors text-2xl"><i className="fa-brands fa-facebook"></i></a>
          <a href={propertyData.contacts.instagram} className="text-slate-400 hover:text-white transition-colors text-2xl"><i className="fa-brands fa-instagram"></i></a>
        </div>
      </div>
    </section>
  );
}