import React, { useState } from "react";
import Footer from './footer'
import CustomNavbar from "./CustomNavbar";
function OrderList() {
  const [orders, setOrders] = useState([
    {
      id: 1,
      product: {
        name: "Product 1",
        image: "https://example.com/product1.jpg",
        price: 19.99
      },
      date: "2022-01-05"
    },
    {
      id: 2,
      product: {
        name: "Product 2",
        image: "https://example.com/product2.jpg",
        price: 29.99
      },
      date: "2022-02-15"
    }
  ]);

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
      <div style={{ 
          display: "flex", 
          flexDirection: "row", 
          justifyContent: "space-between", 
          alignItems: "center", 
          marginBottom: "20px", 
          width: "700px"
      }}>
        <div style={{ fontWeight: "bold", width: "50%" }}>Product</div>
        <div style={{ fontWeight: "bold", textAlign: "center", width: "25%" }}>Price</div>
        <div style={{ fontWeight: "bold", textAlign: "center", width: "25%" }}>Date</div>
      </div>
      {orders.map((order) => (
        <div key={order.id} style={{ 
            display: "flex", 
            flexDirection: "row", 
            justifyContent: "space-between", 
            alignItems: "center", 
            marginBottom: "20px", 
            width: "700px",
            padding: "10px",
            border: "1px solid #ccc",
            borderRadius: "10px"
        }}>
          <div style={{ display: "flex", alignItems: "center", width: "50%" }}>
            <img src={order.product.image} alt={order.product.name} style={{ width: "100px", height: "100px", marginRight: "20px" }} />
            <div>{order.product.name}</div>
          </div>
          <div style={{ textAlign: "center", width: "25%" }}>{order.product.price}</div>
          <div style={{ textAlign: "center", width: "25%" }}>{order.date}</div>
        </div>
      ))}
    </div>
    <Footer />
    </div>
  );
}

export default OrderList;
