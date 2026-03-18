import { Target, Users, Award, CheckCircle2 } from 'lucide-react';
import FadeIn from '../components/FadeIn';

export default function AboutPage() {
  return (
    <main className="flex flex-col">
      
      {/* --- SECTION EN-TÊTE --- */}
      
      <section className="bg-blue-600 py-20 px-4 text-white mt-4">
      <FadeIn> 

        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">لماذا تأسست جمعية سند</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
          تأسست جمعية سند بتاريخ 23 دجنبر 2024 ودلك برغبة من مجموعة من الافراد لتقديم مجموعة من الخدمات الانسانية لأفراد المجتمع بالقنيطرةو خاصة الفئة المعوزة منهم 
          </p>
        </div>
        </FadeIn>
      </section>
 
      {/* --- SECTION NOTRE HISTOIRE --- */}
      <FadeIn delay={0.2}> 

      <section className="py-20 px-5 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 gap-6 md:grid-cols-2 gap-2">
          <div className="max-w-4xl mx-auto px-4 order-2  bg-blue-700 rounded-[3rem] p-12 text-center text-white relative overflow-hidden shadow-2xl">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">أهداف جمعية سند </h2>
            <p className="text-white text-2xl leading-relaxed">
             تأسست جمعية سند من اجل تحقيق مجموعة من الاهداف الانسانية سواء على المدى القصير أو البعيد, ومنها 
          </p> 

         <div dir="rtl" className="text-right  p-6">   
           <ul className="list-disc list-inside space-y-2">
              <li className="flex items-center gap-3 text-white font-medium">
                <CheckCircle2 className="text-yellow-200" size={26} /> - مساعدة أسر المنخرطين عند الوفاة سواء ماديا أو معنوياو التكفل بجميع الإجراءات الإدارية 
              </li>
              <li className="flex items-center gap-3 text-white font-medium">
                <CheckCircle2 className="text-yellow-200" size={26} />  ـ تقديم يد المساعدة للمنخرطين في وضعية صعبة عند مرضهم أو مرض أحد افراد عائلتهم
              </li>
              <li className=" flex items-center gap-4  text-white font-medium">
                <CheckCircle2 className="text-yellow-200" size={26} />    ـ خلق أنشطة ثقافية و ترفيهية لفائدة المنخرطين 
              </li>
              <li className=" flex items-center gap-4  text-white font-medium">
                <CheckCircle2 className="text-yellow-200" size={26} />    ـ عقد شراكات مع الأطباءو الصيادلة و المختبرات الطبية لإستفادة المنخرطين و دويهم من امتيارات 
              </li>
            </ul>
          </div>
           </div>
          
          {/* Image de remplacement / Placeholder stylisé */}
          <div className="bg-green-300 w-100 rounded-3xl h-80 flex items-center justify-center border-2 border-dashed border-red-200">
            <p className="text-red-600 font-medium uppercase tracking-widest text-2xl">جميعا من اجل تحقيق الأهداف</p>
          </div>
        </div>
      </section>
   </FadeIn>
      {/* --- SECTION VALEURS --- */}
      <FadeIn delay={0.3}> 

      <section className="py-20 px-4 bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="w-60 mx-auto px-2 bg-blue-700 rounded-[3rem] p-4 text-center text-white relative overflow-hidden shadow-2xl">
          
            <h2 className="text-4xl font-bold text-white">قيمنا</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm text-center hover:scale-120 transition-transform duration-300">
              <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">الدقة و التفاني</h3>
              <p className="text-gray-500">نعمل كمجموعة متجانسة نناقش و نحاور في جو من الاحترام المتبادل</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm text-center hover:scale-120 transition-transform duration-300">
              <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">العمل الجماعي</h3>
              <p className="text-gray-500">المشاركة الجماعية في اتخاد القرارات و و اشراك جميع المنخرطين في االمواضيع الهاة و الحاسمة</p>
            </div>
     
            <div className="bg-white p-8 rounded-2xl shadow-sm text-center hover:scale-120 transition-transform duration-300">
               
              <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">النوعية</h3>
              <p className="text-gray-500">نختار بدقة نوعية نوعية البرامج و الأنشطة  التي تصب في صالح المنخرطين</p>
              
            </div>
        

          </div>
        </div>
      </section>
       </FadeIn>
    </main>
  );
}