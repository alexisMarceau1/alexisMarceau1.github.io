import React from 'react';

const Contact = ({ language }) => {
  // Textes pour les deux langues
  const texts = {
    FR: {
      title: "Contactez-moi",
      intro: "Vous pouvez me joindre facilement via LinkedIn ou GitHub :",
      linkedin: "LinkedIn",
      github: "GitHub",
    },
    EN: {
      title: "Contact Me",
      intro: "You can easily reach me through LinkedIn or GitHub:",
      linkedin: "LinkedIn",
      github: "GitHub",
    },
  };

  return (
    <section id="contact" className="bg-white py-16 px-8 text-center">
      {/* Titre */}
      <h2 className="text-4xl font-bold mb-6 text-gray-800">
        {texts[language].title}
      </h2>
      
      {/* Texte d'introduction */}
      <p className="text-lg text-gray-600 mb-6">
        {texts[language].intro}
      </p>
      
      {/* Liens de contact */}
      <div className="flex justify-center space-x-8 mt-8">
        <a 
          href="https://www.linkedin.com/in/alexis-marceau/" 
          className="text-2xl text-blue-600 font-semibold hover:underline hover:text-blue-800 transition duration-300"
        >
          {texts[language].linkedin}
        </a>
        <a 
          href="https://github.com/alexisMarceau1" 
          className="text-2xl text-blue-600 font-semibold hover:underline hover:text-blue-800 transition duration-300"
        >
          {texts[language].github}
        </a>
      </div>
    </section>
  );
};

export default Contact;
