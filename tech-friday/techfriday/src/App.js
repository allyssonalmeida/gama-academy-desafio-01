import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./sections/Home";
import SaibaMais from "./sections/SaibaMais";
import Newsletter from "./sections/Newsletter";
import "./App.css";

const App = () => {
  return (
    <main className="App">
      <Header />
      <Home />
      <SaibaMais />
      <Newsletter />
      <Footer />
    </main>
  );
}

export default App;
