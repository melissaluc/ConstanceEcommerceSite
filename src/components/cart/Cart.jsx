import CartProductCard from '../cards/cartproductcard/CartProductCard'
import './Cart.scss'

function Cart(){
    return(
        <div>
            <div className='cart'>
                <h1>Cart</h1>
                <CartProductCard/>
            </div>
        </div>
    )
}

export default Cart;