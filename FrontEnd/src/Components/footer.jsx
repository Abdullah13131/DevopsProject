import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
export default function Footer
() {
  return (
    <footer style={{ 
      backgroundColor: "#1a1a1a",
      color: "#fff",
      padding: "20px 50px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      minHeight: "100px",
      borderTop: "2px solid #fff"
    }}>
      <div style={{ display: "flex", alignItems: "center" }}>
        <img src="https://www.howtogeek.com/wp-content/uploads/2022/08/Google-Maps-icon-on-map.png?height=200p&trim=2,2,2,2" alt="Map" style={{ width: "70px", marginRight: "20px" }} />
        <div>
          <h4 style={{ margin: 0, fontSize: "18px" }}>Our Store</h4>
          <p style={{ margin: 0, fontSize: "14px" }}>123 Main St</p>
          <p style={{ margin: 0, fontSize: "14px" }}>New York, NY 10001</p>
        </div>
      </div>
      <div style={{ display: "flex" }}>
        <div style={{ marginRight: "20px" }}>
          <h4 style={{ margin: 0, fontSize: "18px" }}>Contact Us</h4>
          <p style={{ margin: 0, fontSize: "14px" }}>Email: info@ourstore.com</p>
          <p style={{ margin: 0, fontSize: "14px" }}>Phone: (123) 456-7890</p>
        </div>
        <div>
          <h4 style={{ margin: 0, fontSize: "18px" }}>Follow Us</h4>
          <div style={{ display: "flex", marginTop: "10px" }}>
          <a style={{ marginRight: "20px" , color:'white'}} href="https://www.facebook.com"><FacebookIcon /></a>
            <a style={{ marginRight: "20px" , color:'white' }} href="https://www.twitter.com"><TwitterIcon /></a>
            <a style={{ marginRight: "20px" , color:'white'}} href="https://www.instagram.com"><InstagramIcon /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}

{/* <div style={{ marginRight:'200'}}>
            <a style={{ marginRight: "20px" , color:'white'}} href="https://www.facebook.com"><FacebookIcon /></a>
            <a style={{ marginRight: "20px" , color:'white' }} href="https://www.twitter.com"><TwitterIcon /></a>
            <a style={{ marginRight: "20px" , color:'white'}} href="https://www.instagram.com"><InstagramIcon /></a>
          </div> */}