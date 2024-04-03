import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Axios from 'axios';
import { Link } from 'react-router-dom';
import { API } from '../../API';


const Highlights = ({highlight, refresh, setRefresh}) => {
    console.log( highlight.image_orientation_on_left)
    return(
        <section>
        {
            
            highlight.image_orientation_on_left?
        <section>
            <script>
            </script>
           
            <div className="jumbotron" style={{backgroundColor: `${highlight.background_color}`}}>
                <div className="col-xl-12">
                    <div className="row justify-content-center align-items-center">
                        <div className="col-xl-6 mb-sm-4">
                            <img src={`${API}${highlight.highlight_image}`} className="img-fluid" />
                        </div>
                        <div className="col-xl-6 text-center">
                            <h3 className="font-weight-bold text-center text-capitalize" >
                                <b>{highlight.highlight_heading}{highlight.background_color}</b></h3>
                            <p className={`${highlight.description_color} mt-3 mb-3`}  style={{color:`${highlight.description_color}`}}>
                                {highlight.highlight_description}</p>
                            <Link to={`${highlight.link}`}><button className={`${highlight.button_color}`}>Shop {highlight.product}</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        :
        <section>
            <div className="jumbotron" style={{backgroundColor: `${highlight.background_color}`}}>
                <div className="col-xl-12">
                    <div className="row justify-content-center align-items-center">
                        <div className="col-xl-6 text-center">
                            <h3 className="font-weight-bold text-center text-capitalize" style={{color:`${highlight.text_color}`}}>
                                <b>{highlight.highlight_heading}</b></h3>
                            <p className={`${highlight.description_color} mt-3 mb-3`} style={{color:`${highlight.description_color}`}}>
                                {highlight.highlight_description}</p>
                            <Link to={`${highlight.link}`} ><button className={`${highlight.button_color}`}>Shop {highlight.product}</button></Link>
                        </div>
                        <div className="col-xl-6 mt-sm-4 mb-sm-4">
                            <img src={`${API}${highlight.highlight_image}`} className="img-fluid" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
        }
        </section>

      
    )
}

export default Highlights;