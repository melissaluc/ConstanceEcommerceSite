import { ReactComponent as SearchIcon } from "../../assets/icons/search.svg";
import Select from 'react-select';
import axios from 'axios'
import { useState, useEffect, useRef } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import './Search.scss'

function Search() {
    // const searchInput = useRef(baseURL);
    const baseURL = `https://constance-luxury.onrender.com/api/v1/product_inventory/`
    const navigate = useNavigate()
    const [search, setSearch] = useState('');
    const [isVisible, setIsVisible] = useState(true);
    const componentRef = useRef(null);
    const inputRef = useRef(null);
    const [searchParams, setSearchParams] = useSearchParams();
    useEffect(()=>{
        let searchValue = searchParams.get('search');
        setSearch(searchValue)
    }, [])
    
    

    const handleOnChange = (e)=>{
        // console.log(opt.product_name) 
        setSearch(e.target.value)
        setSearchParams({product_name: e.target.value});
        // console.log(e.target.value)
    }

    // Show the input field when hovering over the search icon
    const handleMouseEnter = () => {
        setIsVisible(true);
    };

    // Hide the input field when mouse leaves the search area
    const handleMouseLeave = () => {
        setIsVisible(false);
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.get(baseURL+`?category_1=${search}&category_2=${search}&category_3=${search}&product_name=${search}`)
        .then((result)=>{
            setSearch(result.data)
            console.log(result.data)
        })
        .catch(err=>console.log(err))
        // navigate(`/login`);
    };

    // Handle clicks outside the search input to hide it
    const handleDocumentClick = (e) => {
        if (componentRef.current && !componentRef.current.contains(e.target)) {
        setIsVisible(false);
        }
    };
        // Handle input focus and blur events
    const handleInputFocus = () => {
        setIsVisible(true);
    };

    const handleInputBlur = () => {
        setIsVisible(false);
    };

    // Attach the document click event listener
    useEffect(() => {
        document.addEventListener("mousedown", handleDocumentClick);
        return () => {
        document.removeEventListener("mousedown", handleDocumentClick);
        };
    }, []);


    useEffect(()=>{
        axios.get(baseURL)
        .then((res)=>{
            setSearch(res.data)
        })
        .catch((err)=>{console.log(err)})
    },[])

    return (
        <div className="search-container">
            <form className="search-container__form" onSubmit={handleSubmit}>
                    <div
                    className="search-icon-container "
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    ref={componentRef}
                    >
                    <SearchIcon className="nav__icon" />
                    {isVisible ?
                        <input
                        type="text"
                        name='search'
                        className="search"
                        placeholder="Search..."
                        ref={inputRef}
                        onFocus={handleInputFocus}
                        onBlur={handleInputBlur}
                        onChange={(e)=>{handleOnChange(e)}}
                        />
                    :<div></div>}
                    </div>
        </form>

        </div>
    )
}

export default Search;