import './NavPane.scss'
import NavList from './NavList';
import axios from 'axios'
import {useState, useEffect} from 'react'
import { useCategory2 } from "../Category2Context";

function NavPane({navLinkTxt, selectedCategory, selectedCategory2, updateCategory2}){
    const URL = 'http://localhost:5000/api/v1/product_inventory/categories'

    const [products,setProducts] = useState([])



    useEffect(()=>{

        axios.get(URL)
            .then((res)=>{
                // console.log(res.data)
                setProducts(res.data.data)
                console.log(res.data)
   
            })
            .catch((err)=>{
                console.log(err)
            })
    
    },[])

    return(
        <div className='nav__pane'>

            {/* I'm a Pain! {navLinkTxt} */}
            <NavList products={products} navLinkTxt={navLinkTxt} selectedCategory2={selectedCategory2} updateCategory2={updateCategory2}/>
            {/* <NavList section='bags' products={bags}/> */}
        </div>
    )}

export default NavPane;