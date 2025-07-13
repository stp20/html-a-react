import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home';
import Catalog from './pages/Catalog';
import Ofert from './pages/Ofert';
import Header from './components/Header';
import Footer from './components/Footer';
import Carrito from './pages/Carrito';
import Equipo from './pages/Equipo';

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Catalog" element={<Catalog />} />
          <Route path="/Ofert" element={<Ofert />} />
          <Route path="*" element={<h1>404 - Página no encontrada</h1>} />
          <Route path="/Carrito" element={<Carrito />} />
          <Route path="/Equipo" element={<Equipo />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}
