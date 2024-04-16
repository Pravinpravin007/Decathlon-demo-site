import React from "react";
import Delivery from "../Img/Delivery.jpg";
import { Link } from "react-router-dom";

export const Change1 = () => {
  return (
    <div className="mt-5" style={{ display: "flex", justifyContent: "center" }}>
      <div className="Change">
        <div className="row">
          <div className="col">
            <span className="fs-1">Location</span>
            <div>
              Select your location/address to see accurate product delivery date
            </div>
            <img src={Delivery} style={{ height: "40%" }} alt="" />
          </div>
          <div className="col">
            <div className="row">
              <h5>SELECT ADDRESS</h5>
              <div className="col">
                <div className="bg-light ">
                  <div className="ms-3">
                    Login to view your saved delivery address
                  </div>
                  {/* <Link to={"/Login"}></Link> */}
                  <Link to="/Login">
                    <button
                      type="button"
                      className="btn btn-primary w-full py-2 mt-3 ms-3"
                    >
                      Login
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <br></br>
            <span style={{justifyContent:"center"}}>Or</span>
            <br></br>
            <div className="col mt-5">
              <div className="row">
                <h5>PINCODE</h5>
                <div className="col">
                  <div className="bg-light">
                    <div className="ms-3">Enter a pincode</div>
                    <br />
                    <div className="ms-3">
                      <button className="btn btn-primary w-full py-2 me-3">
                        600013
                      </button>
                      <Link to="/Home">
                        <button className="btn btn-primary w-full py-2">
                          Apply
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
