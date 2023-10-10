

const Item = ({id, name, img, price, stock}) => {
    return(
        <article className="CardItem">
            <header className="Header">
                <h2 className="ItemHeader">
                    {name}
                </h2>
            </header>
        </article>
    )
}
export default Item;