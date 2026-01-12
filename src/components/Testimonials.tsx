import { useTranslations } from 'next-intl';

export default function Testimonials() {
  const t = useTranslations('testimonials');
  const testimonials = t.raw('list') as Array<{ name: string; text: string }>;

  return (
    <section id="testimonials" className="scroll-mt-24">
      <h2 className="text-3xl font-serif font-bold text-center text-slate-900 mb-10">{t('title')}</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col">
            <div className="text-yellow-400 text-sm mb-3">
              {/* Assuming 5 star rating for all for now, or could pass from propertyData */}
              {Array(5).fill(null).map((_, i) => (
                <i key={i} className="fa-solid fa-star"></i>
              ))}
            </div>
            <p className="text-slate-600 italic mb-4 flex-grow">&ldquo;{testimonial.text}&rdquo;</p>
            <div className="font-bold text-slate-900 text-sm border-t border-slate-100 pt-3">{testimonial.name}</div>
          </div>
        ))}
      </div>
    </section>
  );
}