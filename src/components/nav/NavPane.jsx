import './NavPane.scss'
import NavList from './NavList';


function NavPane({navLinkTxt}){
    return(
        <div className='nav__pane'>
            I'm a Pain! {navLinkTxt}
            <NavList/>
        </div>
    )
}

export default NavPane;