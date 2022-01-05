import React from "react";
import '../App.css'

const Card= (prop) => {
    return (
        <div className="card card-block">
            <img className="card-img-top" src={prop.imagen} alt=""/>
            <div className="card-body">
                <h3 className="card-title">{prop.nombre}</h3>
                <p className="card-text">{prop.precio}</p>
                <p className="card-text">{prop.codigo}</p>
            </div>
            
        </div>
    )
}

export default Card