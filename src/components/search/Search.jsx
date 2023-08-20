import { ReactComponent as SearchIcon } from "../../assets/icons/search.svg";

function Search() {
    return (
        <div>
            <SearchIcon className='nav__icon'/>
            <input placeholder="search"></input>
        </div>
    )
}

export default Search;