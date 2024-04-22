import React from 'react'
import '../../../../submodulos.css'
import { Link } from 'react-router-dom'
const MovilesDos = () => {
    return (
        <div className="submodulo-parent">
            <div className="submodulo-div1">
                <section>
                    <h1>Programación de aplicaciones moviles 1</h1>
                    <p><strong>Objetivo:</strong><small>Desarrollar competencias para codificar bajo el modelo Programación Orientada a Objetos-POO</small></p>
                </section>
                <section>
                    <p>El presente submódulo aborda las bases de la programación orientada a Objetos enfocado en el uso de Java como lenguaje de programación</p>
                </section>
            </div>
            <div className="submodulo-div2">
                <h3>Primer momento</h3>
                <small>Fundamentos POO</small>
            </div>
            <div className="submodulo-div3">
                <h3>Segundo Momento</h3>
                <small>Fundamentos y Aplicacion POO </small>
            </div>
            <div className="submodulo-div4">
                <h3>Tercer momento</h3>
                <small>Aplicacion POO </small>
            </div>
            <div className="submodulo-div5">
                <ul>
                    <li>POO</li>
                    <li>Clases</li>
                    <li>Objetos</li>
                    <li>Abstraccion</li>
                    <li>Constructores</li>
                    <li>Manejo de Git</li>
                    <li>Getter y Setters</li>
                </ul>
            </div>
            <div className="submodulo-div6">
                <ul>
                    <li>Herencia</li>
                    <li>Polimorfismo</li>
                    <li>Clases abstractas</li>
                    <li>Interfaces</li>
                    <li>Manejo de Git</li>
                </ul>
            </div>
            <div className="submodulo-div7">
                <ul>
                    <li>Dependencias</li>
                    <li>Maven</li>
                    <li>Graddle</li>
                    <li>JPA</li>
                    <li>Hibernate</li>
                    <li>CRUD</li>
                    <li>Manejo de Git</li>
                </ul>
            </div>
            <Link to='/plan' className='btn-continuar'>Plan estudio</Link>
        </div>
    )
}

export default MovilesDos