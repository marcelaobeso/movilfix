import React from "react";
import Card from "./tarjetaProducto";
import '../App.css'

const Cards = () => {
    return (
        <div className="container d-flex justify-content-center ">
            <div className="row">
                <div className="col-md-4">
                    <Card/>
                </div>
                <div className="col-md-4">
                    <Card/>
                </div>
                <div className="col-md-4">
                    <Card/>
                </div>
            </div>
        </div>
    );
}

export default Cards;
