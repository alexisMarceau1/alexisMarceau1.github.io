import React, { useState, useEffect } from 'react';

const About = ({ language }) => {
  const [activeTab, setActiveTab] = useState(language === 'FR' ? 'Langages' : 'Languages');

  // Données des compétences par catégorie
  const skillsData = {
    [language === 'FR' ? 'Langages' : 'Languages']: [
      { name: 'Python', icon: 'fab fa-python' },
      { name: 'SQL', icon: 'fas fa-database' },
      { name: 'JavaScript', icon: 'fab fa-js-square' },
      { name: 'C/C++', icon: 'fas fa-code' },
      { name: 'MATLAB', icon: 'fas fa-square-root-alt' },
    ],
    [language === 'FR' ? 'Bibliothèques' : 'Libraries']: [
      { name: 'Pandas', icon: 'fas fa-chart-line' },
      { name: 'NumPy', icon: 'fas fa-calculator' },
      { name: 'Scikit-learn', icon: 'fas fa-brain' },
      { name: 'TensorFlow', icon: 'fas fa-robot' },
      { name: 'PyTorch', icon: 'fas fa-project-diagram' },
      { name: 'Seaborn', icon: 'fas fa-chart-pie' },
      { name: 'Matplotlib', icon: 'fas fa-chart-bar' },
    ],
    [language === 'FR' ? 'Visualisation' : 'Visualization']: [
      { name: 'Tableau', icon: 'fas fa-table' },
      { name: 'Power BI', icon: 'fas fa-chart-area' },
      { name: 'Plotly', icon: 'fas fa-chart-line' },
      { name: 'Streamlit', icon: 'fas fa-stream' },
    ],
    [language === 'FR' ? 'Domaines' : 'Fields']: [
      { name: language === 'FR' ? 'Apprentissage automatique' : 'Machine Learning', icon: 'fas fa-cogs' },
      { name: language === 'FR' ? 'Apprentissage profond' : 'Deep Learning', icon: 'fas fa-network-wired' },
      { name: language === 'FR' ? 'Modèles supervisés' : 'Supervised Models', icon: 'fas fa-check-circle' },
      { name: language === 'FR' ? 'Modèles non supervisés' : 'Unsupervised Models', icon: 'fas fa-circle-notch' },
      { name: language === 'FR' ? 'Traitement du langage naturel' : 'Natural Language Processing', icon: 'fas fa-language' },
      { name: language === 'FR' ? 'Vision par ordinateur' : 'Computer Vision', icon: 'fas fa-eye' },
      { name: language === 'FR' ? 'Optique' : 'Optics', icon: 'fas fa-lightbulb' },
    ],
    [language === 'FR' ? 'Outils' : 'Tools']: [
      { name: 'Git/GitHub', icon: 'fab fa-git-alt' },
      { name: 'Spark', icon: 'fas fa-bolt' },
      { name: 'PySpark', icon: 'fas fa-fire' },
      { name: 'AWS', icon: 'fas fa-cloud' },
      { name: 'FastAPI', icon: 'fas fa-rocket' },
      { name: 'Heroku', icon: 'fas fa-cloud' },
    ],
  };

  // Met à jour activeTab lorsque la langue change
  useEffect(() => {
    setActiveTab(language === 'FR' ? 'Langages' : 'Languages');
  }, [language]);

  return (
    <section id="about" className="bg-[#2D3142] p-12 text-center scroll-mt-16">
      {/* Titre principal */}
      <h2 className="text-4xl font-bold text-white mb-8">
        {language === 'FR' ? 'À propos de moi' : 'About Me'}
      </h2>

      {/* Texte de présentation */}
      <p className="text-[#EAEAEA] text-lg leading-relaxed max-w-3xl mx-auto mb-12">
        {language === 'FR'
          ? 'Je suis Alexis, un data scientist passionné par la modélisation des données et l\'optimisation des processus grâce aux technologies de pointe. J\'ai une solide expérience en machine learning, en analyse des données et en visualisation. Mon objectif est de résoudre des problèmes complexes en exploitant le pouvoir des données.'
          : 'I am Alexis, a data scientist passionate about data modeling and process optimization through cutting-edge technologies. I have solid experience in machine learning, data analysis, and visualization. My goal is to solve complex problems by harnessing the power of data.'}
      </p>

      {/* Ligne de séparation */}
      <div className="h-1 w-3/4 mx-auto bg-gradient-to-r from-[#2D3142] via-[#BFC0C0] to-[#2D3142] my-12"></div>

      {/* Onglets pour les compétences */}
      <div className="mt-12">
        <h3 className="text-3xl font-bold text-white mb-6">
          {language === 'FR' ? 'Compétences techniques' : 'Technical Skills'}
        </h3>
        <div className="flex justify-center space-x-4 mb-6">
          {Object.keys(skillsData).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-lg font-semibold text-white transition duration-300 ${
                activeTab === tab ? 'bg-[#394150]' : 'bg-[#2D3142] hover:bg-[#394150]'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Liste des compétences dans l'onglet actif */}
        {skillsData[activeTab] ? (
          <ul className="grid grid-cols-2 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {skillsData[activeTab].map((skill, index) => (
              <li
                key={index}
                className="bg-[#394150] text-[#EAEAEA] py-4 px-4 rounded-lg shadow-lg hover:bg-[#4A5568] transition duration-300 flex flex-col items-center"
              >
                <i className={`${skill.icon} text-2xl mb-2`}></i>
                <span>{skill.name}</span>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-white">Compétences introuvables pour cette catégorie.</p>
        )}
      </div>
    </section>
  );
};

export default About;
