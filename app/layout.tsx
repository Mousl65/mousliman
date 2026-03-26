import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from './components/Navbar';
import WhatsAppButton from './components/WhatsAppButton';
import Footer from './components/Footer';
const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'mousliman',
  description: 'Une application Next.js avec une barre de navigation persistante',
};

export default function RootLayout({
  children,
}: Readonly<{ 
  children: React.ReactNode;
}>) {
  return (
  <html lang="fr">
      {/* "flex flex-col min-h-screen" force le footer à rester en bas */}
      <body className="flex flex-col min-h-screen bg-gray-50 text-gray-900">
        <Navbar />
        
        {/* "flex-grow" pousse le footer vers le bas */}
        <main className="flex-grow">
          {children}
        </main>

        <Footer />

        {/* Le bouton WhatsApp apparaîtra par-dessus tout le contenu */}
        <WhatsAppButton />
      </body>
    </html>
  );
}