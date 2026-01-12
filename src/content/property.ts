export interface PropertyData {
  // Basic info
  houseName: string;
  tagline: string;
  location: string;
  description: string;

  // Beach/location details
  nearBeachText: string;
  beachDistanceMeters: number;

  // Capacity & specs
  capacity: string;
  specs: string;
  priceInfo: string;

  // Images
  heroImage: string;
  galleryImages: string[];

  // Amenities by category
  amenities: {
    [category: string]: string[];
  };

  // Location & attractions
  coordinates: {
    lat: number;
    lng: number;
  };
  nearbyAttractions: string[];

  // Contact info
  contacts: {
    phone: string;
    whatsapp: string;
    viber: string;
    telegram: string;
    email: string;
    instagram: string;
    facebook: string;
    ownerName: string;
  };

  // Additional features
  testimonials: Array<{
    name: string;
    text: string;
    rating: number;
  }>;

  faqs: Array<{
    q: string;
    a: string;
  }>;

  // SEO
  seoTitle: string;
  seoDescription: string;
  ogImage: string;
}

export const propertyData: PropertyData = {
  houseName: "Villa Ammolofi Retreat",
  tagline: "Steps from the sea • Family-friendly • Quiet neighborhood",
  location: "Nea Peramos, Kavala, Greece",
  description: "Nestled in the serene landscape of Nea Peramos, Villa Ammolofi Retreat offers the perfect escape for families and couples. Just a 3-minute walk from the crystal-clear waters of Ammolofoi Beach, our villa combines modern luxury with traditional Greek hospitality. Enjoy your morning coffee on the spacious balcony overlooking the Aegean Sea, or host a BBQ in our lush garden.",
  nearBeachText: "3 min walk to the beach",
  beachDistanceMeters: 180,
  capacity: "Sleeps 6",
  specs: "3 Bedrooms • 2 Bathrooms",
  priceInfo: "From €120 / night",

  heroImage: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?q=80&w=1932&auto=format&fit=crop",

  galleryImages: [
    "https://images.unsplash.com/photo-1564501049412-61c2a3083791?q=80&w=1932&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1584622050111-993a426fbf0a?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1615529182904-14819c35db37?q=80&w=2080&auto=format&fit=crop"
  ],

  amenities: {
    Comfort: ["Air Conditioning", "Heating", "Washer", "Iron"],
    Kitchen: ["Fully Equipped Kitchen", "Espresso Machine", "Dishwasher", "Microwave"],
    Outdoor: ["Private Garden", "BBQ Grill", "Balcony with Sea View", "Outdoor Shower"],
    Entertainment: ["Smart TV (Netflix)", "Board Games", "High-speed WiFi"]
  },

  coordinates: { lat: 40.833, lng: 24.305 },

  nearbyAttractions: [
    "Ammolofoi Beach Bars (5 min drive)",
    "Ancient Castle of Peramos (10 min walk)",
    "Kavala City Center (20 min drive)",
    "Local Supermarket (2 min walk)",
    "Taverna 'To Kima' (5 min walk)"
  ],

  contacts: {
    phone: "+306900000000",
    whatsapp: "306900000000",
    viber: "306900000000",
    telegram: "villaammolofi",
    email: "stay@villaammolofi.gr",
    instagram: "https://instagram.com/villaammolofi",
    facebook: "https://facebook.com/villaammolofi",
    ownerName: "Maria & Nikos"
  },

  testimonials: [
    { name: "Sarah J.", text: "Absolutely stunning villa! The location is perfect, quiet but close to the best beaches.", rating: 5 },
    { name: "Dimitris K.", text: "Great host, very clean house. We had a wonderful family vacation.", rating: 5 },
    { name: "Elena P.", text: "The view from the balcony is breathtaking. Highly recommended!", rating: 5 }
  ],

  faqs: [
    { q: "Is there parking available?", a: "Yes, we have free private parking for up to 2 cars." },
    { q: "Are pets allowed?", a: "Small pets are allowed upon request. Please contact us beforehand." },
    { q: "What is the check-in/check-out time?", a: "Check-in is after 3:00 PM and check-out is before 11:00 AM." },
    { q: "Is the kitchen fully equipped?", a: "Yes, it has everything you need to cook family meals, including an espresso machine." }
  ],

  seoTitle: "Villa Ammolofi Retreat | Luxury Vacation Rental in Nea Peramos, Greece",
  seoDescription: "Luxury vacation rental in Nea Peramos, steps from the beach. Family-friendly, quiet neighborhood, modern amenities. Book directly with owners.",
  ogImage: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?q=80&w=1200&auto=format&fit=crop"
};