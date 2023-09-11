import LoginForm from '../components/forms/LoginForm'


function LoginPage({handleLogin, setUserData}){
    return(
        <div>
            <h1>Login</h1>
            <LoginForm handleLogin={handleLogin} setUserData={setUserData}/>
        </div>

    )
}

export default LoginPage;