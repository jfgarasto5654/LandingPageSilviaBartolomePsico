
import React, { useState, useEffect } from 'react';
import '../style.css'
import { AnimatedTestimonialsDemo } from './components/AnimatedTestimonials'; // Asegúrate de que la ruta sea correcta
import { TextGenerateEffectDemo } from './components/TextGenerateEf'; // Asegúrate de que la ruta sea correcta
import NeuropsychologyScroll from './components/NeuropsychologyScroll';

// Asegúrate de que este componente esté en su propio archivo y de que la ruta sea correcta.
// import { AnimatedTestimonialsDemo } from './components/AnimatedTestimonials'; 

function App() {


  return (
    
    
    <div id="divprincp">
      <header className="hero">
        <div className="hero-content">
          <TextGenerateEffectDemo/>
          <p>Ayudamos a niños y adolescentes a superar sus desafíos de aprendizaje y a alcanzar su máximo potencial.</p>
          <a href="#contacto" className="cta-button">Agenda tu cita</a>
        </div>
      </header>
      <div>

      </div>I
      <section id="servicios" className="pt-16 pb-24 flex flex-col items-center mb-24">
  <h3 className="titulo-servicios text-lg font-semibold mb-2">Servicios</h3>
  <div className="flex flex-wrap justify-center gap-6 max-w-5xl">
    <div className="card p-6 rounded-2xl shadow-lg bg-white w-72 text-center">
      <h3 className="titulo-servicios text-lg font-semibold mb-2">Evaluación Neuropsicológicas</h3>
      <p>Identificamos las causas de las dificultades en el aprendizaje.</p>
    </div>
    <div className="card p-6 rounded-2xl shadow-lg bg-white w-72 text-center">
      <h3 className="titulo-servicios text-lg font-semibold mb-2">Terapia Individual</h3>
      <p>Sesiones personalizadas para desarrollar habilidades cognitivas y de estudio.</p>
    </div>
    <div className="card p-6 rounded-2xl shadow-lg bg-white w-72 text-center">
      <h3 className="titulo-servicios text-lg font-semibold mb-2">Orientación a Padres</h3>
      <p>Herramientas y estrategias para apoyar a sus hijos en casa.</p>
    </div>
  </div>
</section>


      <section className="mt-24 !mt-24">
      <NeuropsychologyScroll />
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
          <a href="https://wa.me/1140237404?text=Hola,%20quisiera%20agendar%20una%20cita%20con%20la%20psicopedagoga." className="cta-button whatsapp-button">Enviar Mensaje por WhatsApp</a>
        </div>
      </section>

      <footer>
        <p>&copy; 2025 Psicopedagogia Silvia Bartolome. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}

export default App;