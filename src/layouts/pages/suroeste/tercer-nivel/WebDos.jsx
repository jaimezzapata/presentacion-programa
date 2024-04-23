import React from "react";
import "../../../../submodulos.css";
import { Link } from "react-router-dom";
const WebDos = () => {
  return (
    <div className="submodulo-parent">
      <div className="submodulo-div1">
        <section>
          <h1>Programación para la web </h1>
          <p>
            <strong>Objetivo:</strong>
            <small>
              Desarrollar competencias para construir aplicaciones web con una
              librería de JavaScript (React).
            </small>
          </p>
        </section>
        <section>
          <p>
            El conocimiento adquirido en este submódulo tiene un alcance
            netamente a la construcción de sitios web dinámicas y al consumo de
            apis por medio de react
          </p>
        </section>
      </div>
      <div className="submodulo-div2">
        <h3>Primer momento</h3>
        <small>Estructuración</small>
      </div>
      <div className="submodulo-div3">
        <h3>Segundo Momento</h3>
        <small>Maquetación </small>
      </div>
      <div className="submodulo-div4">
        <h3>Tercer momento</h3>
        <small>Montaje </small>
      </div>
      <div className="submodulo-div5">
        <ul>
          <li>JavaScript (repaso)</li>
          <li>Generalidades SPA</li>
          <li>Node JS</li>
          <li>NPM</li>
          <li>Manejo de Git</li>
        </ul>
      </div>
      <div className="submodulo-div6">
        <ul>
          <li>React</li>
          <li>Componentes</li>
          <li>Props</li>
          <li>Rutas</li>
          <li>Hooks (useState)</li>
          <li>Hooks (useEffect)</li>
          <li>Hooks (useContext)</li>
          <li>Manejo de Git</li>
        </ul>
      </div>
      <div className="submodulo-div7">
        <ul>
          <li>Concepto API</li>
          <li>Postman</li>
          <li>Consumo Api</li>
          <li>Axios</li>
          <li>Fetch</li>
          <li>Pruebas unictarias (Introducción)</li>
          <li>Despliegue a un servidor</li>
          <li>Manejo de Git</li>
        </ul>
      </div>
      <Link to="/plan-suroeste" className="btn-continuar">
        Plan estudio
      </Link>
    </div>
  );
};

export default WebDos;
