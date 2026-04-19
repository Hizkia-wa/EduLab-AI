import React from 'react';
import { Link } from 'react-router-dom';

const Teori = () => {
  const theoryModules = [
    {
      subject: "Fisika",
      title: "Hukum Newton & Fenomena Alam",
      level: "SMA - Kelas X",
      readTime: "15 Menit",
      icon: "🍏",
      desc: "Menganalisis mengapa benda bergerak dan bagaimana miskonsepsi gaya berat vs massa sering terjadi.",
      color: "border-[#17AEBF]",
      topics: 3
    },
    {
      subject: "Kimia",
      title: "Struktur Atom & Tabel Periodik",
      level: "SMA - Kelas X",
      readTime: "20 Menit",
      icon: "🌌",
      desc: "Menjelaskan perkembangan model atom dan susunan elektron secara visual dan logis.",
      color: "border-emerald-500",
      topics: 5
    },
    {
      subject: "Matematika",
      title: "Logika Matematika & Himpunan",
      level: "SMP - Kelas VII",
      readTime: "12 Menit",
      icon: "🧠",
      desc: "Dasar dari segala perhitungan. Memahami pernyataan, negasi, dan penarikan kesimpulan.",
      color: "border-blue-500",
      topics: 4
    }
  ];

  return (
    <div className="w-full min-h-screen bg-[#fbfcfd] pb-20 font-sans">
      
      {/* --- HEADER TEORI --- */}
      <section className="bg-white border-b border-slate-100 pt-16 pb-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#17AEBF]/10 text-[#17AEBF] text-[10px] font-black uppercase mb-4 tracking-widest">
            📖 Modul Konseptual
          </div>
          <h1 className="text-4xl font-black text-slate-900 mb-4">Pemahaman Teori</h1>
          <p className="text-slate-500 font-medium max-w-2xl leading-relaxed">
            Eksplorasi materi sains tanpa rumus yang rumit. Fokus pada <strong>pemahaman konsep mendalam</strong> untuk membangun pondasi logika sebelum masuk ke perhitungan praktikum.
          </p>
        </div>
      </section>

      {/* --- DAFTAR MODUL TEORI --- */}
      <section className="max-w-7xl mx-auto px-6 mt-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {theoryModules.map((modul, i) => (
            <div key={i} className={`group bg-white border-2 ${modul.color} rounded-[2.5rem] p-8 shadow-[0_20px_50px_rgba(0,0,0,0.05)] hover:shadow-[0_30px_60px_rgba(23,174,191,0.15)] hover:-translate-y-2 transition-all duration-300`}>
              <div className="flex justify-between items-start mb-6">
                <div className="text-5xl group-hover:scale-110 transition-transform">{modul.icon}</div>
                <div className="text-right">
                  <span className="block text-[10px] font-black text-slate-400 uppercase tracking-tighter">{modul.level}</span>
                  <span className="block text-[10px] font-bold text-[#17AEBF]">{modul.topics} Sub-Topik</span>
                </div>
              </div>

              <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">{modul.subject}</h4>
              <h3 className="text-xl font-black text-slate-900 mb-4 group-hover:text-[#17AEBF] transition-colors">{modul.title}</h3>
              
              <p className="text-sm text-slate-500 font-medium leading-relaxed mb-8">
                {modul.desc}
              </p>

              <div className="flex items-center justify-between pt-6 border-t border-slate-50">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-slate-400">⏱️ {modul.readTime}</span>
                </div>
                <button className="text-[#17AEBF] font-black text-sm hover:underline underline-offset-4">
                  Baca Materi →
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- INFO SECTION: LITERASI SAINS --- */}
      <section className="max-w-7xl mx-auto px-6 mt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center bg-slate-50 p-12 rounded-[3rem] border border-slate-100">
          <div>
            <h2 className="text-3xl font-black text-slate-900 mb-6">Meningkatkan Literasi Sains Indonesia</h2>
            <p className="text-slate-600 font-medium leading-relaxed mb-6">
              Berdasarkan skor PISA 2022, kemampuan literasi sains kita masih di angka 366. Melalui modul teori yang interaktif, EduLab AI membantu siswa mengidentifikasi <strong>error logika</strong> dalam memahami fenomena alam sebelum mereka menyentuh angka dan perhitungan.
            </p>
            <div className="inline-flex items-center gap-4 p-4 bg-white rounded-2xl shadow-sm border border-slate-100">
              <div className="w-12 h-12 bg-[#DCFCE7] rounded-xl flex items-center justify-center text-xl">💡</div>
              <p className="text-xs font-bold text-slate-500 italic">"Paham konsep adalah kunci utama untuk menghapus miskonsepsi permanen."</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="p-6 bg-white rounded-3xl shadow-sm border border-slate-100 text-center">
              <div className="text-2xl font-black text-[#17AEBF]">30+</div>
              <div className="text-[10px] font-bold text-slate-400 uppercase mt-1">Artikel Teori</div>
            </div>
            <div className="p-6 bg-white rounded-3xl shadow-sm border border-slate-100 text-center">
              <div className="text-2xl font-black text-emerald-500">Video</div>
              <div className="text-[10px] font-bold text-slate-400 uppercase mt-1">Animasi Logika</div>
            </div>
            <div className="p-6 bg-slate-900 rounded-3xl shadow-lg col-span-2 text-center text-white">
              <div className="text-sm font-black italic">Mendukung Kurikulum Merdeka & Nasional</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Teori;