import React, { useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";

export const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
    console.log(name, value);
  };

  const Signup1 = () => {
    const data = {
      username: formData.name,
      email: formData.email,
      password: formData.password,
    };

    fetch("http://localhost:8080/form/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/Json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (response.status === 200) {
          console.log("datareceived", response);
          alert("singup seccessfully");
          navigate("/login");
        }
      })
      .catch((error) => {
        console.log("error", error);
      });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    // Signup1();
    console.log(formData);
  };

  return (
    <div>
      <form style={{ borderRadius: "5px" }} onSubmit={handleSubmit}>
        <h1 className="mb-5">Signup Form</h1>
        <label htmlFor="">Username :</label>
        <input
          type="text"
          style={{ borderRadius: "5px" }}
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <br />
        <br />

        <label htmlFor="">E-mailId :</label>
        <input
          type="text"
          name="email"
          style={{ borderRadius: "5px" }}
          value={formData.email}
          onChange={handleChange}
          required
        />
        <br />
        <br />

        <label htmlFor="">Password : </label>
        <input
          type="password"
          name="password"
          style={{ borderRadius: "5px" }}
          value={formData.password}
          onChange={handleChange}
          required
        />
        <br />
        <br />

        <button style={{ borderRadius: "5px" }} onClick={() => Signup1()}>
          Signup
        </button>
      </form>
    </div>
  );
};
