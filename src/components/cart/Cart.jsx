import CartProductCard from '../cards/cartproductcard/CartProductCard'
import './Cart.scss'
import { useNavigate } from 'react-router-dom'
import Button from '../buttons/Button'
import axios from 'axios'
import Cookies from 'js-cookie';
import { useEffect } from 'react'

function Cart({cart,setCart}){
    const navigate = useNavigate();
    const URL = 'http://localhost:5000/api/v1/orders'

    function generateRandomString(length) {
        const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
        let result = "";
      
        for (let i = 0; i < length; i++) {
          const randomIndex = Math.floor(Math.random() * charset.length);
          result += charset[randomIndex];
        }
      
        return result;
      }
      
      useEffect(()=>{

      },[cart])



      const handleSubmit = (e)=>{
  
        const order_no = generateRandomString(7)
        const user_id = Cookies.get('user_id').replace(/"/g, '') && 'guest'
        const rowsToSend = cart.map((item)=>{        
            return {       
                user_id:user_id,
                product_uid:item.product_uid,
                quantity: item.quantity,
                order_no:order_no
            }
            
        })
        // rowsToSend['headers'] = {"Content-Type":"application/json; charset=utf-8"}

        axios.post(URL,rowsToSend)
        .then(()=>{
            setCart([])
            localStorage.removeItem('cart')
            navigate('/')

        })
        .catch((err)=>{console.log(err)})
       
    }

    


    return(
        <div>
            <div className='cart'>
                <h1>Cart</h1>
                { !cart.length? <h1>Empty</h1>: cart.map((i)=>{
                    return(
                        <CartProductCard item={i}/>

                    )
                }
                )}
            </div>
            {!cart.length?<div></div>:<Button onClick={(e)=>{handleSubmit(e)}}text="CHECKOUT" type="submit">Checkout</Button>}
        </div>
    )
}

export default Cart;