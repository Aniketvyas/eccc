import React, {useState, useEffect} from 'react';
import { ToastContainer, toast } from 'react-toastify';
import Axios from 'axios';
import { API } from '../../API'
import { Link, useParams } from "react-router-dom";
import Navbar from '../basic/Navbar/Navbar';
import Footer from '../basic/Footer/Footer';
import BlogCard from '../basic/Blogs/BlogCard'



const SingleBlog = () => {

    const [blog, setBlog] = useState([]);
    const [refresh, setRefresh]  = useState(false);
    const [loading, setLoading] = useState(false);
    const {slug} = useParams();

    useEffect(() => {
        ( async() => {
      getCategories()
        }
        )()

    }, [refresh])

    const getCategories = async() => {
        console.log(slug)
        setLoading(true);
        await Axios.get(`${API}/shop/get_single_blog/${slug}`).then(res=>{
            console.log(res.data);
            setBlog(res.data);
            document.getElementById('blog').innerHTML=res.data.content;
            setLoading(false);
    }).catch( err => {console.log(err); setLoading(false)})
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
                <li className="breadcrumb-item active text-dark" aria-current="page"><Link to="/blogs">Blogs</Link></li>
            </ol>
            </div>
            </section>
        <section class="my-1">
        <div class="jumbotron-original">
        <div class="container">
        
        <div className='row' id="blog">
            
        {/* {document.createElement(blog.content)} */}

        </div>
           
            {/* <div class="row">                 
            {
                blog.map((product,index)=>(
                    <BlogCard blogObj={product} key={index} refresh={refresh} setRefresh={setRefresh} />
                ))
            }
        </div> */}
        </div>
        </div>	
        
        </section>
        <Footer />
        </>
       
    )
}
}


export default SingleBlog;