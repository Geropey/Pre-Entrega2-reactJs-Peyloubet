import ItemCount from "../ItemCount/ItemCount"

const ItemDetail = ({id, name, img, category, description, price, stock}) => {
    return (
        <article className="CardItem">
            <header className="header">
                <h2 className="ItemHeader">
                    {name}
                </h2>
            </header>
            <picture>
                <img src={img} alt={name} className="ItemImg"/>
            </picture>
            <section>
                <p className="info">
                    categoria: {category}
                </p>
                <p className="info">
                    descripcion: {description}
                </p>
                <p className="info">
                    precio: ${price}
                </p>
            </section>
            <footer className="ItemFooter">
                <ItemCount initial={1} stock={stock} onAdd={(quantity)=> console.log('cantidad agregada ')}></ItemCount>
            </footer>
        </article>
    )
}