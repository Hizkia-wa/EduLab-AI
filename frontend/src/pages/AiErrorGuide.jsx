import React, { useState } from 'react';

const AiErrorGuide = () => {
  const [query, setQuery] = useState('');

  return (
    <div className="w-full min-h-screen bg-[#f8fafc] font-sans">
      
      {/* --- HEADER --- */}
      <section className="pt-16 pb-12 px-6 bg-white border-b border-slate-100">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-8">
          <div className="w-20 h-20 bg-slate-900 rounded-[2rem] flex items-center justify-center text-3xl shadow-2xl animate-pulse">
            🤖
          </div>
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 border border-amber-200 text-amber-700 text-[10px] font-black uppercase mb-3">
              ⚠️ Warning: Intentional Error Mode
            </div>
            <h1 className="text-4xl font-black text-slate-900 tracking-tight">AI Error Guide</h1>
            <p className="text-slate-500 font-medium mt-2">
              Tanyakan soalmu, dan AI akan memberikan jawaban. **Tapi hati-hati**, AI ini mungkin memasukkan miskonsepsi sengaja. Bisakah kamu menemukannya?
            </p>
          </div>
        </div>
      </section>

      {/* --- CHAT INTERFACE --- */}
      <section className="max-w-5xl mx-auto px-6 py-12">
        <div className="bg-white border-2 border-slate-100 rounded-[3rem] shadow-[0_30px_100px_-20px_rgba(0,0,0,0.08)] overflow-hidden">
          
          {/* Box Jawaban AI (Contoh Tampilan) */}
          <div className="p-10 border-b border-slate-50 bg-slate-50/30">
            <div className="flex gap-4 mb-6">
              <div className="w-8 h-8 rounded-full bg-[#17AEBF] flex items-center justify-center text-[10px] font-bold text-white shadow-lg">AI</div>
              <div className="bg-white border border-slate-200 p-6 rounded-3xl rounded-tl-none shadow-sm max-w-2xl">
                <p className="text-sm text-slate-600 leading-relaxed font-medium">
                  "Berdasarkan soal Fisika yang kamu berikan tentang benda di atas meja, jawabannya adalah **Gaya Normal selalu sama dengan Gaya Berat (W)** karena mereka adalah pasangan aksi-reaksi."
                </p>
              </div>
            </div>

            {/* ERROR ALERT BOX */}
            <div className="ml-12 p-6 bg-red-50 border-2 border-red-100 rounded-[2rem] border-dashed">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-xl">🚨</span>
                <h5 className="font-black text-red-600 text-sm uppercase tracking-widest">Error Terdeteksi!</h5>
              </div>
              <p className="text-xs text-red-500 font-bold leading-relaxed">
                Tunggu! AI di atas baru saja melakukan miskonsepsi fatal. Gaya Normal dan Gaya Berat **BUKAN** pasangan aksi-reaksi karena bekerja pada benda yang sama. Coba perbaiki pernyataan di atas!
              </p>
            </div>
          </div>

          {/* Input Area */}
          <div className="p-8 bg-white">
            <div className="relative">
              <textarea 
                placeholder="Tempelkan soal hitungan atau teori di sini..."
                className="w-full p-6 bg-slate-50 border-2 border-slate-100 rounded-[2rem] focus:border-[#17AEBF] focus:outline-none transition-all font-medium text-slate-700 min-h-[150px] resize-none"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
              <button className="absolute bottom-4 right-4 bg-slate-900 text-white px-8 py-3 rounded-2xl font-black text-sm hover:scale-105 active:scale-95 transition-all shadow-xl">
                Tanya AI & Analisis Error →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* --- MANFAAT FITUR INI --- */}
      <section className="max-w-5xl mx-auto px-6 mb-20 grid md:grid-cols-2 gap-6">
        <div className="p-8 bg-[#17AEBF]/5 border border-[#17AEBF]/20 rounded-[2.5rem]">
          <h4 className="font-black text-slate-900 mb-3">Kenapa AI-nya sengaja salah?</h4>
          <p className="text-sm text-slate-500 font-medium leading-relaxed">
            Metode ini disebut **Reflective Learning**. Dengan mengoreksi kesalahan AI, otakmu akan membangun pemahaman konsep yang jauh lebih kuat dibandingkan hanya menyalin jawaban benar.
          </p>
        </div>
        <div className="p-8 bg-emerald-50 border border-emerald-100 rounded-[2.5rem]">
          <h4 className="font-black text-slate-900 mb-3">Misi: Hapus Miskonsepsi</h4>
          <p className="text-sm text-slate-500 font-medium leading-relaxed">
            Fitur ini dirancang khusus untuk mengatasi masalah literasi sains (PISA) dengan melatih siswa bersikap kritis terhadap informasi yang mereka terima.
          </p>
        </div>
      </section>
    </div>
  );
};

export default AiErrorGuide;