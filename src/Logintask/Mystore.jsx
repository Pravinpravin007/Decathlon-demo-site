import React from "react";
import { Link } from "react-router-dom";


export const Mystore = () => {
  return (
    <div>
      <div className="container-fuild">
        <div>
          <div
            className="d-flex"
            style={{ fontSize: "20px", fontFamily: "cursive" }}>
            <Link to="/" className="ms-5" style={{ textDecoration: "none" }}>
              <div className="me-1">Home</div>
            </Link>
            <div className="me-1">/</div>
            <div className="me-1">Find a store</div>
          </div>
          <div>
            <h4 className="text-primary" style={{ textAlign: "center" }}>
              FIND A DECATHLON SPORTS STORE NEAR YOU
            </h4>
          </div>
        </div>
        <div className="mb-5" style={{ textAlign: "center" }}>
          <h1 className="text-primary">Our Stores in India</h1>
          <span>We have 100+ stores across different cites of 19 states</span>
        </div>

        
        <iframe className="mb-5" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62883.096439634515!2d78.08162382365258!3d9.917834336827589!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00c582b1189633%3A0xdc955b7264f63933!2sMadurai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1710829275515!5m2!1sen!2sin" style={{height:"600px",width:"1500px"}}></iframe>

        <div
          className="row m-2"
          style={{
            boxShadow: "box-shadow: 0px 0px 10px #000;",
            filter: "drop-shadow(0px 0px 100px rgba(0, 0, 0, 0.2))",
          }}
        >
          <div className="col-3 mb-3">
            <div class="card w-100">
              <div class="card-body">
                <div class="card-tile">
                  <h5>Andhra Pradesh</h5>
                  <span>1 Store</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div class="card w-100">
              <div class="card-body">
                <div class="card-tile">
                  <h5>Assam</h5>
                  <span>3 Store</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div class="card w-100">
              <div class="card-body">
                <div class="card-tile">
                  <h5> Bihar</h5>
                  <span>2 Store</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div class="card w-100">
              <div class="card-body">
                <div class="card-tile">
                  <h5> Chhattisgarh</h5>
                  <span>7 Store</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-3 mb-3">
            <div class="card w-100">
              <div class="card-body">
                <div class="card-tile">
                  <h5>Delhi</h5>
                  <span>9 Store</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div class="card w-100">
              <div class="card-body">
                <div class="card-tile">
                  <h5> Goa</h5>
                  <span>3 Store</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div class="card w-100">
              <div class="card-body">
                <div class="card-tile">
                  <h5> Gujarat</h5>
                  <span> 6 Store</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div class="card w-100">
              <div class="card-body">
                <div class="card-tile">
                  <h5> Haryana</h5>
                  <span>1 Store</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div class="card w-100">
              <div class="card-body">
                <div class="card-tile">
                  <h5> Karnataka</h5>
                  <span>8 Store</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-3 mb-3">
            <div class="card w-100">
              <div class="card-body">
                <div class="card-tile">
                  <h5> Kerala</h5>
                  <span>7 Store</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div class="card w-100">
              <div class="card-body">
                <div class="card-tile">
                  <h5> Madhya Pradesh</h5>
                  <span>10 Store</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div class="card w-100">
              <div class="card-body">
                <div class="card-tile">
                  <h5> Madhya Pradesh</h5>
                  <span>9 Store</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div class="card w-100">
              <div class="card-body">
                <div class="card-tile">
                  <h5> Odisha</h5>
                  <span>11 Store</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div class="card w-100">
              <div class="card-body">
                <div class="card-tile">
                  <h5> Punjab</h5>
                  <span>9 Store</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-3 mb-3">
            <div class="card w-100">
              <div class="card-body">
                <div class="card-tile">
                  <h5> Rajasthan</h5>
                  <span>8 Store</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div class="card w-100">
              <div class="card-body">
                <div class="card-tile">
                  <h5> Tamilnadu</h5>
                  <span>17 Store</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div class="card w-100">
              <div class="card-body">
                <div class="card-tile">
                  <h5> Telangana</h5>
                  <span> 2 Store</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div class="card w-100">
              <div class="card-body">
                <div class="card-tile">
                  <h5> Uttar Pradesh</h5>
                  <span> 9 Store</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div class="card w-100">
              <div class="card-body">
                <div class="card-tile">
                  <h5> Uttarakhand</h5>
                  <span>4 Store</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div class="card w-100">
              <div class="card-body">
                <div class="card-tile">
                  <h5> West Bengal</h5>
                  <span> 14 Store</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <h3 className="text-primary mt-5 mb-5" style={{ textAlign: "center" }}>
        Two Decathlon Store Concepts To Enjoy
      </h3>
      <div className="row">
        <div className="col-6">
          <div class="card w-100">
            <div class="card-body">
              <div class="card-title row">
                <div className="col-12">
                  <h5 style={{ fontWeight: "bold" }}>Experience Store</h5>
                  <div>
                    Access our full range of 5,000 products from 60 sports in
                    these stores!
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-6">
          <div class="card w-100 ">
            <div class="card-body">
              <div class="card-title row">
                <div className="col-12">
                  <h5 style={{ fontWeight: "bold" }}>Connect Store</h5>
                  <span>
                    600 products available now! 6000 within a few hours!
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row m-0 ">
          <div className="col-9">
            <div className="row  bg-light p-5 ">
              <div className="col-3">
                <div style={{fontWeight:"bold"}}>OUR PROMISE</div>
              </div>
              <div className="col-3">
                <div>No cost EMI Available</div>
              </div>
              <div className="col-3">
                <div>Easy Return*</div>
              </div>
              <div className="col-3">
                <div>1 Million+happy Customer</div>
              </div>
            </div>
          </div>
          <div className="col-3 bg-light p-5">
            <div style={{fontWeight:"bold",fontSize:"14px"}}>EXPERIENCE DECATHLON APP ON MOBILE</div>
          </div>
        </div>

        <div className="row ms-5">
          <div className="col-9">
            <div className="row">
              <div className="col-3">
                <div style={{fontWeight:"bold"}}>SUPPORT</div>
                <div>Contact our store</div>
                <div>Devilvery</div>
              </div>
              <div className="col-3">
              <div style={{fontWeight:"bold"}}>OUR SERVICES</div>
                <div>Decathlon for School</div>
                <div>Decathlon for Corporates</div>
                <div>Decathlon for Sports clubs</div>
                <div>Decathlon for Gift cards</div>
                <div>Installation & Assembley Services</div>
              </div>
              <div className="col-3">
              <div style={{fontWeight:"bold"}}>ABOUT US</div>
                <div>Who we are</div>
                <div>Careers</div>
                <div>Made in india</div>
              </div>
              <div className="col-3">
              <div style={{fontWeight:"bold"}}>LEGAL</div>
                <div>Return policy</div>
                <div>Terms and conditions</div>
                <div>Privacy policy</div>
              </div>
            </div>
          </div>
          <div className="col"></div>
        </div>
      </div>
    </div>
  );
};
