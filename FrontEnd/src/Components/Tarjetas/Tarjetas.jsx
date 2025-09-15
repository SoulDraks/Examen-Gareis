import "./Tarjetas.css"

const TarjetasInfo = [
    {
        Titulo: "Red Ranger Helmet",
        Descripcion: "Casco oficial del Red Ranger con luces LED y sonidos autenticos",
        Precio: 89.99,
        Imagen: "rojo.jpg"
    },
    {
        Titulo: "Blue Ranger Morpher",
        Descripcion: "Morpher del Blue Ranger con efectos de transformacion",
        Precio: 64.99,
        Imagen: "azul.jpg"
    },
    {
        Titulo: "Pink Ranger Bow",
        Descripcion: "Arco magico del Ping Ranger con flechas de energia",
        Precio: 74.99,
        Imagen: "rosa.jpg"
    },
    {
        Titulo: "Yellow Ranger Shield",
        Descripcion: "Escudo protector del Yellow Ranger con poder de defensa",
        Precio: 69.99,
        Imagen: "rosa.jpg"
    },
    {
        Titulo: "Green Ranger Sword",
        Descripcion: "Espada legendaria del Green Ranger con poder draconico",
        Precio: 94.99,
        Imagen: "Verde.jpg"
    }
]

export const Tarjetas = TarjetasInfo.map((TarjetaInfo, index)=>{
    return (
        <div className="Tarjeta" key={index}>
            <div className="Imagen">
                <img src={TarjetaInfo.Imagen} alt="" srcset="" />
            </div>
            <h1>{TarjetaInfo.Titulo}</h1>
            <h2>{TarjetaInfo.Descripcion}</h2>
            <p>{"$" + TarjetaInfo.Precio}</p>
            <button>Agregar al Carrito</button>
        </div>
    )
})