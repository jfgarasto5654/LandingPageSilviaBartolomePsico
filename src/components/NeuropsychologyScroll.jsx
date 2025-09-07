import React from 'react';

const NeuropsychologyScroll = () => {
  return (
    <section id="steps-1893">
      <div className="cs-container">
        <div className="cs-image-group">
          <picture className="cs-picture">
            {/* Mobile Image */}
            <source
              media="(max-width: 600px)"
              srcSet="https://img.freepik.com/vector-premium/dibujo-nina-nino-sosteniendo-lista-comprobacion_1264985-2494.jpg"
            />
            {/* Tablet and above Image */}
            <source
              media="(min-width: 601px)"
              srcSet="https://img.freepik.com/vector-premium/dibujo-nina-nino-sosteniendo-lista-comprobacion_1264985-2494.jpg"
            />
            <img
              loading="lazy"
              decoding="async"
              src="https://img.freepik.com/vector-premium/dibujo-nina-nino-sosteniendo-lista-comprobacion_1264985-2494.jpg"
              alt="evaluacion"
              width="324"
              height="467"
            />
          </picture>

          <img
            className="cs-graphic cs-brown"
            loading="lazy"
            decoding="async"
            src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/Graphics/brown-lines2.svg"
            alt="graphic"
            width="100"
            height="98"
            aria-hidden="true"
          />
          <img
            className="cs-graphic cs-peach"
            loading="lazy"
            decoding="async"
            src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/Icons/peach-blob.svg"
            alt="graphic"
            width="42"
            height="31"
            aria-hidden="true"
          />
          <img
            className="cs-graphic cs-leaf"
            loading="lazy"
            decoding="async"
            src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/Graphics/leaf-reverse.svg"
            alt="graphic"
            width="136"
            height="171"
            aria-hidden="true"
          />
          <img
            className="cs-graphic cs-dots"
            loading="lazy"
            decoding="async"
            src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/Icons/beige-dots.svg"
            alt="graphic"
            width="159"
            height="88"
            aria-hidden="true"
          />
          <img
            className="cs-graphic cs-lines"
            loading="lazy"
            decoding="async"
            src="https://csimg.nyc3.cdn.digitaloceanspaces.com/Images/Graphics/mesh-reverse.svg"
            alt="graphic"
            width="150"
            height="165"
            aria-hidden="true"
          />
        </div>

        <div className="cs-wrapper">
          <div className="cs-content">
            <h2 className="cs-title">Cosas que debes saber sobre las evaluaciones neuropsicologicas</h2>
          </div>

          <ul className="cs-card-group">
            <li className="cs-item">
              <span className="cs-number">01</span>
              <div className="cs-flex">
                <h3 className="cs-h3">1. Las evaluaciones no son exámenes para “aprobar o reprobar”</h3>
                <p className="cs-item-text">
                  Sirven para entender cómo funciona el cerebro en áreas como la atención, memoria, lenguaje, razonamiento y habilidades académicas. No buscan calificar a la persona, sino comprender sus fortalezas y desafíos.
                </p>
              </div>
            </li>
            <li className="cs-item">
              <span className="cs-number">02</span>
              <div className="cs-flex">
                <h3 className="cs-h3">Requieren tiempo y concentración</h3>
                <p className="cs-item-text">
                  Una evaluación completa puede durar varias horas y suele incluir entrevistas, pruebas escritas y tareas con materiales específicos. Es importante que la persona esté descansada y tranquila.
                </p>
              </div>
            </li>
            <li className="cs-item">
              <span className="cs-number">03</span>
              <div className="cs-flex">
                <h3 className="cs-h3">Los resultados guían intervenciones personalizadas</h3>
                <p className="cs-item-text">
                  Los informes no solo describen los hallazgos, también ofrecen recomendaciones prácticas para la escuela, la casa o el trabajo. Son una herramienta para mejorar la calidad de vida y el aprendizaje.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default NeuropsychologyScroll;
