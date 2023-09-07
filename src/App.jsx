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
import { CategoryProvider } from "./components/CategoryContext";
import { Category2Provider } from "./components/Category2Context";



function App() {

  const [isLoggedIn,setLogIn] = useState(sessionStorage.getItem('authToken')?true: false)
  const [cartCounter, setCartCounter] = useState(0)

  const handleLogin = (state)=>{
    setLogIn(state)
  }
  return (
    <div className="App">
      <BrowserRouter>
        <CategoryProvider>
        <Category2Provider>

        <NavHeader isLoggedIn={isLoggedIn} cartCounter={cartCounter} handleLogin={handleLogin}/>
        <Routes>
          <Route path='/' element={<LandingPage/>}/>
          <Route path='/home' element={<LandingPage/>}/>
          <Route path='/about' element={<AboutPage/>}/>
          <Route path='/contact' element={<ContactPage/>}/>
          <Route path="/collection/:category_1/:category_2/:category_3/:product_name/:colour" element={<ProductDetailPage/>}/>
          <Route path='/collection/:category_1/:category_2' element={<ProductsPage/>}/>
          <Route path='/collection/:category_1' element={<ProductsPage/>}/>
          <Route path='/login' element={<LoginPage handleLogin={handleLogin}/>}/>
          <Route path='/signup' element={<SignupPage/>}/>
          <Route path='/cart' element={<CartPage cartCounter={cartCounter} setCartCounter={setCartCounter}/>}/>
          <Route path='/checkout' element={<CheckoutPage/>}/>
          <Route path='/user' element={<UserPage/>}/>
        </Routes>

        </Category2Provider>
        </CategoryProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
