import './Gallery.scss'
import GalleryProductCard from "../cards/galleryproductcard/GalleryProductCard";
import axios from 'axios';
import {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
function Gallery ({selectedCategory, selectedCategory2,getProductData, sortby_date}) {

    
    const [products, setProducts] = useState([])
    const [product_name, setProductName] = useState([])
    const [ProductDetailURL, setProductDetailURL] = useState([])
    const {category_1, category_2, category_3}=useParams();
    
    useEffect(()=>{
        // Update the API URL based on selectedCategory2 and fetch products
        let URL = `http://localhost:5000/api/v1/product_inventory/products?products.category_1=${category_1}`;
        if (category_2) {
            URL += `&products.category_2=${category_2}`;
        }
        if (category_3){
            URL += `&products.category_3=${category_3}`
        }
        if(sortby_date){
            URL += `&sort=product_inventory.updated_on+sortby_date`
        }
        console.log('URL-->',URL)
        axios.get(URL)
            .then((data)=>{
                console.log(data)
                setProducts(data.data)
                getProductData(data.data, URL)
                

            })
            .catch((err)=>{console.log(err)})
    },[category_1, category_2])


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