import './Gallery.scss'
import GalleryProductCard from "../cards/galleryproductcard/GalleryProductCard";
import axios from 'axios';
import {useState, useEffect} from 'react'

function Gallery ({selectedCategory, selectedCategory2}) {

    
    const [products, setProducts] = useState([])
    const [product_name, setProductName] = useState([])
    const [ProductDetailURL, setProductDetailURL] = useState([])

    useEffect(()=>{
        // Update the API URL based on selectedCategory2 and fetch products
        let URL = `http://localhost:5000/api/v1/product_inventory/products?category_1=${selectedCategory}`;
        if (selectedCategory2) {
            console.log(selectedCategory2)
            URL += `&category_2=${selectedCategory2}`;
        }
        axios.get(URL)
            .then((data)=>{
                console.log(data)
                setProducts(data.data)

                

            })
            .catch((err)=>{console.log(err)})
    },[selectedCategory,selectedCategory2])


    return(
        <div className='gallery'>
            <ul className='gallery__products'>
                {
                    products.map((product)=>{

                        return(
                        <li key={product.product_id}>
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