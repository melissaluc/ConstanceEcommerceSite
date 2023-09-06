import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './ProductColorOptions.scss'


function ProductColorOptions({color}){

    return(
        <div className={`gallery__colorblock-${color}`}>

        </div>
    )


}


export default ProductColorOptions;