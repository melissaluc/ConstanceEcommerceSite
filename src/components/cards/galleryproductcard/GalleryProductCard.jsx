import { useEffect, useState } from 'react';
import './GalleryProductCard.scss'
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import ProductColorOptions from './ProductColorOptions/ProductColorOptions';


function GalleryProductCard ({product}) {
    const [productDetails, setProductDetails]=useState([]);
    const [defaultColour, setDefaultColour]=useState("");



    const URL = `http://localhost:5000/api/v1/product_inventory?category_1=${product.category_1}&category_1=${product.category_2}&category_1=${product.category_3}`
    useEffect(()=>{

        axios.get(URL)
            .then((data)=>{
                setProductDetails(data.data.filter((p)=>p.product_name===product.product_name))
                setDefaultColour(data.data.filter((p)=>p.product_name===product.product_name)[0].colour)
                // console.log('productDetail:',productDetails)
                // console.log('productDetail:',data.data)
            })
            .catch((err)=>{
                console.log(err)
            })
  
    },[])

    return(
        <div className='gallery__product-card'>
            <div className="gallery__product-img">
                {`Insert Picture of Product:${product.product_name +"\n"+ product.product_id}`}
            </div>
            <div className="gallery__product-details">
                <Link to={`/collection/${product.category_1}/${product.category_2}/${product.category_3}/${product.product_name}/colour=${defaultColour}`}>
                    <h4>{product.product_name.replaceAll("_"," ").toUpperCase()}</h4>
                </Link>
                <div className='gallery__colorblock'>
                    {
                        productDetails.map((p, index)=>{
                            return(
                                 <Link to={`/collection/${product.category_1}/${product.category_2}/${product.category_3}/${p.product_name}/colour=${p.colour}`} className='gallery__colorblock-row'><ProductColorOptions color={p.colour}/></Link>
                            )
                        })

                    }   
                </div>
                {product.max_price == product.min_price?
                    <p>${new Intl.NumberFormat().format(product.max_price)}</p>
                    :
                    <p>${new Intl.NumberFormat().format(product.min_price)} - ${new Intl.NumberFormat().format(product.max_price)}</p>
                }
            </div>
        </div>
    )
}

export default GalleryProductCard;