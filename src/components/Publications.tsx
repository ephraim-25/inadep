import { useState, useMemo } from 'react';
import { Search, Eye, X } from 'lucide-react';

const publicationsData = [
  {
    id: 'pub-1',
    category: 'prospective',
    tag: 'Prospectives',
    tagColor: 'bg-inadep-lilac text-inadep-plum',
    date: 'T2 - 2026',
    title: "Scénarios d'Industrialisation de la RDC et Minerais Critiques 2040",
    desc: "Analyse prospective de la chaîne de valeur du Cobalt et du Lithium. Recommandations stratégiques pour le Gouvernement de la RDC.",
    author: "Dr. M. Kabamba & team",
    fullDesc: "Analyse prospective détaillée évaluant la faisabilité de l'installation des usines de raffinage de Cobalt et de fabrication de précurseurs de batteries en RDC horizon 2040. Document d'orientation stratégique remis au Ministère de l'ESURSI."
  },
  {
    id: 'pub-2',
    category: 'egyptologie',
    tag: 'Égyptologie',
    tagColor: 'bg-amber-100 text-amber-900',
    date: 'T1 - 2026',
    title: "Parenté Linguistique entre le Lingala et l'Égyptien Pharaonique",
    desc: "Travaux comparatifs conduits par le Centre Cheikh Anta Diop démontrant les convergences morphologiques et syntaxiques.",
    author: "Pr. Tshibangu K.",
    fullDesc: "Ouvrage de linguistique rétrospective établissant plus de 150 racines verbales et phonétiques communes entre le pharaonique ancien et le Lingala modernisé. Une contribution fondamentale aux Humanités Africaines."
  },
  {
    id: 'pub-3',
    category: 'esursi',
    tag: 'Rapport ESURSI',
    tagColor: 'bg-inadep-emerald-bg text-inadep-emerald',
    date: '2025 - 2026',
    title: "Orientation Stratégique de la Recherche Scientifique Universitaire",
    desc: "Livre blanc présenté au Ministère de l'ESURSI fixant la politique de financement des laboratoires d'excellence en RDC.",
    author: "Conseil Scientifique INADEP",
    fullDesc: "Rapport cadre définissant la réorganisation des budgets de recherche accordés aux professeurs et chercheurs congolais, avec un accent particulier sur la prospective appliquée."
  },
  {
    id: 'pub-4',
    category: 'eduaf',
    tag: 'Éditions EDUAF',
    tagColor: 'bg-inadep-lilac text-inadep-iris',
    date: '2026',
    title: "Revue \"Prospectives Africaines\" Vol. 34 - Intégration ZLECAF",
    desc: "Recueil d'articles soumis au comité scientifique relatif aux enjeux douaniers et à l'interconnexion énergétique transfrontalière.",
    author: "Comité Éditorial EDUAF",
    fullDesc: "Volume regroupant 8 travaux scientifiques évalués par les pairs sur les politiques d'harmonisation douanière et de régulation énergétique dans la zone CEEAC et SADC."
  }
];

