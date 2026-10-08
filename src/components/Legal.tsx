import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const legalData = [
  {
    id: 'legal-1',
    tag: '1989',
    tagColor: 'bg-inadep-lilac text-inadep-plum',
    title: 'Ordonnance n° 89-287 du 9 novembre 1989',
    content: (
      <>
        <p>
          Portant création et statuts d'un Établissement Public Scientifique et Culturel à caractère personnalisé dénommé <strong>« Institut Africain d'Études Prospectives » (INADEP)</strong>.
        </p>
        <ul className="list-disc pl-5 mt-3 space-y-1 text-xs text-inadep-plum font-medium">
          <li><strong>Entrée en vigueur effective :</strong> 1er janvier 1990.</li>
          <li><strong>Autonomie :</strong> Personnalité juridique propre, autonomie financière et administrative.</li>
          <li><strong>Siège officiel :</strong> Kinshasa, République Démocratique du Congo.</li>
        </ul>
      </>
    )
  },
  {
    id: 'legal-2',
    tag: 'TUTELLE',
    tagColor: 'bg-inadep-emerald-bg text-inadep-emerald',
    title: "Tutelle Scientifique & Administrative du Ministère de l'ESURSI",
    content: (
      <p>
        L'INADEP est sous la tutelle exclusive du Ministère de l'Enseignement Supérieur, Universitaire et Recherche Scientifique. Le Ministère approuve la feuille de route annuelle, le budget d'investissement et la nomination des chercheurs principaux.
      </p>
    )
  },
  {
    id: 'legal-3',
    tag: 'EDUAF',
    tagColor: 'bg-inadep-lilac text-inadep-iris',
    title: 'Dispositions légales relatives aux Éditions Universitaires (EDUAF)',
    content: (
      <p>
        Autorisation statutaire donnée à l'Institut d'imprimer, d'éditer et de distribuer les thèses, monographies et revues universitaires avec protection de la propriété intellectuelle en RDC et à l'international.
      </p>
    )
  }
];

export default function Legal() {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggleAccordion = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="cadre-legal" className="py-20 bg-inadep-wash">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <span className="text-xs font-extrabold uppercase tracking-widest text-inadep-plum bg-inadep-lilac px-3 py-1 rounded border border-inadep-border">
            Fondement Juridique
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-inadep-plum mt-3">
            Ordonnance n° 89-287 & Statuts Officiels
          </h2>
          <p className="text-inadep-muted text-sm mt-2">
            Consultez l'historique réglementaire régissant le fonctionnement de l'Institut.
          </p>
        </div>

        <div className="space-y-4">
          {legalData.map(item => {
            const isOpen = openId === item.id;
            return (
              <div key={item.id} className="border border-inadep-border rounded-card bg-white shadow-sm overflow-hidden">
                <button 
                  onClick={() => toggleAccordion(item.id)} 
                  className="w-full p-6 text-left flex items-center justify-between font-bold text-inadep-plum hover:text-inadep-iris transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <span className={`px-2.5 py-1 rounded text-xs font-mono font-bold ${item.tagColor}`}>{item.tag}</span>
                    <span className="text-base">{item.title}</span>
                  </div>
                  <ChevronDown className={`w-5 h-5 text-inadep-iris transform transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                </button>
                {isOpen && (
                  <div className="p-6 pt-0 text-sm text-inadep-muted border-t border-inadep-border/60 leading-relaxed space-y-3">
                    {item.content}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
