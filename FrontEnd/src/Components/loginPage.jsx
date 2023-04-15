import React, { useState } from "react";

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (username === "") {
      setUsernameError("Username is required.");
    } else {
      setUsernameError("");
    }

    if (password === "") {
      setPasswordError("Password is required.");
    } else if (password.length < 8) {
      setPasswordError("Password must be at least 8 characters.");
    } else {
      setPasswordError("");
    }

    if (username !== "" && password !== "" && password.length >= 8) {
      // Form submission logic here
    }
  };

  return (
    <div style={{ 
        display: "flex", 
        justifyContent: "center", 
        alignItems: "center", 
        height: "100vh", 
        background: "#f0f0f0"
    }}>
      <form 
        onSubmit={handleSubmit} 
        style={{ 
          display: "flex", 
          flexDirection: "column", 
          justifyContent: "center", 
          alignItems: "center", 
          padding: "30px", 
          borderRadius: "10px", 
          background: "white", 
          boxShadow: "0 0 10px rgba(0,0,0,0.3)",
          minWidth: "600px",
          maxWidth: "900px"
        }}
      >
        <img style={{width:'60%'}} src='https://i.pinimg.com/originals/95/f8/58/95f8588d6469a16271ea2d2fad419d00.png'></img>
        <h1 style={{ 
            marginBottom: "30px",
            fontSize: "28px",
            fontWeight: "bold",
            color: "#333"
        }}>One Stop Book Shop</h1>
        <label 
          htmlFor="username" 
          style={{ 
            display: "block", 
            marginBottom: "10px",
            fontSize: "16px",
            color: "#333",
            fontWeight: "bold",
            textAlign: "left"
          }}
        >
          Username:
        </label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={handleUsernameChange}
          style={{ 
            padding: "10px",
            borderRadius: "5px",
            border: "1px solid #ccc",
            outline: "none",
            minWidth: "250px"
          }}
        />{usernameError && <p style={{ color: "red" }}>{usernameError}</p>}
        <label 
          htmlFor="password" 
          style={{ 
            display: "block", 
            marginTop: "20px",
            marginBottom: "10px",
            fontSize: "16px",
            color: "#333",
            fontWeight: "bold",
            textAlign: "left"
          }}
        >
          Password:
        </label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={handlePasswordChange}
          style={{ 
            padding: "10px",
            borderRadius: "5px",
            border: "1px solid #ccc",
            outline: "none",
            minWidth: "250px"
          }}
        />{passwordError && <p style={{ color: "red" }}>{passwordError}</p>}
        <button 
          type="submit" 
          style={{ 
            padding: "10px 20px", 
            backgroundColor: "#0077ff", 
            color: "white", 
            border: "none", 
            borderRadius: "5px",
            marginTop: "20px",
            cursor: "pointer",
            transition: "background-color 0.3s ease-in-out"
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = "#0066cc";
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = "#0077ff";
          }}
        >
          Log In
        </button>
        <p>New User? <a >Create Account</a></p>
      </form>
    </div>
  );
}

export default LoginPage;