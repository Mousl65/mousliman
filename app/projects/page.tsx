"use client";

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Calendar, MapPin, Heart } from 'lucide-react';

// Import des styles Swiper
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface Project {
  id: number;
  title: string;
  description: string;
  images: string[]; // Tableau d'images pour le slider
  date: string;
  location: string;
}

// 2. Tes données locales (faciles à modifier)
const projects: Project[] = [
  {
    id: 1,
    title: "عملية توزيع قفف رمضان 2025",
    description: "دعم الاسر المعوزة و المحتاجة بقفف تتكون من مواد غذائية متنوعة بمناسبة الشهر الفضيل.",
    images: ["/image2.jpg", "/ramadan2.jpg", "/ramadan3.jpg"],
    date: "مارس 2025",
    location: "القنيطرة",
    
  },
  {
    id: 2,
    title: "الدخول المدرسي",
    description: "تزيع الادوات المدرسية على تلاميذ المستوى الابتدائي من الاسر المعورة .",
   images: ["/scolaire1.jpg", "/scolaire2.jpg"],
    date: "شتنبر 2025",
    location: "القنيطرة",
    
  },
  {
    id: 3,
    title: "الإحتفال بالمسنات",
    description: "أقيم حفل بهيج للمسنات  تظمن مأدبة غذاء و امسية موسيقية و منوعات بالأضافة الى هدايا",
    images: ["/scolaire1.jpg", "/scolaire2.jpg"],
    date: "يونيو 2025",
    location: "القنيطرة",
    
  }
];

export default function Projects() {
 return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-2">البرامج و الأنشطة</h2>
          <div className="w-20 h-1 bg-green-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {projects.map((project) => (
            <div key={project.id} className="bg-white rounded-3xl overflow-hidden shadow-xl flex flex-col">
              
              {/* SLIDER D'IMAGES */}
              <div className="relative h-80 w-full group">
                <Swiper
                  modules={[Navigation, Pagination, Autoplay]}
                  navigation
                  pagination={{ clickable: true }}
                  autoplay={{ delay: 3000 }}
                  loop={true}
                  className="h-full w-full"
                >
                  {project.images.map((img, index) => (
                    <SwiperSlide key={index}>
                      <img 
                        src={img} 
                        alt={`${project.title} ${index}`}
                        className="w-full h-full object-cover"
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>

              {/* CONTENU DU PROJET */}
              <div className="p-8">
                <div className="flex items-center gap-4 text-sm font-semibold text-green-600 mb-4">
                  <span className="flex items-center gap-1.5 bg-green-50 px-3 py-1 rounded-full">
                    <Calendar size={16}/> {project.date}
                  </span>
                  <span className="flex items-center gap-1.5 bg-gray-50 px-3 py-1 rounded-full text-gray-600">
                    <MapPin size={16}/> {project.location}
                  </span>
                </div>
                
                <h3 className="text-2xl font-bold mb-4 text-gray-900">{project.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-6">{project.description}</p>
                
                <button className="flex items-center gap-2 text-white bg-green-600 px-6 py-2 rounded-full hover:bg-green-700 transition-colors w-fit">
                  <Heart size={18} /> دعم هذه الأنشطة
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}