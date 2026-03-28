"use client";
import Link from 'next/link';
import { ArrowRight, CheckCircle, Globe, Zap, Shield } from 'lucide-react';
import image from 'next/image';
import FadeIn from './components/FadeIn';
import { motion } from "framer-motion";

export default function HomePage() {

  // 1. Décomposition de la phrase en mots
  const sentence = "جمعية سند بالقنيطرة ترحب بكم";
  const words = sentence.split(" ");

  // 2. Variantes pour le conteneur (gère le délai entre les mots)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.25, // Délai entre l'apparition de chaque mot
        delayChildren: 0.5,     // Délai avant le début de l'animation
      },
    },
  };

  // 3. Variantes pour chaque mot (l'animation elle-même)
  const wordVariants = {
    hidden: { 
      opacity: 0, 
      y: 20, // Part d'un peu plus bas
    },
    visible: { 
      opacity: 1, 
      y: 0, // Arrive à sa position finale
      transition: {
        type: "spring", // Effet de ressort pour plus de fluidité
        damping: 12,
        stiffness: 100,
      },
    },
  };
  return (
    
      <main className="flex min-h-screen flex-col items-center justify-center p-6 bg-gray-50">
      
      {/* --- LE GRAND TITRE ANIMÉ --- */}
      <motion.h1
        className="text-4xl md:text-6xl font-extrabold text-gray-900 text-center leading-tight tracking-tight flex flex-wrap justify-center gap-x-4 gap-y-2"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        dir="rtl" // Assure la direction de droite à gauche
      >
        {words.map((word, index) => (
          <motion.span
            key={index}
            variants={wordVariants}
            className="inline-block" // Important pour l'animation 'y'
          >
            {word}
          </motion.span>
        ))}
      </motion.h1>
      {/* ----------------------------- */}          
<div className="flex justify-center mb-10 ">
  <div className="relative p-2 bg-white rounded-2xl shadow-lg border border-gray-100 hover:scale-120 transition-transform duration-300">
    <img
      src="/image.png" 
      alt="Logo Société" 
      width={400} 
      height={60}
      className="rounded-2xl  object-cover   "
     
    />
  </div>
</div>

          <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 mb-6 tracking-tight">
لنتحد جميعا و نعمل بروح الفريق الواحد<br /> <br />
            <span className=" bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-500">
             ودلك بالإنخراط بجمعية سند
            </span>
          </h1>
          
          <p className="text-2xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed font-bold">
            هدفنا مساندة منخرطينا و أسرهم عند الوفاة و مساعدة الفئات المعوزة و الهشة من أهلنا بالاضافة الى خلق انشطة ثقافية و ترفيهية لفائدتهم
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="px-8 py-4 bg-blue-600 text-white font-bold rounded-2xl hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-200 transition-all flex items-center justify-center gap-2">
              للتواصل معنا <ArrowRight size={20} />
            </Link>
            <Link href="/about" className="px-8 py-4 bg-blue-600 text-white font-bold rounded-2xl hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-200 transition-all flex items-center justify-center gap-2">
              للمزيد من الايضاحات
            </Link>
          </div>
        
        
     

      {/* --- SECTION FEATURES (NOS FORCES) --- */}
      
      <section className="py-23 bg-green-200 mt--90">
       <FadeIn delay={0.2}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">?لمادا الانخراط معنا </h2>
          </div>
  
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-align-center ">
            <FeatureCard 
              icon={<Zap className="text-yellow-500" />} 
              title="التنسيق و الاستشارة بين اعضاء المكتب " 
              desc="اتخاد القرارات بالاجماع و استشارة المنخرطين عند القرارات المصيرية للجمعية"
            />
            <FeatureCard 
              icon={<Shield className="text-green-500" />} 
              title="السرية التامة " 
              desc="حفظ جميع المعلومات الشخصية الخاصة بالمنخرطين و اسرهم وعدم التشهير بهم ."
            />
            <FeatureCard 
              icon={<Globe className="text-blue-500" />} 
              title="التواصل المستمر" 
              desc="التواصل المستمر مع المنخرطين و اطلاعهم على  كل الأنشطة و المصاريف التي تقوم بها الجمعية."
            />
          </div>
        </div>
       </FadeIn>
      </section>
       
      {/* --- SECTION REASSURANCE --- */}
      <FadeIn delay={0.4}> 
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 bg-blue-600 rounded-[3rem] p-12 text-center text-white relative overflow-hidden shadow-2xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">ننتظر اقتراحاتكم و انتقاداتكم للجمعية   </h2>
          
          <Link href="/contact" className="bg-white text-blue-600 px-10 py-4 rounded-xl font-bold text-lg hover:scale-105 transition-transform inline-block">
            تواصلوا معنا
          </Link>
        </div>
      </section>
      </FadeIn>
    </main>
  );
}

// Petit composant local pour les cartes de caractéristiques
function FeatureCard({ icon, title, desc }: { icon: any, title: string, desc: string }) {
  return (
    <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all group">
      <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-50 transition-colors">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{desc}</p>
    </div>
  );
}