import React, { useState } from "react";
export const Addfile = () => {
  //image upload
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedOption, setSelectedOption] = useState("");

  let uploadedImage = null;

  const handleFile = () => {
    console.log("hello world");
    const formData = new FormData();
    formData.append("file", selectedImage);
    fetch("http://localhost:8080/file/upload", {
      method: "POST",
      body: formData,
      dataType: "jsonp",
    })
      .then((response) => response.text())
      .then((text) => {
        uploadedImage = text;
        console.log(text);
        alert("imageuploded");
      });
  };

  //add detils
  const [file, setFile] = useState({
    productName: "",
    description: "",
    price: "",
    catogries: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFile({ ...file, [name]: value });
    console.log(name, value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const Addfiles = () => {
    const files = {
      productName: file.productName,
      description: file.description,
      price: file.price,
      catogries: selectedOption,
      image: uploadedImage,
    };
    console.log("===Files====", JSON.stringify(files));
    fetch("http://localhost:8080/file/addfile", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(files),
    }).then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error(`Server returned status: ${response.status}`);
      }
    });
  };
  const handleSelect = (event) => {
    console.log("Value----->", event.target.value);
    setSelectedOption(event.target.value);
  };
  return (
    <div>
      {selectedImage && (
        <div>
          <img
            alt="not found"
            width={"250px"}
            src={URL.createObjectURL(selectedImage)}
          />
          <br />
          <button onClick={() => setSelectedImage(null)}>RemoveImage</button>
          <button
            onClick={() => {
              handleFile();
            }}
          >
            UploadImage
          </button>
        </div>
      )}

      <center>
        <form onSubmit={handleSubmit} className="bg-primary  ">
          <input
            type="text"
            name="productName"
            className="mb-3"
            value={file.productName}
            onChange={handleChange}
            placeholder="Enter a product name"
          />
          <input
            type="text"
            name="description"
            className="mb-3"
            value={file.description}
            onChange={handleChange}
            placeholder="Enter a description"
          />
          <input
            type="text"
            name="price"
            className="mb-3"
            value={file.price}
            onChange={handleChange}
            placeholder="Enter a price"
          />
          <label htmlFor="catagorie" className="mb-3">
            Choose a catagorie:
          </label>

          <select id="catagorie" value={selectedOption} onChange={handleSelect}>
            <option value="men">Men</option>
            <option value="Womens">Womens</option>
            <option value="kids">Kids</option>
            <option value="SportsEquipment">SportsEquipment</option>
          </select>
          <input
            type="file"
            name="image"
            onChange={(event) => {
              console.log(event.target.files[0]);
              setSelectedImage(event.target.files[0]);
            }}
          />
          <br />
          <br />
          <button
            onClick={() => {
              Addfiles();
              alert("Product successful")
            }}
          >
            Add product
          </button>
        </form>
      </center>
    </div>
  );
};
