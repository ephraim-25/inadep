import { MapPin, Mail } from 'lucide-react';
import React from 'react';

export default function Contact() {
  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    window.dispatchEvent(new CustomEvent('toast-alert', { detail: "Votre message institutionnel a été transmis au Secrétariat Général INADEP." }));
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section id="contact" className="py-20 bg-inadep-lilac/20 border-t border-inadep-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12">
          
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs font-extrabold uppercase tracking-widest text-inadep-plum bg-inadep-lilac px-3 py-1 rounded border border-inadep-border">
              Secrétariat Général
            </span>
            <h2 className="text-3xl font-display font-bold text-inadep-plum">
              Formulaire de Contact & Soumission
            </h2>
            <p className="text-inadep-muted text-sm leading-relaxed">
              Pour toute demande de partenariat académique, dépôt de projet de recherche au Conseil Scientifique ou renseignement sur la maison d'édition EDUAF.
            </p>

            <div className="space-y-4 pt-2 text-xs font-medium">
              <div className="p-4 bg-white rounded-btn border border-inadep-border flex items-start gap-3.5">
                <div className="p-2.5 rounded bg-inadep-lilac text-inadep-plum shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <strong className="text-inadep-plum block text-sm">Siège Administratif INADEP</strong>
                  <span className="text-inadep-muted">Avenue de la Recherche Scientifique, Commune de la Gombe, Kinshasa, République Démocratique du Congo</span>
                </div>
              </div>

              <div className="p-4 bg-white rounded-btn border border-inadep-border flex items-start gap-3.5">
                <div className="p-2.5 rounded bg-inadep-lilac text-inadep-plum shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <strong className="text-inadep-plum block text-sm">Courrier Électronique</strong>
                  <span className="text-inadep-muted">contact@inadep.gouv.cd / secretariate@inadep.org</span>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 bg-white p-8 rounded-card border border-inadep-border shadow-ambient">
            <form id="contact-form" onSubmit={handleFormSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-inadep-plum mb-1">Nom et Prénom *</label>
                  <input type="text" required placeholder="Prof. / Dr. / M." className="w-full px-4 py-2.5 rounded-btn border border-inadep-border text-xs focus:outline-none focus:border-inadep-iris bg-inadep-wash" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-inadep-plum mb-1">Adresse email institutionnelle *</label>
                  <input type="email" required placeholder="votre.nom@univ.cd" className="w-full px-4 py-2.5 rounded-btn border border-inadep-border text-xs focus:outline-none focus:border-inadep-iris bg-inadep-wash" />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-inadep-plum mb-1">Institution / Université</label>
                  <input type="text" placeholder="Ex: Université de Kinshasa (UNIKIN)" className="w-full px-4 py-2.5 rounded-btn border border-inadep-border text-xs focus:outline-none focus:border-inadep-iris bg-inadep-wash" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-inadep-plum mb-1">Objet de la démarche *</label>
                  <select className="w-full px-4 py-2.5 rounded-btn border border-inadep-border text-xs font-medium focus:outline-none focus:border-inadep-iris bg-inadep-wash text-inadep-plum">
                    <option>Soumission d'article scientifique (EDUAF)</option>
                    <option>Demande de partenariat de recherche prospective</option>
                    <option>Accès aux archives Cheikh Anta Diop</option>
                    <option>Demande d'information administrative ESURSI</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-inadep-plum mb-1">Message ou résumé du projet *</label>
                <textarea rows={4} required placeholder="Saisissez les détails de votre requête..." className="w-full px-4 py-2.5 rounded-btn border border-inadep-border text-xs focus:outline-none focus:border-inadep-iris bg-inadep-wash"></textarea>
              </div>

              <button type="submit" className="w-full py-3.5 rounded-btn bg-inadep-aubergine hover:bg-inadep-iris text-white font-bold text-xs uppercase tracking-wider transition-all shadow">
                Transmettre au Secrétariat Général INADEP
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
