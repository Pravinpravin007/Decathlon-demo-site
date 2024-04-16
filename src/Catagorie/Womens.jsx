
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const Womens = () => {
  const [categoryData, setCategoryData] = useState([]);

  useEffect(() => {
    const fetchData = () => {
      axios.get("http://localhost:8080/file/findbycatogries/womens")
        .then((res) => {
          console.log("res",res.data);
          setCategoryData(res.data);
        })
        .catch((err) => {
          console.log("error", err);
        });
    };

    fetchData();
    return () => {
      // Cleanup function if needed
    };
  }, []);
  return (
    <div>
      <h1>Womens</h1>
      <div className="row">
        {Array.isArray(categoryData) &&
          categoryData.map((post) => (
            <div className="card col" style={{ width: "5rem" }} key={post.id}>
              <div className="card-body">
                <img
                  src={`http://localhost:8080/uploads/${post.image}`}
                  classN  ame="card-img-top"
                  style={{ height: "100px", width: "100px" }}
                  alt="..."
                />
                <h5 className="card-title">{post.name}</h5>
                <p className="card-text">{post.description}</p>
                <p className="card-text">{post.price}</p>

                <button>
                  <Link to="/Cart">Buy Now</Link>
                </button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Womens;
