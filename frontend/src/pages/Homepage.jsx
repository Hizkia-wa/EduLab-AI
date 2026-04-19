import React from 'react';
import { Link } from 'react-router-dom';

const Homepage = () => {
  return (
    <div className="w-full bg-[#f8fafc] text-slate-900 font-sans selection:bg-[#17AEBF]/20">
      
      {/* --- HERO SECTION: Alasan Lahirnya EduLab AI --- */}
      <section className="relative pt-24 pb-20 px-6 overflow-hidden bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#17AEBF]/10 border border-[#17AEBF]/20 text-[#17AEBF] text-xs font-bold mb-6">
              REVOLUSI PENDIDIKAN SAINS 2026
            </div>
            <h1 className="text-4xl md:text-6xl font-black leading-[1.1] mb-6 tracking-tight">
              Lahir dari Krisis <br/>
              <span className="text-[#17AEBF]">Logika Sains</span> Indonesia.
            </h1>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed font-medium">
              Data PISA 2022 menunjukkan literasi sains kita (366) jauh di bawah rata-rata global. EduLab AI lahir bukan hanya sebagai platform, tapi sebagai jawaban atas kegagalan sistem hafalan rumus yang membunuh daya kritis siswa.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/materi" className="px-8 py-4 bg-[#17AEBF] text-white rounded-2xl font-black text-lg shadow-xl shadow-cyan-100 hover:scale-105 transition-all">
                Mulai Diagnosis Gratis
              </Link>
              <div className="flex items-center gap-3 px-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl text-sm font-bold text-slate-500">
                <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
                LIVE: AI Misconception Engine v1.0
              </div>
            </div>
          </div>
          <div className="relative lg:block hidden">
            <div className="bg-slate-900 p-8 rounded-[2.5rem] shadow-2xl border-8 border-white animate-float">
               <div className="space-y-4">
                  <div className="h-2 w-20 bg-[#17AEBF] rounded"></div>
                  <h4 className="text-white font-bold text-xl tracking-tight">"Kenapa saya salah hitung?"</h4>
                  <div className="p-4 bg-white/5 rounded-xl border border-white/10 text-white/60 text-sm italic">
                    AI Detection: Kamu tidak salah hitung, kamu mengalami miskonsepsi pada konsep 'Gaya Normal' di bidang miring.
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION: KENAPA TERJADI MISKONSEPSI? (Informasi Berbobot) --- */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-1">
            <h2 className="text-3xl font-black mb-6 italic underline decoration-[#DCFCE7] decoration-8 underline-offset-4">
              Kenapa Terjadi Miskonsepsi?
            </h2>
            <p className="text-slate-500 font-medium leading-relaxed">
              Menurut <strong>Suparno (2013)</strong>, lebih dari 50% siswa terjebak dalam pemahaman keliru yang persisten. Ini adalah akar masalahnya:
            </p>
          </div>
          <div className="lg:col-span-2 grid md:grid-cols-2 gap-6">
            <div className="p-8 bg-white border-2 border-slate-100 rounded-3xl shadow-[0_15px_30px_-10px_rgba(0,0,0,0.05)]">
              <div className="text-3xl mb-4">🧩</div>
              <h4 className="font-black text-xl mb-3">Hafalan Prosedural</h4>
              <p className="text-sm text-slate-500 font-medium">Siswa mampu mengerjakan soal jika sama persis dengan contoh, tapi gagal saat logika soal diputar karena tidak paham konsep dasarnya.</p>
            </div>
            <div className="p-8 bg-white border-2 border-slate-100 rounded-3xl shadow-[0_15px_30px_-10px_rgba(0,0,0,0.05)]">
              <div className="text-3xl mb-4">🗣️</div>
              <h4 className="font-black text-xl mb-3">Keterbatasan Interaksi</h4>
              <p className="text-sm text-slate-500 font-medium">Dalam satu kelas, guru sulit mengidentifikasi 'error logika' setiap individu. Kesalahan yang sama pun terus berulang.</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION: LEBIH DARI SEKADAR PLATFORM --- */}
      <section className="py-24 bg-slate-900 text-white px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-black mb-8">Lebih dari Sekadar Platform Belajar.</h2>
          <p className="text-xl text-white/70 mb-12 font-medium leading-relaxed">
            EduLab AI bukan sekadar kumpulan video atau bank soal. Kami adalah **Tutor Digital Personal** yang bertindak sebagai "Laboratorium Logika" bagi setiap siswa.
          </p>
          <div className="grid md:grid-cols-3 gap-8 text-left">
            <div className="border-l-2 border-[#17AEBF] pl-6 py-2">
              <h5 className="font-black text-[#17AEBF] text-lg mb-2 underline">Analisis Real-Time</h5>
              <p className="text-sm text-white/50">Mendeteksi miskonsepsi detik itu juga saat kamu menginput jawaban.</p>
            </div>
            <div className="border-l-2 border-[#17AEBF] pl-6 py-2">
              <h5 className="font-black text-[#17AEBF] text-lg mb-2 underline">Bukan Kunci Jawaban</h5>
              <p className="text-sm text-white/50">Kami memberikan alur berpikir (step-by-step), bukan sekadar angka hasil akhir.</p>
            </div>
            <div className="border-l-2 border-[#17AEBF] pl-6 py-2">
              <h5 className="font-black text-[#17AEBF] text-lg mb-2 underline">Adaptabilitas Tinggi</h5>
              <p className="text-sm text-white/50">Sistem menyesuaikan kesulitan soal berdasarkan titik kelemahanmu.</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION: TUJUAN & MANFAAT (CARD TERLIHAT TEGAS) --- */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black mb-4">Tujuan & Manfaat Utama</h2>
          <div className="h-1 w-20 bg-[#17AEBF] mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { t: "Kurangi Miskonsepsi", d: "Menghilangkan pemahaman keliru yang sering terjadi di Fisika, Kimia, dan Matematika.", i: "📉" },
            { t: "Umpan Balik Langsung", d: "Penjelasan konseptual instan tanpa perlu menunggu waktu pertemuan kelas berikutnya.", i: "⚡" },
            { t: "Diagnosis Belajar", d: "Mengetahui dengan pasti bagian mana dari otakmu yang belum 'nyambung' dengan materi.", i: "📋" },
            { t: "Belajar Mandiri", d: "Mendorong siswa SMP/SMA untuk mengeksplorasi sains secara mandiri berbasis teknologi.", i: "🚀" },
            { t: "Jembatan Pengetahuan", d: "Menghubungkan teori buku yang kaku dengan aplikasi penyelesaian soal yang logis.", i: "🌉" },
            { t: "Akurasi Tinggi", d: "Engine validasi yang dirancang khusus untuk mendeteksi error pola pikir manusia.", i: "🔬" }
          ].map((item, i) => (
            <div 
              key={i} 
              className="group p-8 bg-white border border-slate-200 rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.05)] hover:shadow-[0_30px_60px_rgba(23,174,191,0.1)] hover:-translate-y-2 transition-all duration-300 border-b-4 border-b-[#17AEBF]/10 hover:border-b-[#17AEBF]"
            >
              <div className="text-4xl mb-6">{item.i}</div>
              <h4 className="text-xl font-black mb-3 text-slate-800 tracking-tight">{item.t}</h4>
              <p className="text-sm text-slate-500 leading-relaxed font-medium">{item.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* --- TIM & INSTANSI --- */}
      <footer className="py-20 bg-white border-t border-slate-100 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-left">
            <h4 className="font-black text-2xl text-[#17AEBF]">EduLab AI</h4>
            <p className="text-slate-400 font-bold text-sm tracking-widest">INSTITUT TEKNOLOGI DEL • 2026</p>
          </div>
          <div className="flex flex-wrap justify-center gap-8 text-sm font-bold text-slate-500 uppercase">
             <span>Hizkia Cristian</span>
             <span>Novisana Ribka</span>
             <span>Intan Sonia</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Homepage;