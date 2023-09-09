import Cart from "../components/cart/Cart";

function CartPage({cartCounter,setCartCounter, cart,setCart}){
    return(
        <div>
            {!cart.length?<div>Empty</div>:
            <div>
                <Cart cart={cart} setCart={setCart}/>
            </div>

            }


        </div>

    )
}

export default CartPage;