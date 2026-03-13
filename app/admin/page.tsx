"use client";

import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import { useRouter } from 'next/navigation';
import { ShieldCheck, Trash2, Loader2, LogOut} from 'lucide-react';

export default function AdminPage() {
  const [messages, setMessages] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [authorized, setAuthorized] = useState(false);
  const router = useRouter();

  // 1. Vérification de l'authentification
  useEffect(() => {
    const checkAuth = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) {
        router.push('/login');
      } else {
        setAuthorized(true);
        fetchMessages();
      }
    };
    checkAuth();
  }, [router]);

  // 2. Fonction pour charger les messages
  const fetchMessages = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from('contacts')
      .select('*')
      .order('created_at', { ascending: false });

    if (!error) setMessages(data || []);
    setLoading(false);
  };

  // 3. LA FONCTION QUI MANQUAIT : handleDelete
  const handleDelete = async (id: string) => {
    if (confirm("Voulez-vous vraiment supprimer ce message ?")) {
      const { error } = await supabase
        .from('contacts')
        .delete()
        .eq('id', id);

      if (error) {
        alert("Erreur lors de la suppression");
      } else {
        // Mise à jour locale pour ne pas avoir à recharger la page
        setMessages(messages.filter(msg => msg.id !== id));
      }
    }
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push('/login');
  };

  if (!authorized) {
    return (
      <div className="h-screen flex items-center justify-center bg-gray-50">
        <Loader2 className="animate-spin text-blue-600" size={40} />
      </div>
    );
  }

  return (
    <main className="py-10 px-4 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-2">
            <ShieldCheck className="text-blue-600" /> Panneau Admin
          </h1>
          <button 
  type="button" // <--- N'oublie pas celui-là aussi !
  onClick={handleLogout}
  className="flex items-center gap-2 text-sm bg-red-50 text-red-600 px-4 py-2 rounded-lg hover:bg-red-100 transition-all"
>
  <LogOut size={18} /> Déconnexion
</button>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
          {loading ? (
            <div className="flex justify-center items-center p-20">
              <Loader2 className="animate-spin text-blue-600" size={40} />
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead className="bg-gray-50 border-b">
                  <tr>
                    <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase">Date</th>
                    <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase">Contact</th>
                    <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase">Message</th>
                    <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
  {messages.length > 0 ? (
    messages.map((msg) => (
      <tr key={msg.id} className="hover:bg-gray-50 transition-colors">
        <td className="px-6 py-4 text-sm text-gray-500">
          {new Date(msg.created_at).toLocaleDateString('fr-FR')}
        </td>
        <td className="px-6 py-4 font-medium text-gray-900">
          {msg.name}
        </td>
        <td className="px-6 py-4 text-sm text-gray-600">
          {msg.message}
        </td>
        <td className="px-6 py-4 text-right">
         <button 
  type="button" // <--- Ajoute cette ligne
  onClick={() => handleDelete(msg.id)}
  className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all"
  title="Supprimer"
>
  <Trash2 size={18} />
</button>
        </td>
      </tr>
    ))
  ) : (
    <tr>
      <td colSpan={4} className="text-center py-10 text-gray-400">Aucun message.</td>
    </tr>
  )}
</tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}