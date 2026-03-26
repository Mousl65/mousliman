"use client";
import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  // Remplace par ton vrai numéro (format international sans le +)
  const phoneNumber = "212661899492"; 
  const message = "Bonjour ! Je suis intéressé par vos services.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform duration-300 flex items-center justify-center group"
      aria-label="Contactez-nous sur WhatsApp"
    >
      {/* Petit texte qui apparaît au survol sur PC */}
      <span className="max-w-0 overflow-hidden group-hover:max-w-xs group-hover:ml-2 transition-all duration-500 ease-in-out whitespace-nowrap text-sm font-medium">
        Discuter avec nous
      </span>
      <MessageCircle size={28} fill="currentColor" />
      
      {/* Notification "ping" animée pour attirer l'œil */}
      <span className="absolute top-0 right-0 flex h-3 w-3">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
        <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
      </span>
    </a>
  );
}