import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import {useRef, useState, useEffect} from 'react'
import Cookies from 'js-cookie';
import './LoginForm.scss'
import Button from '../buttons/Button'

function LoginForm ({handleLogin, setUserData}) {
    const formRef = useRef();
    const navigate = useNavigate();

    const loginURL = 'https://constance-luxury.onrender.com/api/v1/users/login'

    const handleSubmit = (e) => {
        e.preventDefault();
        // TODO: login action
        const {email, password} = formRef.current
        axios.post(loginURL, {headers:{
            email_address:email.value,
            password:password.value,
            "Content-Type":"application/json; charset=utf-8"
        }})
        .then((res)=>{
            sessionStorage.setItem('authToken',JSON.stringify(res.data.token),{ expires: 7 });
            Cookies.set('authToken',JSON.stringify(res.data.token) , { expires: 7 });
            Cookies.set('first_name',JSON.stringify(res.data.first_name) , { expires: 7 });
            Cookies.set('last_name',JSON.stringify(res.data.last_name) , { expires: 7 });
            Cookies.set('user_id',JSON.stringify(res.data.user_id) , { expires: 7 });
            setUserData(res.data)
            // console.log(res.data)
            navigate(`/user`)
            handleLogin(true)
            
        })
        .catch((err)=>{console.log(err); })
        
    }

    return (
        <div className="login__container">
            <form className="login__form" onSubmit={(e)=>handleSubmit(e)} ref={formRef}>
                <label className="login__form-labels" name='email'>Email</label>
                <input name='email' type="text" placeholder='e.g. email-address@constance.com'></input>
                <label className="login__form-labels" name='password'>Password</label>
                <input name='password' type="text" placeholder='Enter Password'></input>
                <input className="login__form-button button" type="submit" value="Login"/>
            </form>
            <div className="login__signup-container">
                <p>Need an account?</p>
                <Link className='login__signup-button' to='/signup'><Button text='Sign-up'/></Link>
            </div>
        </div>
    )
}

export default LoginForm;