import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

const Home = () => {
  return (
    <section className="home">
      <h1>Escuela de nuevas tecnologias</h1>
      <section className="planes-home">
        <section className="home-medellin">
          <div className="medellin-glass"></div>
          <Link className="medellin" to="/plan-medellin">
            TÉCNICO LABORAL COMO ASISTENTE EN DESARROLLO DE SOFTWARE - MEDELLIN
          </Link>
        </section>
        <section className="home-suroeste">
          <div className="suroeste-glass"></div>
          <Link className="suroeste" to="/plan-suroeste">
            TÉCNICO LABORAL COMO ASISTENTE EN DESARROLLO DE APLICACIONES INFORMÁTICAS - SUROESTE
          </Link>
        </section>
      </section>
      {/* <div className='home-glass'>
            </div>
            <Link className='suroeste' to='/perfil'>TÉCNICO LABORAL COMO ASISTENTE EN DESARROLLO DE SOFTWARE - SUROESTE</Link> */}
      <img src={logo} alt="Logo" />
    </section>
  );
};

export default Home;
