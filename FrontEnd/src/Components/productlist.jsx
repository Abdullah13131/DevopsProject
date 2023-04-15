import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Footer from './footer'
import CustomNavbar from "./CustomNavbar";
function ProductCardList() {
  const phones = [    { name: "iPhone 13", image: "https://gharana.pk/price/wp-content/uploads/2021/11/Apple-iPhone-13-5G-Price-in-Pakistan.jpg", price: "$999" },    { name: "Samsung Galaxy S21", image: "https://gharana.pk/price/wp-content/uploads/2021/11/Apple-iPhone-13-5G-Price-in-Pakistan.jpg", price: "$799" },    { name: "Google Pixel 6", image: "https://gharana.pk/price/wp-content/uploads/2021/11/Apple-iPhone-13-5G-Price-in-Pakistan.jpg", price: "$699" },{ name: "iPhone 13", image: "https://gharana.pk/price/wp-content/uploads/2021/11/Apple-iPhone-13-5G-Price-in-Pakistan.jpg", price: "$999" },    { name: "Samsung Galaxy S21", image: "https://gharana.pk/price/wp-content/uploads/2021/11/Apple-iPhone-13-5G-Price-in-Pakistan.jpg", price: "$799" },    { name: "Google Pixel 6", image: "https://gharana.pk/price/wp-content/uploads/2021/11/Apple-iPhone-13-5G-Price-in-Pakistan.jpg", price: "$699" },{ name: "iPhone 13", image: "https://gharana.pk/price/wp-content/uploads/2021/11/Apple-iPhone-13-5G-Price-in-Pakistan.jpg", price: "$999" },    { name: "Samsung Galaxy S21", image: "https://gharana.pk/price/wp-content/uploads/2021/11/Apple-iPhone-13-5G-Price-in-Pakistan.jpg", price: "$799" },    { name: "Google Pixel 6", image: "https://gharana.pk/price/wp-content/uploads/2021/11/Apple-iPhone-13-5G-Price-in-Pakistan.jpg", price: "$699" },  ];

  return (
    <div >
      <CustomNavbar  />
    <div style={{height:'100%',width:'100%', backgroundImage:'url("https://img.freepik.com/free-vector/hand-painted-watercolor-pastel-sky-background_23-2148902771.jpg?w=2000")'}}>
    <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
      {phones.map((phone) => (
        <div
          key={phone.name}
          style={{
            width: "300px",
            margin: "20px",
            border: "1px solid #ccc",
            borderRadius: "10px",
            boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.1)",
            overflow: "hidden",
            backgroundColor: "#fff",
            transition: "all 0.3s ease-in-out",
            transform: "scale(1)",
          }}
        >
          <div
            style={{
              height: "200px",
              width: "100%",
              backgroundImage: `url(${phone.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              borderRadius: "10px 10px 0 0",
              position: "relative",
            }}
          >
            <div
              style={{
                backgroundColor: "#000",
                position: "absolute",
                bottom: "0",
                left: "0",
                right: "0",
                padding: "10px",
                opacity: "0.8",
                color: "#fff",
                transition: "all 0.3s ease-in-out",
              }}
            >
              <h3 style={{ margin: 0, fontSize: "20px" }}>{phone.name}</h3>
              <p style={{ margin: "5px 0", fontWeight: "bold", fontSize: "16px" }}>{phone.price}</p>
            </div>
          </div>
          <div style={{ padding: "20px", minHeight: "160px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
            <button
              style={{
                padding: "10px",
                backgroundColor: "red",
                color: "#fff",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
                width: "100%",
                fontSize: "16px",
                fontWeight: "bold",
                transition: "all 0.3s ease-in-out",
                marginBottom: "10px",
              }}
            >
              View Details
            </button>
            <button
              style={{
                padding: "10px",
                backgroundColor: "#007bff",
                color: "#fff",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
                width: "100%",
                fontSize: "16px",
                fontWeight: "bold",
                transition: "all 0.3s ease-in-out",
                marginBottom: "10px",
              }}
            >
              Buy Now
            </button>
            <p style={{ margin: 0, fontSize: "14px", color: "#999" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
      ))}
    </div>
    <Footer />
    </div>
    
    </div>
  );
};

export default ProductCardList;