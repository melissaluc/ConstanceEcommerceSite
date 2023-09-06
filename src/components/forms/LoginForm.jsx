import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import {useRef, useState, useEffect} from 'react'


function LoginForm ({handleLogin}) {
    const formRef = useRef();
    const navigate = useNavigate();

    const URL = 'http://localhost:5000/api/v1/users/login'

    const handleSubmit = (e) => {
        e.preventDefault();
        // TODO: login action
        const {email, password} = formRef.current
        axios.post(URL, {headers:{
            email_address:email.value,
            password:password.value,
            "Content-Type":"application/json; charset=utf-8"
        }})
        .then((res)=>{
            sessionStorage.setItem('authToken',JSON.stringify(res.data.token));
            navigate(`../home`)
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