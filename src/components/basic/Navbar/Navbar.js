import React, {useState, useEffect} from 'react';
import "./Navbar.css"
import { isAuthenticated } from '../../../auth/loginAPI';
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';
import Axios from 'axios';
import { API } from '../../../API'



const Navbar = () => {
	const cartItems = useSelector(state => state.cart);
	const [categories, setCategories] = useState([]);
	const [refresh, setRefresh] = useState(false);

	useEffect(() => {
		getCategories();
	}, [])
	

	const getCategories = () => {
		Axios.get(`${API}/shop/get_categories`).then(response=>{
			var rspnse = response.data;
			console.log(rspnse.data);
			setCategories(rspnse);
			}).catch(error=>{
				console.log(error);
			})
	}

	if(!localStorage.getItem('cart')){
		var obj = {
			"product": [],
			"tax": 100,
			"voucher" : [],
			"original_price":0,
			"discounted_price":0,
			"voucher_discount":0,
			"shipping_cost":40,
			"items_count" : 0
		
		}
		localStorage.setItem('cart',JSON.stringify(obj));
	}
	// const [cartCount ,setCartCount] = useState(JSON.parse(localStorage.getItem('cart')).items_count)

	// const updateCartCount = () => {
	// 	setCartCount(JSON.parse(localStorage.getItem('cart')).items_count);
	// }
    return(
		<header class="section-header">
		<section class="header-main">
			<nav class="navbar navbar-expand-lg navbar-light px-2 py-3">
				<div class="col-lg-2 col-md-4 col-sm-2 text-center">
					<Link to="/" class="navbar-brand">
						<div class="">
							<img class="logo" width='40' height="40" src={`${API}/static/images/logo.png`} />
						</div>
						<p style={{fontSize: 15+"px !important;"}}><b>Natural Marbles</b></p>
					</Link>
				</div>
		
				<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
					<span class="navbar-toggler-icon"></span>
				  </button>
				<div class="collapse navbar-collapse" id="navbarSupportedContent">
					<div class="col-lg-10 col-md-8 col-sm-10 mx-auto">
						<div class="row align-items-center justify-content-right">
							<div class="col-lg-6 col-md-8">
		
								<form action="#" class="">
									<div class="input-group">
										<input type="search" class="form-control" style={{width:55+"% !important" }}placeholder="Search" />
			
										<button class="btn btn-secondary">
											<i class="fa fa-search text-white"></i>
										</button>
									</div>
								</form>
			
			
							</div>
							<div class="col-lg-4 align-items-center px-5">
								<ul class="navbar-nav ml-auto">
									<li class="nav-item active">
										<a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
									</li>
									<li class="nav-item active">
										<Link class="nav-link" to="/about">About</Link>
									</li>
									<li class="nav-item active">
										<Link class="nav-link" to="/shop">Shop</Link>
									</li>

									<li class="dropdown">
										<button class="btn btn-outline-default dropdown-toggle text-capitalize" type="button"
											id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
											
											Categories
											
										</button>
										<ul class="dropdown-menu" aria-labelledby="dropdownMenuButton2">
											{
												categories.map((item,key) => (
													<Link to={`/category/${item.slug}`} className='dropdown-item'>{item.name}</Link>
												))
											}
											
											
										</ul>
									</li>
									<li class="nav-item active">
										<Link class="nav-link" to="/contact">Contact</Link>
									</li>

									{/* <li class="nav-item">
										<Link to="/shop/cart_view" style={{width:70+"px",height:10+"px"}} class="d-block nav-link btn-sm">
											<i class="fa fa-shopping-cart d-inline"></i><span style={{height:10+"px"}}> (<span
													id="cart_count">{cartCount}</span>) </span>
										</Link>
									</li> */}
		
								</ul>
							</div>
						</div>
		
						
					</div>
				</div>
		
		
		
			</nav>
		</section>


	</header>
	);
  };
export default Navbar;
