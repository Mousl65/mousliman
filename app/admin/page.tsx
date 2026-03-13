"use client";

import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import { useRouter } from 'next/navigation'; // Pour la redirection
import { ShieldCheck, Trash2, Loader2, Lock } from 'lucide-react';

export default function AdminPage() {
  const [messages, setMessages] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [authorized, setAuthorized] = useState(false); // Nouvel état de sécurité
  const router = useRouter();

  useEffect(() => {
    const checkAuth = async () => {
      const { data: { user } } = await supabase.auth.getUser();

      if (!user) {
        // Si pas d'utilisateur, on redirige vers login
        router.push('/login');
      } else {
        // Si l'utilisateur est là, on autorise l'affichage et on charge les messages
        setAuthorized(true);
        fetchMessages();
      }
    };
    checkAuth();
  }, [router]);

  const fetchMessages = async () => {
    // ... (ton code fetchMessages actuel reste le même)
  };

  // Si on n'est pas encore autorisé, on affiche un écran de chargement
  if (!authorized) {
    return (
      <div className="h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <Loader2 className="animate-spin text-blue-600 mx-auto mb-4" size={40} />
          <p className="text-gray-500 font-medium">Vérification des accès...</p>
        </div>
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
            onClick={fetchMessages}
            className="text-sm bg-white border px-4 py-2 rounded-lg hover:bg-gray-50 transition-all"
          >
            Actualiser
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
                      <tr key={msg.id} className="hover:bg-blue-50/30 transition-colors group">
                        <td className="px-6 py-4 text-sm text-gray-500">
                          {new Date(msg.created_at).toLocaleDateString('fr-FR')}
                        </td>
                        <td className="px-6 py-4">
                          <div className="font-medium text-gray-900">{msg.name}</div>
                          <div className="text-xs text-gray-400">{msg.email}</div>
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-600">
                          <p className="font-semibold text-gray-800 mb-1">{msg.subject}</p>
                          <p className="line-clamp-2">{msg.message}</p>
                        </td>
                        <td className="px-6 py-4 text-right">
                          <button 
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
                      <td colSpan={4} className="px-6 py-20 text-center text-gray-400">
                        Aucun message dans la base.
                      </td>
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