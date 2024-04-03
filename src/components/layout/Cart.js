import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import Axios from "axios";
import { API } from "../../API";
import { Link } from "react-router-dom";
import Navbar from "../basic/Navbar/Navbar";
import Footer from "../basic/Footer/Footer";

import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../features/cart/cartSlice";

// import {updateCartCount} from "../Navbar"

const Cart = () => {
  const [cartData, setCartData] = useState([]);
  const [original_price,setOriginal_price] = useState();
  const [discounted_price,setDiscounted_price] = useState();
  const [tax,setTax] = useState(JSON.parse(localStorage.getItem('cart')).tax);
  const [total,setTotal] = useState();
  const [refresh,setRefresh]=useState(true);



  useEffect(()=>{
    (async()=>{
        try{
            get_cartData();
            get_original_price();
            get_discounted_price();
            // update_total();
            // get_blogs();
            // get_products();
            // get_highlights();
            // get_highlighted_products();
            // synchronize();
            
            
        } catch(error){
            console.log("useEffect Error")
            console.log(error)
        }
    })();
},[refresh])

const get_cartData = () => {
  var data = JSON.parse(localStorage.getItem('cart'));
  console.log(data,typeof(data),"fer");
  setCartData(data.product);
  // get_dataFromBackend(data);
}

const get_dataFromBackend = (data) => {
  Axios.post(`${API}/shop/give_cart_data`,data).then(response=>{
    var rspnse = response.data;
    setCartData(rspnse.data);
    setTax(rspnse.TAX)
    console.log(rspnse);
    var ori = parseInt(get_original_price(rspnse.data));
    var dis = parseInt(get_discounted_price(rspnse.data));
    update_total(ori,dis,rspnse.TAX);

    }).catch(error=>{
        console.log(error);
    })
}

const update_total = (original_pricee, discounted_pricee, tax) => {
  console.log("opd",original_pricee,discounted_pricee,tax);
  var a = original_pricee-discounted_pricee+tax;
  console.log("TOTL",discounted_pricee,tax,a);
  setTotal(a)
}
const get_original_price = () => {
  var d = JSON.parse(localStorage.getItem("cart"));
  var products = d.product;

  var original_price = 0;
  for(let i=0;i<products.length;i++){
    var obj = products[i]
    var price = parseInt(obj['details']['price']) * obj['quantity']
    original_price+=price
  }
  setOriginal_price(original_price);
  d['original_price'] = original_price;
  localStorage.setItem('cart',JSON.stringify(d));
  return original_price;
  // re_fresh()
}

const get_discounted_price = () => {
  var d = JSON.parse(localStorage.getItem("cart"));
  var products = d.product;
  var discounted_pricee = 0;
  var original_pricee=0;
  for(let i=0;i<products.length;i++){
    var obj = products[i]['details']
    console.log(parseInt(obj['discounted_price'])*products[i]['quantity'], products[i]['quantity']);
    if(obj["discounted_price"] !=0 || obj["discounted_price"]!=null || obj["discounted_price"] != undefined){
      console.log(obj['discounted_price'],"ohlala")
      discounted_pricee+= parseInt(obj['discounted_price'])*products[i]['quantity'];
      original_pricee +=parseInt(obj['price'])*products[i]['quantity'];
    }
   
  }
  console.log("dosc", discounted_pricee,original_pricee);
  update_total(original_price, discounted_price,tax);
  setDiscounted_price (original_pricee -discounted_pricee);
  setTotal(discounted_price+tax);
  d["discounted_price"] = discounted_pricee;
  console.log("local",d);
  localStorage.setItem('cart',JSON.stringify(d));
  return discounted_price;
}
const re_fresh = () => {
  setRefresh(!refresh);
}


  const clearCartHandler = () => {
    localStorage.clear();
    setCartData([]);
    setDiscounted_price();
    setOriginal_price();
    setTotal();
    toast("Cart Cleared successfully");
    re_fresh();
  };

  const incrementHandler = (slug) => {
    var d =localStorage.getItem('cart')
    var cart_data = JSON.parse(d);
    var products = cart_data.product
    for(let i=0;i<products.length;i++){
      // console.log("cartData",cartData[i]['product_details']);
      var obj = products[i]
      if(products[i].slug ===slug){
        if(parseInt(products[i]['details'].quantity)>= parseInt(obj['quantity'])){
          var f = obj
          console.log(f,"slu h ye")
          obj['quantity']+=1;
          cart_data.items_count +=1;
          localStorage.setItem("cart",JSON.stringify(cart_data));
          console.log(0)
          re_fresh();
          toast("Item incremented successfully");
        }
        else{
          toast("Item out of stock, only"+cart_data[slug]+"is available which is already added in your cart");
          console.log("out")
        }
      }
      

    }
    re_fresh();
    
  };

  const decrementHandler = (slug) => {
    var d = localStorage.getItem('cart')
    var cart_data = JSON.parse(d);
    var products = cart_data.product
    for(let i=0;i<products.length;i++){
      var obj = products[i]
      if(obj['slug'] === slug){
        obj.quantity -=1;
        if(obj.quantity===0){
          products.splice(i,1);
          console.log("after deleting", products)
        }
        cart_data.items_count -=1;
      }
    }
    // setCartData(cartData);
    localStorage.setItem("cart",JSON.stringify(cart_data))
    toast("Item decremented successfull")
    re_fresh();
  };

  const removeItemHandler = (slug) => {
    var cart = JSON.parse(localStorage.getItem("cart"));
   var products = cart.product;
   for(let i=0;i<products.length;i++){
    var obj = products[i].details;
    if(obj.slug ===slug){
      products.splice(i,1);
      console.log("after deleting", products)
    }
   }
   localStorage.setItem("cart",JSON.stringify(cart));
   re_fresh();
  
  
  };



  // console.log(cart);

  return (
    <>
     <ToastContainer position="bottom-right"/>
      <Navbar />
      <section className="bg-gold py-4">
        <div className="container">
          <ol className="breadcrumb ondark mb-0">
            <li className="breadcrumb-item">
              {" "}
              <Link to="/">Home</Link>{" "}
            </li>
            <li className="breadcrumb-item active"> Shopping cart </li>
          </ol>
        </div>
      </section>
      <section className="py-4 bg-light">
        <div className="container">
          <div className="row">
            <div className="col-lg-9">
              <div className="card card-custom">
                <div className="content-body">
                  <h4 className="card-title mb-4">Your shopping cart</h4>
                  {
                    cartData.map((productDetailsObject, key) => (
                      <article className="row custom-row gy-3 mb-4">
                    <div className="col-lg-5">
                    {/* {cartData.productDetailsObject.map((product,key) => ( */}
                      <figure className="itemside me-lg-5">
                        <div className="aside">
                          <img
                            src={`${API}/${productDetailsObject.details.image}`}
                            className="img-sm "
                          />
                        </div>
                        <figcaption className="info">
                          <Link to={`/product/${productDetailsObject.slug}`} className="title">
                         <b> {productDetailsObject.details.name} </b>
                          </Link>
                          <p className="text-muted">
                            {productDetailsObject.details.description.slice(0,100)}
                          </p>
                        </figcaption>
                      </figure>
                    {/* ))}  */}
                      
                    </div>
                    <div className="col-lg-4 col-sm-6">
                      <div className="row">
                        <div className="col-lg-1 col-sm-2 col-2 px-1">
                          <button
                            className="bg-dark"
                            onClick={() =>decrementHandler(`${productDetailsObject.details.slug}`)}
                          >
                            <i className="fa fa-minus text-white"></i>
                          </button>
                        </div>
                        <span
                          className="col-lg-1 col-sm-2 col-2 px-3 text-dark"
                          id="quantity/pet-tray"
                        >
                          {productDetailsObject.quantity}
                          {/* {localStorage.getItem(`${productDetailsObject.details.slug}`)} */}
                        </span>
                        <div className="col-lg-1 col-2 col-sm-2 ">
                          <button
                            className="bg-dark"
                            onClick={() => incrementHandler(`${productDetailsObject.details.slug}`)}
                          >
                            <i className="fa fa-plus text-white"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-2 col-sm-4 col-6">
                      <div className="price-wrap lh-sm">
                        <var className="price h6">
                          <i className="fa fa-inr"></i>{productDetailsObject.details.discounted_price* productDetailsObject.quantity}
                        </var>{" "}
                        <br />
                        <small className="text-muted">
                          <i className="fa fa-inr"></i>
                          <del>{productDetailsObject.details.price}</del>{" "}
                        </small>
                      </div>
                    </div>
                    <div className="col-lg col-sm-4 col-6">
                      <div className="float-lg-end">
                        <button
                          onClick={() => removeItemHandler(`${productDetailsObject.details.slug}`)}
                          className="btn btn-light text-danger"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                    <hr />
                  </article>
                
                    ))
                  }
                  
                </div>
                {cartData.length
                ?
                <div className="content-body border-top">
                  <p>
                    <i className="me-2 text-muted fa-lg fa fa-truck" />
                    Don't want these old items?
                  </p>
                  <p className="text-muted d-sm-inline-block mr-2">
                     Clear our cart and shop new items.
                  </p>
                  <button
                    type="button"
                    onClick={ () => clearCartHandler()}
                    className="btn btn-warning btn-sm mx-2"
                  >
                    Clear Cart
                  </button>
                </div>
                :
                <div></div>
                }

                
              </div>
            </div>

            <aside className="col-lg-3">
              <div className="card mb-3">
                <div className="card-body">
                  <form action="vouchor/applyDiscount" method="POST">
                    <div className="form-group">
                      <label className="form-label">Have coupon?</label>
                      <div className="input-group">
                        <input
                          type="text"
                          className="form-control"
                          name="coupon"
                          placeholder="Coupon code"
                        />
                        <input
                          type="text"
                          className="form-control"
                          value="799"
                          name="total"
                          hidden
                        />
                        <button type="submit" className="btn btn-light">
                          Apply
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>

              <div className="card">
                <div className="card-body">
                  <table class="table">
                    <tbody>
                      <tr>
                        <th scope="row">Original price:</th>
                        <td>{original_price}</td>
                      </tr>
                      <tr>
                        <th scope="row">overall Discount:</th>
                        <td class="text-success">-{discounted_price}</td>
                      </tr>
                      <tr>
                        <th scope="row">TAX:</th>
                        <td className="text-danger">+{tax}</td>
                      </tr>
                      <tr>
                        <th scope="row">Total:</th>
                        <td>{original_price-discounted_price+tax}</td>
                      </tr>
                    </tbody>
                  </table>
                  {/* <dl className="dlist-align d-flex">
                    <dt>Original price:</dt>
                    <dd className="text-end ml-auto" id="total">
                      <i className="fa fa-inr"></i>899
                    </dd>
                  </dl>
                  <dl className="dlist-align d-flex">
                    <dt>overall Discount:</dt>
                    <dd
                      className="text-end text-success ml-auto"
                      id="overall_discount"
                    >
                      <i className="fa fa-inr"></i> -100{" "}
                    </dd>
                  </dl>

                  <dl className="dlist-align d-flex">
                    <dt>TAX:</dt>
                    <dd className="text-end ml-auto" id="tax">
                      <i className="fa fa-inr"></i> +0{" "}
                    </dd>
                  </dl>
                  <hr />
                  <dl className="dlist-align d-flex">
                    <dt>Total:</dt>
                    <dd
                      className="text-end text-dark h5 ml-auto"
                      id="discounted_price"
                    >
                      <i className="fa fa-inr"></i> 799{" "}
                    </dd>
                  </dl> */}

                  <div className="d-grid gap-2 my-3 d-flex">
                    <Link to="/shop/checkout" className="btn btn-success">
                      {" "}
                      Make Purchase{" "}
                    </Link>
                    <Link to="/shop" className="btn btn-light">
                      {" "}
                      Back to shop{" "}
                    </Link>
                  </div>
                </div>
              </div>
            </aside>
          </div>

          <br />
          <br />
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Cart;

// var obj = [
//   {
//       "product_details ": {
//           "id": 1,
//           "category": {
//               "id": 1,
//               "name": "marble handicrafts",
//               "slug": "marble-handicrafts",
//               "description": "nothing"
//           },
//           "name": "marble khalbatta",
//           "image": "/media/marble_khalbatta.webp",
//           "slug": "marble-khalbatta",
//           "price": 400,
//           "discounted_price": 300,
//           "description": "Introducing our Natural Marble Khalbatta, a timeless and functional addition to your kitchen. Crafted from high-quality natural marble, this traditional Indian mortar and pestle set brings authenticity and elegance to your culinary experience.\r\n\r\nThe Natural Marble Khalbatta features a sturdy and spacious mortar bowl, perfect for grinding and crushing herbs, spices, and other ingredients. The solid marble pestle provides excellent grip and control, allowing you to achieve the desired consistency and release the aromatic flavors of your ingredients.\r\n\r\nThe natural variations in the marble make each Khalbatta unique, with its own distinctive patterns and colors. This not only adds visual appeal but also showcases the beauty of nature in your kitchen.\r\n\r\nThe durable and heavy-duty construction ensures long-lasting performance, making it suitable for both everyday use and special occasions. Its smooth surface is easy to clean and maintain, making it a convenient and hygienic kitchen tool.\r\n\r\nEmbrace the art of traditional Indian cooking with our Natural Marble Khalbatta. It's not just a functional tool but also a beautiful piece of craftsmanship that adds elegance and charm to your kitchen décor.",
//           "quantity": 30,
//           "added_on": "2023-07-30T18:50:41.975015Z",
//           "eligible_for_cod": true,
//           "specifications": "<p>lol</p>",
//           "warranty_info": "<p>lol</p>",
//           "shipping_info": "<p>lol</p>"
//       },
//       "requested_quantity": 5
//   },
//   {
//       "product_details ": {
//           "id": 2,
//           "category": {
//               "id": 1,
//               "name": "marble handicrafts",
//               "slug": "marble-handicrafts",
//               "description": "nothing"
//           },
//           "name": "Luxury bathroom set",
//           "image": "/media/bichki.png",
//           "slug": "luxury-bathroom-set",
//           "price": 234,
//           "discounted_price": 123,
//           "description": "Upgrade your bathroom with our exquisite Natural Marble Bathroom Set. Crafted from premium quality marble, this set adds a touch of elegance and sophistication to any bathroom decor. Each piece is meticulously designed to provide both functionality and aesthetic appeal.\r\n\r\nThis bathroom set includes four essential pieces: a soap dispenser, a soap holder, a brush holder, and an additional holder for your miscellaneous items. The soap dispenser allows for easy and convenient access to your favorite liquid soap, while the soap holder keeps your soap neatly organized and within reach. The brush holder provides a stylish storage solution for your toothbrushes or makeup brushes, keeping them hygienic and readily available.\r\n\r\nThe additional holder can be used to store various bathroom essentials such as cotton balls, cotton swabs, or even small accessories like hairpins or jewelry. It's a versatile addition to the set that adds extra convenience and tidiness to your bathroom.\r\n\r\nThe natural marble used in the construction of this set ensures its durability and longevity, while also showcasing the unique veining and color variations inherent in this natural stone. Each piece is handcrafted with precision and attention to detail, resulting in a truly one-of-a-kind set.\r\n\r\nNot only is this marble bathroom set functional, but it also elevates the aesthetic appeal of your bathroom. Its luxurious and timeless design seamlessly blends with any interior style, from contemporary to traditional, creating a harmonious and inviting atmosphere.\r\n\r\nInvest in our Natural Marble Bathroom Set today and transform your bathroom into a luxurious sanctuary of tranquility and beauty. Experience the combination of functionality, elegance, and durability that this set brings, making it an essential addition to your bathroom decor.",
//           "quantity": 234,
//           "added_on": "2023-07-31T17:14:52.017355Z",
//           "eligible_for_cod": true,
//           "specifications": "<p>sdf</p>",
//           "warranty_info": "<p>sdf</p>",
//           "shipping_info": "<p>sdf</p>"
//       },
//       "requested_quantity": 2
//   },
//   {
//       "product_details ": {
//           "id": 3,
//           "category": {
//               "id": 1,
//               "name": "marble handicrafts",
//               "slug": "marble-handicrafts",
//               "description": "nothing"
//           },
//           "name": "Luxury soup bowl",
//           "image": "/media/marble_khalbatat.jpeg",
//           "slug": "luxury-soup-bowl",
//           "price": 345,
//           "discounted_price": 34,
//           "description": "Enhance your dining experience with our elegant Soup Bowl. Crafted with both style and functionality in mind, this bowl is designed to elevate your soup-serving presentation and provide a delightful dining experience. Whether you're enjoying a comforting bowl of soup, a hearty stew, or a flavorful broth, our Soup Bowl is the perfect vessel to showcase your culinary creations.\r\n\r\nThe Soup Bowl features a sleek and timeless design that seamlessly integrates into any table setting, from casual family meals to formal gatherings. Its generous capacity allows for ample servings of soup, ensuring you can savor every delicious spoonful. The wide rim provides a comfortable grip while adding a touch of sophistication to the bowl's appearance.\r\n\r\nCrafted from high-quality and durable materials, our Soup Bowl is built to withstand the rigors of daily use. It is microwave and dishwasher safe, offering convenience and ease of maintenance. The smooth glaze finish enhances the bowl's aesthetics while also making it easy to clean.\r\n\r\nWith its versatile design, the Soup Bowl is not limited to soups alone. It is also suitable for serving other hot or cold dishes, such as pasta, chili, cereal, or desserts. Its multipurpose nature makes it a versatile addition to your kitchen collection.\r\n\r\nInvest in our Soup Bowl today and elevate your dining experience. Whether you're enjoying a comforting bowl of soup on a chilly day or impressing your guests with a beautifully presented meal, our Soup Bowl adds a touch of elegance and functionality to every dining occasion.",
//           "quantity": 23,
//           "added_on": "2023-07-31T17:15:36.651003Z",
//           "eligible_for_cod": false,
//           "specifications": "<p>f</p>",
//           "warranty_info": "<p>f</p>",
//           "shipping_info": "<p>f</p>"
//       },
//       "requested_quantity": 1
//   }
// ]