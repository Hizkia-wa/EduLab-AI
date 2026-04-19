import React from 'react';
import { Link } from 'react-router-dom';

const Materi = () => {
  const subjects = [
    {
      id: 'matematika',
      name: 'Matematika',
      icon: '📐',
      description: 'Analisis logika angka dan ruang untuk mengasah kemampuan problem solving.',
      topics: ['Aljabar', 'Geometri', 'Trigonometri', 'Statistika'],
      color: 'border-blue-500',
      bg: 'bg-blue-50/50'
    },
    {
      id: 'fisika',
      name: 'Fisika',
      icon: '⚛️',
      description: 'Pahami hukum alam, gaya, dan energi tanpa sekadar menghafal rumus.',
      topics: ['Mekanika', 'Termodinamika', 'Optik', 'Listrik & Magnet'],
      color: 'border-[#17AEBF]',
      bg: 'bg-cyan-50/50'
    },
    {
      id: 'kimia',
      name: 'Kimia',
      icon: '🧪',
      description: 'Eksplorasi struktur materi dan reaksi kimia dengan pemahaman konseptual.',
      topics: ['Stoikiometri', 'Ikatan Kimia', 'Asam Basa', 'Termokimia'],
      color: 'border-emerald-500',
      bg: 'bg-emerald-50/50'
    }
  ];

  return (
    <div className="w-full min-h-screen bg-[#f8fafc] font-sans pb-20">
      {/* --- HEADER MATERI --- */}
      <section className="bg-white border-b border-slate-200 pt-16 pb-12 px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-black text-slate-900 mb-4">Pilih Mata Pelajaran</h1>
          <p className="text-slate-500 font-medium max-w-2xl leading-relaxed">
            EduLab AI menyediakan materi terkurikulum untuk SMP & SMA yang dirancang khusus untuk mendeteksi potensi miskonsepsi pada setiap topik dasar.
          </p>
        </div>
      </section>

      {/* --- GRID MATA PELAJARAN --- */}
      <section className="max-w-7xl mx-auto px-6 mt-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {subjects.map((sub) => (
            <div 
              key={sub.id} 
              className={`group bg-white border-2 ${sub.color} rounded-[2.5rem] p-8 shadow-[0_20px_50px_rgba(0,0,0,0.05)] hover:shadow-[0_30px_60px_rgba(23,174,191,0.15)] hover:-translate-y-2 transition-all duration-300`}
            >
              <div className="flex justify-between items-start mb-6">
                <div className="text-5xl">{sub.icon}</div>
                <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 bg-slate-50 px-3 py-1 rounded-full border border-slate-100">
                  3-4 Topik Ready
                </span>
              </div>
              
              <h3 className="text-2xl font-black text-slate-900 mb-3">{sub.name}</h3>
              <p className="text-sm text-slate-500 font-medium leading-relaxed mb-8">
                {sub.description}
              </p>

              <div className="space-y-3 mb-10">
                <p className="text-xs font-black text-slate-400 uppercase tracking-tighter">Topik Utama:</p>
                <div className="flex flex-wrap gap-2">
                  {sub.topics.map((topic, idx) => (
                    <span key={idx} className={`text-[11px] font-bold px-3 py-1.5 rounded-lg ${sub.bg} text-slate-700 border border-slate-100`}>
                      {topic}
                    </span>
                  ))}
                </div>
              </div>

              <Link 
                to={`/materi/${sub.id}`} 
                className={`block text-center py-4 rounded-2xl font-black text-sm transition-all shadow-md active:scale-95
                  ${sub.id === 'fisika' ? 'bg-[#17AEBF] text-white shadow-cyan-100' : 'bg-slate-900 text-white shadow-slate-200'}`}
              >
                Mulai Belajar {sub.name}
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* --- INFO BOX: MISKONSEPSI --- */}
      <section className="max-w-7xl mx-auto px-6 mt-20">
        <div className="bg-slate-900 rounded-[3rem] p-10 md:p-16 text-white relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#17AEBF]/20 rounded-full blur-[100px]"></div>
          <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-black mb-6">Analisis Cerdas di Setiap Klik.</h2>
              <p className="text-white/60 font-medium leading-relaxed mb-6">
                Sistem kami tidak hanya memeriksa jawaban benar atau salah. Di balik layar, AI akan membandingkan pola jawabanmu dengan ribuan data miskonsepsi sains.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <span className="w-5 h-5 bg-[#17AEBF] rounded-full flex items-center justify-center text-[10px]">✓</span>
                  <span className="text-sm font-bold italic">Mendeteksi error logika pada pengerjaan soal.</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-5 h-5 bg-[#17AEBF] rounded-full flex items-center justify-center text-[10px]">✓</span>
                  <span className="text-sm font-bold italic">Memberikan rekomendasi materi adaptif.</span>
                </li>
              </ul>
            </div>
            <div className="bg-white/5 border border-white/10 p-8 rounded-[2rem] backdrop-blur-sm">
               <div className="text-[#17AEBF] text-xs font-black mb-2 uppercase tracking-widest">Live Insight</div>
               <p className="text-xl font-bold leading-snug italic text-white/90">
                 "Pemahaman konsep dasar fisika yang kuat mengurangi risiko kesalahan berulang hingga 70%."
               </p>
               <div className="mt-6 h-1 w-full bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full w-2/3 bg-[#17AEBF] rounded-full animate-pulse"></div>
               </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Materi;