import React from 'react'
import { Tarjetas } from '../Tarjetas/Tarjetas'
import "./Main.css"

function Main() {
    return (
        <>
            <div className="Textito">
                <h1>¡Es hora de morfear!</h1>
                <p href="">Descubre nuestra increible coleccion de productos oficiales de Power Rangers.
                    Desde cascos hasta armas, tenemos todo lo que necesitas para convertirte en un
                    verdadero heróe.
                </p>
            </div>
            <div className="Tarjetas">
                {Tarjetas}
            </div>
            <div className="TextoFinal">
                <h1>¿Listo para la aventura?</h1>
                <h2>Unete a los Power Rangers y protege el mundo del mal. Cada producto viene con garantia de calidad y autenticidad.</h2>
                <div className="Novedades">
                    <a>🟢Envio gratis en pedidos +$50</a>
                    <a>🔵Garantia de 1 año</a>
                    <a>🔴Productos oficiales</a>
                </div>
            </div>
        </>
    )
}

export default Main