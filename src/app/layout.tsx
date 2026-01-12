import type { Metadata } from "next";
import { Inter, Playfair_Display } from 'next/font/google';
import "./globals.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Villa Ammolofi Retreat | Luxury Vacation Rental in Nea Peramos, Greece",
  description: "Luxury vacation rental in Nea Peramos, steps from the beach. Family-friendly, quiet neighborhood, modern amenities. Book directly with owners.",
  keywords: "vacation rental, Greece, Nea Peramos, Kavala, beach house, villa, holiday home",
  authors: [{ name: "Villa Ammolofi Retreat" }],
  openGraph: {
    title: "Villa Ammolofi Retreat | Luxury Vacation Rental in Nea Peramos, Greece",
    description: "Luxury vacation rental in Nea Peramos, steps from the beach. Family-friendly, quiet neighborhood, modern amenities.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?q=80&w=1200&auto=format&fit=crop",
        width: 1200,
        height: 630,
        alt: "Villa Ammolofi Retreat",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Villa Ammolofi Retreat | Luxury Vacation Rental in Nea Peramos, Greece",
    description: "Luxury vacation rental in Nea Peramos, steps from the beach. Family-friendly, quiet neighborhood, modern amenities.",
    images: ["https://images.unsplash.com/photo-1564501049412-61c2a3083791?q=80&w=1200&auto=format&fit=crop"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className={`${inter.variable} ${playfair.variable} scroll-smooth`}>
      <body className="bg-slate-50 text-slate-800 antialiased">
        {children}
      </body>
    </html>
  );
}
