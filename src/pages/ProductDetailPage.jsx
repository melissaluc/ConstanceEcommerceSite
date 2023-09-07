import { useParams } from "react-router-dom";


function ProductDetailPage(){
    const { category_1, category_2, category_3, product_name } =useParams;

    return(
        <h1>ProductDetail Page</h1>
    )
}

export default ProductDetailPage;