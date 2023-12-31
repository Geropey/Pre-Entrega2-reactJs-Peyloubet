import './ItemCount.css'
import { useState } from 'react'

const ItemCount = ({stock, initial, onAdd}) => {
    const [quantity, setQuantity] = useState(initial)

    const increment = () => {
        if (quantity < stock) {
            setQuantity(quantity + 1)
        }
    }

    const decrement = () => {
        if(quantity > 1) {
            setQuantity(quantity - 1)
        }
    }

    return(
        <div className='counter'>
            <div className='controls'>
                <button className="button" onClick={decrement}>-</button>
                <h4 className='Number'>{quantity}</h4>
                <button className="button" onClick={increment}>+</button>
            </div>
            <button className='button' onClick={() => onAdd(quantity)}>Agregar al carrito</button>

        </div>
                
    )
}

export default ItemCount