import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './creativeSlider.css'; // You can create your own styles
import Axios from 'axios';
import { API } from '../../../API'
import { Link } from 'react-router-dom';


const Slide = ({image, heading, description,description_color, link}) => (
  <div className="slider-item hero-image">
   <img src={`${API}${image}`} className='img-fluid' alt="Slide" />
   <div class="hero-text">
    <h1 className='font-weight-bolder'>{heading}</h1>
    <p className='text-white font-weight-bold'>{description}</p>
    <Link to={link}><button style={{backgroundColor :`${description_color}`}} className='btn my-3'>Get it now</button></Link>
  </div>
  </div>
);

const CreativeSlider = ({sliderData}) => {

//   const slides = [
  const settings = {
    centerMode: true,
    centerPadding: '0',
    slidesToShow: 1,
    arrows: false,
    dots: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '0',
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    // <></>
    <Slider {...settings}>
      {sliderData.map((data, index) => (
        <Slide key={index} image={data.highlight_image} description_color={data.description_color} link={data.link} heading={data.highlight_heading} description={data.highlight_description} />
      ))}
    </Slider>
  );
};

export default CreativeSlider;

  

