import '../nav/NavList.scss'
import {Link} from 'react-router-dom'

function NavList(){
    const listItem = ['list item','sadsa']

    return (
        <div className='nav__main-category'>
            <h3 className='nav__main-category-header'>Section</h3>
            <ul>
                {
                    listItem.map((item)=>{
                        return(
                        <li className='nav__secondary-category'>
                            <Link>
                                {item}
                            </Link>
                        </li>
                        )
                    }   
                    )
                }
            </ul>
        </div>
    )
}

export default NavList;