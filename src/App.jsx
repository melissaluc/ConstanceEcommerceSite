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
import {useState, useEffect} from 'react'
import { CategoryProvider } from "./components/CategoryContext";
import { Category2Provider } from "./components/Category2Context";
import Cookies from 'js-cookie';


function App() {

  const [isLoggedIn,setLogIn] = useState(Cookies.get('authToken')?true:false)
  const [cartCounter, setCartCounter] = useState(0)
  const [cart, setCart] = useState([]);
  const [userData, setUserData] =useState(false)

  useEffect(() => {
    sessionStorage.getItem('authToken')
    console.log(userData)
  }, [isLoggedIn]);

  useEffect(() => {
    // Retrieve cart data from localStorage
    const storedCart = localStorage.getItem('cart');
  
    // If there's cart data in localStorage, parse it and update the cart state
    if (storedCart) {
      setCart(JSON.parse(storedCart));
      setCartCounter(cart.length)
    }
  }, []);

  useEffect(()=>{
    setCartCounter(cart.length)
  },[cart])

    // Function to add a product to the cart
    const addToCart = (product) => {

      
      // Check if the product is already in the cart
      const existingProduct = cart.find((item) => item.product_uid === product.product_uid);
  
      if (existingProduct) {
        // If the product is already in the cart, update its quantity
        const updatedCart = cart.map((item) =>
          item.product_uid === existingProduct.product_uid
            ? { ...item, quantity: product.quantity }
            : item
        );
        setCart(updatedCart);
      } else {
        // If it's a new product, add it to the cart
        setCart([...cart, product]);
        localStorage.setItem('cart', JSON.stringify([...cart, product]));
        

      }
    };




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
          <Route path="/collection/:category_1/:category_2/:category_3/:product_name/:colour" element={<ProductDetailPage addToCart={addToCart} isLoggedIn={isLoggedIn} userData={userData}/>}/>
          <Route path='/collection/:category_1/:category_2/:category_3' element={<ProductsPage/>}/>
          <Route path='/collection/:category_1/:category_2' element={<ProductsPage/>}/>
          <Route path='/collection/:category_1' element={<ProductsPage/>}/>
          <Route path='/login' element={<LoginPage handleLogin={handleLogin} setUserData={setUserData}/>}/>
          <Route path='/signup' element={<SignupPage/>}/>
          <Route path='/cart' element={<CartPage cartCounter={cartCounter} setCartCounter={setCartCounter} cart={cart} setCart={setCart} isLoggedIn={isLoggedIn}/>}/>
          <Route path='/checkout' element={<CheckoutPage isLoggedIn={isLoggedIn} cart={cart}/>}/>
          <Route path='/user' element={<UserPage userData={userData}/>}/>
        </Routes>

        </Category2Provider>
        </CategoryProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
