"use client";

import { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { supabase } from '@/lib/supabase';
export default function ContactPage() {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setStatus("Envoi en cours...");

  // Récupération des données du formulaire (via FormData ou State)
  const formData = new FormData(e.target as HTMLFormElement);
  const data = {
    name: formData.get('name'),
    email: formData.get('email'),
    subject: formData.get('subject'),
    message: formData.get('message'),
  };

  // Envoi vers Supabase
  const { error } = await supabase.from('contacts').insert([data]);

  if (error) {
    setStatus("Erreur lors de l'envoi. Réessayez.");
  } else {
    setStatus("Message enregistré dans la base de données !");
    (e.target as HTMLFormElement).reset(); // Vide le formulaire
  }
};

  return (
    <main className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          
          {/* --- COLONNE GAUCHE : INFOS --- */}
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Contactez-nous</h1>
              <p className="text-lg text-gray-600">
                Une question ? Un projet en tête ? N'hésitez pas à nous laisser un message, 
                notre équipe vous répondra sous 24h.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Email</h3>
                  <p className="text-gray-500">contact@mousliman.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Téléphone</h3>
                  <p className="text-gray-500">+33 1 23 45 67 89</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Bureau</h3>
                  <p className="text-gray-500">123 Rue de la Tech, 75000 Paris</p>
                </div>
              </div>
            </div>
          </div>

          {/* --- COLONNE DROITE : FORMULAIRE --- */}
          <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 shadow-sm">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Nom</label>
                  <input 
                   name="name"
                    type="text" 
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                    placeholder="Votre nom"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input 
                  name="email"
                    type="email" 
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                    placeholder="email@exemple.com"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Sujet</label>
                <input 
                name="subject"
                  type="text" 
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                  placeholder="Comment pouvons-nous vous aider ?"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea 
                 name="message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none"
                  placeholder="Votre message ici..."
                  required
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full py-4 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
              >
                Envoyer le message <Send size={18} />
              </button>

              {status && (
                <p className="text-center text-sm font-medium text-blue-600 animate-pulse">
                  {status}
                </p>
              )}
            </form>
          </div>

        </div>
      </div>
    </main>
  );
}