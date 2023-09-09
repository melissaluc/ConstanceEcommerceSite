import './Button.scss'

function Button ({type, text, onClick}) {

    if(type!=='submit') {
        return(
            <button className='button' onClick={onClick}>
                {text}
            </button>
        )
    }
    else {
        return(
            <input className='button' type='submit' value={text} onClick={onClick}></input>
        )
    }
}
export default Button;