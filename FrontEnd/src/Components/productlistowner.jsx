import React, { useState } from "react";
import CustomNavbar from "./CustomNavbar";
import Footer from './footer'

function ProductList() {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Product 1",
      image: "https://example.com/product1.jpg"
    },
    {
      id: 2,
      name: "Product 2",
      image: "https://example.com/product2.jpg"
    }
  ]);

  const handleDelete = (productId) => {
    const updatedProducts = products.filter((product) => product.id !== productId);
    setProducts(updatedProducts);
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
      <div style={{ 
          display: "flex", 
          flexDirection: "row", 
          justifyContent: "space-between", 
          alignItems: "center", 
          marginBottom: "20px", 
          width: "700px"
      }}>
        {products.map((product) => (
          <div key={product.id} style={{ 
              display: "flex", 
              flexDirection: "column", 
              justifyContent: "flex-start", 
              alignItems: "center", 
              marginBottom: "20px", 
              width: "300px",
              padding: "10px",
              border: "1px solid #ccc",
              borderRadius: "10px"
          }}>
            <img src={product.image} alt={product.name} style={{ width: "100%", height: "200px" }} />
            <div style={{ fontWeight: "bold", fontSize: "20px", marginTop: "10px" }}>{product.name}</div>
            <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", width: "100%", marginTop: "10px" }}>
              <button onClick={() => handleDelete(product.id)}>Delete</button>
              <button>View</button>
            </div>
          </div>
        ))}
      </div>
      </div>
      <Footer />
    </div>
  );
}

export default ProductList;
