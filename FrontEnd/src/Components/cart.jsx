import React, { useState } from "react";
import Footer from './footer'
import CustomNavbar from "./CustomNavbar";
function Cart() {
  const [products, setProducts] = useState([
    { id: 1, name: 'Product 1', price: 100, quantity: 2, image: 'https://cdn.dxomark.com/wp-content/uploads/medias/post-94778/Apple-iPhone-13-Pro-featured-image-packshot-review.jpg' },
    { id: 2, name: 'Product 2', price: 150, quantity: 1, image: 'https://cdn.dxomark.com/wp-content/uploads/medias/post-94778/Apple-iPhone-13-Pro-featured-image-packshot-review.jpg' },
    { id: 1, name: 'Product 1', price: 100, quantity: 2, image: 'https://cdn.dxomark.com/wp-content/uploads/medias/post-94778/Apple-iPhone-13-Pro-featured-image-packshot-review.jpg' },
    { id: 2, name: 'Product 2', price: 150, quantity: 1, image: 'https://cdn.dxomark.com/wp-content/uploads/medias/post-94778/Apple-iPhone-13-Pro-featured-image-packshot-review.jpg' },
  ]);

  const [totalPrice, setTotalPrice] = useState(350);

  const handleQuantityChange = (productId, newQuantity) => {
    const updatedProducts = products.map(product => {
      if (product.id === productId) {
        return { ...product, quantity: newQuantity };
      }
      return product;
    });
    setProducts(updatedProducts);
    setTotalPrice(
      updatedProducts.reduce((acc, product) => acc + product.price * product.quantity, 0)
    );
  };

  return (
    <div >
      <CustomNavbar />
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' , height:'100vh'}}>
      <h1 style={{ margin: '2rem 0' }}>Cart</h1>
      {products.map(product => (
        <div
          key={product.id}
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '80%',
            padding: '1rem',
            margin: '1rem 0',
            borderRadius: '1rem',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
            backgroundSize: 'cover',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
            <img src={product.image} alt={product.name} style={{ width: '5rem', marginRight: '1rem' }} />
            <div>
              <p style={{ margin: '0.5rem 0' }}>{product.name}</p>
              <p style={{ margin: '0.5rem 0' }}>{product.price} USD</p>
            </div>
          </div>
          <div>
            <label htmlFor={`quantity_${product.id}`}>Quantity:</label>
            <input
              type="number"
              id={`quantity_${product.id}`}
              value={product.quantity}
              min="1"
              onChange={e => handleQuantityChange(product.id, parseInt(e.target.value))}
              style={{ marginLeft: '0.5rem', width: '3rem' }}
            />
          </div>
        </div>
      ))}
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '80%' }}>
        <p style={{ fontWeight: 'bold', fontSize: '1.5rem' }}>Total:</p>
        <p style={{ fontWeight: 'bold', fontSize: '1.5rem' }}>{totalPrice} USD</p>
      </div>
      <button style={{ padding: '1rem', borderRadius: '0.5rem', marginTop: '2rem' }}>Proceed to checkout</button>
    </div>
    <Footer />
    </div>
  );
};

export default Cart;
