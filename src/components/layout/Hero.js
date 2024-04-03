import { useState } from "react";
import { Button } from "react-bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";
// import { shoes, statistics } from "../assets/constants";
// import { arrowRight } from "../assets/icons";
// import { banner } from "../../static/image/";
import ShoeCard from "./ShoeCard";

const Hero = () => {
  const [bigShoeImg, setBigShoeImg] = useState();

   const shoes = [
    {
      thumbnail: "/User/aniketvyas/Documents/new_ecom/converse-store/src/assets/images/thumbnailShoe1.png",
      bigShoe: "/User/aniketvyas/Documents/new_ecom/converse-store/src/assets/images/bigShoe1.png",
    },
    {
      thumbnail: "/User/aniketvyas/Documents/new_ecom/converse-store/src/assets/images/thumbnailShoe2.png",
      bigShoe: "/User/aniketvyas/Documents/new_ecom/converse-store/src/assets/images/bigShoe2.png",
    },
    {
      thumbnail: "/User/aniketvyas/Documents/new_ecom/converse-store/src/assets/images/thumbnailShoe2.png",
      bigShoe: "/User/aniketvyas/Documents/new_ecom/converse-store/src/assets/images/bigShoe2.png",
    },
  ];
  
   const statistics = [
    { value: "1k+", label: "Brands" },
    { value: "500+", label: "Shops" },
    { value: "250k+", label: "Customers" },
  ];
  return (
    <section id="home" className="w-full d-flex flex-xl-row flex-column justify-content-center min-vh-100 gap-10 container-fluid">
      <div className="position-relative d-flex xl-w-40 flex-column justify-content-center items-start w-full max-xl-padding-x pt-36">
        <p className="text-xl font-montserrat text-purple">Our Summer Collection</p>
        <h1 className="mt-10 font-palanquin display-1 max-sm-text-7xl max-sm-leading-82px font-weight-bold">
          <span className="bg-white whitespace-nowrap position-relative z-index-10 xl-pr-10 max-sm-p-0">New Collection</span><br />
          <span className="text-purple inline-block mt-3">Converse </span>
        </h1>
        <p className="font-montserrat text-slate-gray text-lg lead mt-6 mb-14 sm-max-width-sm">
          Discover stylish Converse arrivals, quality comfort, and innovation for your active life.
        </p>
        <button className="btn btn-primary" onClick={() => console.log("Shop now")}>Shop now</button>
        <div className="d-flex justify-content-start items-start flex-wrap mt-2">
          {statistics.map((stat, index) => (
            <div key={index}>
              <p className="text-4xl font-palanquin font-weight-bold">{stat.value}</p>
              <p className="font-montserrat lead text-slate-gray">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="position-relative flex-grow-1 d-flex justify-content-center align-items-center xl-min-vh-100 max-xl-py-40 bg-primary bg-hero bg-cover bg-center">
        <img src={bigShoeImg} alt="shoe collection" height="500" width="610" className="img-fluid position-relative z-index-10" />
        <div className="d-flex sm-gap-6 gap-4 position-absolute bottom-5% sm-left-10 max-sm-px-6">
          {shoes.map((shoe, index) => (
            <div key={index}>
              <ShoeCard imgURL={shoe} changeBigShoeImage={(shoe) => setBigShoeImg(shoe)} bigShoeImg={bigShoeImg} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
