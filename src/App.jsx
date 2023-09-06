import logo from './logo.svg';
import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage,';
import ProductDetailPage from './pages/ProductDetailPage';
import ProductsPage from './pages/ProductsPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import UserPage from './pages/UserPage';
import NavHeader from './components/nav/NavHeader';
import {useState} from 'react'

function App() {

  const [isLoggedIn,setLogIn] = useState(sessionStorage.getItem('authToken')?true: false)
  const [cartCounter, setCartCounter] = useState(0)

  const handleLogin = (state)=>{
    setLogIn(state)
  }
  return (
    <div className="App">
      <BrowserRouter>
        <NavHeader isLoggedIn={isLoggedIn} cartCounter={cartCounter} handleLogin={handleLogin}/>
        <Routes>
          <Route path='/' element={<LandingPage/>}/>
          <Route path='/home' element={<LandingPage/>}/>
          <Route path='/about' element={<AboutPage/>}/>
          <Route path='/contact' element={<ContactPage/>}/>
          <Route path='/products/:filter' element={<ProductsPage/>}/>
          <Route path='/product/:id' element={<ProductDetailPage/>}/>
          <Route path='/login' element={<LoginPage handleLogin={handleLogin}/>}/>
          <Route path='/signup' element={<SignupPage/>}/>
          <Route path='/cart' element={<CartPage/>}/>
          <Route path='/checkout' element={<CheckoutPage/>}/>
          <Route path='/user' element={<UserPage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
