import React from 'react';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Footer from './components/Footer';
import QRCode from './components/QRCode';

function App() {
  return (
    <div className="App">
      <div className="main-content">
        <Header />
        <About />
        <Skills />
        <Experience />
        <Projects />
      </div>
      <Footer />
      <QRCode />
    </div>
  );
}

export default App; 