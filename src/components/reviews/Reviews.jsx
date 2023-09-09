import axios from "axios";
import {useRef, useState, useEffect} from 'react'
import Button from '../buttons/Button'
import Cookies from 'js-cookie';

function Reviews({isLoggedIn, product_id ,userData}){
    const formRef = useRef();

    const postURL = `https://constance-luxury.onrender.com/api/v1/reviews`
    const getURL = `https://constance-luxury.onrender.com/api/v1/reviews?reviews.product_id=${product_id}`
    const [reviews, setReviews] = useState([]);

    const handleSubmit = (e)=>{
        e.preventDefault();
        const reviewValue = formRef.current.review.value;
        const ratingValue = formRef.current.rating.value;

        const product_review ={
            product_id:product_id,
            user_id:Cookies.get('user_id').replace(/"/g, ''),
            review:reviewValue.value,
            rating:ratingValue,
            first_name:Cookies.get('first_name').replaceAll(/"/g, ""),
            last_name:Cookies.get('last_name').replaceAll(/"/g, "")
        }

        const postReview = 
            {
                product_id:product_id,
                user_id:"a4944660-b31b-45b1-868f-b9ec4bb9ee12",
                review:reviewValue,
                rating:ratingValue,
                headers:{
                    "Content-Type":"application/json; charset=utf-8"
                }
            }
        
        console.log('review post ',product_review)
        axios.post(postURL,postReview )
        .then((res)=>{
            setReviews([...reviews,product_review])
        })
        .catch((err)=>{console.log(err)})
    }


    useEffect(()=>{
        axios.get(getURL)
            .then((data)=>{
                setReviews(data.data)
                
            })
            .catch((err)=>{console.log(err)})
    },[reviews])


    return(
        <div>
            {isLoggedIn?
            
            <form onSubmit={(e)=>{handleSubmit(e)}} ref={formRef}>
                <label name='rating'>Rating</label>
                <input name='rating'></input>
                <label name='review'>Review</label>
                <textarea name='review'></textarea>
                <Button type='submit' onClick={(e)=>handleSubmit(e)} text='SUBMIT'></Button>
            </form>
            :false}
            {reviews.length? reviews.map((r)=>{
                return(
                    <div>
                    <div>
                        <div>
                            <h3>{`${r.first_name} ${r.last_name}`}</h3>
                            <h3>{`${r.updated_on}`}</h3>
                        </div>
                        <div>{r.rating}</div>
                    </div>

                    <div>
                        <p>{`${r.review}`}</p>
                    </div>
                </div>
                )
            })
        :<p>No reviews yet</p>}
        </div>
        )
}

export default Reviews;