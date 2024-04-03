import React, {useState, useEffect} from 'react';
import { ToastContainer, toast } from 'react-toastify';
import Axios from 'axios';
import { API } from '../../API'
import { Link, useParams } from "react-router-dom";
import Navbar from '../basic/Navbar/Navbar';
import Footer from '../basic/Footer/Footer';
import CategoryCard from '../basic/CategoyCard/CategoryCard'



const Categories = () => {

    const [category, setCategory] = useState([]);
    const [refresh, setRefresh]  = useState(false);
    const [loading, setLoading] = useState(false);
    const {slug} = useParams();

    useEffect(() => {
		getCategories();
	}, [])
	

	const getCategories = () => {
        setLoading(true);
		Axios.get(`${API}/shop/get_categories`).then(response=>{
			var rspnse = response.data;
			console.log(rspnse.data);
			setCategory(rspnse);
            setLoading(false);
			}).catch(error=>{
				console.log(error);
                setLoading(false);
			})
	}

    if(loading){
        document.getElementById("loader").classList.remove("hidden")
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
                <li className="breadcrumb-item active text-dark" aria-current="page"><Link to="/categories">Category</Link></li>
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
                    <CategoryCard productData={product} key={index} categoryBtn ={true} refresh={refresh} setRefresh={setRefresh} />
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
}


export default Categories;