// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Signin from './pages/Login/Singin'
import Header from "./componentes/Header/Header";
import Login from './pages/Login/Login'
import Usuario from './pages/Usuario';
import Maestros from './pages/Usuario/Maestros';
import Alumnos from './pages/Usuario/Alumnos';
import Reportes from './pages/Usuario/Reportes';
import Footer from './componentes/Footer'
import Materias from './pages/Usuario/Materias';
import AsignacionAlMa from './pages/Usuario/AsignacionAlMa'
import AsignacionMaPro from './pages/Usuario/AsignacionMaPro'
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/usuario" element={<Usuario />} />
        <Route path="/maestros" element={<Maestros />} />
        <Route path="/alumnos" element={<Alumnos />} />
        <Route path="/reportes" element={<Reportes />} />
        <Route path="/materias" element={<Materias />} />
        <Route path="/asignacion-profesor-materia" element={<AsignacionMaPro />} />
        <Route path="/asignacion-alumno-materia" element={<AsignacionAlMa />} />

      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
