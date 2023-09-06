import Gallery from "../components/gallery/Gallery";
import axios from 'axios';
import {useState, useEffect} from 'react'
import { useLocation } from 'react-router-dom'

function ProductsPage({query_str}){
    // const useState()
    // useLocation()

    return(
        <div>
            <h1></h1>
            <Gallery query_str={query_str}/>
        </div>
    )
}

export default ProductsPage;