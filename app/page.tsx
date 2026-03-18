import Link from 'next/link';
import { ArrowRight, CheckCircle, Globe, Zap, Shield } from 'lucide-react';
import image from 'next/image';
import FadeIn from './components/FadeIn';

export default function HomePage() {
  return (
    <main className="bg-white">
      {/* --- SECTION HERO (L'ACCROCHE) --- */}
    
      <section className="relative pt-20 pb-32 overflow-hidden">
        
        {/* Décoration d'arrière-plan (Cercles flous) */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-50 rounded-full blur-[120px]" />
          <div className="absolute bottom-[10%] right-[-5%] w-[30%] h-[30%] bg-indigo-50 rounded-full blur-[100px]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 text-center">
           
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-sm font-medium mb-6 animate-fade-in">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-6 w-70 rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-6 bg-blue-600"></span>
               
            </span>
                 <h1 className='text-4xl font-bold'>جمعية سند بالقنيطرة ترحب بكم </h1>  
          </div>
          
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
            لنتحد جميعا لفعل الخير <br /> <br />
            <span className=" bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-500">
              و التضامن و التكافل
            </span>
          </h1>
          
          <p className="text-2xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed font-bold">
            هدفنا مساعدة اسر المنخرطين عند الوفاة او المرض بالاضافة الى خلق انشطة ثقافية و ترفيهية لفائدتهم
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="px-8 py-4 bg-blue-600 text-white font-bold rounded-2xl hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-200 transition-all flex items-center justify-center gap-2">
              للتواصل معنا <ArrowRight size={20} />
            </Link>
            <Link href="/about" className="px-8 py-4 bg-blue-600 text-white font-bold rounded-2xl hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-200 transition-all flex items-center justify-center gap-2">
              للمزيد من الايضاحات
            </Link>
          </div>
        </div>
        
      </section>

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