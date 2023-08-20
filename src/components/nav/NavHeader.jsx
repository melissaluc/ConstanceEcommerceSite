import { Link } from "react-router-dom";
import { useState } from "react";
import './NavHeader.scss'
import NavPane from "./NavPane";
import Search from "../search/Search";
import {ReactComponent as CartIcon} from '../../assets/icons/shopping-bag-outline.svg'
import {ReactComponent as BrandIcon} from '../../assets/icons/brandicon.svg'


function NavHeader(){
    const [isLoggedIn,setLogin] = useState(null);
    const [showNavPane, setShowNavPane] = useState(false)
    const [navLinkTxt, setNavLinkTxt] = useState("")
    const [cartCounter, setCartCounter] = useState(0)




    const popUp = (e, linktxt)=>{
        setNavLinkTxt(linktxt)
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
                    <Search/>
                </div>
            </div>
            <ul className="nav__links">
                <li>
                    {/* TODO: creater link components input text to show maintain the same dimentions and styling */}
                    <Link to="../contact" onMouseOver={(e)=>popUp(e,"contact")} >Contact</Link>
                </li>
                <li>
                    <Link to="../about"  onMouseOver={(e)=>popUp(e,"about")} >About</Link>
                </li>
                <li>
                    <Link to="../products/" onMouseOver={(e)=>popUp(e,"clothing")}>Clothing</Link>
                </li>
                <li>
                    <Link to="../products/" onMouseOver={(e)=>popUp(e,"bags")}>Bags</Link>
                </li>
            </ul>
            {
            showNavPane && 
            <div>
                {/* Set below navpane */}
                
                <div onMouseLeave={()=>setShowNavPane(false)}>
                    <NavPane navLinkTxt={navLinkTxt}/>
                </div>
            </div>
            }

        </div>
    )
}

export default NavHeader;