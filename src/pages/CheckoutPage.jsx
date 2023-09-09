import { Link } from "react-router-dom";
import { useState } from "react";
function CheckoutPage({cart,isLoggedIn}){

    const [showCheckout,setShowCheckout]=useState(false);

    return(
        <div>
            {!showCheckout?
            <div>
                <h1>Checkout Page</h1>
                {isLoggedIn? <div>Welcome!</div>:<div>Would you like to log in? <Link to='/login'>Login</Link> <button onClick={()=>{setShowCheckout(true)}}>Continue</button></div>}
            </div>
            :
            <div>
                {  
                
                    cart.map((item)=>{
                    return(<div>
                        {item.product_name}
                    </div>)
                })}

            </div>
            }

        </div>
    )
}

export default CheckoutPage;