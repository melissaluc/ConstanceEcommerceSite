import { ReactComponent as SearchIcon } from "../../assets/icons/search.svg";
import Select from 'react-select';
import axios from 'axios'
import { useState, useEffect, useRef } from "react";


function Search() {
    // const searchInput = useRef(baseURL);
    const baseURL = `http://localhost:5000/api/v1/product_inventory/product_in`

    const [SearchData,setSearchData] = useState([]);
    const [search, setSearch] = useState(false);

    const handleOnChange = (opt)=>{
        console.log(opt.product_name) 
        setSearch(true)
    }


    useEffect(()=>{
        axios.get(baseURL)
        .then((res)=>{
            setSearchData(res.data)
            console.log(SearchData)
        })
        .catch((err)=>{console.log(err)})
    },[])

    return (
        <div>
            <SearchIcon className='nav__icon'/>
                <Select options={SearchData}
                onChange={handleOnChange}/>
        </div>
    )
}

export default Search;