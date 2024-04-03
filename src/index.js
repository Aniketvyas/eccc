import { Provider } from 'react-redux';
import React, {useEffect} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import RouteDetails from './RouteDetails';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from  "./components/layout/Home"
import Login from  "./components/layout/Login"
import Logout from  "./components/layout/Logout"
import Contact from './components/layout/Contact';
import About from './components/layout/About';
import Register from './components/layout/Register';
import Shop from "./components/layout/Shop"
import Products from './components/layout/Products';
import { store } from './store/store';
import Cart from './components/layout/Cart';
import Checkout from './components/layout/Checkout';
import Category from './components/layout/Category';
import Categories from './components/layout/Categories'
import Blog from "./components/layout/Blog";
import SingleBlog from './components/layout/SingleBlog';
import axios from 'axios';
import Loader from './components/basic/Loader/Loader';
import App from './App';

// const cart_obj = {
//     "product": [],
//     "tax": 0,
//     "voucher" : [],
//     "items_count" : 0

// }
// export const cartAtom = atom(cart_obj);



const root = ReactDOM.createRoot(document.getElementById('root'));



ReactDOM.render(
//   <Router>
//     <Routes>
//     <Route path='/' element={<Home />} />
//     </Routes>
  
// </Router>RouteDetails
<Provider store={store}>
    {/* <App /> */}
<Router>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/product/:slug" element={< Products />} />
        {/* <Route path="/logout" element={<Logout />} /> */}
        <Route path="/register" element={<Register />} />
        <Route path="/shop/cart_view/" element={<Cart />} />
        <Route path="/shop/checkout/" element={<Checkout />} />
        <Route path="/category/:slug" element={<Category />} />
        <Route path='/categories' element={<Categories />} />
        <Route path="/blogs" element={<Blog />} />
        <Route path='/blog/:slug' element={<SingleBlog />} />
    </Routes>
</Router>
</Provider>
, document.getElementById('root')
)


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
