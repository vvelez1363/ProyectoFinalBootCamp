import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Card, Row, Col } from 'react-bootstrap';
import { Link } from "react-router-dom";
import eolicaImg from '../aseets/eolica.png';
import solarImg from '../aseets/solar.png';
import hidroImg from '../aseets/hidro.png';
import biomasaImg from '../aseets/bioenergia.png';
import geotermicaImg from '../aseets/geotermica.png';
import './global.scss';

const InfoEnergia = () => {
  const tarjetas = [
    {
      titulo: 'Eólica',
      imagen: eolicaImg,
      texto: 'Se obtiene del viento mediante aerogeneradores. Es limpia, renovable y cada vez más popular.',
    },
    {
      titulo: 'Solar',
      imagen: solarImg,
      texto: 'Proviene del sol. Se transforma en electricidad o calor usando paneles solares. Gratis, abundante y ecológica.',
    },
    {
      titulo: 'Hidroeléctrica',
      imagen: hidroImg,
      texto: 'Generada por el movimiento del agua (ríos o presas). Es renovable y muy usada, aunque puede afectar ecosistemas.',
    },
    {
      titulo: 'Bioenergía',
      imagen: biomasaImg,
      texto: 'Proviene de materia orgánica (como residuos agrícolas o madera). Puede usarse como combustible o electricidad.',
    },
    {
      titulo: 'Geotérmica',
      imagen: geotermicaImg,
      texto: 'Aprovecha el calor del interior de la Tierra. Sirve para generar electricidad o calefacción directa.',
    },
  ];

  const beneficios = [
    'Reducen la contaminación del aire y el agua.',
    'Disminuyen la dependencia de combustibles fósiles.',
    'Generan empleos verdes y desarrollo local.',
    'Son inagotables y sostenibles en el tiempo.',
    'Mitigan el cambio climático.'
  ];

  const comparativa = [
    { tipo: 'Renovables', caracteristica: 'Inagotables, limpias, con bajo impacto climático' },
    { tipo: 'No Renovables', caracteristica: 'Limitadas, contaminantes y altamente emisoras de CO₂' },
    { tipo: 'Renovables', caracteristica: 'Bajo costo de operación a largo plazo' },
    { tipo: 'No Renovables', caracteristica: 'Alto costo ambiental y económico a largo plazo' },
  ];

  return (
    <Container className="my-5">
      <h1 className="text-center mb-4">Energía Renovable</h1>
      <p className="text-center mb-4">
        Las energías renovables son fuentes de energía obtenidas de recursos naturales que se regeneran continuamente,
        como el sol, el viento y el agua. Se caracterizan por ser inagotables y por no generar emisiones de gases de efecto invernadero.
      </p>

      {/* Sección Beneficios */}
      <section className="my-5">
        <h2 className="text-center mb-4">Beneficios de las Energías Renovables</h2>
        <Row className="justify-content-center text-center">
          {beneficios.map((beneficio, i) => (
            <Col key={i} xs={12} sm={6} md={4} className="mb-3">
              <div className="p-3 border rounded shadow-sm h-100 infografia-beneficio">
                <h5>✅ {beneficio}</h5>
              </div>
            </Col>
          ))}
        </Row>
      </section>

      {/* Sección Comparativa */}
      <section className="my-5">
        <h2 className="text-center mb-4">Comparativa: Renovables vs No Renovables</h2>
        <div className="infografia-comparativa d-flex flex-column flex-md-row justify-content-center align-items-stretch gap-4">
          
          <div className="lado-comparativa lado-renovable p-4 rounded shadow flex-fill">
            <h4 className="text-center mb-3">⚡ Energías Renovables</h4>
            <ul>
              <li>♻️ Inagotables y sostenibles</li>
              <li>🌱 Bajas emisiones de carbono</li>
              <li>💸 Costos bajos a largo plazo</li>
              <li>🌍 Amigables con el medio ambiente</li>
            </ul>
          </div>

          <div className="lado-comparativa lado-no-renovable p-4 rounded shadow flex-fill">
            <h4 className="text-center mb-3">🔥 Energías No Renovables</h4>
            <ul>
              <li>⛽ Recursos limitados</li>
              <li>☠️ Altas emisiones contaminantes</li>
              <li>💰 Costos crecientes y volátiles</li>
              <li>🛑 Impacto ambiental elevado</li>
            </ul>
          </div>

        </div>
      </section>


      {/* Botones de navegación */}
      <div className="text-center mt-4 d-flex justify-content-center gap-3 flex-wrap">
        <Link to="/estimador" className="btn-elegante">
          Ir al estimador
        </Link>
        <Link to="/graficos" className="btn-elegante">
          Ver estadísticas
        </Link>
      </div>
    </Container>
  );
};

export default InfoEnergia;
