import { Link } from "react-router-dom";


function LoginForm () {

    const handleSubmit = (e) => {
        e.preventDefault();
        // TODO: login action
        alert('submitted')
    }

    return (
        <div>
            <form onSubmit={(e)=>handleSubmit(e)}>
                <label>Email</label>
                <input placeholder='e.g. email-address@constance.com'></input>
                <label>Password</label>
                <input placeholder='Enter Password'></input>
                <input type="submit" className="button" value="Login"/>
            </form>
            Need an account?
            <Link to='/signup'><button>Sign-up</button></Link>
        </div>
    )
}

export default LoginForm;