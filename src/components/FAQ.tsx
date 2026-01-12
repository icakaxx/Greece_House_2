'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { propertyData } from '@/content/property';

export default function FAQ() {
  const t = useTranslations('faq');
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="max-w-3xl mx-auto scroll-mt-24">
      <h2 className="text-2xl font-serif font-bold text-slate-900 mb-6">{t('title')}</h2>
      <div className="space-y-4">
        {propertyData.faqs.map((faq, index) => (
          <div key={index} className="group bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden">
            <button
              onClick={() => toggleFAQ(index)}
              className="flex items-center justify-between p-4 cursor-pointer font-medium text-slate-800 w-full text-left group-open:bg-blue-50 transition-colors"
            >
              <span>{faq.q}</span>
              <span className={`transition-transform ${openIndex === index ? 'rotate-180' : ''}`}>
                <i className="fa-solid fa-chevron-down text-blue-500"></i>
              </span>
            </button>
            <div className={`p-4 text-slate-600 text-sm leading-relaxed border-t border-slate-100 transition-all ${
              openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
            }`}>
              {faq.a}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}