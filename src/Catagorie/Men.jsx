import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";

export const Men = () => {
  const [categoryData, setCategoryData] = useState([]);

  useEffect(() => {
    const fetchData = () => {
      axios
        .get("http://localhost:8080/file/findbycatogries/men")
        .then((res) => {
          console.log("res", res.data);
          setCategoryData(res.data);
        })
        .catch((err) => {
          console.log("error", err) ;
        });
    };

    fetchData();
    return () => {
      // Cleanup function if needed
    };
  }, []);
  const CartSend = (categoryData) => {
    let cc = {
      productName: categoryData.productName,
      description: categoryData.description,
      price: categoryData.price,
      image: categoryData.image,
      catogries: categoryData.catogries,
    };

    console.log(cc);
    fetch("http://localhost:8080/file/addcart", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(cc),
    }).then((response) => {
      console.log("Data received " + response);
      alert("Product Added to Cart..!");
    });
  };
  return (
    <div>
      <h1 className="text-center">Mens</h1>
      <div className="container">
        <div className="row">
          {Array.isArray(categoryData) &&
            categoryData.map((post) => (
              <div
                className="card m-2 col-12 col-sm-6 col-md-4 col-lg-3"
                key={post.id}
              >
                <img
                  src={`http://localhost:8080/uploads/${post.image}`}
                  style={{ height: "200px", width: "100%" }}
                  className="card-img-top"
                  alt="beerimage"
                />
                <div className="card-body">
                  <h5 className="card-title">{post.name}</h5>
                  <p>
                    Description:{" "}
                    <b style={{ fontSize: "larger" }}>{post.description}</b>
                  </p>
                  <p>
                    Price: <b style={{ fontSize: "larger" }}>{post.price}</b>
                  </p>
                  <button onClick={() => CartSend(post)}>
                    <Link to="/Cart" style={{ textDecoration: "none" }}>
                      Add to Cart
                    </Link>
                  </button>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Men;
