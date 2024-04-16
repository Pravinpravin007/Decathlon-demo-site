import React from "react";
import Men from "../Img/Men.jpg";
import Women from "../Img/Women.jpg";
import Kid from "../Img/Kid.jpg";
import Football from "../Img/Football.jpg";
import Womentshirt from "../Img/Womentshirt.jpg";
import Menstshirt from "../Img/Menstshirt.jpg";
import Mensshorts from "../Img/Mensshorts.jpg";
import Leggings from "../Img/Leggings.jpg";
import k1 from "../Img/k1.jpg";
import m1 from "../Img/m1.jpg";
import "./Home.css";
import { Link } from "react-router-dom";

// import Carousel from 'react-bootstrap/Carousel';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';

export const Home = () => {
  return (
    <div className="container-fuild">
      <div className="row mt-5 ms-5">
        <div className="col-3">
          <Link to="/Men" style={{ textDecoration: "none", color: "black" }}>
            <img src={Men} style={{ height: "300px", width: "250px" }} alt="" />
            <div className="cat mt-3" style={{ fontWeight: "bold" }}>
              Mens
            </div>
          </Link>
        </div>
        <div className="col-3">
          <Link to="/Women" style={{ textDecoration: "none", color: "black" }}>
            <img
              src={Women}
              alt=""
              style={{ height: "300px", width: "250px" }}
            />
            <div className="cat mt-3" style={{ fontWeight: "bold" }}>
              Womens
            </div>
          </Link>
        </div>
        <div className="col-3">
          <Link to="/Women" style={{ textDecoration: "none", color: "black" }}>
            <img src={Kid} style={{ height: "300px", width: "250px" }} alt="" />
            <div className="cat mt-3" style={{ fontWeight: "bold" }}>
              Kids
            </div>
          </Link>
        </div>
        <div className="col-3">
          <Link to="/Women" style={{ textDecoration: "none", color: "black" }}>
            <img
              src={Football}
              style={{ height: "300px", width: "250px" }}
              alt=""
            />
            <div className="caat mt-3 mb-5" style={{ fontWeight: "bold" }}>
              Sports Equipment
            </div>
          </Link>
        </div>
      </div>

      <div
        id="carouselExampleSlidesOnly"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={m1} className="d-block w-75 " style={{marginLeft:"190px"}} alt="m1" />
          </div>
        </div>
      </div>

      <div className="container-fuild">
        <h5 className="ms-5 mt-5 mb-5" style={{ fontWeight: "bold" }}>
          Bestseller In Summer
        </h5>
        <div className="row mt-5 ms-5">
          <div className="col-3">
            <img
              src={Menstshirt}
              style={{ height: "300px", width: "300px" }}
              alt=""
              srcset=""
            />
            <div className="cat mt-3" style={{ fontWeight: "bold" }}>
              Mens tshirt
            </div>
          </div>
          <div className="col-3">
            <img
              src={Mensshorts}
              style={{ height: "300px", width: "300px" }}
              alt=""
              srcset=""
            />
            <div className="cat mt-3" style={{ fontWeight: "bold" }}>
              Mens shorts
            </div>
          </div>
          <div className="col-3">
            <img
              src={Womentshirt}
              style={{ height: "300px", width: "300px" }}
              alt=""
            />
            <div className="cat mt-3" style={{ fontWeight: "bold" }}>
              Women tshirt
            </div>
          </div>
          <div className="col-3">
            <img
              src={Leggings}
              style={{ height: "300px", width: "300px" }}
              alt=""
              srcset=""
            />
            <div className="cat mt-3" style={{ fontWeight: "bold" }}>
              Leggings
            </div>
          </div>
        </div>
      </div>
      <div id="carouselExampleSlidesOnly"
        className="carousel slide"
        data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active mt-5">
            <img src={k1} className="d-block w-75" style={{marginLeft:"190px"}} alt="k1" />
          </div>
        </div>
      </div>
    </div>
  );
};
