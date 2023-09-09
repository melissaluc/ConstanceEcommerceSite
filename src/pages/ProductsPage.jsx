import Gallery from "../components/gallery/Gallery";
import axios from 'axios';
import {useState, useEffect} from 'react'
import { useLocation } from 'react-router-dom'
import { useCategory } from "../components/CategoryContext";
import { useCategory2 } from "../components/Category2Context";
import FilterPane from '../components/filterproducts/FilterPane'
import SortPane from '../components/filterproducts/SortPane'
import './ProductsPage.scss'
import {useParams} from 'react-router-dom'
import Loading from "../components/loading/Loading";
function ProductsPage(){
    const { selectedCategory } = useCategory();
    const { selectedCategory2 } = useCategory2();
    const [data, setData] = useState([]);
    const [URL, setURL] = useState("");
    const {category_1,category_2}=useParams();

    // useEffect(()=>{
    //     getProductData()
    // }

    // ,[])

    const getProductData = (data, URL)=>{
        setData(data)
    }


    return(
        <div>
            {!data? <Loading/>
            :
            <div className="product-page">
            <div className="product-page__filterpane">
                <FilterPane data={data} URL={URL}/>
            </div>
            <div>
                <h1>{category_1}</h1>
                <SortPane  data={data}/>
                <Gallery getProductData={getProductData}/>
            </div>
            </div>
            }
        </div>
    )
}

export default ProductsPage;