import React from 'react'
import "./Footer.css"

function Footer() {
  return (
    <div className="Footer">
        <div className="Store">
            <h1>⚡ POWER RANGERS STORE</h1>
            <p>Los mejores productos de tus Power Rangers
                Favoritos. Calidad garantizada y envio a todo el mundo.
            </p>
        </div>
        <div className="Contacto">
            <h1>Contacto</h1>
            <p>📩 info@powerrangers.com</p>
            <p>📞 (555) 123-4567</p>
        </div>
        <div className="Siguenos">
            <h1>Siguenos</h1>
            <div>
                <a>Facebook</a>
                <a>Twitter</a>
                <a>Instagram</a>
            </div>
        </div>
    </div>
  )
}

export default Footer