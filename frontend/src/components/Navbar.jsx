import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinkClass = (path) => `
    relative px-3 py-2 text-[11px] lg:text-xs font-black uppercase tracking-wider transition-all duration-300
    ${location.pathname === path ? 'text-[#17AEBF]' : 'text-gray-500 hover:text-[#17AEBF]'}
  `;

  return (
    <nav className={`fixed top-0 w-full z-[100] transition-all duration-500 
      ${isScrolled ? 'bg-white/80 backdrop-blur-xl shadow-sm py-3' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        
        {/* --- LOGO --- */}
        <Link to="/" className="flex items-center gap-3 group shrink-0">
          <div className="relative">
            <div className="absolute inset-0 bg-[#17AEBF] blur-lg opacity-20 group-hover:opacity-40 transition-opacity"></div>
            <div className="relative bg-[#17AEBF] p-2 rounded-xl rotate-[-6deg] group-hover:rotate-0 transition-transform">
              <span className="text-white font-black text-xl">E</span>
            </div>
          </div>
          <span className="text-2xl font-black tracking-tighter text-gray-900 hidden sm:block">
            EduLab<span className="text-[#17AEBF]">AI</span>
          </span>
        </Link>
        
        {/* --- MAIN NAVIGATION (Full Menu) --- */}
        <div className="hidden md:flex items-center gap-2 lg:gap-4 bg-white/50 backdrop-blur-md p-1.5 rounded-2xl border border-gray-200/50 shadow-sm">
          <Link to="/" className={navLinkClass('/')}>Beranda</Link>
          <Link to="/materi" className={navLinkClass('/materi')}>Materi</Link>
          <Link to="/teori" className={navLinkClass('/teori')}>Teori</Link>
          <Link to="/praktikum" className={navLinkClass('/praktikum')}>Praktikum</Link>
          <Link to="/challenge" className={navLinkClass('/challenge')}>Challenge</Link>
          <Link to="/quiz-generator" className={navLinkClass('/quiz-generator')}>Quiz</Link>
          
          <Link to="/ai-mentor" className="bg-[#17AEBF] text-white px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest hover:shadow-lg hover:shadow-cyan-200 transition-all hover:scale-105 active:scale-95 ml-2">
            AI Mentor 🤖
          </Link>
        </div>

        {/* --- USER PROFILE --- */}
        <div className="flex items-center gap-3 shrink-0">
          <div className="hidden lg:block text-right">
            <p className="text-[9px] text-gray-400 font-black uppercase tracking-[0.2em]">Level: Pro</p>
            <p className="text-sm font-bold text-gray-800 tracking-tight text-nowrap">EduLearner</p>
          </div>
          <div className="relative group cursor-pointer">
            <div className="absolute inset-0 bg-gradient-to-br from-[#DCFCE7] to-[#17AEBF] rounded-xl blur-md opacity-20 group-hover:opacity-50 transition-opacity"></div>
            <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-[#DCFCE7] to-[#17AEBF] p-[2px]">
              <div className="w-full h-full bg-white rounded-[9px] flex items-center justify-center font-black text-[#17AEBF]">E</div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;