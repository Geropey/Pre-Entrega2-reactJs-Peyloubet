import { useContext } from 'react'
import cart from './Assets/cartt.png'
import './CartWidget.css'
import { CartContext } from '../../Context/Context'
import { Link } from 'react-router-dom'

const CartWidget = () => {
    const { totalQuantity } = useContext(CartContext)
    return (
        <Link to='/cart' className='CartWidget' style={{ display: totalQuantity > 0 ? 'block' : 'none'}}> 
        <div className='cartt'>
            <img src={cart} alt="cart-widget"/>
            {totalQuantity}
        </div>
        </Link>
    )
}

export default CartWidget