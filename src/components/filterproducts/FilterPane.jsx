import { useEffect, useState } from 'react'
import './FilterPane.scss'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom';
import {ReactComponent as BackIcon} from '../../assets/icons/arrow-sm-left-svgrepo-com.svg'

function FilterPane({data,URL}){
    const [category, setCategory] = useState([]);
    const [subcategory, setSubCategory] = useState([]);
    const [selectCategory, setSelectCategory] = useState([]);
    const [selectSubcategory, setSelectSubCategory] = useState([]);

    const {category_1, category_2, category_3, product_name} = useParams();
    useEffect(()=>{
        setCategory(getUnique(data,'category_2'))
        setSubCategory(getUnique(data,'category_3'))

    }

    ,[data])

    const handleOnClick=(category_2,category_3)=>{
        setSelectCategory(category_2)
        setSelectSubCategory(category_3)
    }

    
    const getUnique = (arr, attr)=>{
        
        const unique = arr.filter(
            (obj, index) =>
              arr.findIndex(
                (item) => item[attr] === obj[attr]
              ) === index
          )

        return unique
    }



    return(
        <div className="filterpane">
        <div className="filterpane__group">
                        {    category.map((i)=>{
                            return(
                                <div className="filterpane__category2">
                                    <Link to={`/collection/${category_1}`} >{category_3?<BackIcon className="back-icon" style={{ width: '40px', height: '40px' }} />:""}<h3>{i.category_2.replaceAll("_"," | ").toUpperCase()}</h3></Link>
                                    {subcategory.filter((p)=>p.category_2 === i.category_2).map((i)=>{
                                    return(
                                        <div className="filterpane__category3">
                                            <Link to={`/collection/${category_1+"/"+i.category_2+"/"+i.category_3}`}>
                                            {i.category_3.replaceAll("_"," ").toUpperCase()}
                                            </Link>
                                        </div>
                                    ) 
                                    })}
                                </div>
                                )  
                        })
                        }
            </div>
        </div>
    )
}

export default FilterPane;