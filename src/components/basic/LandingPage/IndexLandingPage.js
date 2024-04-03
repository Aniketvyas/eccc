import React from 'react';
import "./IndexLanding.css"
import { API } from '../../../API';

const IndexLandingPage = (obj) => {
    return(
		
                    <div class="item">
                        <div class="row slider-info">
                            <div class="col-lg-8 message-info align-self">
                                <span class="label-blue mb-sm-4 mb-3">{obj.category}</span>
                                <a href={`/product/${obj.slug}`}><h3 class="title-big mb-4">{obj.title}
                                </h3> </a>
                                <div class="message-box">
                                    <p class="message">{obj.content}</p>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-4 img-circle mt-lg-0 mt-4 text-center">
                                <img src={`${API}${obj.image}`} height="400px" width="350px" class=" radius-image-full" alt="client image" />
                            </div>
                        </div>
                    </div>
               
      
    )
}

export default IndexLandingPage;