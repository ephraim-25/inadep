import { useState } from 'react';
import { Menu, X, Gavel, Users } from 'lucide-react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <div className="bg-inadep-plum-dark text-slate-200 text-xs py-2 px-4 border-b border-inadep-plum border-opacity-50">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center space-x-3">
            <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-inadep-emerald/20 text-emerald-300 border border-inadep-emerald/40 uppercase tracking-widest">
              RDC • Tutelle ESURSI
            </span>
            <span className="hidden md:inline text-inadep-border/40">|</span>
            <span className="text-slate-300 font-medium text-[11px] sm:text-xs">
              Ministère de l'Enseignement Supérieur, Universitaire et Recherche Scientifique
            </span>
          </div>
          <div className="flex items-center space-x-5 text-[11px] font-medium text-inadep-border/80">
            <a href="#cadre-legal" className="hover:text-white transition-colors flex items-center gap-1">
              <Gavel className="w-3.5 h-3.5 text-inadep-emerald-light" />
              Ordonnance n° 89-287
            </a>
            <span>•</span>
            <span className="text-emerald-400 flex items-center gap-1.5 font-semibold">
              <span className="w-2 h-2 rounded-full bg-inadep-emerald-light animate-pulse"></span> Kinshasa, Gombe
            </span>
          </div>
        </div>
      </div>

      <header className="sticky top-0 z-50 w-full glass-header border-b border-inadep-border shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            
            {/* INADEP Brand Logo */}
            <a href="#" className="flex items-center gap-3.5 group">
              <div className="relative w-12 h-12 flex items-center justify-center shrink-0">
                <svg className="w-12 h-12" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="50" cy="42" r="36" stroke="#34d399" strokeWidth="5" fill="#ecfdf5"/>
                  <circle cx="50" cy="42" r="28" stroke="#6ee7b7" strokeWidth="1.5" strokeDasharray="3 3"/>
                  <ellipse cx="50" cy="42" rx="18" ry="28" stroke="#34d399" strokeWidth="1.5"/>
                  <path d="M 22 42 L 78 42" stroke="#34d399" strokeWidth="1.5"/>
                  <path d="M 42 26 C 48 24, 58 27, 56 34 C 55 38, 62 42, 58 48 C 55 53, 50 58, 46 60 C 44 56, 42 50, 40 45 C 38 40, 39 32, 42 26 Z" fill="#481a54"/>
                  <circle cx="49" cy="44" r="2.5" fill="#ba01ff"/>
                  <path d="M 30 76 C 40 68, 50 72, 50 82 C 50 72, 60 68, 70 76 M 50 62 L 50 86" stroke="#34d399" strokeWidth="3.5" strokeLinecap="round"/>
                </svg>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <span className="font-display font-extrabold text-2xl tracking-tight text-inadep-plum group-hover:text-inadep-iris transition-colors">INADEP</span>
                  <span className="text-[9px] font-extrabold px-1.5 py-0.5 bg-inadep-lilac text-inadep-plum border border-inadep-border rounded">EST. 1989</span>
                </div>
                <span className="text-[10px] font-bold text-emerald-500 tracking-wider uppercase leading-none mt-0.5">
                  Institut Africain d'Études Prospectives
                </span>
              </div>
            </a>

            {/* Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-1">
              <a href="#accueil" className="px-3.5 py-2 text-sm font-semibold text-inadep-text hover:text-inadep-iris hover:bg-inadep-lilac/70 rounded-btn transition-all">Accueil</a>
              <a href="#gouvernance" className="px-3.5 py-2 text-sm font-semibold text-inadep-text hover:text-inadep-iris hover:bg-inadep-lilac/70 rounded-btn transition-all">À Propos & Gouvernance</a>
              <a href="#departements" className="px-3.5 py-2 text-sm font-semibold text-inadep-text hover:text-inadep-iris hover:bg-inadep-lilac/70 rounded-btn transition-all">Départements</a>
              <a href="#publications" className="px-3.5 py-2 text-sm font-semibold text-inadep-text hover:text-inadep-iris hover:bg-inadep-lilac/70 rounded-btn transition-all">Publications & EDUAF</a>
              <a href="#cadre-legal" className="px-3.5 py-2 text-sm font-semibold text-inadep-text hover:text-inadep-iris hover:bg-inadep-lilac/70 rounded-btn transition-all">Cadre Légal</a>
              <a href="#contact" className="px-3.5 py-2 text-sm font-semibold text-inadep-text hover:text-inadep-iris hover:bg-inadep-lilac/70 rounded-btn transition-all">Contact</a>
            </nav>

            {/* Primary CTA Button */}
            <div className="hidden sm:flex items-center gap-3">
              <button onClick={() => window.dispatchEvent(new CustomEvent('open-researcher-modal'))} className="px-5 py-2.5 rounded-btn bg-inadep-aubergine hover:bg-inadep-iris text-white font-semibold text-xs tracking-wider uppercase transition-all shadow-md hover:shadow-lg flex items-center gap-2">
                <Users className="w-4 h-4 text-inadep-emerald-light" />
                Espace Chercheurs
              </button>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex lg:hidden">
              <button 
                type="button" 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-btn text-inadep-plum hover:bg-inadep-lilac focus:outline-none" 
                aria-label="Toggle Navigation"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Drawer Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-b border-inadep-border bg-inadep-wash px-4 pt-3 pb-6 space-y-2">
            <a href="#accueil" onClick={() => setMobileMenuOpen(false)} className="block px-4 py-2.5 rounded-btn text-sm font-semibold text-inadep-plum hover:bg-inadep-lilac">Accueil</a>
            <a href="#gouvernance" onClick={() => setMobileMenuOpen(false)} className="block px-4 py-2.5 rounded-btn text-sm font-semibold text-inadep-plum hover:bg-inadep-lilac">À Propos & Gouvernance</a>
            <a href="#departements" onClick={() => setMobileMenuOpen(false)} className="block px-4 py-2.5 rounded-btn text-sm font-semibold text-inadep-plum hover:bg-inadep-lilac">Départements de Recherche</a>
            <a href="#publications" onClick={() => setMobileMenuOpen(false)} className="block px-4 py-2.5 rounded-btn text-sm font-semibold text-inadep-plum hover:bg-inadep-lilac">Publications & Éditions EDUAF</a>
            <a href="#cadre-legal" onClick={() => setMobileMenuOpen(false)} className="block px-4 py-2.5 rounded-btn text-sm font-semibold text-inadep-plum hover:bg-inadep-lilac">Ordonnance N° 89-287</a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="block px-4 py-2.5 rounded-btn text-sm font-semibold text-inadep-plum hover:bg-inadep-lilac">Secrétariat Général</a>
            <div className="pt-3">
              <button onClick={() => { setMobileMenuOpen(false); window.dispatchEvent(new CustomEvent('open-researcher-modal')); }} className="w-full justify-center px-4 py-3 rounded-btn bg-inadep-aubergine text-white font-semibold text-xs tracking-wider uppercase flex items-center gap-2">
                Espace Chercheurs / Soumettre une étude
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
