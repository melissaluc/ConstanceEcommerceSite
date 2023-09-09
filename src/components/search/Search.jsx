import { ReactComponent as SearchIcon } from "../../assets/icons/search.svg";
import Select from 'react-select';
import axios from 'axios'
import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

function Search() {
    // const searchInput = useRef(baseURL);
    const baseURL = `http://localhost:5000/api/v1/product_inventory/product_in`
    const navigate = useNavigate()
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
        <form onSubmit={()=>{navigate(`/login`)}}>
            <SearchIcon className='nav__icon'/>
                <input></input>
        </form>
    )
}

export default Search;