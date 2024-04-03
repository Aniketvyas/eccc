<section>
<ToastContainer position="bottom-right"/>
<Navbar />
<section>
    <div className='container-fluid banner'>
        <div className='row justify-content-center align-items-center'>
            <div className='col-lg-6 text-center'>
            <h1 className='banner-heading text-center'>if you're looking for a <br />better handicraft,
                This is it</h1>
           <Link to="/shop" > <button className='btn btn-outline banner-button mt-3 text-center'>Shop Now</button></Link>
            </div>
        </div>
        <div className='row justify-content-center align-items-center mt-5'>
            <div className='col-lg-6 text-center'>
                <div className='d-flex'>
                    <div class="col-lg-6">
                        <div>
                        <span class="fa fa-star checked px-1"></span>
                    <span class="fa fa-star checked px-1"></span>
                    <span class="fa fa-star checked px-1"></span>
                    <span class="fa fa-star checked px-1"></span>
                    <span class="fa fa-star checked px-1"></span>
                        </div>
                    <p className='pt-2'>stry. Lorem I's standard dummy text ever sth the release of text ever sth text ever sth  text ever sth text ever sth text ever sth  </p>
                    <p className="text-muted  pt-1"><b>Aniket Vyas</b></p>
                    <p className='text-muted small'><i>Verified Buyer</i></p>
                    
                    </div>
                   <div className='col-lg-6 px-3'>
                   <div>
                        <span class="fa fa-star checked px-1"></span>
                    <span class="fa fa-star checked px-1"></span>
                    <span class="fa fa-star checked px-1"></span>
                    <span class="fa fa-star checked px-1"></span>
                    <span class="fa fa-star checked px-1"></span>
                        </div>
                    <p className='pt-2'>stry. ver sth the release of text ever sth text ever sth  text ever sth text ever sth text ever sth  </p>
                    <p className="text-muted  pt-1"><b>Aniket Vyas</b></p>
                    <p className='text-muted small'><i>Verified Buyer</i></p>
                   </div>
                </div>
           </div>
        </div>
        <div className='row justify-content-center align-items-center'>
            <div className='col-lg-6 text-center mt-2'>
            <img className='img-fluid banner-image' src={`${API}/static/images/banner.jpg`} />
            </div>
        </div>
    </div>
</section>
<section>
    <div className='container-fluid second-container second-bg'>
        <div className='col-lg-12 container '>
            <div className='row justify-content-center align-items-center'>
                <div className='col-lg-6'>
                    <p className=' second-caption small'>EASY TO USE</p><br></br>
                    <h1 className='fw-bolder'>Oh so smooth!</h1>
                    <p className='second-desc'>The Liner features a soft gel formula that glides effortlessly and evenly onto skin. 
                        This means no more tugging or pulling on the delicate eye area.</p>
                </div>
                <div className='col-lg-6'>
                    <img className="img-fluid img-responsive" src={`${API}/static/images/second.jpg`} />
                </div>
            </div>
        </div>
    </div>
</section>
<section>
    <div className='container-fluid third-container pt-5'>
        <div className='col-lg-12 container'>
            <div className='row align-items-center'>
            <div className='col-lg-6 mr-auto'>
                   <div className='row custom-product-thumbs'>
                    {
        product_data.slice(0,6).map((product,index)=>(
           <div className='col-lg-4 mt-2 image-division'>
           <Link to={`/product/${product.slug}/`} ><img className="img-fluid img-thumbnail" src={`${API}${product.image}`}/>
           </Link> </div>
           
        ))
    }
                </div>     
                </div>
                {/* <div className='col-lg-6'>
                    <p className=' second-caption small'>EASY TO USE</p><br></br>
                    <h1 className='fw-bolder'>HALL OF FAME!</h1>
                    <p className='text-muted'>The Liner features a soft gel formula that glides effortlessly and evenly onto skin. 
                        This means no more tugging or pulling on the delicate eye area.
                        The Liner features a soft gel formula that glides effortlessly and evenly onto skin. 
                        This means no more tugging or pulling on the delicate eye area.
                        The Liner features a soft gel formula that glides effortlessly and evenly onto skin. 
                        This means no more tugging or pulling on the delicate eye area.  
                        </p>
                </div> */}

            </div>
        </div>
       
    </div>
</section>
{/* <section class="testimonials" id="testimonials">
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
</section> */}
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
{/* <section>
    <div className='container-fluid'>
        <div className='row justify-content-center'>
        {
        highlight_data.map((high,index)=>(
            <Highlights highlight={high} key={index} refresh={refresh} setRefresh={setRefresh} />
        ))
    }
        </div>


    </div>
</section> */}
<section>
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

</section>
{/* <section class="bg-light pt-5">
<div class="container">
<header class="section-heading mt-2 mb-5">
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
        <figure>
        <div class="list1 col-lg-4">
                    <span class="fa fa-bath"></span>
                    <h4 class="text-capitalize">Food</h4>
  a              </div>
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
</section> */}
<section class="">
<div class="container pt-5 pb-4 pt-sm-2 pb-sm-2">
<div class="section-title mb-0">
    <div class="row">
        <div class="col-md-12">
            <h2 class="mt-0 mb-0 mt-sm-30 font-weight-600 theme_color_1">Blogs &amp; Updates</h2>
            <h4 class=" theme_color_2 mb-2"><i>We Believe in complete transparency.</i></h4>
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
