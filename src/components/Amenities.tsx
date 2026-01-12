import { useTranslations } from 'next-intl';
import { propertyData } from '@/content/property';

export default function Amenities() {
  const t = useTranslations('amenities');

  return (
    <section id="amenities" className="scroll-mt-24 bg-slate-50 rounded-3xl p-6 md:p-10 border border-slate-200">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-serif font-bold text-slate-900 mb-3">{t('title')}</h2>
        <p className="text-slate-500">{t('subtitle')}</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {Object.entries(propertyData.amenities).map(([category, items]) => (
          <div key={category}>
            <h3 className="text-lg font-bold text-slate-800 mb-4 border-b border-slate-200 pb-2">{category}</h3>
            <ul className="space-y-2">
              {items.map((item, index) => (
                <li key={index} className="flex items-center gap-3 text-slate-600 text-sm">
                  <i className="fa-solid fa-circle-check text-blue-400 text-xs"></i> {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}