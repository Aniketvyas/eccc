import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from "../basic/Navbar/Navbar"
import IndexLandingPage from '../basic/LandingPage/IndexLandingPage';
import ProductCard from '../basic/ProductCard/ProductCard';
import BlogCard from "../basic/Blogs/BlogCard"
import Axios from 'axios';
import { API } from '../../API'
import Highlights from '../basic/Highlights';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Footer from '../basic/Footer/Footer';
import "../../index.css"
import { Link } from "react-router-dom";
import CreativeSlider from '../basic/Slider/CreativeSlider';




const options = {
    center: false,
    items: 2,
    loop: true,
    stagePadding: 0,
    margin: 30,
    autoplay: true,
    nav: true,
    navText: ['<span class="icon-arrow_back">', '<span class="icon-arrow_forward">'],
    responsive: {
        100: {
            nav: true,
            items: 1
        },
        300: {
            nav: true,
            items: 1
        },
        500: {
            nav: true,
            items: 1
        },
        600: {
            nav: true,
            items: 2
        },
        1000: {
            stagePadding: 0,
            nav: true,
            items: 3
        },
        1200: {
            stagePadding: 0,
            nav: true,
            items: 3
        }
    }
}


const Home = () => {
    const [product_data, setProduct_data] = useState([]);
    const [highlight_data, setHighlights_data] = useState([]);
    const [blog_data, setBlog_data] = useState([]);
    const [highlighted_product, setHighlighted_product] = useState([]);
    const [refresh, setRefresh] = useState(true);
    const [sliderData, setSliderData] = useState([]);
    
    useEffect(() => {
        (async () => {
            try {

                get_blogs();
                get_products();
                get_highlights();
                get_highlighted_products();
                fetchSliderData();
            
            } catch (error) {
                console.log("useEffect Error")
                console.log(error)
            }
        })();
    }, [refresh])


    const get_highlighted_products = () => {
        Axios.get(`${API}/shop/get_highlighted_products`).then(response => {
            var rspnse = response.data;
            setHighlighted_product(rspnse);
            highlighted_product.forEach((val) => console.log("value", val));
            // synchronize(rspnse)
            // setBlog_data(response.data)
            // console.log(product_data);
        }).catch(error => {
            console.log(error);
        })
    }
    const get_blogs = () => {

        Axios.get(`${API}/shop/get_blogs`).then(response => {
            setBlog_data(response.data);
            // setBlog_data(response.data)
        }).catch(error => {
            console.log(error);
        })
    }

    const get_products = () => {

        Axios.get(`${API}/shop/get_products`).then(response => {
            setProduct_data(response.data)
        }).catch(error => {
            console.log(error);
        })
    }
    const re_fresh = () => {
        setRefresh(!refresh);
    }

    const get_highlights = () => {
        Axios.get(`${API}/shop/get_highlights`).then(response => {
            // console.log("highlight_data pehla",highlight_data,response.data);
            setHighlights_data(response.data)
        }).catch(error => {
            console.log("highlights error ", error);
        })
    }


    // useEffect(() => {
    //   
    // }, [])

    const fetchSliderData = () => {
        Axios.get(`${API}/shop/get_highlights`).then(response => {
            setSliderData(response.data)
            console.log("response",response.data)
        }).catch(error => {
            console.log(error);
        })
    }

    const addToCart = () => {

    }


if (product_data && highlight_data && blog_data && sliderData) {
    return (
        <section>
        <ToastContainer position="bottom-right"/>
        <Navbar />
        <section className='container-fluid'>
            <CreativeSlider sliderData={sliderData}/>
        </section>
       
    
        <section class="testimonials" id="testimonials">
        <div class="testimonials pt-2">
        <div class="container">
            <div class="owl-testimonial owl-carousel owl-theme mb-md-0 mb-sm-5 mb-4">
          {
            highlighted_product.map((obj,index) => (
                <IndexLandingPage obj={obj} />
            ))
            }
            </div>
        </div>
        </div>
        </section>
        <section class="my-1">
        <div class="jumbotron-original">
        <div class="container">
        
            <header class="section-heading">
                <h3 class="section-title">New products</h3>
            </header>
        
            <div class="row">                 
            {
                product_data.map((product,index)=>(
                    <ProductCard productData={product} key={index} refresh={refresh} setRefresh={setRefresh} />
                ))
            }
        </div>
        </div>
        </div>	
        
        </section>
        <section>
            <div className='container-fluid'>
                <div className='row justify-content-center'>
                {
                highlight_data.map((high,index)=>(
                    <Highlights highlight={high} key={index} refresh={refresh} setRefresh={setRefresh} />
                ))
            }
                </div>
        
        
            </div>
        </section>
        {/* <section>
            <div className='container '>
                <div className='col-lg-12 why-container mt-5'>
                <header class="section-heading mt-2 mb-5">
            <h3 class="section-title">Why choose us</h3>
        </header>
                <div className='row justify-content-center'>
            <div class="list1 col-lg-3 m-3">
            <span class="fa fa-plane"></span>
            <h4 class="text-capitalize">India shipping</h4>
            </div>
            <div class="list1 col-lg-3 m-3">
                <span class="fa fa-star"></span>
                <h4 class="text-capitalize">Best Quality</h4>
            </div>
            <div class="list1 col-lg-3 m-3">
                <span class="fa fa-users"></span>
                <h4 class="text-capitalize">Customer Satisfaction</h4>
            </div>
            <div class="list1 col-lg-3 m-3">
                <span class="fa fa-thumbs-up"></span>
                <h4 class="text-capitalize">Happy Customers</h4>
            </div>
            <div class="list1 col-lg-3 m-3">
                <span class="fa fa-circle"></span>
                <h4 class="text-capitalize">Thousand Available items</h4>
            </div>
            </div>
                </div>
            </div>
        
        </section> */}

<section class="bg-light padding-y pb-5">
		<div class="container">
			<header class="section-heading mt-5 mb-5">
				<h3 class="section-title">Why choose us</h3>
			</header>
			<div class="row mb-4">
				<div class="col-lg-4 col-md-6">
					<figure class="itemside align-items-center mb-4">
						<div class="aside">
							<span class="rounded-circle shadow-sm text-secondary icon-lg bg-white">
								<i class="fa fa-money"></i>
							</span>
						</div>
						<figcaption class="info">
							<h6 class="title">Reasonable prices</h6>
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmor </p>
						</figcaption>
					</figure>
				</div>
				<div class="col-lg-4 col-md-6">
					<figure class="itemside align-items-center  mb-4">
						<div class="aside">
							<span class="rounded-circle shadow-sm text-secondary icon-lg bg-white">
								<i class="fa fa-star"></i>
							</span>
						</div>
						<figcaption class="info">
							<h6 class="title">Best quality</h6>
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmor </p>
						</figcaption>
					</figure>
				</div>
				<div class="col-lg-4 col-md-6">
					<figure class="itemside align-items-center  mb-4">
						<div class="aside">
							<span class="rounded-circle shadow-sm text-secondary icon-lg bg-white">
								<i class="fa fa-plane"></i>
							</span>
						</div>
						<figcaption class="info">
							<h6 class="title">India shipping</h6>
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmor </p>
						</figcaption>
					</figure>
				</div>
				<div class="col-lg-4 col-md-6">
					<figure class="itemside align-items-center  mb-4">
						<div class="aside">
							<span class="rounded-circle shadow-sm text-secondary icon-lg bg-white">
								<i class="fa fa-users"></i>
							</span>
						</div>
						<figcaption class="info">
							<h6 class="title">Customer satisfaction</h6>
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmor </p>
						</figcaption>
					</figure>
				</div>
				<div class="col-lg-4 col-md-6">
					<figure class="itemside align-items-center mb-4">
						<div class="aside">
							<span class="rounded-circle shadow-sm text-secondary icon-lg bg-white">
								<i class="fa fa-thumbs-up"></i>
							</span>
						</div>
						<figcaption class="info">
							<h6 class="title">Happy customers</h6>
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmor </p>
						</figcaption>
					</figure>
				</div>
				<div class="col-lg-4 col-md-6">
					<figure class="itemside align-items-center mb-4">
						<div class="aside">
							<span class="rounded-circle shadow-sm text-secondary icon-lg bg-white">
								<i class="fa fa-circle"></i>
							</span>
						</div>
						<figcaption class="info">
							<h6 class="title">Thousand Available items</h6>
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmor </p>
						</figcaption>
					</figure>
				</div>
			</div>
		</div>
	</section>
       
        <section class="jumbotron-original">
        <div class="container pb-4 pt-sm-3 pb-sm-2">
        <div class="section-title mb-0">
            <div class="row">
                <div class="col-md-10">
                    <h2 class="mt-0 mb-0 mt-sm-30 font-weight-600 theme_color_1">Blogs &amp; Updates</h2>
                    <h4 class=" theme_color_2 mb-2"><i>We Believe in complete transparency.</i></h4>
                   
                </div> 
                <div className='col-md-2'>
                        <Link to="/blogs"><button className='btn btn-outline-secondary'>View All</button></Link>
                    </div>

            </div>
        </div>
        <div class="section-content">
            <div class="row">
                <div class="col-md-12">
                    <OwlCarousel class="owl-carousel-3col owl-carousel owl-theme owl-nav-top mt-5"  {...options}>
                    {
                        blog_data.map((blog,index)=>(
                            <BlogCard blogObj={blog} key={index} refresh={refresh} setRefresh={setRefresh} />
                        ))
                    }
                    </OwlCarousel>
                </div>
            </div>
        </div>
        </div>
        </section>
        
        
        <Footer></Footer>
        </section>
        

    )
                }
                else {
<></>
                }
    
}

export default Home;