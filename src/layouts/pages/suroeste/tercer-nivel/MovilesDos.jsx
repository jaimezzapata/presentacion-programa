import React from "react";
import "../../../../submodulos.css";
import { Link } from "react-router-dom";
const MovilesDos = () => {
  return (
    <div className="submodulo-parent">
      <div className="submodulo-div1">
        <section>
          <h1>Programación de aplicaciones moviles 2</h1>
          <p>
            <strong>Objetivo:</strong>
            <small>
              Desarrollar competencias para codificar bajo el paradigma de
              programación Orientado a Objetos (POO) implementando un framework de desarrollo
            </small>
          </p>
        </section>
        <section>
          <p>
            El presente submódulo aborda las bases de la programación orientada
            a Objetos enfocado en el uso de Java como lenguaje de programación y
            aplicado al Framework SpringBoot, donde se aprenderá a construir
            servicios web
          </p>
          <p>
            El submódulo por requerimientos de seretaría de educacion tiene el
            nombre de "moviles 2" ya que hace parte del plan de estudio que se
            oferta a grupos regulares
          </p>
        </section>
      </div>
      <div className="submodulo-div2">
        <h3>Primer momento</h3>
        <small>Generalidad</small>
      </div>
      <div className="submodulo-div3">
        <h3>Segundo Momento</h3>
        <small>Generalidad e implementación </small>
      </div>
      <div className="submodulo-div4">
        <h3>Tercer momento</h3>
        <small>Implementación </small>
      </div>
      <div className="submodulo-div5">
        <ul>
          <li>API Rest</li>
          <li>Patron MVC</li>
          <li>Patron por capas</li>
          <li>Patron Hexágonal</li>
          <li>Spring Boot generalidades</li>
          <li>Spring Boot entidades</li>
          <li>Manejo de Git</li>
        </ul>
      </div>
      <div className="submodulo-div6">
        <ul>
          <li>Spring Boot entidades</li>
          <li>Spring Boot Repositorios</li>
          <li>Spring Boot Servicios</li>
          <li>Spring Boot Controladores</li>
          <li>Manejo de Git</li>
        </ul>
      </div>
      <div className="submodulo-div7">
        <ul>
          <li>Documentación API</li>
          <li>Cosntrucción de DTO</li>
          <li>Pruebas Unitarias</li>
          <li>Manejo de Git</li>
        </ul>
      </div>
      <Link to="/plan-suroeste" className="btn-continuar">
        Plan estudio
      </Link>
    </div>
  );
};

export default MovilesDos;
