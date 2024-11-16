import React from 'react';

const Header = ({ language, setLanguage }) => {
  // Textes pour les deux langues
  const texts = {
    FR: {
      home: "Accueil",
      projects: "Projets",
      about: "À propos",
      contact: "Contact",
      switchTo: "EN",
    },
    EN: {
      home: "Home",
      projects: "Projects",
      about: "About",
      contact: "Contact",
      switchTo: "FR",
    },
  };

  return (
    <header
      className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-[#2D3142]/90 via-[#1B1E25]/80 to-[#2D3142]/90 backdrop-blur-lg text-white p-4 shadow-lg transition duration-300 ease-in-out"
    >
      <nav className="container mx-auto flex justify-between items-center">
        {/* Nom/logo */}
        <h1 className="text-lg font-extrabold tracking-wide hover:text-gray-300 transition duration-300">
          Alexis Marceau
        </h1>

        {/* Navigation */}
        <div className="flex items-center space-x-4">
          <ul className="flex space-x-3">
            <li>
              <a
                href="#home"
                className="relative px-2 py-1 rounded-lg transition duration-300 ease-in-out hover:bg-gray-300 hover:text-[#2D3142]"
              >
                {texts[language].home}
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="relative px-2 py-1 rounded-lg transition duration-300 ease-in-out hover:bg-gray-300 hover:text-[#2D3142]"
              >
                {texts[language].projects}
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="relative px-2 py-1 rounded-lg transition duration-300 ease-in-out hover:bg-gray-300 hover:text-[#2D3142]"
              >
                {texts[language].about}
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="relative px-2 py-1 rounded-lg transition duration-300 ease-in-out hover:bg-gray-300 hover:text-[#2D3142]"
              >
                {texts[language].contact}
              </a>
            </li>
          </ul>

          {/* Bouton pour basculer entre FR et EN */}
          <button
            onClick={() => setLanguage(language === 'FR' ? 'EN' : 'FR')}
            className="px-2 py-1 text-sm text-white border border-gray-400 rounded hover:bg-gray-300 hover:text-[#2D3142] transition duration-300"
          >
            {texts[language].switchTo}
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