export default function Publications() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filter, setFilter] = useState('all');
  const [selectedPub, setSelectedPub] = useState<typeof publicationsData[0] | null>(null);

  const filteredPubs = useMemo(() => {
    return publicationsData.filter(pub => {
      const matchesSearch = pub.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            pub.desc.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesFilter = filter === 'all' || pub.category === filter;
      return matchesSearch && matchesFilter;
    });
  }, [searchQuery, filter]);

  return (
    <section id="publications" className="py-20 bg-inadep-lilac/30 border-y border-inadep-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-6">
          <div>
            <span className="text-xs font-extrabold uppercase tracking-widest text-inadep-plum bg-inadep-lilac px-3 py-1 rounded border border-inadep-border">
              Bibliothèque Scientifique
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-inadep-plum mt-3">
              Publications, Notes & Ouvrages EDUAF
            </h2>
            <p className="text-inadep-muted text-sm mt-1">
              Accédez aux travaux de recherche validés par le Conseil Scientifique.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <div className="relative min-w-[260px]">
              <input 
                type="text" 
                placeholder="Rechercher par titre, auteur..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-4 py-2.5 rounded-btn border border-inadep-border text-xs font-medium focus:outline-none focus:border-inadep-iris bg-white text-inadep-plum shadow-sm"
              />
              <Search className="w-4 h-4 text-inadep-muted absolute left-3 top-3" />
            </div>

            <select 
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="px-4 py-2.5 rounded-btn border border-inadep-border text-xs font-bold focus:outline-none focus:border-inadep-iris bg-white text-inadep-plum shadow-sm"
            >
              <option value="all">Tous les thèmes</option>
              <option value="prospective">Prospectives & Scénarios</option>
              <option value="egyptologie">Égyptologie C.A. Diop</option>
              <option value="esursi">Rapports Ministériels ESURSI</option>
              <option value="eduaf">Éditions EDUAF</option>
            </select>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPubs.map(pub => (
            <div key={pub.id} className="bg-white rounded-card p-6 border border-inadep-border hover:border-inadep-violet hover:shadow-card-hover transition-all flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between text-xs text-inadep-muted mb-3">
                  <span className={`px-2.5 py-1 rounded-btn font-bold text-[10px] uppercase ${pub.tagColor}`}>{pub.tag}</span>
                  <span>{pub.date}</span>
                </div>
                <h3 className="font-bold text-lg text-inadep-plum mb-2 hover:text-inadep-iris cursor-pointer" onClick={() => setSelectedPub(pub)}>
                  {pub.title}
                </h3>
                <p className="text-xs text-inadep-muted leading-relaxed line-clamp-3 mb-4">
                  {pub.desc}
                </p>
              </div>
              <div className="pt-4 border-t border-inadep-border/60 flex items-center justify-between text-xs">
                <span className="font-bold text-inadep-plum">{pub.author}</span>
                <button onClick={() => setSelectedPub(pub)} className="text-inadep-iris font-bold hover:underline flex items-center gap-1">
                  Aperçu <Eye className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
          {filteredPubs.length === 0 && (
            <div className="col-span-full py-10 text-center text-inadep-muted text-sm">Aucune publication trouvée.</div>
          )}
        </div>

      </div>

      {/* Modal */}
      {selectedPub && (
        <div className="fixed inset-0 z-[100] bg-inadep-plum-dark/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-card max-w-xl w-full p-6 sm:p-8 shadow-2xl space-y-4 relative border border-inadep-border">
            <button onClick={() => setSelectedPub(null)} className="absolute top-4 right-4 text-inadep-muted hover:text-inadep-plum p-1.5 rounded-btn hover:bg-inadep-lilac">
              <X className="w-5 h-5" />
            </button>

            <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-inadep-lilac text-inadep-plum">
              {selectedPub.tag}
            </span>
            <h3 className="text-xl font-bold text-inadep-plum">{selectedPub.title}</h3>
            
            <div className="text-xs text-inadep-muted flex items-center gap-3 border-y border-inadep-border/60 py-2">
              <span>Auteur: <strong className="text-inadep-plum">{selectedPub.author}</strong></span>
              <span>•</span>
              <span>Éditeur: <strong className="text-inadep-plum">INADEP / EDUAF</strong></span>
            </div>

            <p className="text-xs text-inadep-muted leading-relaxed">
              {selectedPub.fullDesc}
            </p>

            <div className="pt-4 flex justify-end gap-3">
              <button onClick={() => setSelectedPub(null)} className="px-4 py-2 rounded-btn text-xs font-bold text-inadep-muted hover:bg-inadep-lilac">Fermer</button>
              <button onClick={() => { window.dispatchEvent(new CustomEvent('toast-alert', { detail: "Téléchargement de l'extrait PDF initié." })); setSelectedPub(null); }} className="px-5 py-2 rounded-btn text-xs font-bold text-white bg-inadep-aubergine hover:bg-inadep-iris shadow">
                Télécharger la Note de Synthèse (PDF)
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
