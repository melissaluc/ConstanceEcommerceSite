import {ReactComponent as HeartIcon} from '../../assets/icons/like-svgrepo-com.svg'
import './Rating.scss'
import {useState} from 'react'


function Rating(){
    const [className, setClassName] =useState("");
    
    const handleClassName =()=>{
        setClassName('selected')
    }

    return(
    <div classname='rating-bar'>
        <span>
            <label></label>
            <input type="radio"></input>
        </span>
        <span>
            <label></label>
            <input type="radio"></input>
        </span>
        <span>
            <label></label>
            <input type="radio"></input>
        </span>
      
        {/* <HeartIcon/> */}

    </div>
    )
}

export default Rating;