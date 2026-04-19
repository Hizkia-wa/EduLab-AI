import React from 'react';

const Challenge = () => {
  const challenges = [
    {
      id: 1,
      title: "Kasus: Lift yang Putus Tali",
      subject: "Fisika",
      difficulty: "Hard",
      points: 150,
      icon: "🛗",
      desc: "Sebuah lift jatuh bebas karena tali putus. Mengapa berat badan seseorang di dalamnya terasa nol? Analisis miskonsepsi gaya berat vs gaya normal.",
      tags: ["Dinamika Newton", "Logika Analisis"],
      color: "border-red-500",
      bg: "bg-red-50/30"
    },
    {
      id: 2,
      title: "Kasus: pH Danau Kawah",
      subject: "Kimia",
      difficulty: "Medium",
      points: 100,
      icon: "🌋",
      desc: "Menghitung konsentrasi zat pada danau kawah dengan mempertimbangkan pencemaran belerang. Menguji pemahaman pereaksi pembatas dalam skala industri.",
      tags: ["Stoikiometri", "Studi Lingkungan"],
      color: "border-emerald-500",
      bg: "bg-emerald-50/30"
    },
    {
      id: 3,
      title: "Kasus: Optimasi Rute Logistik",
      subject: "Matematika",
      difficulty: "Medium",
      points: 120,
      icon: "🚚",
      desc: "Menggunakan pemodelan aljabar untuk menentukan rute pengiriman paling efisien dengan variabel kemacetan dan bahan bakar.",
      tags: ["Aljabar", "Model Matematika"],
      color: "border-blue-500",
      bg: "bg-blue-50/30"
    }
  ];

  return (
    <div className="w-full min-h-screen bg-[#fbfcfd] pb-20 font-sans">
      
      {/* --- HEADER CHALLENGE --- */}
      <section className="bg-slate-900 pt-20 pb-16 px-6 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#17AEBF]/20 rounded-full blur-[120px]"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/20 border border-red-500/30 text-red-400 text-[10px] font-black uppercase mb-6 tracking-widest">
            🔥 Mode Tantangan
          </div>
          <h1 className="text-4xl md:text-5xl font-black mb-6 tracking-tight">Challenge: Studi Kasus Sains</h1>
          <p className="text-slate-400 font-medium max-w-2xl leading-relaxed">
            Hadapi soal-soal tingkat tinggi (HOTS) yang diintegrasikan dengan fenomena dunia nyata. AI kami akan menguji apakah logikamu tahan terhadap skenario yang kompleks.
          </p>
        </div>
      </section>

      {/* --- STATS BAR --- */}
      <section className="max-w-7xl mx-auto px-6 -mt-10 relative z-20">
        <div className="bg-white p-6 rounded-[2rem] shadow-xl border border-slate-100 grid md:grid-cols-3 gap-6">
          <div className="flex items-center gap-4 px-6 border-r border-slate-100">
            <div className="text-3xl font-black text-[#17AEBF]">#12</div>
            <div className="text-[10px] font-bold text-slate-400 uppercase">Peringkat Global</div>
          </div>
          <div className="flex items-center gap-4 px-6 border-r border-slate-100">
            <div className="text-3xl font-black text-emerald-500">2,450</div>
            <div className="text-[10px] font-bold text-slate-400 uppercase">Total EduPoints</div>
          </div>
          <div className="flex items-center gap-4 px-6">
            <div className="text-3xl font-black text-red-500">3</div>
            <div className="text-[10px] font-bold text-slate-400 uppercase">Tantangan Aktif</div>
          </div>
        </div>
      </section>

      {/* --- LIST CHALLENGE --- */}
      <section className="max-w-7xl mx-auto px-6 mt-16">
        <div className="space-y-6">
          {challenges.map((item) => (
            <div key={item.id} className={`group bg-white border-2 ${item.color} rounded-[2.5rem] p-8 shadow-[0_15px_40px_rgba(0,0,0,0.04)] hover:shadow-[0_25px_60px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all flex flex-col md:flex-row items-center gap-8`}>
              <div className={`w-24 h-24 ${item.bg} rounded-[2rem] flex items-center justify-center text-4xl shadow-inner shrink-0`}>
                {item.icon}
              </div>
              
              <div className="flex-grow">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{item.subject}</span>
                  <span className={`text-[10px] font-black px-2 py-0.5 rounded-md ${item.id === 1 ? 'bg-red-100 text-red-600' : 'bg-slate-100 text-slate-600'}`}>
                    {item.difficulty}
                  </span>
                </div>
                <h3 className="text-2xl font-black text-slate-900 mb-3 tracking-tight group-hover:text-[#17AEBF] transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-500 font-medium leading-relaxed max-w-3xl">
                  {item.desc}
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {item.tags.map((tag, idx) => (
                    <span key={idx} className="text-[10px] font-bold text-slate-400 italic">#{tag}</span>
                  ))}
                </div>
              </div>

              <div className="shrink-0 text-center md:border-l border-slate-100 md:pl-8">
                <div className="text-2xl font-black text-slate-900">+{item.points}</div>
                <div className="text-[10px] font-bold text-slate-400 uppercase mb-4">EduPoints</div>
                <button className={`px-8 py-3 rounded-xl font-black text-xs text-white transition-all shadow-lg active:scale-95 ${item.id === 1 ? 'bg-red-500 shadow-red-100' : 'bg-slate-900 shadow-slate-200'}`}>
                  Terima Tantangan
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- INFO BOX: AI ANALYSIS --- */}
      <section className="max-w-7xl mx-auto px-6 mt-16">
        <div className="bg-[#DCFCE7]/40 border-2 border-[#17AEBF]/20 rounded-[2.5rem] p-10 flex flex-col md:flex-row items-center gap-8">
          <div className="text-4xl">🔬</div>
          <div>
            <h4 className="text-xl font-black mb-2 text-slate-800">Analisis Studi Kasus dengan AI Engine</h4>
            <p className="text-slate-600 text-sm font-medium leading-relaxed italic">
              "Berbeda dengan soal rutin, studi kasus seringkali memancing pola miskonsepsi 'intuisi palsu'. Engine kami akan membedah apakah jawabanmu didasarkan pada pemahaman sains yang benar atau hanya sekadar perkiraan intuitif."
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Challenge;