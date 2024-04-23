import React from 'react'
import '../../../../submodulos.css'
import { Link } from 'react-router-dom'
const LogicaDeProgramacionMedellin = () => {
    return (
        <div className="submodulo-parent">
            <div className="submodulo-div1">
                <section>
                    <h1>Lógica de programación</h1>
                    <p><strong>Objetivo:</strong><small>Desarrollar competencias asociadas a la solución de problemas a través de la programación de computadores</small></p>
                </section>
                <section>
                    <p>Este submódulo busca desde la aplicación de un lenguaje de programación (Java) el entedimiento de los conceptos básicos de lógica y del lenguaje como tal. Cabe aclarar que dentro de este módulo se enseña directamente desde la parte operativa y práctica ante diferentes situaciones que se pueden presentar. Los estudiantes no trabajan en la resolución de problemas desde una planeacion estructurada</p>
                </section>
            </div>
            <div className="submodulo-div2">
                <h3>Primer momento</h3>
                <small>Elementos básicos</small>
            </div>
            <div className="submodulo-div3">
                <h3>Segundo Momento</h3>
                <small>Elementos básicos/Estructuras Lógicas </small>
            </div>
            <div className="submodulo-div4">
                <h3>Tercer momento</h3>
                <small>Estructuras Lógicas</small>
            </div>
            <div className="submodulo-div5">
                <ul>
                    <li>Algoritmos</li>
                    <li>Variables</li>
                    <li>Operadores</li>
                    <li>Jeraquia de operaciones</li>
                    <li>Lógica Secuencial</li>
                    <li>Datos de entrada</li>
                    <li>Datos de salida</li>
                    <li>Datos de proceso</li>
                    <li>IDE</li>
                    <li>Java</li>
                </ul>
            </div>
            <div className="submodulo-div6">
                <ul>
                    <li>Condicionales simples</li>
                    <li>Condicionales anidados</li>
                    <li>Condicionales compuestos</li>
                    <li>Condicionales multiples</li>
                </ul>
            </div>
            <div className="submodulo-div7">
                <ul>
                    <li>Ciclo For</li>
                    <li>Ciclo While</li>
                    <li>Ciclo Do-While</li>
                    <li>Métodos</li>
                    <li>Funciones</li>
                    <li>Arreglos Unidimensionales</li>
                </ul>
            </div>
            <Link to='/plan-medellin' className='btn-continuar'>Plan estudio</Link>
        </div>
    )
}

export default LogicaDeProgramacionMedellin