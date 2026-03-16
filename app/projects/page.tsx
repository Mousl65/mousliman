"use client";
import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import FadeIn from '../components/FadeIn';
import { ExternalLink, FolderCode } from 'lucide-react';

export default function ProjectsPage() {
  const [projects, setProjects] = useState<any[]>([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const { data } = await supabase.from('projects').select('*').order('created_at', { ascending: false });
      if (data) setProjects(data);
    };
    fetchProjects();
  }, []);

  return (
    <main className="pt-32 pb-20 px-6 min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <div className="text-center mb-16">
            <h1 className="text-4xl font-extrabold text-gray-900 flex justify-center items-center gap-3">
              <FolderCode className="text-blue-600" size={40} /> Nos Réalisations
            </h1>
            <p className="text-gray-600 mt-4">Découvrez les projets qui nous ont fait grandir.</p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <FadeIn key={project.id} delay={index * 0.1}>
              <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl transition-all group">
                {/* Image Placeholder */}
                <div className="h-48 bg-gray-200 relative overflow-hidden">
                  <img 
                    src={project.image_url || "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=500"} 
                    alt={project.title}
                    className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                
                <div className="p-6">
                  <div className="flex gap-2 mb-3">
  {Array.isArray(project.tags) && project.tags.map((tag: string) => (
    <span key={tag} className="text-[10px] font-bold uppercase tracking-wider bg-blue-50 text-blue-600 px-2 py-1 rounded">
      {tag}
    </span>
  ))}
</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">{project.description}</p>
                  
                  {project.link && (
                    <a 
                      href={project.link} 
                      target="_blank" 
                      className="inline-flex items-center gap-2 text-blue-600 font-semibold text-sm hover:underline"
                    >
                      Voir le projet <ExternalLink size={16} />
                    </a>
                  )}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </main>
  );
}