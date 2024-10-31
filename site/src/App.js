import './App.css';
import React, { useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/swiper-bundle.css';

function App() {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const timeoutRef = useRef(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setDropdownVisible(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setDropdownVisible(false);
    }, 300);
  };

  return (
    <div>
      <nav className="navbar">
        <div className="navbar-container">
          <div className="navbar-logo">Asie Voyages</div>
          <ul className="navbar-menu">
            <li 
              className="navbar-item" 
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <a href="#destinations">Destinations</a>
              <div className={`mega-menu ${dropdownVisible ? 'open' : ''}`}>
                <div className="mega-menu-column">
                  <h3>Voyage sur mesure</h3>
                  <ul>
                    <li><a href="#custom-trip">Créer votre voyage</a></li>
                  </ul>
                </div>
                <div className="mega-menu-column">
                  <h3>Destinations</h3>
                  <ul>
                    {['Inde', 'Japon', 'Chine', 'Indonésie', 'Thailand', 'Philippines', 'Laos', 'Vietnam', 'Cambodge', 'Myanmar', 'Corée du Sud', 'Maldives'].map((country) => (
                      <li key={country}>
                        <a href={`#${country.toLowerCase()}`}>
                          <img src={`/${country.toLowerCase()}.jpg`} alt={country} className="dropdown-image" />
                          {country}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </li>
            <li className="navbar-item"><a href="#about">À propos</a></li>
            <li className="navbar-item"><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav>
      
      {/* Section de la vidéo */}
      <div className="video-section">
        <video autoPlay muted loop className="video-banner">
          <source src="start.mp4" type="video/mp4" />
          Votre navigateur ne supporte pas la vidéo.
        </video>
        <button className="video-button">Créez votre voyage</button>
      </div>

      {/* Transition entre la vidéo et les photos */}
      <div className="destination-transition">
        <h2 className="transition-title">Nos destinations</h2>
        <p className="transition-subtitle">Choisissez et laissez-vous guider</p>
      </div>


      {/* Bandeau principal */}
      {/* <div className="banner">
        <img src="/head2.jpg" alt="Bandeau principal" className="banner-image" />
        <div className="banner-text"></div>
      </div> */}

      {/* Transition */}
      {/* <div className="transition"></div>  */}

      {/* Section des photos */}
      <div className="photos">
        <div className="photo-card">
          <img src="/inde.jpg" alt="Inde, Destination 1" />
          <div className="photo-title">Inde</div>
        </div>
        <div className="photo-card">
          <img src="/japon.jpg" alt="Japon, Destination 2" />
          <div className="photo-title">Japon</div>
        </div>
        <div className="photo-card">
          <img src="/chine.jpg" alt="Chine, Destination 3" />
          <div className="photo-title">Chine</div>
        </div>
        <div className="photo-card">
          <img src="/indonésie.jpg" alt="Indonésie, Destination 4" />
          <div className="photo-title">Indonésie</div>
        </div>
        <div className="photo-card">
          <img src="/thailand.jpg" alt="Thailand, Destination 5" />
          <div className="photo-title">Thailand</div>
        </div>
        <div className="photo-card">
          <img src="/philippines.jpg" alt="Philippines, Destination 6" />
          <div className="photo-title">Philippines</div>
        </div>
        <div className="photo-card">
          <img src="/laos.jpg" alt="Laos, Destination 7" />
          <div className="photo-title">Laos</div>
        </div>
        <div className="photo-card">
          <img src="/vietnam.jpg" alt="Vietnam, Destination 8" />
          <div className="photo-title">Vietnam</div>
        </div>
        <div className="photo-card">
          <img src="/cambodge.jpg" alt="Cambodge, Destination 9" />
          <div className="photo-title">Cambodge</div>
        </div>
        <div className="photo-card">
          <img src="/myanmar.jpg" alt="Myanmar, Destination 10" />
          <div className="photo-title">Myanmar</div>
        </div>
        <div className="photo-card">
          <img src="/corée du sud.jpg" alt="South Korea, Destination 11" />
          <div className="photo-title">Corée du Sud</div>
        </div>
        <div className="photo-card">
          <img src="/maldives.jpg" alt="Maldives, Destination 12" />
          <div className="photo-title">Maldives</div>
        </div>
      </div>
      
      {/* Nouvelle section pour la philosophie de l'entreprise */}
      <section className="philosophy-section">
        <h2 className="philosophy-title">Notre Philosophie</h2>
        <p className="philosophy-text">
          Chez Asie Voyages, nous croyons que chaque voyage doit être unique et refléter les désirs et les intérêts de chaque client. 
          Nous vous guidons de A à Z dans votre projet de voyage, tout en vous laissant le contrôle total pour choisir les étapes 
          de votre aventure. Grâce à notre outil innovant, vous ne suivez pas un itinéraire pré-conçu, mais construisez votre propre 
          voyage sur mesure. Nous sommes là pour vous proposer des options adaptées à votre style, tout en vous laissant la liberté 
          de décider ce qui vous correspond le mieux. Soyez le maître de votre voyage, et laissez-nous vous accompagner à chaque étape.
        </p>
      </section>

      {/* Carrousel de photos */}
      <section className="carousel-section">
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          pagination={{ clickable: true }}
          navigation={true}
          modules={[Navigation, Pagination]}
        >
          <SwiperSlide>
            <img src="caroussel5.jpg" alt="temple corée" className="carousel-image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="caroussel4.jpg" alt="temple séoul" className="carousel-image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="caroussel3.jpg" alt="temple geyongju" className="carousel-image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="caroussel2.jpg" alt="temple geyongju" className="carousel-image" />
          </SwiperSlide>
          {/* Ajoutez d'autres slides ici */}
        </Swiper>
      </section>
      
       {/* Section Contact */}
       <section className="contact-section">
        <h2 className="contact-title">Contact</h2>
        <button className="contact-button">Contact</button>
      </section>

      {/* Section Footer avec réseaux sociaux et liens */}
      <footer className="footer-section">
    <div className="footer-container">
        <div className="footer-column left-column">
            {/* Contenu pour Asie Voyages */}
            <div className="footer-logo">
                <p className="footer-brand">Asie Voyages</p>
                <div className="social-media">
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                        <img src="icon-facebook.svg" alt="Facebook" />
                    </a>
                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                        <img src="icon-instagram.svg" alt="Instagram" />
                    </a>
                    <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
                        <img src="icon-youtube.svg" alt="YouTube" />
                    </a>
                </div>
            </div>
        </div>

        <div className="footer-column destinations-column">
            {/* Contenu pour Destinations */}
            <h3>DESTINATIONS</h3>
            <ul>
                <li><a href="#">Inde</a></li>
                <li><a href="#">Japon</a></li>
                <li><a href="#">Chine</a></li>
                <li><a href="#">Indonésie</a></li>
                <li><a href="#">Thailand</a></li>
                <li><a href="#">Philippines</a></li>
                <li><a href="#">Laos</a></li>
                <li><a href="#">Vietnam</a></li>
                <li><a href="#">Cambodge</a></li>
                <li><a href="#">Myanmar</a></li>
                <li><a href="#">Corée du Sud</a></li>
                <li><a href="#">Maldives</a></li>
            </ul>
        </div>

        <div className="footer-column right-column">
            {/* Contenu pour À propos */}
            <h3>À PROPOS</h3>
            <ul>
                <li><a href="#">L'équipe</a></li>
                <li><a href="#">Contact</a></li>
                <li><a href="#">Garantie</a></li>
            </ul>
        </div>
    </div>
</footer>
      

    </div>
  );
}

export default App;
