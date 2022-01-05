import React from "react";
import earphoneExtraBass from "../assets/EarphoneExtraBass-M.png"
import '../App.css'

const Card= () => {
    return (
        <div className="card">
            <img src={earphoneExtraBass} alt="earphones"/>
            <div className="card-body">
                <h3 className="card-title">Tarjeta 1</h3>
            </div>
            
        </div>
    )
}

export default Card