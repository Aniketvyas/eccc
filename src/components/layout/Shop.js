
import React, { useState,useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import Axios from 'axios';
import { API } from '../../API'
import { Link } from "react-router-dom";
import Navbar from '../basic/Navbar/Navbar';
import Footer from '../basic/Footer/Footer';
import ProductCard from '../basic/ProductCard/ProductCard';


const Contact = () => {

    const [product_data_shop,setProduct_data_shop]=useState([]);
    const [refresh,setRefresh]=useState(true);
    const [loading, setLoading] = useState(false);
    useEffect(()=>{
        (async()=>{
            try{
                get_products();
                
            } catch(error){
                console.log("useEffect Error")
                console.log(error)
            }
        })();
    },[refresh])

    const get_products=()=>{
		  setLoading(true);
        Axios.get(`${API}/shop/get_products`).then(response=>{
          console.log("pehla",product_data_shop,response.data);
              setProduct_data_shop(response.data)
              console.log(product_data_shop);
              setLoading(false);
          }).catch(error=>{
              console.log(error);
              setLoading(false);
          })
    }
    const re_fresh = () => {
        setRefresh(!refresh);
    }


    if(loading){
      document.getElementById("loader").classList.remove("hidden");
    }
    else{
      document.getElementById("loader").classList.add("hidden");
    
    return(
        <>
        <Navbar />
            <section className="bg-gold pt-3 pb-3">
            <div className="container">
            <ol className="breadcrumb ondark mb-0">
                <li className="breadcrumb-item text-dark"><Link to="/">Home</Link></li>
                <li className="breadcrumb-item active text-dark" aria-current="page"><Link to="/shop">Shop</Link></li>
            </ol>
            </div>
            </section>
            <section className="pt-4">
<div className="container">

<div className="row">

	<main className="col-lg-12">
		
    <header className="d-sm-flex align-items-center border-bottom mb-4 pb-3 mx-3">
       
        <div className="ms-auto">
          <div className="dropdown">
            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
              Sort By
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li><Link to="/shop/sortby/recommended" className="dropdown-item" >Recommended</Link></li>
              <li><Link to="/shop/sortby/priceLowToHigh" className="dropdown-item">Price Low to High</Link></li>
              <li><Link to="/shop/sortby/priceHighToLow" className="dropdown-item">price High to Low</Link></li>
            </ul>
          </div>
        </div>
    </header>

    <div className="jumbotron-original">
      <div className="row">
        
        {
            product_data_shop.map((product,index) => (
                <ProductCard productData={product} key={index} refresh={refresh} setRefresh={setRefresh} />
            ))
            
        }
          {/* <div className="col-lg-3 col-md-6 col-sm-6">
            <figure className="card card-product-grid">
              <div className="img-wrap"> 
                <img src="/media/{{i.image}}"> 
              </div>
              <figcaption className="info-wrap border-top">
                <div className="price-wrap">
                 <Link to="product/{{i.slug}}" className="text-dark" style="text-decoration: none;"><strong>{{i.name}}</strong></Link><br>
                 {% if i.discounted_price %}
                  <strong className="price"><i className="fa fa-inr"></i> {{i.discounted_price}}</strong>
                  <del className="price-old"><i className="fa fa-inr"></i> {{i.price}}</del>
                  {% else %}
                  <strong className="price"><i className="fa fa-inr"></i> {{i.price}}</strong>
                  {% endif %}
                </div> <!-- price-wrap.// -->
                <p className="title mb-2">{{i.description|truncatechars:50}}</p>
  
                <!-- <Link to="/shop/addtocart/{{i.slug}}" className="btn btn-secondary">Add to cart</Link> -->
                {% if i.quantity %}
                <Link to="/shop/buy/{{i.slug}}" className="btn  btn-secondary"> Buy now </Link>
								
                <button onclick="addToLocalStorage('{{i.id}}',1,'{{i.slug}}')" className="btn btn-secondary">Add to cart</button>
                <Link to="#" className="btn btn-light btn-icon"> <i className="fa fa-heart"></i> </Link>
                {% else %}
                <p className="text-danger">Item out of stock</p>                
                {% endif %}
              </figcaption>
            </figure>
          </div>  */}

  
          
      </div>
      {/* <ul className="pagination justify-content-center mt-md-5 mt-4">

					{% if products.has_previous %}
					<li className="page-item">
					<Link className="page-link py-2 px-3" to="?page={{ products.previous_page_number }}"><span>&laquo;</span></Link>
					</li>
					{% endif %}
					{% for num in products.paginator.page_range %}
						{% if products.number == num %}
							<li className="page-item active"><span className="page-link active">{{ num }}</span></li>
						{% elif num > products.number|add:'-3' and num < products.number|add:'3' %}
							<li className="page-item"><Link className="page-link" to="?page={{ num }}">{{ num }}</Link></li>
						{% endif %}
					{% endfor %}
					{% if products.has_next %}
						<li className="page-item"><Link className="page-link py-2 px-3" to="?page={{ products.next_page_number }}">
							<span>&raquo;</span>
						</Link></li>
	  
					{% endif %}
					</ul> */}
					


    </div>

    <hr />



    

	</main> 
</div> 

</div> 
</section>

<Footer />
        </>


    )
}
}

export default Contact;