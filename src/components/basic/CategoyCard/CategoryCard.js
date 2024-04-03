import React, {useState, useEffect} from 'react';

import { Link } from "react-router-dom";
import ContactForm from '../Contact/ContactForm';
import { API } from '../../../API';



const CategoryCard = ({productData, categoryBtn}) => {

    return(
        <>
      
         <div className="col-lg-3 col-md-4 col-sm-6">
            <figure className="card card-product-grid">
              <div className="img-wrap"> 
                <img src= {`${API}${productData.image}`} /> 
              </div>
              <figcaption className="info-wrap border-top">
                <div className="price-wrap">
                 <Link to={`/product/${productData.slug}`} className="text-dark"><strong>{productData.name}</strong></Link><br />
                 
                  {/* <strong className="price"><i className="fa fa-inr"></i> {productData.discounted_price}</strong>
                  <del className="price-old"><i className="fa fa-inr"></i> {productData.price}</del> */}
                  
                </div>
                <p className="title mb-2">{productData.description.substring(0,50)}</p>
                <div className='cart-buttons'>
                    {
                    !categoryBtn ? 
                    <>
                     <button className='btn btn-secondary' data-bs-toggle="modal" data-bs-target="#exampleModal">Inquire Now</button>

                    <div class="modal modal-xl fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">{productData.name} : Inquiry</h5>
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
                    </>
                    :
                    <>
                    <Link to={`/category/${productData.slug}`} className="text-dark"><button className="btn btn-secondary">View Prodcuts</button></Link><br />
                    </>

                }
                  
                </div>

              </figcaption>
            </figure>
          </div>
        </>
       
    )
}


export default CategoryCard;