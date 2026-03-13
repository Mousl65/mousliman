import { Target, Users, Award, CheckCircle2 } from 'lucide-react';

export default function AboutPage() {
  return (
    <main className="flex flex-col">
      
      {/* --- SECTION EN-TÊTE --- */}
      <section className="bg-blue-600 py-20 px-4 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">لماذا تأسست جمعية سند</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
          تأسست جمعية سند بتاريخ 23 دجنبر 2024 ودلك برغبة من مجموعة من الافراد لتقديم مجموعة من الخدمات الانسانية لأفراد المجتمع بالقنيطرةو خاصة الفئة المعوزة منهم 
          </p>
        </div>
      </section>

      {/* --- SECTION NOTRE HISTOIRE --- */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto flex flex-row-reverse gap-10 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900">أهداف جمعية سند بالقنيطرة</h2>
            <p className="text-gray-600 leading-relaxed">
             تأسست جمعية سند من اجل تحقيق مجموعة من الاهداف الانسانية سواء على المدى القصير أو البعيد, ومنها :
             ـ 
             ـ تقديم يد المساعدة للمنخرطين في وضعية صعبة عند مرضهم أو مرض أحد افراد عائلتهم
             ـ خلق أنشطة ثقافية و ترفيهية لفائدة المنخرطين 
             ـ عقد شراكات مع الأطباءو الصيادلة و المختبرات الطبية لإستفادة المنخرطين و دويهم من امتيارات 
            </p> 
            <p className="text-gray-600 leading-relaxed">
              Que vous soyez un développeur indépendant ou une entreprise en pleine croissance, 
              nous mettons à votre disposition notre expertise en React et Next.js.
            </p>
            <ul className="space-y-3">
              <li className="flex-col gap-3 text-gray-700 font-medium">
                <CheckCircle2 className="text-green-500" size={20} /> مساعدة أسر المنخرطين عند الوفاة سواء ماديا أو معنوياو التكفل بجميع الإجراءات الإدارية
              </li>
              <li className="flex items-center gap-3 text-gray-700 font-medium">
                <CheckCircle2 className="text-green-500" size={20} /> Qualité de code irréprochable
              </li>
              <li className="flex items-center gap-3 text-gray-700 font-medium">
                <CheckCircle2 className="text-green-500" size={20} /> Support réactif
              </li>
            </ul>
          </div>
          
          {/* Image de remplacement / Placeholder stylisé */}
          <div className="bg-gray-100 w-300 rounded-3xl h-80 flex items-center justify-center border-2 border-dashed border-gray-200">
            <p className="text-gray-400 font-medium uppercase tracking-widest text-sm">جميعا من اجل تحقيق الأهداف</p>
          </div>
        </div>
      </section>

      {/* --- SECTION VALEURS --- */}
      <section className="py-20 px-4 bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">Nos Valeurs</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm text-center">
              <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Précision</h3>
              <p className="text-gray-500">Chaque pixel compte. Nous visons la perfection dans chaque détail.</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm text-center">
              <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Communauté</h3>
              <p className="text-gray-500">L'échange est au cœur de notre développement et de notre succès.</p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm text-center">
              <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Qualité</h3>
              <p className="text-gray-500">Nous utilisons les technologies les plus stables et les plus rapides.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}