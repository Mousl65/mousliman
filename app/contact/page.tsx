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
          <div className="bg-green-50 p-8 rounded-3xl border border-gray-400 shadow-sm">
            <div>
              <h1 className="text-4xl text-center font-bold text-gray-900 mb-4">تواصلوا معنا</h1>
              <p className="text-lg text-right text-gray-600">
                لطرح افكاركم و مقترحاتكم أو الاستفسار في بعض المواضيع سنجيبكم في أسرع وقت 
              </p>
            </div>

            <div className="space-y-6">
               
              <div className="flex flex-row-reverse gap-2 "> 
                <div className="w-12 h-12  bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">البريد الإلكتروني</h3>
                  <p className="text-gray-500">contact@sand.com</p>
                </div>
              </div>

              <div className="flex flex-row-reverse gap-2">
                <div className="w-12 h-12  bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">الهاتف</h3>
                  <p className="text-gray-500">+112 0 00 00 00 00</p>
                </div>
              </div>

              <div className="flex flex-row-reverse gap-2">
                <div className="w-12 h-12  bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">المكتب</h3>
                  <p className="text-gray-500">العنوان زنقة القنيطرةرقم 2</p>
                </div>
              </div>
            </div>
          </div>

          {/* --- COLONNE DROITE : FORMULAIRE --- */}
          <div className="bg-green-50 p-8 rounded-3xl border border-gray-400 shadow-sm">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-right font-bold text-gray-900 mb-2">الإسم و النسب</label>
                  <input 
                   name="name"
                    type="text" 
                    className="w-full px-4 py-3 rounded-xl border border-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                    placeholder="الإسم و النسب"
                    required
                  />
                </div>
                <div>
                  <label className="block text-right font-bold text-gray-900 mb-2">البريد الإلكتروني</label>
                  <input 
                  name="email"
                    type="email" 
                    className="w-full px-4 py-3 rounded-xl border border-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                    placeholder="email@exemple.com"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-right font-bold text-gray-900 mb-2">الموضوع</label>
                <input 
                name="subject"
                  type="text" 
                  className="w-full px-4 py-3 rounded-xl border border-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                  placeholder=" ?طرح اي موضوع للنقاش او للإستفسار"
                  required
                />
              </div>

              <div>
                <label className="block text-right font-bold text-gray-900 mb-2">المراسلة</label>
                <textarea 
                 name="message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border border-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none"
                  placeholder="محتوى المراسلة هنا  "
                  required
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full py-4 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
              >
                للإرسال اضغط هنا <Send size={18} />
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