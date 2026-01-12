import { useTranslations } from 'next-intl';

export default function Highlights() {
  const t = useTranslations('highlights');

  const highlights = [
    { icon: "fa-umbrella-beach", text: t('nearBeach') },
    { icon: "fa-users", text: t('capacity') },
    { icon: "fa-bed", text: t('bedrooms') },
    { icon: "fa-bath", text: t('bathrooms') },
    { icon: "fa-wifi", text: t('wifi') },
    { icon: "fa-parking", text: t('parking') }
  ];

  return (
    <div className="bg-white py-8 border-b border-slate-100 shadow-sm relative z-20 -mt-2 rounded-t-3xl sm:rounded-none">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 justify-items-center">
          {highlights.map((highlight, index) => (
            <div key={index} className="flex flex-col items-center gap-2 text-center group">
              <div className="w-12 h-12 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center text-xl shadow-sm group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                <i className={`fa-solid ${highlight.icon}`}></i>
              </div>
              <span className="text-xs font-semibold text-slate-600 uppercase tracking-wide">{highlight.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}