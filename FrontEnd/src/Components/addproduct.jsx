import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Footer from './footer'
import CustomNavbar from "./CustomNavbar";
export default function AddProduct() {
  const [productName, setProductName] = useState("");
  const [productImage, setProductImage] = useState("");
  const [writerName, setWriterName] = useState("");
  const [releaseDate, setReleaseDate] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productDescription, setProductDescription] = useState("");

  const handleProductNameChange = (event) => {
    setProductName(event.target.value);
  };

  const handleProductImageChange = (event) => {
    setProductImage(event.target.value);
  };

  const handleWriterNameChange = (event) => {
    setWriterName(event.target.value);
  };

  const handleReleaseDateChange = (event) => {
    setReleaseDate(event.target.value);
  };

  const handleProductPriceChange = (event) => {
    setProductPrice(event.target.value);
  };

  const handleProductDescriptionChange = (event) => {
    setProductDescription(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add code to submit form data here
  };

  return (
    <div >
       <CustomNavbar />
      <div style={{ 
        display: "flex", 
        flexDirection: "column", 
        justifyContent: "flex-start", 
        alignItems: "center", 
        padding: "20px",
    }}>
      <form onSubmit={handleSubmit} style={{ 
          display: "flex", 
          flexDirection: "column", 
          justifyContent: "center", 
          alignItems: "center", 
          padding: "30px", 
          borderRadius: "10px", 
          background: "white", 
          boxShadow: "0 0 10px rgba(0,0,0,0.3)",
          minWidth: "300px",
          maxWidth: "500px"
        }}>
        <div style={{ fontWeight: "bold", fontSize: "24px", marginBottom: "20px" }}>Add a Product</div>
        <div style={{ marginBottom: "10px" }}>
          <label htmlFor="productName" style={{ marginRight: "20px" , display: "block", 
            marginBottom: "10px",
            fontSize: "16px",
            color: "#333",
            fontWeight: "bold",
            textAlign: "left"}}>Product Name:</label>
          <input style={{ 
            padding: "10px",
            borderRadius: "5px",
            border: "1px solid #ccc",
            outline: "none",
            minWidth: "250px"
          }} type="text" id="productName" value={productName} onChange={handleProductNameChange} required />
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label htmlFor="productImage" style={{ marginRight: "20px" , display: "block", 
            marginBottom: "10px",
            fontSize: "16px",
            color: "#333",
            fontWeight: "bold",
            textAlign: "left"}}>Product Image:</label>
          <input style={{ 
            padding: "10px",
            borderRadius: "5px",
            border: "1px solid #ccc",
            outline: "none",
            minWidth: "250px"
          }} type="text" id="productImage" value={productImage} onChange={handleProductImageChange} required />
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label htmlFor="writerName" style={{ marginRight: "20px" , display: "block", 
            marginBottom: "10px",
            fontSize: "16px",
            color: "#333",
            fontWeight: "bold",
            textAlign: "left"}}>Writer Name:</label>
          <input style={{ 
            padding: "10px",
            borderRadius: "5px",
            border: "1px solid #ccc",
            outline: "none",
            minWidth: "250px"
          }} type="text" id="writerName" value={writerName} onChange={handleWriterNameChange} required />
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label htmlFor="releaseDate" style={{ marginRight: "20px" , display: "block", 
            marginBottom: "10px",
            fontSize: "16px",
            color: "#333",
            fontWeight: "bold",
            textAlign: "left"}}>Release Date:</label>
          <input style={{ 
            padding: "10px",
            borderRadius: "5px",
            border: "1px solid #ccc",
            outline: "none",
            minWidth: "250px"
          }} type="date" id="releaseDate" value={releaseDate} onChange={handleReleaseDateChange} required />
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label htmlFor="productPrice" style={{ marginRight: "20px" , display: "block", 
            marginBottom: "10px",
            fontSize: "16px",
            color: "#333",
            fontWeight: "bold",
            textAlign: "left"}}>Price:</label>
          <input style={{ 
            padding: "10px",
            borderRadius: "5px",
            border: "1px solid #ccc",
            outline: "none",
            minWidth: "250px"
          }} type="number" id="productPrice" value={productPrice} onChange={handleProductPriceChange} required />
        </div>
        <div style={{ marginBottom: "20px" }}>
          <label htmlFor="productDescription" style={{ marginRight: "20px" , display: "block", 
            marginBottom: "10px",
            fontSize: "16px",
            color: "#333",
            fontWeight: "bold",
            textAlign: "left"}}>Description:</label>
          <textarea style={{ 
            padding: "10px",
            borderRadius: "5px",
            border: "1px solid #ccc",
            outline: "none",
            minWidth: "250px",
            height:"100px"
          }} id="productDescription" value={productDescription} onChange={handleProductDescriptionChange} required />
        </div>
        <button style={{ 
            padding: "10px 20px", 
            marginRight: "20px", 
            fontSize: "18px", 
            borderRadius: "5px", 
            background: "#007bff", 
            color: "#fff",
            border: "none"
        }}>Add Product</button>
        </form>
        </div>
        <Footer />
        </div>
  )}