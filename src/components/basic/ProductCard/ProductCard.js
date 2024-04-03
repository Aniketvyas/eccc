import React, { useState,useEffect }  from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Axios from 'axios';
import { API } from '../../../API'
import { Link } from 'react-router-dom';
import Contact from '../../layout/Contact';
import ContactForm from '../Contact/ContactForm';



const ProductCard = ({productData, refresh, setRefresh}) => {

    const checkProductAvailability = (slug) => {
      console.log("add to cart called",slug);
      Axios.get(`${API}/shop/product/check_product_availability/${slug}`).then(response=>{
        var rspnse = response.data;
        console.log("response aya",rspnse);
        if(rspnse.message =true){
          console.log("saman pada h");
          addToCart(slug);
        }
        else{
          console.log("saman kan h");
        }
        }).catch(error=>{
    
            console.log(error);
        })
    
    }

    const addToCart = (slug) => {

      var obj = localStorage.getItem("cart");
      if(obj!=null){
        obj = JSON.parse(obj);
        console.log("obj",obj)
        var products = obj.product;
        var done=false;
        for(let i=0;i<products.length;i++){
          if(products[i].slug === slug){
            console.log(slug);
            products[i].quantity+=1;
            done=true;
          }
        }
        if(!done){
          var dfg = {
            "details":productData,
            "slug":slug,
            "quantity":1
          }
          products.push(dfg);
          obj.items_count+=1;
          console.log("ogj",obj);
          // updateCartCount();
          toast("item added successfully");
      }
      localStorage.setItem('cart',JSON.stringify(obj));
    }
      else{
        obj = {
          "product": [
              {
                  "details":productData,
                  "slug": slug,
                  "quantity" : 1
              }
          ],
          "tax": 100,
          "voucher" : [],
          "items_count" : 1
      
      }
      localStorage.setItem('cart', JSON.stringify(obj))

      }

      
    }
      
    console.log(productData,"productData");
    


    return(
        <div className="col-lg-3 col-md-4 col-sm-6">
            <figure className="card card-product-grid">
              <div className="img-wrap"> 
                <img src= {`${API}${productData.image}`} /> 
              </div>
              <figcaption className="info-wrap border-top">
                <div className="price-wrap">
                 <Link to={`/product/${productData.slug}`} className="text-dark"><strong>{productData.name}</strong></Link><br />
                 
                  <strong className="price"><i className="fa fa-inr"></i> {productData.discounted_price}</strong>
                  <del className="price-old"><i className="fa fa-inr"></i> {productData.price}</del>
                  
                </div>
                <p className="title mb-2">{productData.description.substring(0,50)}</p>
                {/* <div className="cart-buttons">
                  {
                    productData.enable_sample ?<div><Link to={`/shop/buy/${productData.slug}`} className="btn  btn-secondary"> Buy Samples </Link></div> :
                 
                productData.quantity>=1 ? <div><Link to={`/shop/buy/${productData.slug}`} className="btn  btn-secondary"> Buy now </Link>
                        <button className="btn btn-secondary m-lg-1" onClick={() => checkProductAvailability(`${productData.slug}`)}>Add to cart</button></div> : <div> <p className="text-danger">Item out of stock</p></div>} 
                      </div> */}
                <div className='cart-buttons'>
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

              </figcaption>
            </figure>
          </div>

      
    )
}

export default ProductCard;