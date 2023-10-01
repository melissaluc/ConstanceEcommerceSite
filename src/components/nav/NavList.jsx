import '../nav/NavList.scss'
import {Link} from 'react-router-dom'
import { useState } from 'react'
import {useParams } from "react-router-dom";


function NavList({products, navLinkTxt,selectedCategory2, updateCategory2,setShowNavPane }){

    const handleCategoryClick = (category) => {
        updateCategory2(category);
        setShowNavPane(false)
      };


    return (
        <div className='nav__container'>
            {products.filter((p)=>{return p.category_1==navLinkTxt}).map(item=>{
                return(
                    <div className='nav__category-container' key={item.category_1}>
                        <p className='nav__category1-header'>{item.category_1.toUpperCase()}</p>
                        <ul className='nav__category2'>
                            {Object.keys(item.category_2).map((key)=>{
                                return(
                                    <Link className='nav__category3' key={key.category_2} to={`../collection/${navLinkTxt}/${key}`} onClick={()=>{handleCategoryClick(key)}}>
                                        <li key={key.category_2}>
                                            {key.replace("_"," ").toUpperCase()}
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