import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-950 text-white pt-24 pb-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 border-b border-white/10 pb-20">
          <div className="max-w-xs">
            <h3 className="text-3xl font-black mb-6 italic tracking-tighter">
              EduLab<span className="text-[#17AEBF]">AI</span>
            </h3>
            <p className="text-gray-400 font-medium leading-relaxed">
              Membangun masa depan pendidikan sains Indonesia lewat teknologi cerdas yang mendeteksi miskonsepsi secara personal.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-16">
            <div>
              <h5 className="font-black mb-6 text-[#17AEBF] uppercase tracking-widest text-xs">Peta Situs</h5>
              <ul className="space-y-4 text-gray-400 font-bold text-sm">
                <li className="hover:text-white transition cursor-pointer">Kurikulum</li>
                <li className="hover:text-white transition cursor-pointer">AI Playground</li>
                <li className="hover:text-white transition cursor-pointer">Dokumentasi</li>
              </ul>
            </div>
            <div>
              <h5 className="font-black mb-6 text-[#17AEBF] uppercase tracking-widest text-xs">Instansi</h5>
              <p className="text-gray-400 font-bold text-sm mb-2">Institut Teknologi Del</p>
              <p className="text-gray-500 text-[10px] uppercase tracking-wider">Laguboti, Sumatera Utara</p>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-600 text-[10px] font-black uppercase tracking-[0.3em]">
            &copy; {new Date().getFullYear()} Developed by Hizkia & Team IT Del
          </p>
          <div className="flex gap-4">
            <div className="px-3 py-1 rounded-full border border-white/10 flex items-center justify-center bg-white/5 transition-all">
              <span className="text-[9px] font-black text-gray-400 uppercase tracking-widest">UNY Competition 2026</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; // <--- PASTIKAN BARIS INI ADA!