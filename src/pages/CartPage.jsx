import Cart from "../components/cart/Cart";

function CartPage({cartCounter,setCartCounter}){
    return(
        <div>
            {cartCounter==0?
            <h2>Nothing</h2>:
            <div>
                <Cart/>
            </div>
            }    

        </div>

    )
}

export default CartPage;