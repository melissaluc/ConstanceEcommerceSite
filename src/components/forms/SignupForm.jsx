import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import {useRef, useState, useEffect} from 'react'


function SignupForm () {

    const formRef = useRef();
    const navigate = useNavigate();

    const URL = 'http://localhost:5000/api/v1/users/signup'

    const handleSubmit = (e) => {
        e.preventDefault();
        // TODO: login action
        const {email_address, password, phone_number, birthdate, first_name,last_name, address_1, address_2, postalcode, city, state, country} = formRef.current
        axios.post(URL, {
            email_address:email_address.value,
            password:password.value,
            phone_number:phone_number.value,
            birthdate:birthdate.value,
            first_name:first_name.value,
            last_name:last_name.value,
            address_1:address_1.value,
            address_2:address_2.value,
            postalcode:postalcode.value,
            city:city.value,
            state:state.value,
            country:country.value,
            "Content-Type":"application/json; charset=utf-8"
        })
        .then((res)=>{
            res.data.success && navigate(`../login`)
    
            // handleLogin(true)
        })
        .catch((err)=>{console.log(err)})
        
    }
    return (
        <div>
            <form onSubmit={(e)=>handleSubmit(e)} ref={formRef}>
                <label name='email_address'>Email</label>
                <input name='email_address' placeholder='E.g. my-email@constance.com'></input>
                <label name='password'>Password</label>
                <input name='password' placeholder='Password'></input>
                <label name='phone_number'>Phone Number</label>
                <input name='phone_number' placeholder='Phone Number E.g. #+(###)-###-###'></input>
                <label name='first_name'>First Name</label>
                <input name='first_name' placeholder='First Name'></input>
                <label name='last_name'>Last Name</label>
                <input name='last_name' placeholder='Last Name'></input>
                <label name='birthdate'>Birthdate</label>
                <input name='birthdate' placeholder='Birthdate'></input>
                <label name='address_1'>Address 1</label>
                <input name='address_1' placeholder='Address'></input>
                <label name='address_2'>Address 2</label>
                <input name='address_2' placeholder='E.g. Unit # 101'></input>
                <label name='city'>City</label>
                <input name='city' placeholder='City'></input>
                <label name='state'>State</label>
                <input name='state' placeholder='State'></input>
                <label name='postalcode'>Postal Code</label>
                <input name='postalcode' placeholder='Postal Code'></input>
                <label name='country'>Country</label>
                <input name='country' placeholder='Country'></input>
                <input type="submit" className="button" value="Submit"/>
            </form>
        </div>
    )
}

export default SignupForm;