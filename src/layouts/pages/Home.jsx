import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <section className='home'>
            <h1>Escuela de nuevas tecnologias</h1>
            <div className='home-glass'>
            </div>
            <Link to='/perfil'>PLAN DE ESTUDIO TÉCNICO LABORAL COMO ASISTENTE EN DESARROLLO DE SOFTWARE</Link>
            <img src="public/logo.png" alt="Logo" />
        </section>
    )
}

export default Home