import React from "react";
import { Link } from "react-router-dom";

const PlanEstudioMedellin = () => {
  return (
    <div className="parent">
      <div className="div1">
        <h2>Tipo Competencia</h2>
      </div>
      <div className="div2">
        <h2>Módulos</h2>
      </div>
      <div className="div3">
        <h2>Nivel I</h2>
      </div>
      <div className="div4">
        <h2>Nivel II</h2>
      </div>
      <div className="div5">
        <h2>Nivel III</h2>
      </div>
      <div className="div6">
        <p>Modulos de programación</p>
      </div>
      <div className="div7">
        <p>Módulo de Movilidad</p>
      </div>
      <div className="div8">
        <p>Obligatorias del programa</p>
      </div>
      <div className="div9">
        <p>Módulo Web</p>
      </div>
      <div className="div10">
        <p>Módulo Comun</p>
      </div>
      <div className="div11">
        <p>Obligatorias Intitucionales</p>
      </div>
      <div className="div12">
        <Link to={"/logica-de-programacion"}>Lógica de programación</Link>
      </div>
      <div className="div13">
        <Link to={"/bases-datos"}>Gestión de bases de datos</Link>
      </div>
      <div className="div14">
        <Link to={"/introduccion-programacion"}>
          Introducción a la programación
        </Link>
      </div>
      <div className="div15">
        <Link>Cátedra ser emprendedor</Link>
      </div>
      <div className="div16">
        <Link to={"/moviles-uno"}>BackEnd 1 (Lenguaje)</Link>
      </div>
      <div className="div17">
        <Link to={"/web-uno"}>FronEnd 1 (Lenguaje)</Link>
      </div>
      <div className="div18">
        <Link to={"/analisis-diseño"}>Metodologías Ágiles</Link>
        <small>
          <strong>220501131</strong>
        </small>
      </div>
      <div className="div19">
        <Link to={"/nuevas-tecnologias"}>
          Nuevas tecnologías de la programación
        </Link>
      </div>
      <div className="div20">
        <Link to={"/moviles-dos"}>BackEnd 2 (Framework)</Link>
      </div>
      <div className="div21">
        <Link to={"/web-dos"}>FrontEnd 2 (Framework)</Link>
        <small>
          <strong>220501123</strong>
        </small>
      </div>
      <Link to="/" className="btn-continuar">
        Home
      </Link>
    </div>
  );
};

export default PlanEstudioMedellin;
