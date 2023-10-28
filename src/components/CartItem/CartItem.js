const CartItem = ({name, id, price, quantity}) => {

    return(
    
        <div>
    
            <p>{name}</p>
    
            <p>{price}</p>
    
            <p>{quantity}</p>
    
            <button>Borrar item</button>
    
        </div>
    
    )
    
    }
    
    export default CartItem