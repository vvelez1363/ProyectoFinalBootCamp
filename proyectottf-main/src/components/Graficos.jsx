import './Graficos.css';
import { FaArrowLeft } from 'react-icons/fa'; // Ícono de flecha

const Graficos = () => {
  const graficos = [
    {
      nombre: 'Producción de Energía Renovable por Fuente',
      archivo: '/gifs/top10_renovables_2022.gif',
    },
    {
      nombre: 'Participación de Energías Renovables',
      archivo: '/gifs/grafico_torta_renovables.gif',
    },
    {
      nombre: 'Gráfico de Área: Consumo Renovable vs Convencional',
      archivo: '/gifs/gifsgrafico_area_consumo.gif',
    },
    {
      nombre: 'Gráfico de Líneas: Capacidad Instalada',
      archivo: '/gifs/gifsgrafico_lineas_capacidad.gif',
    },
  ];

  const handleVolver = () => {
    window.history.back(); 
  };

  return (
    <div className="contenedor-graficos fondo-graficos">
      <h1 className="titulo-graficos">
        Visualización de Gráficos de Energía Renovable
      </h1>
      <div className="grid-graficos">
        {graficos.map((grafico, index) => (
          <div className="tarjeta-grafico" key={index}>
            <h2 className="titulo-tarjeta">{grafico.nombre}</h2>
            <img
              src={grafico.archivo}
              alt={grafico.nombre}
              className="imagen-grafico"
            />
          </div>
        ))}
      </div>

      {/* Mover el botón aquí abajo */}
      <div className="contenedor-boton-volver">
        <button className="btn-nuevo" onClick={handleVolver}>
          <FaArrowLeft className="icono-flecha" />
        </button>
      </div>
    </div>
  );
};

export default Graficos;
