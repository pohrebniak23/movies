import React from "react";
import { AppRouter } from "./components/AppRouter/AppRouter";
import "./assets/sass/main.sass";
import { Header } from "./components/Logic/Header/Header";
import { Footer } from "./components/Logic/Footer/Footer";

export const App: React.FC = () => {
  return (
    <div className="main">
      <Header />
      <AppRouter />
      <Footer />
    </div>
  );
};
