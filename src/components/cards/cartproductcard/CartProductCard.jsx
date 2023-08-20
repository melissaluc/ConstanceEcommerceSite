
import './CartProductCard.scss'

function CartProductCard () {
    return (
        <div className='cart__line-item'>
            <div className='cart__product-img'>
                Insert Image
            </div>
            <div className='cart__info'>
                <p>
                    Product Name
                </p>
                <p>
                    Color
                </p>
                <p>
                    Size
                </p>
                <p>
                    Quantity
                </p>

            </div>
        </div>
    )
}

export default CartProductCard;