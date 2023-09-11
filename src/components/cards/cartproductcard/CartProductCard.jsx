
import './CartProductCard.scss'
import { useNavigate, Link } from 'react-router-dom';
function CartProductCard ({item}) {
    
    const navigate = useNavigate();

    return (
        <div className='cart__line-item' id={`${item.product_name}__${item.product_id}`}>
            <div className='cart__product-img'>
                Insert Image
            </div>
            <div className='cart__info'>
                <Link to={`/collection/${item.category_1}/${item.category_2}/${item.category_3}/${item.product_name}/colour=${item.colour}`}>
                    <h3>
                        {item.product_name}
                    </h3>
                </Link>
                <p>
                    {item.product_uid}
                </p>
                <p>
                    colour: {item.colour}
                </p>
                <p>
                    size: {item.size}
                </p>
                <p>
                    quantity: {item.quantity}
                </p>
                <p>
                    price: {item.price}
                </p>
                <p>
                    $ {(parseInt(item.quantity)*parseFloat(item.price)).toLocaleString()}
                </p>

            </div>
        </div>
    )
}

export default CartProductCard;