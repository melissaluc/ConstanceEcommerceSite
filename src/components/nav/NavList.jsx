import '../nav/NavList.scss'
import {Link} from 'react-router-dom'
import { useState } from 'react'
import {useParams } from "react-router-dom";


function NavList({products, navLinkTxt,selectedCategory2, updateCategory2 }){

    const handleCategoryClick = (category) => {
        updateCategory2(category);
      };


    return (
        <div className='nav__main-category'>
            {products.filter((p)=>{return p.category_1==navLinkTxt}).map(item=>{
                return(
                    <div>
                        <h3 className='nav__main-category'>{item.category_1.toUpperCase()}</h3>
                        <ul>
                            {Object.keys(item.category_2).map((key)=>{
                                return(
                                    <Link to={`../collection/${navLinkTxt}/${key}`} onClick={()=>{handleCategoryClick(key)}}>
                                        <li className='nav__secondary-category'>
                                            {key.replace("_"," ")}
                                        </li>
                                    </Link>
                                )
                            })}
                        </ul>
                    </div>
                )
            })}
        </div>
    )
}

export default NavList;