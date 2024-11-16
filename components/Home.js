import React from 'react';

const Home = ({ language }) => {
  // Textes pour les deux langues
  const texts = {
    FR: {
      welcome: "Bienvenue sur mon portfolio",
      description:
        "Je suis Alexis, data scientist passionné par les données et l'innovation.",
      button: "Voir mes projets",
    },
    EN: {
      welcome: "Welcome to my portfolio",
      description:
        "I’m Alexis, a data scientist passionate about data and innovation.",
      button: "View my projects",
    },
  };

  return (
    <section
      id="home"
      className="relative w-full h-screen bg-gray-100 flex items-center justify-center text-center"
    >
      {/* Vidéo en arrière-plan */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/home.mp4"
        autoPlay
        loop
        muted
      ></video>

      {/* Contenu au-dessus de la vidéo */}
      <div className="relative z-10">
        <h1 className="text-4xl font-bold text-white drop-shadow-lg">
          {texts[language].welcome}
        </h1>
        <p className="text-white text-lg mt-4 max-w-2xl mx-auto drop-shadow-lg">
          {texts[language].description}
        </p>
        <button
          className="mt-6 inline-block px-6 py-3 font-semibold text-white bg-gradient-to-r from-[#6C63FF] to-[#4A56E2] rounded-lg shadow-lg hover:shadow-xl hover:from-[#4A56E2] hover:to-[#3A45B6] hover:scale-105 transition-transform duration-300 ease-in-out"
          onClick={() =>
            document
              .getElementById("projects")
              .scrollIntoView({ behavior: "smooth" })
          }
        >
          {texts[language].button}
        </button>
      </div>

      {/* Overlay sombre pour rendre le texte lisible */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
    </section>
  );
};

export default Home;
