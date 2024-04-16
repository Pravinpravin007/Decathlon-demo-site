import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
    console.log(name, value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    const Check = {
      username: formData.username,
      password: formData.password,
    };
    fetch("http://localhost:8080/form/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/Json",
      },
      body: JSON.stringify(Check),
    })
      .then((response) => {
        if (response.status === 200) {
          console.log("datareceived", response);
          alert("singup seccessfully");
          navigate("/");
        }
      })
      .catch((error) => {
        console.log("error", error);
      })
      .then((data) => {
        if (data === !formData.username && data === !formData.password) {
          return alert("Enter valid details");
        } else {
          console.log("Data", data);
          setFormData(data);
        }
      })
      .catch((error) => {
        console.error("Error during fetch", error);
      });
  };
  return (
    <div className="css">
      <div className="outer">
        <h1>Login Form</h1>
        <h4>login in to get notified</h4>
        <div>
          <form style={{ borderRadius: "10px" }} onSubmit={handleSubmit}>
            <p>
              Username :{" "}
              <input
                type="text"
                style={{ borderRadius: "5px" }}
                placeholder="Type your username"
                name="username"
                value={formData.username}
                onChange={handleChange}
              />
            </p>

            <p>
              Password :{" "}
              <input
                type="password"
                style={{ borderRadius: "5px" }}
                placeholder="Type your Password"
                name="password"
                value={formData.password}
                onChange={handleChange}
              />
            </p>

            <p>
              Create new account{" "}
              <Link to="/signup">
                <div style={{ color: "black" }}>Create</div>
              </Link>
            </p>

            <input
              type="submit"
              style={{ borderRadius: "5px" }}
              value="Login"
            />
          </form>
        </div>
      </div>
    </div>
  );
};
