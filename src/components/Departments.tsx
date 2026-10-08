import { useState } from 'react';
import { ChevronRight } from 'lucide-react';

const departmentsData = [
  {
    id: 'dept-1',
    title: 'Prospectives & Scénarios',
    tag: 'Département N° 01',
    subTag: '● Analyse Stratégique RDC 2050',
    tagColor: 'bg-inadep-lilac text-inadep-plum',
    subTagColor: 'text-inadep-emerald',
    heading: 'Département des Études Prospectives & Scénarios Stratégiques',
    desc: 'Ce département conduit des recherches interdisciplinaires sur la projection des ressources naturelles, la transition énergétique, le développement numérique et les modèles démographiques en RDC et en Afrique Centrale.',
    axe1: 'Modélisation des minerais stratégiques (Cobalt/Lithium)',
    axe2: 'Veille technologique & Intelligence Artificielle'
  },
  {
    id: 'dept-2',
    title: 'Centre Cheikh Anta Diop',
    tag: 'Département N° 02',
    subTag: '● Recherche Rétrospective',
    tagColor: 'bg-amber-100 text-amber-900',
    subTagColor: 'text-amber-700',
    heading: "Centre d'Égyptologie Cheikh Anta Diop",
    desc: "Unité fondamentale consacrée aux études linguistiques comparées, à l'histoire ancienne des civilisations de la Vallée du Nil et à la préservation du patrimoine immatériel africain.",
    axe1: 'Linguistique comparative (Bantou - Égyptien Ancien)',
    axe2: 'Numérisation des manuscrits & archives historiques'
  },
  {
    id: 'dept-3',
    title: 'Intégration & Géopolitique',
    tag: 'Département N° 03',
    subTag: '● ZLECAF & Bassin du Congo',
    tagColor: 'bg-inadep-emerald-bg text-inadep-emerald',
    subTagColor: 'text-inadep-emerald',
    heading: 'Intégration Africaine & Géopolitique Régionale',
    desc: "Observatoire des dynamiques multilatérales (CEEAC, SADC, UA), de la gouvernance du Bassin du Congo et de l'intégration économique dans le cadre de la ZLECAF.",
    axe1: 'Diplomatie environnementale & Crédits Carbone',
    axe2: 'Mobilité régionale & Infrastructures transfrontalières'
  },
  {
    id: 'dept-4',
    title: 'Éditions EDUAF',
    tag: "Maison d'Édition",
    subTag: '● Éditions EDUAF',
    tagColor: 'bg-inadep-lilac text-inadep-iris',
    subTagColor: 'text-inadep-iris',
    heading: 'Éditions Universitaires Africaines (EDUAF)',
    desc: "Bra armé de la publication académique de l'INADEP. Les EDUAF publient la revue trimestrielle Prospectives Africaines ainsi que les ouvrages de référence des universités congolaises.",
    axe1: 'Relecture par les pairs & Comité Scientifique',
    axe2: 'Diffusion physique et numérique des thèses'
  }
];

export default function Departments() {
  const [activeTab, setActiveTab] = useState(departmentsData[0].id);
  const currentDept = departmentsData.find(d => d.id === activeTab)!;

  return (
    <section id="departements" className="py-20 bg-inadep-wash">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <span className="text-xs font-extrabold uppercase tracking-widest text-inadep-plum bg-inadep-lilac px-3 py-1 rounded border border-inadep-border">
              Pôles Scientifiques
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-inadep-plum mt-3">
              Unités de Recherche et Départements
            </h2>
          </div>
          <p className="text-sm text-inadep-muted max-w-md mt-4 md:mt-0">
            Les 4 grands départements de l'INADEP conjuguent prospective stratégique, sciences humaines rétrospectives et diffusion éditoriale.
          </p>
        </div>

        <div className="bg-white rounded-card border border-inadep-border shadow-ambient overflow-hidden grid lg:grid-cols-12">
          
          <div className="lg:col-span-4 bg-inadep-lilac/40 border-r border-inadep-border p-4 space-y-2">
            {departmentsData.map((dept, index) => (
              <button 
                key={dept.id}
                onClick={() => setActiveTab(dept.id)} 
                className={`text-left w-full p-4 rounded-btn font-semibold text-sm transition-all flex items-center justify-between ${activeTab === dept.id ? 'bg-white text-inadep-plum shadow-sm border border-inadep-border' : 'text-inadep-muted hover:bg-inadep-lilac/80'}`}
              >
                <span>{index + 1}. {dept.title}</span>
                <ChevronRight className={`w-4 h-4 ${activeTab === dept.id ? 'text-inadep-iris' : ''}`} />
              </button>
            ))}
          </div>

          <div className="lg:col-span-8 p-8 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <span className={`px-2.5 py-1 rounded text-xs font-bold uppercase ${currentDept.tagColor}`}>{currentDept.tag}</span>
                <span className={`text-xs font-bold ${currentDept.subTagColor}`}>{currentDept.subTag}</span>
              </div>
              <h3 className="text-2xl font-bold text-inadep-plum">{currentDept.heading}</h3>
              <p className="text-sm text-inadep-muted leading-relaxed">
                {currentDept.desc}
              </p>
              <div className="grid sm:grid-cols-2 gap-3 pt-3 text-xs">
                <div className="p-3 bg-inadep-wash rounded-btn border border-inadep-border"><strong>Axe 1:</strong> {currentDept.axe1}</div>
                <div className="p-3 bg-inadep-wash rounded-btn border border-inadep-border"><strong>Axe 2:</strong> {currentDept.axe2}</div>
              </div>
            </div>

            <div className="pt-8 mt-6 border-t border-inadep-border flex items-center justify-between">
              <span className="text-xs text-inadep-muted">Supervisé par la Direction Scientifique INADEP / ESURSI</span>
              <a href="#publications" className="text-xs font-bold text-inadep-iris hover:underline flex items-center gap-1">
                Explorer les publications du département &rarr;
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
