"use client";

import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import { useRouter } from 'next/navigation';
import { ShieldCheck, Trash2, Loader2, LogOut, PlusCircle, LayoutGrid, MessageSquare } from 'lucide-react';

export default function AdminPage() {
  const [messages, setMessages] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [authorized, setAuthorized] = useState(false);
  const [view, setView] = useState<'messages' | 'projects'>('messages');
  const router = useRouter();

  // État pour le nouveau projet
  const [newProject, setNewProject] = useState({ title: '', description: '', tags: '', link: '', image_url: '' });

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

  const fetchMessages = async () => {
    setLoading(true);
    const { data } = await supabase.from('contacts').select('*').order('created_at', { ascending: false });
    if (data) setMessages(data);
    setLoading(false);
  };

  const handleDeleteMessage = async (id: string) => {
    if (confirm("Supprimer ce message ?")) {
      await supabase.from('contacts').delete().eq('id', id);
      setMessages(messages.filter(msg => msg.id !== id));
    }
  };

  const handleAddProject = async (e: React.FormEvent) => {
    e.preventDefault();
    const tagsArray = newProject.tags.split(',').map(tag => tag.trim());
    
    const { error } = await supabase.from('projects').insert([
      { ...newProject, tags: tagsArray }
    ]);

    if (error) {
      alert("Erreur lors de l'ajout");
    } else {
      alert("Projet ajouté avec succès !");
      setNewProject({ title: '', description: '', tags: '', link: '', image_url: '' });
    }
  };

  if (!authorized) return <div className="h-screen flex items-center justify-center"><Loader2 className="animate-spin" /></div>;

  return (
    <main className="py-10 px-4 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold flex items-center gap-2">
            <ShieldCheck className="text-blue-600" /> Admin Sanad-K
          </h1>
          <button onClick={() => { supabase.auth.signOut(); router.push('/login'); }} className="text-red-600 text-sm font-medium">Déconnexion</button>
        </div>

        {/* Navigation Admin */}
        <div className="flex gap-4 mb-8">
          <button 
            onClick={() => setView('messages')}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg transition ${view === 'messages' ? 'bg-blue-600 text-white' : 'bg-white text-gray-600'}`}
          >
            <MessageSquare size={18} /> Messages
          </button>
          <button 
            onClick={() => setView('projects')}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg transition ${view === 'projects' ? 'bg-blue-600 text-white' : 'bg-white text-gray-600'}`}
          >
            <LayoutGrid size={18} /> Gérer les Projets
          </button>
        </div>

        {view === 'messages' ? (
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
            <table className="w-full text-left">
              <thead className="bg-gray-50 border-b">
                <tr>
                  <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase">Contact</th>
                  <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase">Message</th>
                  <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {messages.map((msg) => (
                  <tr key={msg.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <div className="font-bold">{msg.name}</div>
                      <div className="text-xs text-gray-400">{msg.email}</div>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">{msg.message}</td>
                    <td className="px-6 py-4 text-right">
                      <button onClick={() => handleDeleteMessage(msg.id)} className="text-gray-400 hover:text-red-600"><Trash2 size={18} /></button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
            <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
              <PlusCircle className="text-blue-600" /> Ajouter un nouveau projet
            </h2>
            <form onSubmit={handleAddProject} className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input 
                type="text" placeholder="Titre du projet" required
                className="p-3 border rounded-lg"
                value={newProject.title} onChange={e => setNewProject({...newProject, title: e.target.value})}
              />
              <input 
                type="text" placeholder="Tags (séparés par des virgules : Web, React, UI)" 
                className="p-3 border rounded-lg"
                value={newProject.tags} onChange={e => setNewProject({...newProject, tags: e.target.value})}
              />
              <input 
                type="text" placeholder="URL de l'image" 
                className="p-3 border rounded-lg"
                value={newProject.image_url} onChange={e => setNewProject({...newProject, image_url: e.target.value})}
              />
              <input 
                type="text" placeholder="Lien du projet" 
                className="p-3 border rounded-lg"
                value={newProject.link} onChange={e => setNewProject({...newProject, link: e.target.value})}
              />
              <textarea 
                placeholder="Description" className="p-3 border rounded-lg md:col-span-2"
                value={newProject.description} onChange={e => setNewProject({...newProject, description: e.target.value})}
              />
              <button type="submit" className="bg-blue-600 text-white p-3 rounded-lg font-bold hover:bg-blue-700 transition">
                Enregistrer le projet
              </button>
            </form>
          </div>
        )}
      </div>
    </main>
  );
}