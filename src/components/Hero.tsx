import { useState } from 'react';
import { ArrowRight, Gavel } from 'lucide-react';

const radarData = {
  econ: {
    title: "Scénario Macro-économique RDC 2050",
    status: "Indice d'Impact: HIGH",
    desc: "Projections stratégiques sur l'industrialisation locale de la filière Batterie & Énergie Propre. Modélisation de l'intégration des chaînes de valeur en Afrique Centrale.",
    m1: "2030 - 2050",
    m2: "Dép. Prospectives"
  },
  egypt: {
    title: "Humanités Africaines & Égyptologie",
    status: "Projet Actif: Cheikh Anta Diop",
    desc: "Recherches rétrospectives sur les convergences linguistiques et philosophiques entre la Vallée du Nil et les peuples du bassin du Congo.",
    m1: "Rétrospectif",
    m2: "Centre C.A. Diop"
  },
  geopol: {
    title: "Gouvernance Bassin du Congo & ZLECAF",
    status: "Orientations Multilatérales",
    desc: "Analyse des retombées de la Zone de Libre-Échange Continentale Africaine et diplomatie scientifique liée aux marchés de crédits carbone.",
    m1: "En cours 2026",
    m2: "Intégration Régionale"
  }
} as const;

type RadarKey = keyof typeof radarData;

export default function Hero() {
  const [activeRadar, setActiveRadar] = useState<RadarKey>('econ');
  const currentData = radarData[activeRadar];

  return (
    <section id="accueil" className="relative bg-inadep-wash pt-12 pb-20 lg:pt-20 lg:pb-28 overflow-hidden">
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-inadep-lilac/70 blur-3xl -z-10 pointer-events-none rounded-full"></div>
      <div className="absolute top-40 right-10 w-80 h-80 bg-inadep-emerald-bg/80 blur-3xl -z-10 pointer-events-none rounded-full"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center lg:justify-start mb-6">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-btn bg-inadep-lilac border border-inadep-border text-inadep-plum text-xs font-bold tracking-wider uppercase">
            <svg className="w-3.5 h-3.5 text-inadep-emerald" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
            RÉPUBLIQUE DÉMOCRATIQUE DU CONGO • MINISTÈRE DE L'ESURSI
          </span>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <h1 className="headline-hero font-display font-extrabold text-inadep-plum tracking-tight">
              Anticiper l'Avenir, <span className="gradient-text-hero">Éclairer les Décisions</span> Régionales et Continentales.
            </h1>

            <p className="text-base sm:text-lg text-inadep-muted font-normal max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              L'<strong>Institut Africain d'Études Prospectives (INADEP)</strong> est l'organe public de recherche stratégique, de modélisation prospective, d'égyptologie et de valorisation scientifique de la RDC et de l'Afrique Centrale.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a href="#publications" className="w-full sm:w-auto px-7 py-3.5 rounded-btn bg-inadep-aubergine hover:bg-inadep-iris text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2">
                Consulter les Rapports
                <ArrowRight className="w-4 h-4 text-inadep-emerald-light" />
              </a>
              <a href="#cadre-legal" className="w-full sm:w-auto px-7 py-3.5 rounded-btn bg-white hover:bg-inadep-lilac text-inadep-plum border border-inadep-border font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-sm">
                <Gavel className="w-4 h-4 text-inadep-emerald" />
                Texte Fondateur (Ord. 89-287)
              </a>
            </div>

            <div className="pt-6 border-t border-inadep-border/60 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-inadep-muted font-medium">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-inadep-emerald"></span> Établissement Public Scientifique & Culturel
              </span>
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-inadep-iris"></span> Éditions EDUAF Intégrées
              </span>
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-amber-500"></span> Centre Cheikh Anta Diop
              </span>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="bg-white rounded-card p-6 sm:p-7 border border-inadep-border shadow-ambient relative">
              <div className="flex items-center justify-between pb-4 border-b border-inadep-border/60">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-inadep-emerald animate-pulse"></div>
                  <span className="text-xs font-bold uppercase tracking-wider text-inadep-plum">Tableau de Bord Prospectif INADEP</span>
                </div>
                <span className="text-[10px] font-mono font-bold bg-inadep-lilac text-inadep-plum px-2.5 py-1 rounded border border-inadep-border">KINSHASA / 2026</span>
              </div>

              <div className="mt-4 flex gap-1.5 overflow-x-auto pb-2 scrollbar-none text-[11px] font-semibold">
                <button onClick={() => setActiveRadar('econ')} className={`px-3 py-1.5 rounded-btn whitespace-nowrap transition-colors ${activeRadar === 'econ' ? 'bg-inadep-plum text-white' : 'bg-inadep-lilac text-inadep-plum hover:bg-inadep-border/40'}`}>Économie & Minerais</button>
                <button onClick={() => setActiveRadar('egypt')} className={`px-3 py-1.5 rounded-btn whitespace-nowrap transition-colors ${activeRadar === 'egypt' ? 'bg-inadep-plum text-white' : 'bg-inadep-lilac text-inadep-plum hover:bg-inadep-border/40'}`}>Égyptologie & Culture</button>
                <button onClick={() => setActiveRadar('geopol')} className={`px-3 py-1.5 rounded-btn whitespace-nowrap transition-colors ${activeRadar === 'geopol' ? 'bg-inadep-plum text-white' : 'bg-inadep-lilac text-inadep-plum hover:bg-inadep-border/40'}`}>ZLECAF & Climat</button>
              </div>

              <div className="mt-4 p-5 rounded-card bg-inadep-lilac/50 border border-inadep-border/60 space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-xs font-extrabold text-inadep-plum uppercase">{currentData.title}</span>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-inadep-emerald-bg text-inadep-emerald border border-inadep-emerald/30">{currentData.status}</span>
                </div>
                <p className="text-xs text-inadep-muted leading-relaxed">
                  {currentData.desc}
                </p>
                <div className="grid grid-cols-2 gap-3 pt-2 text-[11px]">
                  <div className="bg-white p-2.5 rounded border border-inadep-border">
                    <div className="text-inadep-muted text-[10px]">Horizon d'Échéance</div>
                    <div className="font-bold text-inadep-plum">{currentData.m1}</div>
                  </div>
                  <div className="bg-white p-2.5 rounded border border-inadep-border">
                    <div className="text-inadep-muted text-[10px]">Direction Scientifique</div>
                    <div className="font-bold text-inadep-emerald">{currentData.m2}</div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3 mt-4 text-center">
                <div className="p-3 rounded-btn bg-inadep-wash border border-inadep-border">
                  <div className="text-xl font-display font-extrabold text-inadep-plum">1989</div>
                  <div className="text-[10px] text-inadep-muted uppercase font-bold">Création (Ord. 89)</div>
                </div>
                <div className="p-3 rounded-btn bg-inadep-wash border border-inadep-border">
                  <div className="text-xl font-display font-extrabold text-inadep-emerald">04</div>
                  <div className="text-[10px] text-inadep-muted uppercase font-bold">Départements</div>
                </div>
                <div className="p-3 rounded-btn bg-inadep-wash border border-inadep-border">
                  <div className="text-xl font-display font-extrabold text-inadep-iris">EDUAF</div>
                  <div className="text-[10px] text-inadep-muted uppercase font-bold">Éditions Universitaires</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
