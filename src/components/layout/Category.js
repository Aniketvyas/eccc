import React, {useState, useEffect} from 'react';
import { ToastContainer, toast } from 'react-toastify';
import Axios from 'axios';
import { API } from '../../API'
import { Link, useParams } from "react-router-dom";
import Navbar from '../basic/Navbar/Navbar';
import Footer from '../basic/Footer/Footer';
import CategoryCard from '../basic/CategoyCard/CategoryCard'



const Category = () => {

    const [category, setCategory] = useState([]);
    const [refresh, setRefresh]  = useState(false);
    const {slug} = useParams();

    useEffect(() => {
        ( async() => {
      getCategories()
        }
        )()

    }, [refresh])

    const getCategories = async() => {
        console.log(slug)
        await Axios.get(`${API}/shop/get_category/${slug}`).then(res=>{
            console.log(res.data);
            setCategory(res.data);
    }).catch( err => console.log(err))
    }
    

    return(
        <>
        <Navbar />
        <section className="bg-gold pt-3 pb-3">
            <div className="container">
            <ol className="breadcrumb ondark mb-0">
                <li className="breadcrumb-item text-dark"><Link to="/">Home</Link></li>
                <li className="breadcrumb-item active text-dark" aria-current="page"><Link to="/categories">Category</Link></li>
                <li className="breadcrumb-item active text-dark" aria-current="page"><Link to={`/category/${slug}`}>{slug}</Link></li>
            </ol>
            </div>
            </section>
        <section class="my-1">
        <div class="jumbotron-original">
        <div class="container">
        
            <header class="section-heading">
                <h3 class="section-title">Our Product categories</h3>
            </header>
        
            <div class="row">                 
            {
                category.map((product,index)=>(
                    <CategoryCard productData={product} key={index} refresh={refresh} setRefresh={setRefresh} />
                ))
            }
        </div>
        </div>
        </div>	
        
        </section>
        <Footer />
        </>
       
    )
}


export default Category;