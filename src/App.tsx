import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import AboutGovernance from './components/AboutGovernance';
import Departments from './components/Departments';
import Publications from './components/Publications';
import Legal from './components/Legal';
import Contact from './components/Contact';
import SocialFeed from './components/SocialFeed';
import Footer from './components/Footer';
import ResearcherLinkModal from './components/ResearcherLinkModal';

function App() {
  const [toastMsg, setToastMsg] = useState<string | null>(null);

  useEffect(() => {
    const handleToast = (e: Event) => {
      const customEvent = e as CustomEvent<string>;
      setToastMsg(customEvent.detail);
      setTimeout(() => {
        setToastMsg(null);
      }, 3500);
    };

    window.addEventListener('toast-alert', handleToast);

    return () => {
      window.removeEventListener('toast-alert', handleToast);
    };
  }, []);

  return (
    <>
      <Header />
      <main className="flex-grow">
        <Hero />
        <AboutGovernance />
        <Departments />
        <Publications />
        <Legal />
        <Contact />
        <SocialFeed />
      </main>
      <Footer />
      
      <ResearcherLinkModal />

      {/* Global Toast Notification */}
      {toastMsg && (
        <div className="fixed bottom-5 right-5 z-50 bg-inadep-plum text-white px-5 py-3 rounded-btn shadow-xl border border-inadep-violet flex items-center gap-3 text-xs font-bold animate-pulse">
          <span className="w-2 h-2 rounded-full bg-inadep-emerald-light"></span>
          <span>{toastMsg}</span>
        </div>
      )}
    </>
  );
}

export default App;
