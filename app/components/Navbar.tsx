"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Menu, X, LogOut, User } from 'lucide-react';
import { supabase } from '@/lib/supabase'; // Import de votre client Supabase
import Image from 'next/image';


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState<any>(null); // État pour l'utilisateur
  const router = useRouter();

  // --- LOGIQUE DE CONNEXION ---
  useEffect(() => {
    // 1. Vérifier si un utilisateur est déjà connecté au chargement
    const checkUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      setUser(user);
    };
    checkUser();

    // 2. Écouter les changements (Login / Logout) en temps réel
    const { data: authListener } = supabase.auth.onAuthStateChange((event, session) => {
      setUser(session?.user ?? null);
    });

    return () => authListener.subscription.unsubscribe();
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setIsOpen(false);
    router.push('/');
    router.refresh();
  };

  return (
    <nav className="sticky top-0 z-50 bg-red-200 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          
          {/* Logo */}
          <div className="flex-shrink-0">
  <Link href="/" className="flex items-center gap-2">
    <Image  className="object-contain w-20 "
      src="/logo.png"    // Le chemin vers votre image dans le dossier public
      alt="Logo Mousliman" 
      width={50}         // Ajustez la taille selon vos besoins
      height={40}
       

     
    />
    <span className="text-xl  font-bold text-gray-900 hidden sm:block">
      جمعية سند بالقنيطرة
    </span>
  </Link>
</div>

          {/* Liens Desktop */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link href="/contact" className="text-gray-600 hover:text-blue-600 px-3 py-2 text-2xl font-bold">التواصل</Link>
              <Link href="/about" className="text-gray-600 hover:text-blue-600 px-3 py-2 text-2xl font-bold">من نحن</Link>
              <Link href="/" className="text-gray-600 hover:text-blue-600 px-3 py-2 text-2xl font-bold">استقبال</Link>
              
              {user && (
                <Link href="/admin" className="text-blue-600 font-bold px-3 py-2 text-sm">المسؤول عن اموقع</Link>
              )}
            </div>
          </div>

          {/* BOUTON CONNEXION / DÉCONNEXION (Desktop) */}
          <div className="hidden md:block">
            {user ? (
              <button 
                onClick={handleLogout}
                className="flex items-center gap-2 text-red-600 hover:bg-red-50 px-4 py-2 rounded-lg transition-all text-sm font-medium"
              >
                <LogOut size={18} /> الخروج
              </button>
            ) : (
              <Link 
                href="/login" 
                className="bg-blue-600 text-white px-5 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-all shadow-sm"
              >
                دخول المسؤول عن الموقع
              </Link>
            )}
          </div>

          {/* Burger Menu Button (Mobile) */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Menu Mobile */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/" onClick={() => setIsOpen(false)} className="block px-3 py-4 text-gray-600">Accueil</Link>
            <Link 
        href="/about" 
        onClick={() => setIsOpen(false)} 
        className="block px-3 py-4 text-gray-600 hover:bg-gray-50 rounded-lg"
      >
        À propos
      </Link>
            <Link href="/contact" onClick={() => setIsOpen(false)} className="block px-3 py-4 text-gray-600">Contact</Link>
            
            {user ? (
              <>
                <Link href="/admin" onClick={() => setIsOpen(false)} className="block px-3 py-4 text-blue-600 font-bold">المسؤول</Link>
                <button onClick={handleLogout} className="w-full text-left px-3 py-4 text-red-600 flex items-center gap-2">
                  <LogOut size={18} /> الخروج
                </button>
              </>
            ) : (
              <Link href="/login" onClick={() => setIsOpen(false)} className="block px-3 py-4 text-blue-600 font-bold">دخول المسؤول فقط</Link>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}