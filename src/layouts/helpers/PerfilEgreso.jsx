import React from "react";
import { Link } from "react-router-dom";
import perfil from "../../assets/perfil-egreso.jpg";
const PerfilEgreso = () => {
  return (
    <div className="perfil">
      <section className="perfil-info">
        <h2>Perfil de egreso</h2>
        <p>
          Al finalizar el programa, el egresado contará con las capacidades para
          desarrollar aplicativos tipo web y para dispositivos, utilizando
          herramientas, metodologías y lenguajes de programación requeridos por
          el entorno productivo, demostrando respeto, orden y creatividad en su
          desempeño
        </p>
      </section>
      <section className="perfil-img">
        <img src={perfil} alt="" />
      </section>
      <Link to="/plan" className="btn-continuar">
        Plan Estudio
      </Link>
    </div>
  );
};

export default PerfilEgreso;
