import './NavPane.scss'
import NavList from './NavList';
import axios from 'axios'
import {useState, useEffect} from 'react'
import { useCategory2 } from "../Category2Context";

function NavPane({navLinkTxt, selectedCategory, selectedCategory2, updateCategory2, setShowNavPane}){
    const URL = 'https://constance-luxury.onrender.com/api/v1/product_inventory/categories'

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
            <NavList setShowNavPane={setShowNavPane} products={products} navLinkTxt={navLinkTxt} selectedCategory2={selectedCategory2} updateCategory2={updateCategory2}/>
        </div>
    )}

export default NavPane;