<<<<<<< Updated upstream
=======
import React from "react";
import Card from "./tarjetaProducto";
import '../App.css'
import img0001 from '../assets/3-5AuxAudioCable-M.png';
import img0002 from '../assets/EarphoneExtraBass-M.png';
import img0003 from '../assets/LightningToHeadPhoneJack-M.png';



const info = [
    {
        id: 1,
        nombre: 'Auxiliar 3.5 Audio Cable',
        imagen: img0001,
        precio: 60
    },
    {
        id: 2,
        nombre: 'Earphone Extra Bass',
        imagen: img0002,
        precio: 30
    },
    {
        id: 3,
        nombre: 'Adaptador Lightning to Headphone',
        imagen: img0003,
        precio: 50
    },
    {
        id: 4,
        nombre: 'Adaptador Lightning to Headphone',
        imagen: img0003,
        precio: 50
    },
    {
        id: 5,
        nombre: 'Earphone Extra Bass',
        imagen: img0002,
        precio: 30
    },
    {
        id: 1,
        nombre: 'Auxiliar 3.5 Audio Cable',
        imagen: img0001,
        precio: 60
    },
]
const Cards = () => {
    return (
        <div className="container d-flex justify-content-center">
            <div className="row equal">

                {
                    info.map(card => (
                        <div className="col-sm-4 d-flex pb-3">
                            <Card
                                key={card.id}
                                codigo={card.id}
                                nombre={card.nombre}
                                precio={card.precio}
                                imagen={card.imagen}
                            />
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default Cards;
>>>>>>> Stashed changes
