import React, { useState } from 'react';

const QuizGenerator = () => {
  const [isUploading, setIsUploading] = useState(false);

  return (
    <div className="w-full min-h-screen bg-[#f8fafc] font-sans pb-20">
      
      {/* --- HEADER --- */}
      <section className="pt-16 pb-12 px-6 bg-white border-b border-slate-100">
        <div className="max-w-6xl mx-auto flex items-center gap-6">
          <div className="w-16 h-16 bg-[#17AEBF] rounded-2xl flex items-center justify-center text-3xl shadow-lg shadow-cyan-100">
            📓
          </div>
          <div>
            <h1 className="text-3xl font-black text-slate-900 tracking-tight">AI Quiz Generator</h1>
            <p className="text-slate-500 font-medium">Ubah dokumen materimu menjadi kuis interaktif berbasis deteksi miskonsepsi.</p>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 mt-12 grid lg:grid-cols-5 gap-8">
        
        {/* --- LEFT SIDE: UPLOAD WORKSPACE (NotebookLM Style) --- */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white border-2 border-slate-100 rounded-[2.5rem] p-8 shadow-[0_20px_50px_rgba(0,0,0,0.03)]">
            <h4 className="font-black text-slate-900 mb-4 flex items-center gap-2">
              <span className="text-[#17AEBF]">01.</span> Sumber Materi
            </h4>
            
            {/* Upload Box */}
            <div className="border-2 border-dashed border-slate-200 rounded-3xl p-10 text-center hover:border-[#17AEBF] transition-colors cursor-pointer bg-slate-50/50 group">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">📄</div>
              <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">Klik untuk unggah PDF / Teks</p>
              <p className="text-[10px] text-slate-400 mt-2">Maksimal 10MB (Materi Fisika, Kimia, Matematika)</p>
            </div>

            <div className="mt-8 space-y-3">
               <p className="text-xs font-black text-slate-400 uppercase">Dokumen Tersemat:</p>
               <div className="p-3 bg-white border border-slate-100 rounded-xl flex items-center justify-between shadow-sm">
                  <span className="text-xs font-bold text-slate-700 truncate">Materi_Hukum_Newton_X.pdf</span>
                  <span className="text-[9px] font-black text-emerald-500 bg-emerald-50 px-2 py-1 rounded-md">TERANALISIS</span>
               </div>
            </div>
          </div>

          <div className="bg-slate-900 rounded-[2.5rem] p-8 text-white shadow-2xl relative overflow-hidden">
            <div className="absolute -right-10 -bottom-10 w-32 h-32 bg-[#17AEBF]/20 rounded-full blur-3xl"></div>
            <h4 className="font-black mb-4 flex items-center gap-2 text-[#17AEBF]">
              Konfigurasi AI
            </h4>
            <div className="space-y-4">
               <div>
                  <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Tingkat Kesulitan</label>
                  <select className="w-full mt-2 bg-white/5 border border-white/10 rounded-xl p-3 text-sm font-bold focus:outline-none focus:border-[#17AEBF]">
                    <option>Adaptif (Sesuai Kemampuan)</option>
                    <option>HOTS (High Order Thinking)</option>
                    <option>Dasar Konseptual</option>
                  </select>
               </div>
               <button className="w-full py-4 bg-[#17AEBF] text-white rounded-2xl font-black text-sm shadow-xl shadow-cyan-900/20 hover:scale-105 active:scale-95 transition-all">
                  Generate Kuis Sekarang →
               </button>
            </div>
          </div>
        </div>

        {/* --- RIGHT SIDE: QUIZ PREVIEW AREA --- */}
        <div className="lg:col-span-3">
          <div className="bg-white border-2 border-slate-100 rounded-[3rem] p-10 min-h-[600px] shadow-[0_30px_100px_-20px_rgba(0,0,0,0.05)] relative">
            <div className="flex justify-between items-center mb-10 border-b border-slate-50 pb-6">
               <h3 className="font-black text-xl text-slate-900">Quiz Preview</h3>
               <span className="text-xs font-bold text-[#17AEBF] animate-pulse">● AI sedang menyusun soal...</span>
            </div>

            {/* Contoh Tampilan Soal yang Di-generate */}
            <div className="space-y-8">
              <div className="p-6 bg-slate-50 rounded-[2rem] border border-slate-100 relative">
                <span className="absolute -top-3 left-6 px-4 py-1 bg-white border border-slate-100 rounded-full text-[10px] font-black text-[#17AEBF]">SOAL 1 - FISIKA</span>
                <p className="font-bold text-slate-700 leading-relaxed mb-6">
                  "Jika sebuah buku diam di atas meja, manakah pernyataan yang BENAR mengenai pasangan aksi-reaksi sesuai Hukum III Newton?"
                </p>
                <div className="grid gap-3">
                  {['Gaya Berat dan Gaya Normal', 'Gaya tekan buku ke meja dan gaya tekan meja ke buku', 'Gaya gravitasi bumi pada buku saja'].map((opt, idx) => (
                    <button key={idx} className="w-full text-left p-4 bg-white border border-slate-200 rounded-2xl text-xs font-bold text-slate-500 hover:border-[#17AEBF] hover:text-[#17AEBF] transition-all">
                      {opt}
                    </button>
                  ))}
                </div>
              </div>

              {/* Box Miskonsepsi dari NotebookLM AI */}
              <div className="p-6 bg-amber-50/50 border-2 border-dashed border-amber-200 rounded-[2rem]">
                 <div className="flex items-center gap-3 mb-3">
                    <span className="text-xl">💡</span>
                    <h5 className="font-black text-amber-700 text-xs uppercase tracking-widest">Insight Miskonsepsi</h5>
                 </div>
                 <p className="text-[11px] text-amber-600 font-bold leading-relaxed">
                   AI menemukan bahwa dalam dokumenmu, konsep "Gaya Normal" sering dianggap sebagai lawan langsung dari "Gaya Gravitasi". Soal ini dirancang khusus untuk menguji apakah kamu memahami bahwa aksi-reaksi harus bekerja pada dua benda yang berbeda.
                 </p>
              </div>
            </div>
          </div>
        </div>

      </section>
    </div>
  );
};

export default QuizGenerator;