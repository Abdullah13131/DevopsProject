import React from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useNavigate } from "react-router-dom";
export default function CustomNavbar() {
  let navigate = useNavigate();
  return (
    <nav style={{ 
        display: "flex", 
        justifyContent: "space-between", 
        alignItems: "center", 
        height: "50px", 
        background: "black",
        color: "#fff",
        padding: "0 20px"
    }}> 
      <div style={{ fontWeight: "bold" }}>Hi! Kumail Raza</div>
      <div >
        <NotificationsIcon style={{width:30, height:30,margin:10}} onClick={()=>{navigate('/cart');}} />
        <ShoppingCartIcon style={{width:30, height:30, margin:10}} onClick={()=>{navigate('/cart');}}/>
      </div>
    </nav>
  )
}
