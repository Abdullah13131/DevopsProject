import React, { useState } from "react";
import Footer from './footer'
import CustomNavbar from "./CustomNavbar";
export default function ProductDetails() {
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (event) => {
    setQuantity(Number(event.target.value));
  };

  return (
    <div >
      <CustomNavbar />
      <div style={{ 
        display: "flex", 
        flexDirection: "column", 
        justifyContent: "flex-start", 
        alignItems: "center", 
        padding: "20px"
    }}>
      <div style={{ width: "700px", marginBottom: "20px" }}>
        <img 
          src="https://picsum.photos/700/500" 
          alt="Product" 
          style={{ width: "100%", height: "100%", objectFit: "contain" }} 
        />
      </div>
      <div style={{ 
          display: "flex", 
          flexDirection: "column", 
          justifyContent: "flex-start", 
          alignItems: "flex-start", 
          marginBottom: "20px", 
          width: "700px"
      }}>
        <div style={{ fontWeight: "bold", fontSize: "24px", marginBottom: "10px" }}>Product Name</div>
        <div style={{ fontSize: "18px", marginBottom: "10px" }}>Released: June 2022</div>
        <div style={{ fontSize: "18px", marginBottom: "10px" }}>Writer: John Smith</div>
        <div style={{ fontSize: "18px", marginBottom: "20px" }}>Price: $19.99</div>
        <div style={{ fontSize: "18px", marginBottom: "10px" }}>Description:</div>
        <div style={{ fontSize: "16px", marginBottom: "20px" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sodales hendrerit odio, eget fringilla enim. Proin convallis vel justo in dictum. Suspendisse aliquam orci quis ipsum iaculis vestibulum. Donec commodo augue a massa laoreet tincidunt. Nullam commodo lacinia velit quis egestas. Curabitur finibus libero quis velit fermentum, id congue nulla luctus. Maecenas euismod euismod malesuada.</div>
        <div style={{ display: "flex", justifyContent: "flex-start", alignItems: "center" }}>
          <div style={{ marginRight: "20px" }}>Quantity:</div>
          <div>
            <select value={quantity} onChange={handleQuantityChange}>
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
              <option value={5}>5</option>
            </select>
          </div>
        </div>
      </div>
      <div style={{ 
          display: "flex", 
          flexDirection: "row", 
          justifyContent: "center", 
          alignItems: "center", 
          width: "700px"
      }}>
        <button style={{ 
            padding: "10px 20px", 
            marginRight: "20px", 
            fontSize: "18px", 
            borderRadius: "5px", 
            background: "#007bff", 
            color: "#fff",
            border: "none"
        }}>Buy Now</button>
        <button style={{ 
            padding: "10px 20px", 
            fontSize: "18px", 
            borderRadius: "5px", 
            background: "#f5c71a", 
            color: "#fff",
            border: "none"}}>Add To Cart</button>
            </div>
            </div>
            <Footer />
            </div>
  );
        }