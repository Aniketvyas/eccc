
import React, { useState,useEffect, useRef } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import Axios from 'axios';
import { API } from '../../API'
import { Link,useParams } from "react-router-dom";
import Navbar from '../basic/Navbar/Navbar';
import Footer from '../basic/Footer/Footer';
import ProductCard from '../basic/ProductCard/ProductCard';
import ContactForm from '../basic/Contact/ContactForm';


const Products = () => {
    const { slug } = useParams();
    const [product,setProduct]=useState({});
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(false);
    const imageRef=useRef();
    // const [refresh,setRefresh]=useState(true);

    useEffect( ()=>{
      get_product();
      get_product_images();
       
    },[])
    
    const get_product= async()=>{
      setLoading(true);
		console.log("inside",slug,`${API}/shop/product/${slug}`)
       await Axios.get(`${API}/shop/product/${slug}`).then(response=>{
        //   console.log("product",product,response.data);
              setProduct(response.data)
              console.log("product",response.data, product);
              setLoading(false);
          }).catch(error=>{
              console.log(error);
              setLoading(false);
          })
    }

    const get_product_images= async()=>{
      console.log("inside",slug,`${API}/shop/product_images/${slug}`)
      setLoading(true);
         await Axios.get(`${API}/shop/product_images/${slug}`).then(response=>{
          //   console.log("product",product,response.data);
                setImages(response.data)
                setLoading(false)
            }).catch(error=>{
                console.log(error);
                setLoading(false);
            })
      }

   


    const changeImage = (e,imageD) => {
      var a = document.getElementById("asdf");
      a.src =  `http://${API}/${imageD}`;
    }


    if(loading){
      document.getElementById('loader').classList.remove("hidden");
    }
    else{
      document.getElementById('loader').classList.add("hidden");
    

return (

    <>
    <Navbar />
    <section className="bg-gold padding-y-sm">
<div className="container">

  <ol className="breadcrumb ondark mb-0">
    <li className="breadcrumb-item"><Link href="/">Home</Link></li>
    <li className="breadcrumb-item"><Link href="/shop">Products</Link></li>
    <li className="breadcrumb-item active" aria-current="page">{product.name} </li>
  </ol>

</div> 
</section>
    
<section className="m-5">
<div className="container-fluid">

<div className="row">
<aside className="col-lg-6">
  <article className="gallery-wrap"> 
    <div className="img-big-wrap">
       <Link to="mygalley"> 
          <img id="asdf" src={`${API}/${product.image}`} ref={imageRef} className="img-fluid" /> 
       </Link>
    </div> 
 <div class="thumbs-wrap my-2">
  {images.map((data,key) => (
    <button onClick={e=> changeImage(e,`${data.image}`)} data-fslightbox="mygalley" data-type="image" class="item-thumb"> 
        <img width="100" height="100" id={`${data.image}`} src={`${API}${data.image}`} /> 
      </button>
  ))}

    </div> 

  </article> 
</aside>
<main className="col-lg-6">
  <article className="ps-lg-3">
    <h4 className="title text-dark text-capitalize">{product.name} </h4>
    <div className="rating-wrap my-3">
      {/* <ul className="rating-stars">
        <li style={width:80+"%"} className="stars-active"> <img src="http://${API}/static/images/misc/stars-active.svg" alt="" /> </li>
        <li> <img src="../../../public/images/misc/starts-disable.svg" alt="" /> </li>
      </ul> */}
      <b className="label-rating text-warning"> 4.5</b>
      <i className="dot"></i>
     
      {
          product.quantity>0? <span className="label-rating text-success px-2">In stock</span> : <span className="label-rating text-danger">Out of stock</span>
      }
      </div> 
      <div className='mb-3'>
      {
        product.discounted_price>0?    
        <>
         <i className="fa fa-inr"></i><var className="price h5"> {product.discounted_price}</var> 
        <del className="text-muted mx-2"><i className="fa fa-inr"></i><var className="text-muted"> {product.price}</var> </del> </>
        :
        <></>
      }
      </div>
     
      
    

    {/* {% if product.quantity %} */}
    <div className="mb-3"> 
    {/* <i className="fa fa-inr"></i><var className="price h5"> {product.discounted_price}</var> */}
      {/* <del className="text-muted">   <i className="fa fa-inr"></i><var className="text-muted"> {product.price}</var> </del> */}
    </div> 
    {/* {% endif %} */}
    <p>{product.description}</p>
    <hr />
    {/* {% if in_stock %}
    {% if product.eligible_for_cod %}
     */}
    {/* {% else %} */}
    <h6 className="text-warning mb-2">Please Note : This Item is not eligible for cash on delivery.</h6>
    {/* {% endif %} */}
    {/* <Link href="/shop/buy/{product.slug}" className="btn  btn-secondary"> Buy now </Link>
    <button className="btn btn-secondary"><i className="me-1 fa fa-shopping-basket"></i> Add to cart </button> */}
    <div className=''>
      <button className='btn btn-secondary' data-bs-toggle="modal" data-bs-target="#exampleModal">Inquire Now</button>

      <div class="modal modal-xl fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <ContactForm />
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" class="btn btn-primary">Save changes</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* {% endif %} */}
  </article> 
</main> 
</div> 


</div> 
</section>

<section class="padding-y bg-light border-top">
<div class="container">
<div class="row">
  <div class="col-lg-8">
<div class="card">
  <header class="card-header">
    <ul class="nav nav-tabs card-header-tabs">
      <li class="nav-item">
        <a href="#" data-bs-target="#tab_specs" data-bs-toggle="tab" class="nav-link active">Specification</a>
      </li>
      <li class="nav-item">
        <a href="#" data-bs-target="#tab_warranty" data-bs-toggle="tab" class="nav-link">Warranty info</a>
      </li>
      <li class="nav-item">
        <a href="#" data-bs-target="#tab_shipping" data-bs-toggle="tab" class="nav-link">Shipping info</a>
      </li>

    </ul>
  </header>
  <div class="tab-content">
    <article id="tab_specs" dangerouslySetInnerHTML={{ __html: `${product.specifications}` }} class="tab-pane show active card-body">
  </article> 
  <article id="tab_warranty" dangerouslySetInnerHTML={{ __html: `${product.warranty_info}` }}class="tab-pane card-body">
  </article>
  <article id="tab_shipping" dangerouslySetInnerHTML={{ __html: `${product.shipping_info}` }} class="tab-pane card-body">
  </article>

  </div>
</div>
  
  </div> 
  <aside class="col-lg-4">

    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Similar items</h5>
         {/* {% for i in related %} */}
        <article class="itemside mb-3">
          <a href="/product/{i.slug}" class="aside">
            <img src="/media/{i.image}" width="96" height="96" class="img-md img-thumbnail"/>
          </a>
          <div class="info">
          <a href="/product/{i.slug}" class="title mb-1">{product.name} </a>
            <strong class="price"><i class="fa fa-inr"></i> {product.price}</strong> 
          </div>
        </article>

        {/* {% endfor %} */}
        

      </div> 
    </div> 
  </aside> 
</div>

<br/><br/>

</div>
</section>

     <Footer />
    </>
    )
}
}

export default Products;