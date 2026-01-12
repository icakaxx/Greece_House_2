import { propertyData } from '@/content/property';
import {
  Header,
  Hero,
  Highlights,
  About,
  Gallery,
  Amenities,
  Testimonials,
  FAQ,
  Map,
  Contact,
  FloatingContactButtons,
  Footer
} from '@/components';

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "VacationRental",
    "name": propertyData.houseName,
    "description": propertyData.description,
    "image": propertyData.galleryImages,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Nea Peramos",
      "addressRegion": "Kavala",
      "addressCountry": "GR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": propertyData.coordinates.lat,
      "longitude": propertyData.coordinates.lng
    },
    "url": typeof window !== 'undefined' ? window.location.href : '',
    "telephone": propertyData.contacts.phone,
    "priceRange": propertyData.priceInfo,
    "amenityFeature": Object.values(propertyData.amenities).flat().map(amenity => ({
      "@type": "LocationFeatureSpecification",
      "name": amenity,
      "value": true
    }))
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd),
        }}
      />
      <Header />
      <Hero />
      <Highlights />
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-20">
        <About />
        <Gallery />
        <Amenities />
        <Testimonials />
        <FAQ />
        <Map />
      </main>
      <Contact />
      <Footer />
      <FloatingContactButtons />
    </>
  );
}
