"use client";
import { Users } from 'lucide-react';

export default function WhatsAppGroupButton() {
  const groupLink = "https://chat.whatsapp.com/TON_CODE_DE_GROUPE"; 

  return (
    <a
      href={groupLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:scale-110 transition-all duration-300 flex flex-row-reverse items-center justify-center group"
      aria-label="Rejoindre notre groupe"
    >
      {/* Texte en Arabe qui apparaît au survol */}
      <span 
        dir="rtl" 
        className="max-w-0 overflow-hidden group-hover:max-w-[200px] group-hover:mr-3 transition-all duration-500 ease-in-out whitespace-nowrap text-sm font-bold"
      >
        إلتحق بنا في جمعية سند
      </span>

      {/* Icône du groupe */}
      <Users size={28} />
      
      {/* Petit point de notification animé */}
      <span className="absolute top-0 left-0 flex h-3 w-3">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
        <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
      </span>
    </a>
  );
}