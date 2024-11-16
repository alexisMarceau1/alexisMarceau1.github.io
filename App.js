import React, { useState } from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';

const App = () => {
  const [language, setLanguage] = useState('EN'); // Par défaut en anglais

  return (
    <div>
      <Header language={language} setLanguage={setLanguage} />
      <Home language={language} />
      <Projects language={language} />
      <About language={language} />
      <Contact language={language} />
    </div>
  );
};

export default App;
