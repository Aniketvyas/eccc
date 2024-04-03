import React, { useEffect, useState } from 'react'
import Navbar from '../basic/Navbar/Navbar'
import { Link } from 'react-router-dom'
import Footer from '../basic/Footer/Footer'
import Axios from "axios";
import {API} from "../../API";

export default function Checkout() {
  const [data, setData] = useState(JSON.parse(localStorage.getItem('cart')).product);
  const [checkout ,setCheckout] = useState({});
  const [overall, setOverall] = useState(JSON.parse(localStorage.getItem('cart')).original_price);
  const [discount, setDiscount] = useState(JSON.parse(localStorage.getItem('cart')).discounted_price);
  const [shippingCost, setShippingCost] = useState(JSON.parse(localStorage.getItem('cart')).shipping_cost);
  const [tax, setTax] = useState(JSON.parse(localStorage.getItem('cart')).tax);
  const [total, SetTotal] = useState(discount+tax+shippingCost);
  const [voucher, setVoucher] = useState(JSON.parse(localStorage.getItem('cart')).voucher);

  // useEffect(() => {
  //   getData();

  // }, [])


  // const getData = () => {
  //   var cart = JSON.parse(localStorage.getItem('cart'));
  //   var products = cart.product;
  //   console.log(cart);
  //   setData(cart.product);
  //   setDiscount(parseInt(cart.discounted_price));
  //   setOverall(parseInt(cart.original_price));
  //   setTax(parseInt(cart.tax));
  //   setShippingCost(parseInt(cart.shipping_cost));
  //   console.log(shippingCost, discount,tax);
  //   SetTotal(discount+tax+shippingCost)
  // }

  const handleCheckout = (event) => {
    const formData = new FormData(event.currentTarget);
		event.preventDefault();
		var obj = {}
		for (let [key, value] of formData.entries()) {
			obj[key] = value;
		}
		console.log(obj);
    var dataa = {
      'shipping_info':obj,
      'cart_data' : data,
      'total_payable':total,
      'discount':discount,
      'overall':overall,
      'tax':tax,
      'voucher':voucher

    }
    Axios.post(`${API}/shop/place_order`,dataa).then((response)=>{
      console.log(response)
      
    }).catch(error=>{
          console.log(error);
      })

  }
  return (
    <>
      <Navbar />
      <section class="bg-gold  p-2 text-black">
        <div class="container">
          <ol class="breadcrumb ondark steps">
            <li class="breadcrumb-item"> <Link to="/" className='text-dark'>1. Home</Link> </li>
            <li class="breadcrumb-item"> <Link to="/shop/cart_view" className='text-dark'>2. Shopping cart</Link> </li>
            <li class="breadcrumb-item active"> <Link to="/shop/cart_view" className='text-dark'>3. Order info </Link> </li>
            <li class="breadcrumb-item"> <Link to="/shop/cart_view" className='text-dark'>4. Payment </Link> </li>
          </ol>
        </div>
      </section>




      <section class="pt-3 bg-light">
        <div class="container">
          <div class="row">
            <main class="col-xl-8 col-lg-8">
              <article class="card">
                <div class="content-body">
                  <div class="row">

                    <form onSubmit={(e)=>handleCheckout(e)} action="/shop/place_order" method="POST">

                      <div class="col-12">
                        <hr />
                        <h5 class="card-title"> 1. Shipping info </h5>

                        <div class="row">
                          <div class="col-sm-6 mb-3">
                            <label for="" class="form-label">Full Name</label>
                            <input type="text" name="full_name" required class="form-control" placeholder="" />
                          </div>
                          <div class="col-sm-6 mb-3">
                            <label for="" class="form-label">Contact number*</label>
                            <div class="d-flex">
                              <select required name="country_code" class="custom-select">
                                <option value="+91">+91</option>
                              </select>
                              <input type="text" name="contact" class="form-control" placeholder="" />

                            </div>

                          </div>
                          <div class="col-sm-6 mb-3">
                            <label for="" class="form-label">Email*</label>
                            <input required row="4" type="email" class="form-control" name="email"
                              placeholder="Type here" />
                          </div>

                          <div class="col-sm-6 mb-3">
                            <label for="" class="form-label">Country*</label>
                            <select required name="country" class="form-control">
                              <option>Select</option>
                              <option value="india">India</option>
                            </select>
                          </div>
                          <div class="col-sm-6 mb-3">
                            <label for="" class="form-label">Address*</label>
                            <textarea required row="4" class="form-control" name="address"
                              placeholder="Type here"></textarea>
                          </div>
                          <div class="col-sm-6 mb-3">
                            <label for="" class="form-label">State*</label>
                            <select required class="form-control" name="state">
                              <option>Select</option>
                              <option value="Andhra Pradesh">Andhra Pradesh</option>
                              <option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands
                              </option>
                              <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                              <option value="Assam">Assam</option>
                              <option value="Bihar">Bihar</option>
                              <option value="Chandigarh">Chandigarh</option>
                              <option value="Chhattisgarh">Chhattisgarh</option>
                              <option value="Dadar and Nagar Haveli">Dadar and Nagar Haveli</option>
                              <option value="Daman and Diu">Daman and Diu</option>
                              <option value="Delhi">Delhi</option>
                              <option value="Lakshadweep">Lakshadweep</option>
                              <option value="Puducherry">Puducherry</option>
                              <option value="Goa">Goa</option>
                              <option value="Gujarat">Gujarat</option>
                              <option value="Haryana">Haryana</option>
                              <option value="Himachal Pradesh">Himachal Pradesh</option>
                              <option value="Jammu and Kashmir">Jammu and Kashmir</option>
                              <option value="Jharkhand">Jharkhand</option>
                              <option value="Karnataka">Karnataka</option>
                              <option value="Kerala">Kerala</option>
                              <option value="Madhya Pradesh">Madhya Pradesh</option>
                              <option value="Maharashtra">Maharashtra</option>
                              <option value="Manipur">Manipur</option>
                              <option value="Meghalaya">Meghalaya</option>
                              <option value="Mizoram">Mizoram</option>
                              <option value="Nagaland">Nagaland</option>
                              <option value="Odisha">Odisha</option>
                              <option value="Punjab">Punjab</option>
                              <option value="Rajasthan">Rajasthan</option>
                              <option value="Sikkim">Sikkim</option>
                              <option value="Tamil Nadu">Tamil Nadu</option>
                              <option value="Telangana">Telangana</option>
                              <option value="Tripura">Tripura</option>
                              <option value="Uttar Pradesh">Uttar Pradesh</option>
                              <option value="Uttarakhand">Uttarakhand</option>
                              <option value="West Bengal">West Bengal</option>

                            </select>
                          </div>
                          <div class="col-sm-6 mb-3">
                            <label for="" class="form-label">City*</label>
                            <input required type="text" name="city" class="form-control" />
                          </div>


                          <div class="col-sm-6 mb-3">
                            <label for="" class="form-label">Postal code*</label>
                            <input required type="text" name="postal" class="form-control" placeholder="" />
                          </div>
                          <input type="hidden" value="400" name="overall_discount" />
                          <input type="hidden" value="0" name="tax" />
                          <input type="hidden" value="1300" name="discounted_price" />



                        </div>

                        <label class="form-check mb-4">
                          <input class="form-check-input" type="checkbox" value="" />
                          <span class="form-check-label"> Save this address </span>
                        </label>
                        <hr />
                        <div class="col-xl-12">
                          <div class="row">
                            <h5 class="mb-3"><b>2. Payment</b></h5>
                            <hr />
                            <div class="container">
                              <h6>what would be your preffered way of payment?</h6>

                              <input type="radio" name="pay" value="COD" id="cod" required /> <label>Cash on Delivery</label><br />
                              <input type="radio" name="pay" value="PAY" id="pay" required /> <label>Other (UPI, Net banking, Credit/Debit Cards)</label>

                            </div><br />
                          </div>
                        </div>
                        <div class="float-end">
                          {/* <button class="btn btn-light">Cancel</button> */}
                          <button type="submit" class="btn btn-success">Place order</button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </article>




            </main>
            <aside class="col-xl-4 col-lg-4">

              <article class="ms-lg-4" style={{ maxWidth: 320 + "px" }}>
                <h6 class="card-title">Summary</h6>
                <hr />

                <dl class="dlist-align">
                  <dt>Original price:</dt>
                  <dd class="text-end"><i class="fa fa-inr"></i> {overall}</dd>
                </dl>
                <dl class="dlist-align">
                  <dt>Overall Discount:</dt>
                  <dd class="text-end text-success"> - <i class="fa fa-inr"></i> {discount} </dd>
                </dl>


                <dl class="dlist-align">
                  <dt>Shipping cost:</dt>
                  <dd class="text-end"> + <i class="fa fa-inr"></i> {shippingCost} </dd>
                </dl>
                <hr />
                <dl class="dlist-align">
                  <dt> Total: </dt>
                  <dd class="text-end"> <strong class="text-dark"> <i class="fa fa-inr"></i>
                    {total}</strong> </dd>
                </dl>

                <hr />
                <h6 class="mb-4">Items in cart</h6>


                <figure class="itemside">
                  {
                    data.map((prod, key) => (
                      <div className='row'>
                        <div class="aside">

                          <b class="badge bg-secondary rounded-pill">{prod.quantity}</b>
                          <img src={`${API}/${prod.details.image}`} class="img-sm rounded border" />
                        </div>
                        <figcaption class="info">

                          <Link to="#" class="title">{prod.details.name}</Link>
                          <div class="price font-weight-bold">Total: <i class="fa fa-inr px-1"></i>{prod.details.discounted_price}</div>


                        </figcaption>
                        <br />
                      </div>
                    ))
                  }


                </figure>






              </article>

            </aside>
          </div>

          <br /><br />

        </div>
      </section>
      <Footer />

    </>
  )
}
