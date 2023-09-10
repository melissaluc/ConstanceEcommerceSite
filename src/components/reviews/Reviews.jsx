import axios from "axios";
import {useRef, useState, useEffect} from 'react'
import Button from '../buttons/Button'
import Cookies from 'js-cookie';
import Rating from '../rating/Rating'
import './Reviews.scss'
import {useParams} from 'react-router-dom'

function Reviews({isLoggedIn, product_id ,userData}){
    const {category_1, category_2, category_3,product_name}=useParams()
    const formRef = useRef();
    const [text, setText] = useState('');
    const [reviews, setReviews] = useState([]);
    


    
    const postURL = `https://constance-luxury.onrender.com/api/v1/reviews`
    const getURL = `https://constance-luxury.onrender.com/api/v1/reviews?reviews.product_id=${product_id}`




    const handleSubmit = (e)=>{
        e.preventDefault();
        const reviewValue = formRef.current.review.value;
        // const ratingValue = formRef.current.rating.value;
        const user_id = Cookies.get('user_id').replace(/"/g, '')
        // TODO: check if user made a comment and want to edit --put ep
        const product_review ={
            product_id:product_id,
            user_id:user_id,
            review:reviewValue.value,
            // rating:ratingValue,
            rating:0,
            first_name:Cookies.get('first_name').replaceAll(/"/g, ""),
            last_name:Cookies.get('last_name').replaceAll(/"/g, "")
        }

        const postReview = 
            {
                product_id:product_id,
                user_id:user_id,
                review:reviewValue,
                // rating:ratingValue,
                rating:0,
                headers:{
                    "Content-Type":"application/json; charset=utf-8"
                }
            }
        
        axios.post(postURL,postReview )
        .then((res)=>{
            console.log('res-->',res)
            setReviews([...reviews, product_review]);
            setText('')
        })
        .catch((err)=>{console.log(err)})
    }


    useEffect(()=>{
        axios.get(getURL)
            .then((data)=>{
                console.log('backend reviews',data.data)
                setReviews(data.data)
                
            })
            .catch((err)=>{console.log(err)})
    },[])


    return(
        <div className="review-section" > 
            <div className="review-section__header-container">
                <h3 className="review-section__header">REVIEWS</h3>
            </div>
            {isLoggedIn ?
            <form className="review-section__review-form" onSubmit={(e)=>{handleSubmit(e)}} ref={formRef}>
                {/* <Rating/> */}
                {/* <label name='rating'>Rating</label>
                <input name='rating'></input> */}
                <label name='review'></label>
                <textarea name='review' value={text} onChange={(e)=>setText(e.target.value)} placeholder="Add a review"></textarea>
                <Button type='submit' onClick={(e)=>handleSubmit(e)} text='SUBMIT'></Button>
            </form>
            :false}
            {reviews.length>0? reviews.map((r)=>{
                return(
                    <div key={r.user_id}>
                    <div>
                        <div>
                            <h3>{`${r.first_name} ${r.last_name}`}</h3>
                            <h3>{`${r.updated_on}`}</h3>
                        </div>
                        <Rating/>
                    </div>

                    <div>
                        <p>{`${r.review}`}</p>
                    </div>
                </div>
                )
            })
        :
        <div className='review-section__no-reviews'>
            <p>No reviews yet</p>
        </div>}
        </div>
        )
}

export default Reviews;