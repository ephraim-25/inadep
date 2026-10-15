import { User, Mail } from 'lucide-react';

const governanceData = [
  {
    id: 1,
    role: 'Directeur Général (DG)',
    name: 'BILOLO MUBABINGE WA KALUKA',
  },
  {
    id: 2,
    role: 'Directeur Scientifique (DS)',
    name: 'PINI-PINI NSASAY KENTEY',
  },
  {
    id: 3,
    role: 'Directeur Administratif et Financier (DAF)',
    name: 'MBWOLO IBALAMU JONATHAN',
  }
];

export default function AboutGovernance() {
  return (
    <section id="gouvernance" className="py-20 bg-white border-y border-inadep-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* History & Legal Foundation */}
        <div className="mb-16 max-w-3xl">
          <span className="text-xs font-extrabold uppercase tracking-widest text-inadep-plum bg-inadep-lilac px-3 py-1 rounded border border-inadep-border">
            À Propos & Gouvernance
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-inadep-plum mt-4 tracking-tight">
            Ancrage Législatif et Histoire
          </h2>
          <p className="text-inadep-muted mt-4 text-base leading-relaxed">
            Institué par l'<strong>Ordonnance n° 89-287 du 9 novembre 1989</strong>, l'Institut Africain d'Études Prospectives (INADEP) est un établissement public à vocation scientifique et culturelle. Sous la tutelle bienveillante du Ministère de l'Enseignement Supérieur, Universitaire et Recherche Scientifique (ESURSI), il joue un rôle stratégique dans la conception des modèles de développement pour la République Démocratique du Congo et l'Afrique.
          </p>
        </div>

        {/* Board of Directors / Management Committee */}
        <div>
          <h3 className="text-2xl font-bold text-inadep-plum mb-8">Comité de Gestion</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {governanceData.map((member) => (
              <div key={member.id} className="p-6 rounded-card border border-inadep-border bg-inadep-wash shadow-sm hover:border-inadep-violet hover:shadow-card-hover transition-all text-center">
                <div className="w-20 h-20 mx-auto rounded-full bg-slate-200 border-2 border-white shadow-sm flex items-center justify-center mb-4 text-slate-400">
                  <User className="w-10 h-10" />
                </div>
                <div className="mb-2">
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-inadep-emerald px-2.5 py-1 rounded bg-inadep-emerald-bg">
                    {member.role}
                  </span>
                </div>
                <h4 className="text-base font-bold text-inadep-plum mt-3 tracking-wide">{member.name}</h4>
                <div className="flex justify-center gap-3 mt-5 pt-5 border-t border-inadep-border/60">
                  <button className="text-inadep-muted hover:text-[#0a66c2] transition-colors" aria-label="LinkedIn">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                  </button>
                  <button className="text-inadep-muted hover:text-[#1da1f2] transition-colors" aria-label="Twitter/X">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
                  </button>
                  <button className="text-inadep-muted hover:text-inadep-iris transition-colors" aria-label="Email">
                    <Mail className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
