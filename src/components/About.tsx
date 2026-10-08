import { BarChart3, BookOpen, Landmark, Library } from 'lucide-react';

export default function About() {
  return (
    <section id="apropos" className="py-20 bg-inadep-plum text-white relative bg-plum-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-xs font-extrabold uppercase tracking-widest text-inadep-emerald-light bg-inadep-plum-dark px-3 py-1 rounded border border-inadep-emerald/30">
            Ancrage Institutionnel & Tutelle
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold mt-4 tracking-tight">
            Une Institution Étatique au Cœur de la Recherche Stratégique
          </h2>
          <p className="text-inadep-border/90 mt-4 text-base leading-relaxed">
            L'INADEP est un établissement public scientifique et culturel doté de la personnalité juridique et de l'autonomie financière, placé sous l'autorité directe du Ministère de l'Enseignement Supérieur, Universitaire et Recherche Scientifique (ESURSI).
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          
          <div className="p-8 rounded-card bg-inadep-plum-dark/90 border border-inadep-border/20 hover:border-inadep-violet/60 transition-all group">
            <div className="w-12 h-12 rounded-btn bg-inadep-aubergine text-inadep-emerald-light flex items-center justify-center mb-6 font-bold group-hover:bg-inadep-iris transition-colors">
              <BarChart3 className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Prospective & Modélisation</h3>
            <p className="text-sm text-inadep-border/80 leading-relaxed">
              Élaboration de schémas directeur prévisionnels, analyse des tendances de rupture et scénarios stratégiques à destination des instances gouvernementales et multilatérales.
            </p>
          </div>

          <div className="p-8 rounded-card bg-inadep-plum-dark/90 border border-inadep-border/20 hover:border-inadep-violet/60 transition-all group">
            <div className="w-12 h-12 rounded-btn bg-inadep-aubergine text-amber-400 flex items-center justify-center mb-6 font-bold group-hover:bg-inadep-iris transition-colors">
              <Library className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Égyptologie & Humanités</h3>
            <p className="text-sm text-inadep-border/80 leading-relaxed">
              Recherche fondamentale sur la filiation historique et linguistique entre l'Égypte pharaonique et les cultures africaines au sein du <i>Centre Cheikh Anta Diop</i>.
            </p>
          </div>

          <div className="p-8 rounded-card bg-inadep-plum-dark/90 border border-inadep-border/20 hover:border-inadep-violet/60 transition-all group">
            <div className="w-12 h-12 rounded-btn bg-inadep-aubergine text-inadep-violet flex items-center justify-center mb-6 font-bold group-hover:bg-inadep-iris transition-colors">
              <BookOpen className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Publications & EDUAF</h3>
            <p className="text-sm text-inadep-border/80 leading-relaxed">
              Édition scientifique et diffusion des thèses, monographies et bulletins à travers la maison d'édition intégrée <strong>Éditions Universitaires Africaines</strong>.
            </p>
          </div>

        </div>

        <div className="mt-12 p-8 rounded-card bg-gradient-to-r from-inadep-plum-dark via-inadep-plum to-inadep-plum-dark border border-inadep-border/40 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-5">
            <div className="w-16 h-16 rounded-btn bg-inadep-aubergine border border-inadep-border/40 flex items-center justify-center shrink-0">
              <Landmark className="w-8 h-8 text-inadep-emerald-light" />
            </div>
            <div>
              <span className="text-xs font-extrabold text-inadep-emerald-light uppercase tracking-widest">Tutelle Administrative Directe</span>
              <h4 className="text-xl font-bold text-white mt-1">Ministère de l'ESURSI - République Démocratique du Congo</h4>
              <p className="text-xs text-inadep-border/80 mt-1">Supervision scientifique, orientation stratégique et validation des programmes nationaux de recherche.</p>
            </div>
          </div>
          <a href="#contact" className="px-6 py-3 rounded-btn bg-inadep-emerald hover:bg-inadep-emerald-dark text-white font-bold text-xs uppercase tracking-wider transition-colors shrink-0">
            Contact Téléphonique & Secrétariat
          </a>
        </div>

      </div>
    </section>
  );
}
