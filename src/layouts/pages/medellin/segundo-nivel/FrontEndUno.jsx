import React from 'react'
import '../../../../submodulos.css'
import { Link } from 'react-router-dom'
const FrontEndUno = () => {
    return (
        <div className="submodulo-parent">
            <div className="submodulo-div1">
                <section>
                    <h1>FrontEnd 1 (Lenguaje)</h1>
                    <p><strong>Objetivo:</strong><small>Desarrollar competencias para construir aplicaciones web con JavaScript (solo front) (JS).</small></p>
                </section>
                <section>
                    <p>El conocimiento adquirido en este submódulo tiene un alcance netamente a la construcción de sitios web dinámicas por medio de JS en la manipulación del DOM. No hay comunicación a base de datos ni la intervención de JS en el Back (node JS)</p>
                </section>
            </div>
            <div className="submodulo-div2">
                <h3>Primer momento</h3>
                <small>Estructuración</small>
            </div>
            <div className="submodulo-div3">
                <h3>Segundo Momento</h3>
                <small>Estructura y DOM </small>
            </div>
            <div className="submodulo-div4">
                <h3>Tercer momento</h3>
                <small>DOM </small>
            </div>
            <div className="submodulo-div5">
                <ul>
                    <li>Generalidades JS</li>
                    <li>ECMASCript +6</li>
                    <li>Ciclos</li>
                    <li>Condicionales</li>
                    <li>Funciones</li>
                    <li>Manejo de Git</li>
                </ul>
            </div>
            <div className="submodulo-div6">
                <ul>
                    <li>Arreglos</li>
                    <li>Objetos</li>
                    <li>DOM</li>
                    <li>Traversing</li>
                    <li>Manejo de Git</li>
                </ul>
            </div>
            <div className="submodulo-div7">
                <ul>
                    <li>CallBacks</li>
                    <li>CallStack</li>
                    <li>Promesas</li>
                    <li>Async-Await</li>
                    <li>API REST (concepto)</li>
                    <li>Consumo de una API</li>
                    <li>Manejo de Git</li>
                </ul>
            </div>
            <Link to='/plan-medellin' className='btn-continuar'>Plan estudio</Link>
        </div>
    )
}

export default FrontEndUno