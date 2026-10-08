export default function Footer() {
  return (
    <footer className="bg-inadep-plum-dark text-slate-300 text-xs border-t border-inadep-plum">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded bg-inadep-emerald text-white flex items-center justify-center font-bold text-sm">IN</div>
              <span className="font-display font-extrabold text-white text-lg">INADEP</span>
            </div>
            <p className="text-inadep-border/80 text-xs leading-relaxed">
              Institut Africain d'Études Prospectives.<br />Établissement Public Scientifique et Culturel.
            </p>
            <span className="inline-block text-[10px] text-amber-400 font-mono">Ordonnance n° 89-287 du 9 Novembre 1989</span>
          </div>

          <div>
            <h5 className="text-white font-bold mb-3 uppercase tracking-wider text-[11px]">Navigation</h5>
            <ul className="space-y-2 text-inadep-border/70">
              <li><a href="#accueil" className="hover:text-white transition-colors">Accueil</a></li>
              <li><a href="#apropos" className="hover:text-white transition-colors">Missions & Tutelle ESURSI</a></li>
              <li><a href="#departements" className="hover:text-white transition-colors">Départements Scientifiques</a></li>
              <li><a href="#publications" className="hover:text-white transition-colors">Publications & EDUAF</a></li>
            </ul>
          </div>

          <div>
            <h5 className="text-white font-bold mb-3 uppercase tracking-wider text-[11px]">Unités de Recherche</h5>
            <ul className="space-y-2 text-inadep-border/70">
              <li><a href="#departements" className="hover:text-white transition-colors">Études Prospectives</a></li>
              <li><a href="#departements" className="hover:text-white transition-colors">Centre Cheikh Anta Diop</a></li>
              <li><a href="#departements" className="hover:text-white transition-colors">Intégration & ZLECAF</a></li>
              <li><a href="#departements" className="hover:text-white transition-colors">Éditions EDUAF</a></li>
            </ul>
          </div>

          <div>
            <h5 className="text-white font-bold mb-3 uppercase tracking-wider text-[11px]">Tutelle Ministérielle</h5>
            <p className="text-inadep-border/80 text-xs mb-3">
              Ministère de l'Enseignement Supérieur, Universitaire et Recherche Scientifique (ESURSI).
            </p>
            <div className="p-3 rounded bg-inadep-plum border border-inadep-border/20 text-[11px] text-emerald-300 font-medium">
              Kinshasa, République Démocratique du Congo
            </div>
          </div>

        </div>

        <div className="pt-6 border-t border-inadep-plum/80 flex flex-col sm:flex-row justify-between items-center gap-4 text-[11px] text-inadep-border/60">
          <p>&copy; 1989 - 2026 INADEP. Tous droits réservés. République Démocratique du Congo.</p>
          <div className="flex space-x-4">
            <a href="#cadre-legal" className="hover:text-white">Mentions Légales</a>
            <span>•</span>
            <a href="#cadre-legal" className="hover:text-white">Statuts Ordonnance 89-287</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
