import React from 'react'
import "./Header.css"

function Header()
{
    return (
        <div className="encabezado">
            <a className="Titulo">⚡ POWER RANGERS STORE</a>
            <nav className="Opciones">
                <a>Inicio</a>
                <a>Productos</a>
                <a>Contactos</a>
            </nav>
        </div>
    )
}

export default Header