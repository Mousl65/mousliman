import Link from 'next/link';
import { Facebook, Instagram, Linkedin, Github, Mail } from 'lucide-react';


export default function Footer() {
  const currentYear = new Date().getFullYear();
  const socialLinks = [
    { name: 'Facebook', href: 'https://facebook.com/ton-profil', icon: <Facebook size={20} />, color: 'hover:text-blue-600' },
    { name: 'Instagram', href: 'https://instagram.com/ton-profil', icon: <Instagram size={20} />, color: 'hover:text-pink-600' },
    { name: 'LinkedIn', href: 'https://linkedin.com/in/ton-profil', icon: <Linkedin size={20} />, color: 'hover:text-blue-700' },
    { name: 'GitHub', href: 'https://github.com/ton-username', icon: <Github size={20} />, color: 'hover:text-gray-900' },
  ];

  return (
   <footer className="bg-white border-t border-gray-100 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
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

          {/* Liens Réseaux Sociaux */}
          <div className="flex gap-6">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-gray-800 transition-colors duration-300 ${social.color}`}
                aria-label={social.name}
              >
                {social.icon}
              </a>
            ))}
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