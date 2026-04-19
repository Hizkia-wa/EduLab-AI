import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import Layout
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Import Pages
import HomePage from "./pages/Homepage";
import Materi from "./pages/Materi";
import Teori from "./pages/Teori";
import Praktikum from "./pages/Praktikum";
import Challenge from "./pages/Challenge";
import AiErrorGuide from "./pages/AiErrorGuide";
import QuizGenerator from "./pages/QuizGenerator"; // Pastikan file ini sudah dibuat

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-[#f8fafc]">
        {/* Navbar tetap di atas di semua halaman */}
        <Navbar />
        
        {/* Konten utama aplikasi */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/materi" element={<Materi />} />
            <Route path="/teori" element={<Teori />} />
            <Route path="/praktikum" element={<Praktikum />} />
            <Route path="/challenge" element={<Challenge />} />
            <Route path="/ai-mentor" element={<AiErrorGuide />} />
            <Route path="/quiz-generator" element={<QuizGenerator />} />
            
            {/* Navigasi otomatis ke Home jika path tidak dikenal */}
            <Route path="*" element={<HomePage />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;