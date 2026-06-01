import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About'; // <-- นำเข้า About
import Portfolio from './components/Portfolio';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-dark-bg transition-colors duration-300 font-sans">
      <Navbar />
      
      <main>
        <Hero />
        <About /> {/* <-- แทรก About ตรงนี้ */}
        <Portfolio />
      </main>

      {/* Footer เล็กๆ ปิดท้าย */}
      <footer className="py-6 text-center text-sm text-gray-500 dark:text-gray-400 border-t border-gray-200 dark:border-gray-800">
        © {new Date().getFullYear()} Mongkhon Wichaiphap. All rights reserved.
      </footer>
    </div>
  );
}

export default App;