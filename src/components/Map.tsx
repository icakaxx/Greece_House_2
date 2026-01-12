import { useTranslations } from 'next-intl';
import { propertyData } from '@/content/property';

export default function Map() {
  const t = useTranslations('location');
  const mapUrl = `https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d12102.13245678!2d${propertyData.coordinates.lng}!3d${propertyData.coordinates.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1s${encodeURIComponent(propertyData.location)}!5e0!3m2!1sen!2sgr!4v1600000000000!5m2!1sen!2sgr`;

  return (
    <section id="location" className="scroll-mt-24">
      <h2 className="text-3xl font-serif font-bold text-slate-900 mb-6">{t('title')}</h2>
      <div className="bg-white p-2 rounded-2xl shadow-lg border border-slate-100">
        <div className="aspect-video w-full rounded-xl overflow-hidden bg-slate-200 relative">
          <iframe
            src={mapUrl}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Villa Location Map"
          />
        </div>
      </div>
      <div className="mt-4 flex items-center justify-between text-sm text-slate-500 px-2">
        <span>{t('address')}</span>
        <span><i className="fa-solid fa-map-pin mr-1"></i> {t('exactLocationAfterBooking')}</span>
      </div>
    </section>
  );
}