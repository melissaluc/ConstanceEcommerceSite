import { Link, useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import './NavHeader.scss'
import NavPane from "./NavPane";
import Search from "../search/Search";
import {ReactComponent as CartIcon} from '../../assets/icons/shopping-bag-outline.svg'
import {ReactComponent as BrandIcon} from '../../assets/icons/brandicon.svg'
import { useCategory } from "../CategoryContext";
import { useCategory2 } from "../Category2Context";
import Button from '../buttons/Button'

function NavHeader({isLoggedIn, cartCounter, handleLogin}){
    const { selectedCategory, updateCategory } = useCategory("");
    const { selectedCategory2, updateCategory2 } = useCategory2("");
    const [showNavPane, setShowNavPane] = useState(false)
    const [navLinkTxt, setNavLinkTxt] = useState("")
    const navigate = useNavigate();

    const handleCategoryClick = (category) => {
        updateCategory(category);
        updateCategory2(null)
      };


    const handleLogout = ()=>{
        handleLogin(false)
        navigate('/')
    }


    const popUp = (e, linktxt)=>{
        setNavLinkTxt(linktxt)
        sessionStorage.removeItem("authToken")
        setShowNavPane(true)
    }


    return(
        <div className='nav'>
            <div className="nav__top">
                <Link to="../home">
                    <BrandIcon className='nav__logo'/>
                </Link>

                <div>
                    <div>
                        <Link to="../cart"><CartIcon className='nav__icons'/></Link>
                        <Link to="../cart">{`(${cartCounter})`}</Link>
                        <Link to="../cart">Cart</Link>

                    </div>
                    {isLoggedIn? <Link to="../user">Account</Link>:<Link to="../login">Login</Link>}
                    {isLoggedIn && <Button onClick={handleLogout} text='Logout' type='logout'>Logout</Button>}
                    <Search/>
                </div>
            </div>
            <ul className="nav__links">
                {/* <li key='contact'>
                    <Link to="../contact">CONTACT</Link>
                </li> */}
                {/* <li key='about'>
                    <Link to="../about" >ABOUT</Link>
                </li> */}
                <li>
                    <Link to={`../collection/clothing`} onMouseOver={(e)=>popUp(e,"clothing")} onClick={() => handleCategoryClick("clothing")}>CLOTHING</Link>
                </li>
                <li>
                    <Link to={`../collection/athleisure`} onMouseOver={(e)=>popUp(e,"athleisure")} onClick={() => handleCategoryClick("athleisure")}>ATHLEISURE</Link>
                </li>
                <li>
                    <Link to={`../collection/bags`} onMouseOver={(e)=>popUp(e,"bags")} onClick={() => handleCategoryClick("bags")}>BAGS</Link>
                </li>
            </ul>
            {
            showNavPane && 
            <div>
                {/* Set below navpane */}
                
                <div onMouseLeave={()=>setShowNavPane(false)}>
                    <NavPane navLinkTxt={navLinkTxt} selectedCategory={selectedCategory} selectedCategory2={selectedCategory2} updateCategory2={updateCategory2}/>
                </div>
            </div>
            }

        </div>
    )
}

export default NavHeader;