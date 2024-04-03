import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Axios from 'axios';
import { Link } from 'react-router-dom';
import { API } from '../../../API';

const BlogCard = ({blogObj, refresh, setRefresh}) => {
    return(
        // <div className='col-lg-4'>
    <div class="item">
        <div class="course-single-item bg-white border-1px clearfix hvr-float p-2">
            <div class="course-thumb p-1">
                <img style={{width:100+"%", height:250+"px", objectFit:"cover", borderRadius:"10"+"px"}} src={`${API}${blogObj.image}`} />
            </div>
            <div class="course-details clearfix p-1 pt-1 pb-1">
                <div class="course-top-part">
                    <p class="font-13 mt-0 text-uppercase mb-5 theme_color_2"> <i class="fa fa-calendar" aria-hidden="true"></i> {blogObj.publish_on}</p>
                    <a href={`/blog/${blogObj.slug}`} target="_blank" class="font-16">
                        {blogObj.title}</a>
                </div>
            </div>
        </div>
    </div>

        // </div>


    )
}   

export default BlogCard;