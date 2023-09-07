import Gallery from "../components/gallery/Gallery";
import axios from 'axios';
import {useState, useEffect} from 'react'
import { useLocation } from 'react-router-dom'
import { useCategory } from "../components/CategoryContext";
import { useCategory2 } from "../components/Category2Context";

function ProductsPage(){
    const { selectedCategory } = useCategory();
    const { selectedCategory2 } = useCategory2();
    // const useState()
    // useLocation()


    return(
        <div>
            <h1>{selectedCategory}</h1>
            <Gallery selectedCategory={selectedCategory} selectedCategory2={selectedCategory2} />
        </div>
    )
}

export default ProductsPage;