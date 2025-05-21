import InfoEnergia from './components/InfoEnergia';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Estimador from './components/EstimadorRenovable';
import Graficos from './components/Graficos';
import Bienvenida from './components/Bienvenida';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Bienvenida />} /> {/* Nueva pantalla de bienvenida */}
        <Route path="/principal" element={<InfoEnergia />} />
        <Route path="/estimador" element={<Estimador />} />
        <Route path="/graficos" element={<Graficos />} />
        <Route path="/info" element={<InfoEnergia />} />
      </Routes>
    </Router>
   
  );
}

export default App;