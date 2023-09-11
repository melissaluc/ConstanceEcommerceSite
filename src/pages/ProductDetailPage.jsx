import { useParams } from "react-router-dom";
import axios from 'axios';
import {useState, useEffect, useRef} from 'react'
import '../components/cards/galleryproductcard/ProductColorOptions/ProductColorOptions.scss'
import './ProductDetailPage.scss'
import Reviews from "../components/reviews/Reviews";
import Button from '../components/buttons/Button'
import ProductCarousel from "../components/carousel/ProductCarousel";
function ProductDetailPage({addToCart, isLoggedIn, userData}){
    const { category_1, category_2, category_3, product_name, colour } =useParams();
    const formRef = useRef();
    const [productData, setProductData]=useState([]);
    const [productDetail, setProductDetail]=useState(false);
    const [product_id, setProductId]=useState(false);
    const [uniqueSizes, setSizes] = useState([]);
    const [uniqueColours, setColours] = useState([]);
    const [selectedColour, setSelectedColour] = useState(colour.split("=")[0]);
    const [selectedSize, setSelectedSize] = useState("");
    const quantityRef = useRef(0);
    const [quantityValue, setQuantityValue] = useState(1);
    
    const URL = `https://constance-luxury.onrender.com/api/v1/product_inventory?products.category_1=${category_1}&products.category_2=${category_2}&products.category_3=${category_3}&products.product_name=${product_name}`





    const getUnique = (arr, attr)=>{
        
        const unique = arr.filter(
            (obj, index) =>
              arr.findIndex(
                (item) => item[attr] === obj[attr]
              ) === index
          )

        return unique
    }

    useEffect(() => {
        quantityRef.current = quantityRef.current + 1;
      });


    const handleSubmit = (e) =>{
        e.preventDefault();
          // Get selected color and size from the form
        const selectedColorInput = formRef.current.querySelector(
            'input[name="input_colour"]:checked'
        );
        const selectedSizeInput = formRef.current.querySelector(
            'input[name="input_size"]:checked'
        );

        if (!selectedColorInput || !selectedSizeInput) {
            console.error('Please select both color and size.');
            return;
          }

        // const selectedColor = selectedColorInput.value;
        // const selectedColor = selectedColour;
        // const selectedSize = selectedSize;

        // Get the quantity from the form
        const quantityInput = formRef.current.querySelector('input[name="input_quantity"]');
        const quantity = parseInt(quantityInput.value);

        // Check if quantity is valid
        if (isNaN(quantity) || quantity <= 0) {
            console.error('Please enter a valid quantity.');
            return;
        }

        const cartItem = {
            product_id: productData[0].product_id, // Assuming you want the product_id from the first product in productData
            product_uid: productData.filter((p)=>{return(p.size===selectedSize && p.colour===selectedColour)})[0].product_uid, // Assuming you want the product_id from the first product in productData
            product_name: product_name,
            size: selectedSize,
            quantity: quantity,
            colour: selectedColour&&selectedColorInput.value,
            category_1:category_1,
            category_2:category_2,
            category_3:category_3
          };
        console.log('add to Cart',cartItem)
        addToCart(cartItem)
    }

    useEffect(()=>{


        axios.get(URL)
            .then((res)=>{
                const data = res.data
                setProductData(data)
                setProductDetail(data.filter((p)=>{return p.colour==colour.split("=")[1]}))
                const filterSizes = getUnique(data, "size")
                const filterColours = getUnique(data, "colour")
                setSizes(filterSizes)
                setColours(filterColours )
                console.log('productDetail:', data)
                setProductId(data[0].product_id)
            })
            .catch((err)=>{
                console.log(err)
            })
  
    },[category_1, category_2, category_3, product_name, selectedColour])
   
    return(
        <div className="product">
            <div className='product__left'>
                <ProductCarousel/>
                {product_id?
                    <Reviews isLoggedIn={isLoggedIn}  userData={userData} product_id={product_id} product_name={product_name}/>
                :
                    <div>Loading</div>
                }
            
            </div>
            <div className="product__product-details">
                <form onSubmit={handleSubmit} ref={formRef}>
                    <div className="product__product-details-header-container">
                        <h1 className="product__product-details-header">{product_name.replaceAll("_"," ").toUpperCase()}</h1>
                        <div className="product__product-details-colour">{selectedColour && colour.split("=")[1]}</div>
                    </div>
                    <div className="product__product-details-colours options">
                        <label>COLOURS</label>
                        <fieldset>
                        {uniqueColours.map((p)=>{
                            return (
                                <div key={p.colour} className={`product__colour ${selectedColour === p.colour ? 'selected-color' : ''}`} onClick={(e)=>{setSelectedColour(p.colour); e.stopPropagation(); console.log(selectedColour)}}>
                                            <input name='input_colour' id={`colour_${p.colour}`} type='radio' value={`${p.colour}`}></input>
                                            <label aria-hidden="true" className={`product__colorblock-${p.colour}`} name='input_size'>
                                                {/* <span>{p.colour}</span> */}
                                            </label>
                                            </div>
                                          
                            )
                        })}
                        </fieldset>
                    </div>
                    <div className="product__product-details-sizes options">
                        <label>SIZES</label>
                        <fieldset>
                        {uniqueSizes.map((p)=>{
                            return (
                                <div key={p.size} className={(selectedSize==p.size)? "product__size selected-size" :"product__size"} onClick={(e)=>{setSelectedSize(p.size); e.stopPropagation(); console.log(selectedSize)}}>
                                    <input type='radio' name='input_size'  id={`size_${p.size}`} value={`${p.size}`}></input>
                                    <label aria-hidden="true" name='input_size'>
                                        <span>{`${p.size.toUpperCase()}`}</span>
                                    </label>
                                </div>
                            )
                        })}
                        </fieldset>
                    </div>
                    {productDetail&&<div className="product__product-details-notes">{productDetail[0].description}</div>}
                    <div>
                    <div className="product__product-details-materials">
                        <p className="product__product-details-materials-p">Materials</p>
                        {productDetail?<div className="product__product-details-materials-list">{productDetail[0].materials}</div>:<div>Product</div>}

                    </div>
                    </div>
                    <div className="product__product-details-quanity">
            
                            <label name="input_quantity">QUANTITY</label>
                            <input name="input_quantity" value={quantityValue} onChange={(e) => setQuantityValue(e.target.value)}></input>

                    </div>
                    <div className="product__product-details-submit">
                        <Button type='submit' text="ADD TO CART"/>

                    </div>
                    {/* <input type="submit" className="button" value="Add to cart"></input> */}
                </form>
            </div>


        </div>


    )
}

export default ProductDetailPage;