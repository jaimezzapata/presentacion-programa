import React from 'react'
import '../../../submodulos.css'
import { Link } from 'react-router-dom'
const IntroduccionProgramacion = () => {
    return (
        <div className="submodulo-parent">
            <div className="submodulo-div1"> </div>
            <div className="submodulo-div2"> </div>
            <div className="submodulo-div3"> </div>
            <div className="submodulo-div4"> </div>
            <div className="submodulo-div5"> </div>
            <div className="submodulo-div6"> </div>
            <div className="submodulo-div7"> </div>
            <Link to='/plan' className='btn-continuar'>Plan estudio</Link>
        </div>
    )
}

export default IntroduccionProgramacion