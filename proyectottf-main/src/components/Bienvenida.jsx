import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './global.scss';
import imagenFondo from '../aseets/pexels-pixabay-414837.jpg';
import quienesSomosImg from '../aseets/somos.webp'; 

const Bienvenida = () => {
  const navigate = useNavigate();
  const [visible, setVisible] = useState(false);
  const seccionRef = useRef(null);

  const irAPrincipal = () => {
    navigate('/principal');
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );

    if (seccionRef.current) {
      observer.observe(seccionRef.current);
    }

    return () => {
      if (seccionRef.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(seccionRef.current);
      }
    };
  }, []);

  return (
    <div className="pagina">

      {/* Sección 1: Pantalla de bienvenida */}
      <section className="seccion-bienvenida">
        <img src={imagenFondo} alt="Fondo" className="fondo-imagen" />
        <div className="bienvenida-overlay">
          <div className="bienvenida-content">
            <h1 className="bienvenida-titulo">Transición Energética Justa</h1>
            <p className="bienvenida-texto">Si cambias tu fuente de energía, cambiarás tu futuro</p>
            <button className="boton-empezar" onClick={irAPrincipal}>EXPLORA!</button>
          </div>
          <div className="bienvenida-footer">
            <p className="bienvenida-autor">Desarrollado por Andrea Castaño</p>
          </div>
        </div>
      </section>

      {/* Sección 2: ¿Quiénes somos? */}
      <section
        className={`seccion-info ${visible ? 'visible' : ''}`}
        ref={seccionRef}
      >
        <div className="info-contenido">
          <div className="info-texto">
            <h2>¿Quiénes somos?</h2>
            <p>
              Somos un dúo de estudiantes de Ingeniería Informática, apasionadas por la tecnología y comprometidas con un futuro sostenible.
              Le apostamos a la transición energética desde nuestra visión como mujeres en la ingeniería, promoviendo el uso de energías renovables como motor de cambio.
              Creemos en la innovación como herramienta para transformar la sociedad y construir un planeta más justo, limpio y conectado.
            </p>
            <p>
              Este proyecto nace del compromiso por impulsar la conciencia ambiental y el uso responsable de los recursos. Nuestra iniciativa busca sensibilizar sobre la importancia de las energías renovables no convencionales como herramienta clave para un desarrollo sostenible.
            </p>
          </div>
          <div className="info-imagen">
            <img src={quienesSomosImg} alt="Nosotras" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Bienvenida;