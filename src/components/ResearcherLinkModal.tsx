import React, { useState, useEffect } from 'react';
import { X, Send, Link as LinkIcon } from 'lucide-react';

export default function ResearcherLinkModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    institution: '',
    email: '',
    title: '',
    domain: '',
    abstract: '',
    url: ''
  });

  useEffect(() => {
    const handleOpen = () => setIsOpen(true);
    window.addEventListener('open-researcher-modal', handleOpen);
    return () => window.removeEventListener('open-researcher-modal', handleOpen);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate submission / validation
    console.log("Submission data:", formData);
    
    // Dispatch success toast
    window.dispatchEvent(
      new CustomEvent('toast-alert', { 
        detail: "Votre publication a été transmise à la cellule d'indexation de l'INADEP pour validation." 
      })
    );
    
    // Reset and close
    setFormData({ name: '', institution: '', email: '', title: '', domain: '', abstract: '', url: '' });
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] bg-inadep-plum-dark/80 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white rounded-card max-w-2xl w-full p-6 sm:p-8 shadow-2xl relative border border-inadep-border my-8">
        <button 
          onClick={() => setIsOpen(false)} 
          className="absolute top-4 right-4 text-inadep-muted hover:text-inadep-plum p-1.5 rounded-btn hover:bg-inadep-lilac transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="mb-6">
          <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-inadep-lilac text-inadep-plum">
            Espace Chercheurs
          </span>
          <h3 className="text-xl font-bold text-inadep-plum mt-3">Soumission de Travail Scientifique</h3>
          <p className="text-xs text-inadep-muted mt-1">
            Indexez vos publications externes pour la revue du Conseil Scientifique.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-inadep-plum mb-1">Nom complet *</label>
              <input type="text" name="name" value={formData.name} onChange={handleChange} required placeholder="Ex: Dr. Kabamba" className="w-full px-3 py-2 rounded-btn border border-inadep-border text-xs focus:outline-none focus:border-inadep-iris bg-inadep-wash" />
            </div>
            <div>
              <label className="block text-xs font-bold text-inadep-plum mb-1">Institution / Affiliation *</label>
              <input type="text" name="institution" value={formData.institution} onChange={handleChange} required placeholder="Université ou Centre de Recherche" className="w-full px-3 py-2 rounded-btn border border-inadep-border text-xs focus:outline-none focus:border-inadep-iris bg-inadep-wash" />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-inadep-plum mb-1">Email professionnel *</label>
              <input type="email" name="email" value={formData.email} onChange={handleChange} required placeholder="votre.email@univ.edu" className="w-full px-3 py-2 rounded-btn border border-inadep-border text-xs focus:outline-none focus:border-inadep-iris bg-inadep-wash" />
            </div>
            <div>
              <label className="block text-xs font-bold text-inadep-plum mb-1">Domaine de recherche *</label>
              <select name="domain" value={formData.domain} onChange={handleChange} required className="w-full px-3 py-2 rounded-btn border border-inadep-border text-xs focus:outline-none focus:border-inadep-iris bg-inadep-wash text-inadep-plum">
                <option value="">Sélectionnez un domaine</option>
                <option value="prospective">Prospective économique</option>
                <option value="egypt">Égypte antique & Humanités</option>
                <option value="geopol">Géopolitique & ZLECAF</option>
                <option value="other">Autre / Pluridisciplinaire</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-inadep-plum mb-1">Titre de la publication *</label>
            <input type="text" name="title" value={formData.title} onChange={handleChange} required placeholder="Titre complet de votre article ou ouvrage" className="w-full px-3 py-2 rounded-btn border border-inadep-border text-xs focus:outline-none focus:border-inadep-iris bg-inadep-wash" />
          </div>

          <div>
            <label className="block text-xs font-bold text-inadep-plum mb-1">URL de la publication externe (DOI, Google Scholar) *</label>
            <div className="relative">
              <input type="url" name="url" value={formData.url} onChange={handleChange} required placeholder="https://doi.org/..." className="w-full pl-9 pr-3 py-2 rounded-btn border border-inadep-border text-xs focus:outline-none focus:border-inadep-iris bg-inadep-wash" />
              <LinkIcon className="w-4 h-4 text-inadep-muted absolute left-3 top-2.5" />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-inadep-plum mb-1">Résumé (Abstract) *</label>
            <textarea name="abstract" value={formData.abstract} onChange={handleChange} required rows={4} placeholder="Résumé de vos travaux de recherche..." className="w-full px-3 py-2 rounded-btn border border-inadep-border text-xs focus:outline-none focus:border-inadep-iris bg-inadep-wash"></textarea>
          </div>

          <div className="pt-4 flex justify-end gap-3 border-t border-inadep-border/60">
            <button type="button" onClick={() => setIsOpen(false)} className="px-4 py-2 rounded-btn text-xs font-bold text-inadep-muted hover:bg-inadep-lilac">
              Annuler
            </button>
            <button type="submit" className="px-5 py-2 rounded-btn text-xs font-bold text-white bg-inadep-aubergine hover:bg-inadep-iris shadow flex items-center gap-2 transition-colors">
              <Send className="w-3.5 h-3.5" />
              Soumettre pour Indexation
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
