import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Portfolio from './components/Portfolio';
import PosReview from './components/PosReview';

function App() {
  const [currentView, setCurrentView] = useState('home');

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-dark-bg transition-colors duration-300 font-sans">
      <Navbar />
      
      <main>
        {currentView === 'home' ? (
          <>
            <Hero />
            <About />
            <Portfolio onProjectClick={(id) => {
              if (id === 10) setCurrentView('pos-review');
            }} />
          </>
        ) : (
          <PosReview onBack={() => setCurrentView('home')} />
        )}
      </main>

      <footer className="py-6 text-center text-sm text-gray-500 dark:text-gray-400 border-t border-gray-200 dark:border-gray-800 mt-auto">
        © {new Date().getFullYear()} Mongkhon Wichaiphap. All rights reserved.
      </footer>
    </div>
  );
}

export default App;