import { useRef } from 'react';
import { ChevronLeft, ChevronRight, Play, ArrowRight } from 'lucide-react';

const feedData = [
  {
    id: 1,
    type: 'youtube',
    imageUrl: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    title: 'Colloque International sur la ZLECAF 2026 : Intégration Économique',
    date: '12 Septembre 2026'
  },
  {
    id: 2,
    type: 'linkedin',
    imageUrl: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    title: 'Signature du partenariat stratégique avec l\'Université de Kinshasa (UNIKIN).',
    date: '5 Septembre 2026'
  },
  {
    id: 3,
    type: 'x',
    imageUrl: 'https://images.unsplash.com/photo-1515162816999-a0c47dc192f7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    title: 'Le Conseil Scientifique valide les 5 nouveaux axes de recherche INADEP.',
    date: '30 Août 2026'
  },
  {
    id: 4,
    type: 'youtube',
    imageUrl: 'https://images.unsplash.com/photo-1475721025870-2460662d8611?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    title: 'Webinaire : Les Métaux Stratégiques Africains à l\'horizon 2040',
    date: '15 Août 2026'
  },
  {
    id: 5,
    type: 'facebook',
    imageUrl: 'https://images.unsplash.com/photo-1577415124269-31111667b2fc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    title: 'Retour sur la Masterclass en Prospective et Géopolitique de rentrée.',
    date: '10 Août 2026'
  }
];

// SVG Icons for Social Badges
const SocialBadge = ({ type }: { type: string }) => {
  if (type === 'youtube') return null; // YouTube has the center play button instead

  const baseClasses = "absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center text-white shadow-lg backdrop-blur-md z-20 border border-white/20";
  
  switch (type) {
    case 'linkedin':
      return (
        <div className={`${baseClasses} bg-[#0a66c2]/90`}>
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
        </div>
      );
    case 'x':
      return (
        <div className={`${baseClasses} bg-black/90`}>
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
        </div>
      );
    case 'facebook':
      return (
        <div className={`${baseClasses} bg-[#1877F2]/90`}>
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
        </div>
      );
    default:
      return null;
  }
};

export default function SocialFeed() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = scrollRef.current.clientWidth * 0.8;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="py-20 bg-inadep-wash border-t border-inadep-border overflow-hidden">
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header section with Navigation */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <span className="text-[10px] font-extrabold uppercase tracking-widest text-inadep-emerald bg-inadep-emerald-bg px-2.5 py-1 rounded border border-inadep-emerald/20">
              Médiathèque
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-inadep-plum mt-3 tracking-tight">
              L'INADEP en Action
            </h2>
            <p className="text-sm text-inadep-muted mt-2 max-w-xl">
              Revivez nos temps forts, conférences et publications institutionnelles à travers notre galerie multimédia.
            </p>
          </div>
          <div className="flex gap-3 shrink-0">
            <button onClick={() => scroll('left')} className="p-3 rounded-full bg-white border border-inadep-border text-inadep-plum hover:bg-inadep-lilac hover:text-inadep-iris hover:border-inadep-iris transition-all shadow-sm">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button onClick={() => scroll('right')} className="p-3 rounded-full bg-white border border-inadep-border text-inadep-plum hover:bg-inadep-lilac hover:text-inadep-iris hover:border-inadep-iris transition-all shadow-sm">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Media Carousel */}
        <div 
          ref={scrollRef}
          className="flex gap-4 sm:gap-6 overflow-x-auto snap-x snap-mandatory hide-scrollbar pb-6"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {feedData.map((post) => (
            <div 
              key={post.id} 
              className="relative group shrink-0 w-[85vw] sm:w-[340px] md:w-[380px] h-[480px] rounded-2xl overflow-hidden snap-center sm:snap-start bg-inadep-plum-dark cursor-pointer shadow-ambient hover:shadow-card-hover transition-all duration-300"
            >
              {/* Background Image */}
              <img 
                src={post.imageUrl} 
                alt={post.title} 
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out opacity-90 group-hover:opacity-100"
              />
              
              {/* Gradient Overlay for Text Readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
              
              {/* Social Badges */}
              <SocialBadge type={post.type} />

              {/* YouTube specific play button */}
              {post.type === 'youtube' && (
                <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
                  <div className="w-16 h-12 bg-[#FF0000] rounded-xl flex items-center justify-center shadow-lg group-hover:bg-red-600 group-hover:scale-110 transition-all duration-300">
                    <Play className="w-6 h-6 text-white fill-current ml-1" />
                  </div>
                </div>
              )}

              {/* Content Box (Bottom) */}
              <div className="absolute bottom-0 inset-x-0 p-6 z-20 flex flex-col justify-end">
                <span className="text-[10px] font-bold text-inadep-border uppercase tracking-widest mb-2 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-inadep-violet animate-pulse"></span>
                  {post.date}
                </span>
                <h3 className="text-lg font-bold text-white leading-snug group-hover:text-inadep-border transition-colors">
                  {post.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Global CTA */}
        <div className="mt-12 text-center">
          <button className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-inadep-emerald-light hover:bg-inadep-emerald text-white font-bold text-sm tracking-wide shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5">
            Suivre l'INADEP sur les réseaux
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}
