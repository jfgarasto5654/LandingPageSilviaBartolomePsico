
import React, { useState, useEffect } from 'react';
import '../style.css'
import { AnimatedTestimonialsDemo } from './components/AnimatedTestimonials'; // Asegúrate de que la ruta sea correcta


// Asegúrate de que este componente esté en su propio archivo y de que la ruta sea correcta.
// import { AnimatedTestimonialsDemo } from './components/AnimatedTestimonials'; 

function App() {
  const [heroText, setHeroText] = useState("");
  const originalText = "Acompañamiento Psicopedagógico Profesional";

  useEffect(() => {
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < originalText.length) {
        setHeroText((prevText) => prevText + originalText.charAt(i));
        i++;
      } else {
        clearInterval(typingInterval);
      }
    }, 50);

    return () => clearInterval(typingInterval); // Limpia el intervalo al desmontar el componente
  }, []);

  return (
    <div id="divprincp">
      <header className="hero">
        <div className="hero-content">
          <h1>{heroText}</h1>
          <p>Ayudamos a niños y adolescentes a superar sus desafíos de aprendizaje y a alcanzar su máximo potencial.</p>
          <a href="#contacto" className="cta-button">Agenda tu cita</a>
        </div>
      </header>

      <section id="servicios" className="section">
        <h2>Nuestros Servicios</h2>
        <div className="container">
          <div className="card">
            <h3>Evaluación Psicopedagógica</h3>
            <p>Identificamos las causas de las dificultades en el aprendizaje.</p>
          </div>
          <div className="card">
            <h3>Terapia Individual</h3>
            <p>Sesiones personalizadas para desarrollar habilidades cognitivas y de estudio.</p>
          </div>
          <div className="card">
            <h3>Orientación a Padres</h3>
            <p>Herramientas y estrategias para apoyar a sus hijos en casa.</p>
          </div>
        </div>
      </section>

      <section id="testimonios" className="section flex flex-col items-center">
        <h2 className="text-center">Testimonios de Padres</h2>
        <AnimatedTestimonialsDemo /> 
      </section>

      <section id="nosotros" className="section bg-light">
        <div className="container about-container">
          <div className="about-text">
            <h2>Un poco sobre mi</h2>
            <p>Soy Silvia Bartolome, psicopedagoga con más de 20 años de experiencia. Mi objetivo es crear un espacio seguro y de confianza donde cada niño pueda descubrir su potencial y superar cualquier barrera en su camino educativo.</p>
          </div>
          <div className="about-image">
            {/* Si tienes una imagen, usa la ruta correcta aquí */}
            <img src="URL_DE_TU_FOTO.jpg" alt="Psicopedagoga Silvia Bartolome" />
          </div>
        </div>
      </section>

      <section id="contacto" className="section">
        <h2>Contáctanos</h2>
        <p>¿Tienes dudas o quieres agendar una cita? Escríbenos.</p>
        <div id="contacto" className="section">
          <p>Haz clic en el botón para enviarnos un mensaje por WhatsApp.</p>
          <a href="https://wa.me/XXXXXXXXXX?text=Hola,%20quisiera%20agendar%20una%20cita%20con%20la%20psicopedagoga." className="cta-button whatsapp-button">Enviar Mensaje por WhatsApp</a>
        </div>
      </section>

      <footer>
        <p>&copy; 2025 Psicopedagogia Silvia Bartolome. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}

export default App;