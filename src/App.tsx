import React from 'react';
import { AppRouter } from './components/Providers/AppRouter/AppRouter';
import { Header } from './components/Logic/Header/Header';
import { Footer } from './components/Logic/Footer/Footer';

export const App: React.FC = () => {
  return (
    <div className="app">
      <Header />
      <main>
        <AppRouter />
      </main>
      <Footer />
    </div>
  );
};
