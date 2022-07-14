import React from 'react';
import { AppRouter } from './components/Logic/AppRouter';
import './assets/sass/main.sass'
import { Header } from './components/Logic/Header/Header';

export const App: React.FC = () => {

  return (
    <div className="main">
      <Header />
      <AppRouter />
    </div>
  )
}
