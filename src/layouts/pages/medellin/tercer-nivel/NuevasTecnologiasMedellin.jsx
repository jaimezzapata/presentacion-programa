import React from "react";
import "../../../../submodulos.css";
import { Link } from "react-router-dom";
const NuevasTecnologiasMedellin = () => {
  return (
    <div className="submodulo-parent">
      <div className="submodulo-div1">
        <section>
          <h1>Nuevas tecnologías de la programación </h1>
          <p>
            <strong>Objetivo:</strong>
            <small>
              Desarrollar competencias en nuevas tecnologías presentes en el mundo del desarrollo (Python).
            </small>
          </p>
        </section>
        <section>
          <p>
            Este submódulo sirve para que los estudiantes se pueda incorporar en diferentes tecnologías o herramientas que hay en el mercado hoy en dia. Se está trabajando con Python como lenguaje enfocado al manejo de datos con pandas y una profundización en git como sistema de control de versiones
          </p>
        </section>
      </div>
      <div className="submodulo-div2">
        <h3>Primer momento</h3>
        <small>Python e IA´s</small>
      </div>
      <div className="submodulo-div3">
        <h3>Segundo Momento</h3>
        <small>Análisis de datos </small>
      </div>
      <div className="submodulo-div4">
        <h3>Tercer momento</h3>
        <small>Análisis de datos </small>
      </div>
      <div className="submodulo-div5">
        <ul>
          <li>Generaldiades Python</li>
          <li>Profundización de Git</li>
        </ul>
      </div>
      <div className="submodulo-div6">
        <ul>
          <li>Ambientes virtuales</li>
          <li>Análisis de datos</li>
          <li>Manejo de datos</li>
          <li>Pandas</li>
          <li>Manejo de Git</li>
        </ul>
      </div>
      <div className="submodulo-div7">
        <ul>
          <li>Visualizacion de datos</li>
          <li>Graficos</li>
          <li>Reportes</li>
          <li>Manejo de Git</li>
        </ul>
      </div>
      <Link to="/plan-medellin" className="btn-continuar">
        Plan estudio
      </Link>
    </div>
  );
};

export default NuevasTecnologiasMedellin;
