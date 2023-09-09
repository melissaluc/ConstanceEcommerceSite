import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import {useRef, useState, useEffect} from 'react'
import Cookies from 'js-cookie';

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
            console.log(res.data)
            navigate(`/user`)
            handleLogin(true)
            
        })
        .catch((err)=>{console.log(err)})
        
    }

    return (
        <div>
            <form onSubmit={(e)=>handleSubmit(e)} ref={formRef}>
                <label name='email'>Email</label>
                <input name='email' type="text" placeholder='e.g. email-address@constance.com'></input>
                <label name='password'>Password</label>
                <input name='password' type="text" placeholder='Enter Password'></input>
                <input type="submit" className="button" value="Login"/>
            </form>
            Need an account?
            <Link to='/signup'><button>Sign-up</button></Link>
        </div>
    )
}

export default LoginForm;