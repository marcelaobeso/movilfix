import React from "react";

<<<<<<< Updated upstream
const Card= () => {
    return (
        <div>
            <h1>TARJETA</h1>
            
        </div>
=======
const Card = (prop) => {
    return (
            <div className="box">
                <div className="photo">
                    <img className="photo_square" src={prop.imagen} alt=""/>
                </div>
                <div className="text">
                    <h3 className="text_name">{prop.nombre}</h3>
                    <p className="text_cost">{prop.precio}</p>
                    <p className="text_code">{prop.codigo}</p>
                </div>
            </div>
>>>>>>> Stashed changes
    )
}

export default Card
