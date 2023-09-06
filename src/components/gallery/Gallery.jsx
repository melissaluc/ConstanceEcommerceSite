import './Gallery.scss'
import GalleryProductCard from "../cards/galleryproductcard/GalleryProductCard";
import axios from 'axios';
import {useState, useEffect} from 'react'

function Gallery ({query_str}) {
    const URL = `http://localhost:5000/api/v1/product_inventory/products${query_str}`
    const [products, setProducts] = useState([])
    const [ProductDetailURL, setProductDetailURL] = useState([])

    useEffect(()=>{
        axios.get(URL)
            .then((data)=>{
                console.log(data)
                setProducts(data.data)
                

            })
            .catch((err)=>{console.log(err)})
    },[])


    return(
        <div className='gallery'>
            <ul className='gallery__products'>
                {
                    products.map((product)=>{
                        
                        return(
                        <li>
                            <GalleryProductCard product={product}/>
                        </li>
                        )
                    })

                }
            </ul>
        </div>
    )
}

export default Gallery;