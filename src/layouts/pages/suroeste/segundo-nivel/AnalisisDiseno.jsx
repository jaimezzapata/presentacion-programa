import React from "react";
import "../../../../submodulos.css";
import { Link } from "react-router-dom";
const AnalisisDiseno = () => {
  return (
    <div className="submodulo-parent">
      <div className="submodulo-div1">
        <section>
          <h1>Análisis y diseño de aplicaciones</h1>
          <small>
            Norma de competencia: 220501131 Levantar requisitos de la solución
            de software de acuerdo con métodos y estándares técnicos{" "}
          </small>
          <p>
            <strong>Objetivo:</strong>
            <small>
              Desarrollar competencias basicas relacionadas al manejo de
              proceos, levantamientos de requistos e información, documentación
              y trabajo colaborativo
            </small>
          </p>
        </section>
        <section>
          <p>
            El presente submódulo aborda temas básicos de análisis y
            levantamiento de requisitos para la solución de una necesidad. Se
            abordan temas de documentación y construcción de informes como punto
            de partida para el desarrollo
          </p>
          <p>
            Igualmente se aborda el concepto de trabajo agile enfocado en la
            metodología SCRUM
          </p>
        </section>
      </div>
      <div className="submodulo-div2">
        <h3>Primer momento</h3>
        <small>Estructuración</small>
      </div>
      <div className="submodulo-div3">
        <h3>Segundo Momento</h3>
        <small>Consolidacion </small>
      </div>
      <div className="submodulo-div4">
        <h3>Tercer momento</h3>
        <small>Consolidacion</small>
      </div>
      <div className="submodulo-div5">
        <ul>
          <li>Metodología Tradicional</li>
          <li>Metodología Agile</li>
          <li>Procesos de negocio</li>
          <li>Fases del desarrollo de software</li>
        </ul>
      </div>
      <div className="submodulo-div6">
        <ul>
          <li>Scrum</li>
          <li>Epicas</li>
          <li>Artefactos</li>
          <li>Ceremonias</li>
          <li>Estimaciones</li>
          <li>Historias de usuario</li>
          <li>Sistemas de gestion de proyectos</li>
        </ul>
      </div>
      <div className="submodulo-div7">
        <ul>
          <li>Metricas</li>
        </ul>
      </div>
      <Link to="/plan" className="btn-continuar">
        Plan estudio
      </Link>
    </div>
  );
};

export default AnalisisDiseno;
