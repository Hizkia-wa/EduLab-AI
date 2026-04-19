import React from 'react';
import { Link } from 'react-router-dom';

const Praktikum = () => {
  const practiceSets = [
    {
      subject: "Fisika",
      title: "Dinamika Gerak & Gaya Normal",
      difficulty: "Menengah",
      questions: 10,
      time: "30 Menit",
      icon: "🎢",
      desc: "Uji pemahamanmu tentang gaya pada bidang miring. Hati-hati dengan arah vektor!",
      color: "border-[#17AEBF]",
      tag: "Top Misconception Area"
    },
    {
      subject: "Kimia",
      title: "Stoikiometri & Mol",
      difficulty: "Dasar",
      questions: 8,
      time: "25 Menit",
      icon: "⚗️",
      desc: "Hitung jumlah molekul dan massa zat. Fokus pada konsep pereaksi pembatas.",
      color: "border-emerald-500",
      tag: "Konseptual"
    },
    {
      subject: "Matematika",
      title: "Trigonometri Lanjut",
      difficulty: "Tinggi",
      questions: 12,
      time: "40 Menit",
      icon: "📐",
      desc: "Bukan sekadar sin/cos/tan, tapi bagaimana menerapkannya dalam masalah nyata.",
      color: "border-blue-500",
      tag: "Logika Analitik"
    }
  ];

  return (
    <div className="w-full min-h-screen bg-[#fbfcfd] pb-20">
      {/* --- HEADER PRAKTIKUM --- */}
      <section className="bg-white border-b border-slate-100 pt-16 pb-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-end gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#DCFCE7] text-[#17AEBF] text-[10px] font-black uppercase mb-4">
              🧪 Laboratorium Logika
            </div>
            <h1 className="text-4xl font-black text-slate-900 mb-2">Latihan Praktikum</h1>
            <p className="text-slate-500 font-medium">Uji kemampuan hitunganmu dan biarkan AI mendeteksi letak kesalahan logikamu.</p>
          </div>
          <div className="flex gap-4 bg-slate-50 p-2 rounded-2xl border border-slate-100">
            <div className="px-4 py-2 text-center">
              <div className="text-xl font-black text-slate-900">12</div>
              <div className="text-[10px] text-slate-400 font-bold uppercase">Soal Selesai</div>
            </div>
            <div className="px-4 py-2 text-center border-l border-slate-200">
              <div className="text-xl font-black text-[#17AEBF]">85%</div>
              <div className="text-[10px] text-slate-400 font-bold uppercase">Avg Accuracy</div>
            </div>
          </div>
        </div>
      </section>

      {/* --- FILTER & SEARCH --- */}
      <section className="max-w-7xl mx-auto px-6 py-10">
        <div className="flex flex-wrap gap-4 mb-10">
          {['Semua', 'Fisika', 'Kimia', 'Matematika'].map((f) => (
            <button key={f} className="px-6 py-2.5 rounded-xl bg-white border border-slate-200 text-sm font-bold text-slate-600 hover:border-[#17AEBF] hover:text-[#17AEBF] transition-all shadow-sm">
              {f}
            </button>
          ))}
        </div>

        {/* --- GRID SOAL --- */}
        <div className="grid lg:grid-cols-3 gap-8">
          {practiceSets.map((set, i) => (
            <div key={i} className={`bg-white border-2 ${set.color} rounded-[2.5rem] p-8 shadow-[0_15px_40px_rgba(0,0,0,0.04)] hover:shadow-[0_25px_50px_rgba(23,174,191,0.1)] transition-all group`}>
              <div className="flex justify-between items-start mb-6">
                <div className="text-4xl">{set.icon}</div>
                <span className="text-[10px] font-black px-3 py-1 bg-slate-900 text-white rounded-lg uppercase tracking-widest">{set.difficulty}</span>
              </div>

              <div className="mb-6">
                <h4 className="text-[10px] font-black text-[#17AEBF] uppercase tracking-widest mb-1">{set.subject}</h4>
                <h3 className="text-xl font-black text-slate-900 group-hover:text-[#17AEBF] transition-colors">{set.title}</h3>
              </div>

              <p className="text-sm text-slate-500 font-medium mb-8 leading-relaxed italic">
                "{set.desc}"
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                  <div className="text-[10px] text-slate-400 font-bold uppercase">Jumlah Soal</div>
                  <div className="font-black text-slate-700">{set.questions} Soal</div>
                </div>
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                  <div className="text-[10px] text-slate-400 font-bold uppercase">Estimasi</div>
                  <div className="font-black text-slate-700">{set.time}</div>
                </div>
              </div>

              <button className="w-full py-4 bg-white border-2 border-slate-100 text-slate-900 rounded-2xl font-black text-sm hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-all shadow-sm flex items-center justify-center gap-2">
                Mulai Praktikum 🚀
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* --- FOOTER INFO: BUKAN SEKADAR HITUNGAN --- */}
      <section className="max-w-7xl mx-auto px-6 mb-20">
        <div className="p-8 bg-white border border-slate-200 rounded-[2rem] flex flex-col md:flex-row items-center gap-8 shadow-sm">
          <div className="w-20 h-20 bg-[#DCFCE7] rounded-2xl flex items-center justify-center text-3xl shadow-inner">💡</div>
          <div>
            <h4 className="text-xl font-black mb-2">Sistem Validasi Interaktif</h4>
            <p className="text-slate-500 text-sm font-medium leading-relaxed">
              Setiap angka yang kamu masukkan akan dianalisis oleh **EduLab AI Engine**. Jika jawabanmu salah karena miskonsepsi (bukan sekadar salah hitung), sistem akan langsung memberikan peringatan dan penjelasan logis detik itu juga.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Praktikum;