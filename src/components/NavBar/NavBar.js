import CartWidget from "../CartWidget/CartWidget"

const NavBar = () => {
    return (
        <nav>
            <h3>Kasnya</h3>
            <div>
                <button>Remeras</button>
                <button>Tops</button>
                <button>Gorros</button>
            </div>
            <CartWidget />
        </nav>
        
    )
}

export default NavBar