import LoginForm from '../components/forms/LoginForm'


function LoginPage({handleLogin}){
    return(
        <div>
            <h1>Login Page</h1>
            <LoginForm handleLogin={handleLogin}/>
        </div>

    )
}

export default LoginPage;