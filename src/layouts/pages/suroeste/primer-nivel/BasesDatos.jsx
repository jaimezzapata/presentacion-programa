import React from "react";
import "../../../../submodulos.css";
import { Link } from "react-router-dom";
const BasesDatos = () => {
  return (
    <div className="submodulo-parent">
      <div className="submodulo-div1">
        <section>
          <h1>Gestión de bases de datos</h1>
          <p>
            <strong>Objetivo:</strong>
            <small>
              Desarrollar competencias asociadas al manejo de datos partiendo de
              un modelo relacional
            </small>
          </p>
        </section>
        <section>
          <p>
            El presente submódulo aborda temas básicos de modelamiento (modelo
            ER y modelo relacional) {""}
            Así mismo, el manejo de consultas en SQL Server en sentencias DDL y
            DML
          </p>
        </section>
      </div>
      <div className="submodulo-div2">
        <h3>Primer momento</h3>
        <small>Diseño</small>
      </div>
      <div className="submodulo-div3">
        <h3>Segundo Momento</h3>
        <small>Diseño y administración </small>
      </div>
      <div className="submodulo-div4">
        <h3>Tercer momento</h3>
        <small>Administración</small>
      </div>
      <div className="submodulo-div5">
        <ul>
          <li>Normalización</li>
          <li>Modelo relacional</li>
          <li>Modelo entidad relacion</li>
          <li>Tipos de datos</li>
          <li>DDL</li>
          <li>SQL Server</li>
        </ul>
      </div>
      <div className="submodulo-div6">
        <ul>
          <li>DDL</li>
          <li>DML</li>
          <li>Consultas</li>
          <li>Funciones Agregadas</li>
          <li>JOIN (Inner, left, right)</li>
        </ul>
      </div>
      <div className="submodulo-div7">
        <ul>
          <li>JOIN (Inner, left, right)</li>
          <li>Procedimientos almacenados</li>
        </ul>
      </div>
      <Link to="/plan-suroeste" className="btn-continuar">
        Plan estudio
      </Link>
    </div>
  );
};

export default BasesDatos;
