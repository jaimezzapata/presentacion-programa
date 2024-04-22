import React from 'react'
import '../../../../submodulos.css'
import { Link } from 'react-router-dom'
const IntroduccionProgramacion = () => {
    return (
        <div className="submodulo-parent">
            <div className="submodulo-div1">
                <section>
                    <h1>Introducción a la programación</h1>
                    <p><strong>Objetivo:</strong><small>Desarrollar competencias asociadas a la solución a la maquetación y construcción de interfaces de usuario</small></p>
                </section>
                <section>
                    <p>El presente submódulo aborda temas básicos de maquetación por medio de HTML y CSS y herramientas como Bootstrap</p>
                    <p>Tener presente que el submódulo solo abarca los temas de construcción desde el código, y no hay intervención de creación o diseño de MockUps previos</p>
                </section>
            </div>
            <div className="submodulo-div2">
                <h3>Primer momento</h3>
                <small>Interfaz de usuario</small>
            </div>
            <div className="submodulo-div3">
                <h3>Segundo Momento</h3>
                <small>Experiencia e interfaz de usuario </small>
            </div>
            <div className="submodulo-div4">
                <h3>Tercer momento</h3>
                <small>Experiencia de usuario</small>
            </div>
            <div className="submodulo-div5">
                <ul>
                    <li>Semántica HTML</li>
                    <li>Estructuras de carpetas</li>
                    <li>Git básico (crear, clonar, y ramificar repos)</li>
                    <li>Tablas</li>
                    <li>Formularios</li>
                    <li>IDE</li>
                </ul>
            </div>
            <div className="submodulo-div6">
                <ul>
                    <li>Introducción CSS</li>
                    <li>Selectores CSS</li>
                    <li>BoxModel</li>
                    <li>FlexBox</li>
                    <li>Position</li>
                </ul>
            </div>
            <div className="submodulo-div7">
                <ul>
                    <li>Pseudoclases</li>
                    <li>Pseudoelementos CSS</li>
                    <li>Media Querys</li>
                    <li>Transiciones</li>
                    <li>Bootstrap</li>
                </ul>
            </div>
            <Link to='/plan' className='btn-continuar'>Plan estudio</Link>
        </div>
    )
}

export default IntroduccionProgramacion