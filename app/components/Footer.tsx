import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-200 pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          
          {/* Section 1: Branding */}
          <div className="space-y-4">
            <Link href="/" className="text-xl font-bold text-blue-600">
              Assocition SANAD Kenitra
            </Link>
            <p className="text-gray-500 text-sm max-w-xs">
              Notre application web moderne construite avec Next.js et Tailwind CSS.
            </p>
          </div>

          {/* Section 2: Liens Rapides */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
              Navigation
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-500 hover:text-blue-600 text-sm transition-colors">استقبال</Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-500 hover:text-blue-600 text-sm transition-colors">من نحن</Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-500 hover:text-blue-600 text-sm transition-colors">التواصل</Link>
              </li>
            </ul>
          </div>

          {/* Section 3: Légal */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
              Légal
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-500 hover:text-blue-600 text-sm transition-colors">Confidentialité</Link>
              </li>
              <li>
                <Link href="#" className="text-gray-500 hover:text-blue-600 text-sm transition-colors">Mentions légales</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Barre de copyright */}
        <div className="border-t border-gray-100 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} Association SANAD. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}