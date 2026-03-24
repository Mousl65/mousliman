"use client";
import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import FadeIn from '../components/FadeIn';
import { ExternalLink, FolderCode } from 'lucide-react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// Import des styles Swiper
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


const ProjectDescription = ({ text }: { text: string }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const maxLength = 100; // Nombre de caractères avant de couper

  if (text.length <= maxLength) {
    return <p className="text-gray-600 text-sm mb-4 whitespace-pre-line">{text}</p>;
  }

  return (
    <div className="mb-4">
      <p className="text-gray-600 text-sm whitespace-pre-line">
        {isExpanded ? text : `${text.substring(0, maxLength)}...`}
      </p>
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="text-blue-600 text-xs font-bold mt-2 hover:underline focus:outline-none"
      >
        {isExpanded ? "Réduire" : "Lire la suite"}
      </button>
    </div>
  );
};

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
               البرامج و الانشطة المنجزة 
            </h1>
            <p className="text-gray-600 mt-4">إليكم بعض البرامج و الانشطة المنجزة من طرف جمعية سند</p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <FadeIn key={project.id} delay={index * 0.1}>
              <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl transition-all group">
                {/* Image Placeholder */}
                {/* Remplace la div de l'image par ce bloc Swiper */}
    <div className="h-64 bg-gray-200 relative overflow-hidden rounded-t-2xl">
      <Swiper
  modules={[Navigation, Pagination, Autoplay]}
  navigation
  pagination={{ clickable: true }}
  className="h-full w-full"
>
  {/* Sécurité : on vérifie que c'est bien un tableau et qu'il n'est pas vide */}
  {Array.isArray(project.image_url) && project.image_url.length > 0 ? (
    project.image_url.map((img: string, i: number) => (
      <SwiperSlide key={i}>
        <img 
          src={img} 
          alt={`${project.title} - ${i}`}
          className="object-cover w-full h-full"
        />
      </SwiperSlide>
    ))
  ) : (
    /* Image de secours si pas de tableau */
    <SwiperSlide>
      <div className="flex items-center justify-center h-full bg-gray-100 text-gray-400">
        Pas d'image disponible
      </div>
    </SwiperSlide>
  )}
</Swiper>
    </div>
                
                <div className="p-6">
                  <div className="flex gap-2 mb-3">
  {Array.isArray(project.tags) && project.tags.map((tag: string) => (
    <span key={tag} className="text-[10px] font-bold uppercase tracking-wider bg-blue-50 text-blue-600 px-2 py-1 rounded">
      {tag}
    </span>
  ))}
</div>
                  
                  <div className="p-6 flex flex-col h-full">
  <h3 className="text-xl font-bold text-gray-900 mb-1">{project.title}</h3>

{/* AJOUT DE LA DATE ICI */}
{project.created_at && (
  <p className="text-xs text-gray-400 mb-3">
    Publié le {new Date(project.created_at).toLocaleDateString('fr-FR', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })}
  </p>
)}

  
  {/* ✅ On utilise notre nouveau composant ici */}
  <ProjectDescription text={project.description} />
  
  {project.link && (
    <div className="mt-auto pt-4"> {/* mt-auto pousse le lien en bas de la carte */}
      <a 
        href={project.link} 
        target="_blank" 
        className="inline-flex items-center gap-2 text-blue-600 font-semibold text-sm hover:underline"
      >
        Voir le projet <ExternalLink size={16} />
      </a>
    </div>
  )}
</div>
                  
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