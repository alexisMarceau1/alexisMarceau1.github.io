import React from 'react';

const Projects = ({ language }) => {
  const projects = [
    {
      name: 'Credit Risk', // Le nom reste toujours en anglais
      description: {
        FR: 'Prédire les risques de crédit et réduire les pertes financières grâce au machine learning.',
        EN: 'Predict credit risk and reduce financial losses using machine learning.',
      },
      icon: 'fas fa-chart-line',
      link: 'https://github.com/alexisMarceau1/CreditRisk_solution',
    },
    {
      name: 'Seattle Energy Forecast', // Le nom reste toujours en anglais
      description: {
        FR: 'Prévision de la consommation énergétique et des émissions de CO2 des bâtiments à Seattle.',
        EN: 'Forecast energy consumption and CO2 emissions of buildings in Seattle.',
      },
      icon: 'fas fa-bolt',
      link: 'https://github.com/alexisMarceau1/SeattleEnergyForecast',
    },
    {
      name: 'Customer Insights', // Le nom reste toujours en anglais
      description: {
        FR: 'Segmentation client avancée via clustering pour optimiser les stratégies marketing.',
        EN: 'Advanced customer segmentation via clustering to optimize marketing strategies.',
      },
      icon: 'fas fa-users',
      link: 'https://github.com/alexisMarceau1/CustomerInsights',
    },
    {
      name: 'Auto Classify', // Le nom reste toujours en anglais
      description: {
        FR: 'Moteur de classification multi-classes exploitant des données textuelles et visuelles pour une catégorisation précise des produits.',
        EN: 'Multi-class classification engine using textual and visual data for accurate product categorization.',
      },
      icon: 'fas fa-cogs',
      link: 'https://github.com/alexisMarceau1/AutoClassify',
    },
    {
      name: 'Cloud Fruit 360', // Le nom reste toujours en anglais
      description: {
        FR: 'Reconnaissance d’images dans un environnement cloud avec réseaux de neurones convolutifs pour classer des fruits à grande échelle.',
        EN: 'Image recognition in a cloud environment using convolutional neural networks to classify fruits at scale.',
      },
      icon: 'fas fa-apple-alt',
      link: 'https://github.com/alexisMarceau1/CloudFruit360',
    },
    {
      name: 'Solar Cycle Prediction', // Le nom reste toujours en anglais
      description: {
        FR: 'Un projet de prédiction du cycle solaire basé sur des séries temporelles. (En cours)',
        EN: 'A solar cycle prediction project based on time series analysis. (In progress)',
      },
      icon: 'fas fa-tools',
      link: '#', // Pas encore de lien pour ce projet
    },
  ];

  return (
    <section id="projects" className="bg-[#F5F5F5] p-12 text-center scroll-mt-16">
      <h2 className="text-3xl font-bold text-[#2D3142] mb-6">
        {language === 'FR' ? 'Mes Projets' : 'My Projects'}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition duration-300 flex flex-col justify-between h-full"
          >
            {/* Icône du projet */}
            <div className="text-[#2D3142] text-4xl mb-4">
              <i className={project.icon}></i>
            </div>
            {/* Nom du projet */}
            <h3 className="text-xl font-bold text-[#2D3142] mb-2">{project.name}</h3>
            {/* Description */}
            <p className="text-gray-600 flex-grow">{project.description[language]}</p>
            {/* Lien vers le projet */}
            {project.link !== '#' ? (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 mt-4 font-semibold text-white bg-gradient-to-r from-[#6C63FF] to-[#4A56E2] rounded-lg shadow-lg hover:shadow-xl hover:from-[#4A56E2] hover:to-[#3A45B6] hover:scale-105 transition-transform duration-300 ease-in-out"
              >
                {language === 'FR' ? 'Voir le projet' : 'View Project'}
              </a>
            ) : (
              <span className="inline-block px-4 py-2 mt-4 font-semibold text-[#BFC0C0] bg-[#EAEAEA] border border-[#BFC0C0] rounded-lg shadow cursor-not-allowed">
                {language === 'FR' ? 'En cours' : 'In progress'}
              </span>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
