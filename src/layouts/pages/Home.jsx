import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo.png'

const Home = () => {
    return (
        <section className='home'>
            <h1>Escuela de nuevas tecnologias</h1>
            <div className='home-glass'>
            </div>
            <Link className='medellin' to='/plan'>TÉCNICO LABORAL COMO ASISTENTE EN DESARROLLO DE SOFTWARE - MEDELLIN</Link>
            {/* <div className='home-glass'>
            </div>
            <Link className='suroeste' to='/perfil'>TÉCNICO LABORAL COMO ASISTENTE EN DESARROLLO DE SOFTWARE - SUROESTE</Link> */}
            <img src={logo} alt="Logo" />
        </section>
    )
}

export default Home 