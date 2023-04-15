import React, { useState } from "react";

export default function SignupPage() {
  const [username, setUsername] = useState("");
  const [fullName, setFullName] = useState("");
  const [age, setAge] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [fullNameError, setFullNameError] = useState("");
  const [ageError, setAgeError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleFullNameChange = (event) => {
    setFullName(event.target.value);
  };

  const handleAgeChange = (event) => {
    setAge(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (username === "") {
      setUsernameError("Username is required.");
    } else {
      setUsernameError("");
    }

    if (fullName === "") {
      setFullNameError("Full name is required.");
    } else {
      setFullNameError("");
    }

    if (age === "") {
      setAgeError("Age is required.");
    } else if (isNaN(age) || age < 18 || age > 120) {
      setAgeError("Age must be a number between 18 and 120.");
    } else {
      setAgeError("");
    }

    if (password === "") {
      setPasswordError("Password is required.");
    } else if (password.length < 8) {
      setPasswordError("Password must be at least 8 characters.");
    } else {
      setPasswordError("");
    }

    if (confirmPassword === "") {
      setConfirmPasswordError("Confirm password is required.");
    } else if (confirmPassword !== password) {
      setConfirmPasswordError("Passwords do not match.");
    } else {
      setConfirmPasswordError("");
    }

    if (
      username !== "" &&
      fullName !== "" &&
      age !== "" &&
      !isNaN(age) &&
      age >= 18 &&
      age <= 120 &&
      password !== "" &&
      password.length >= 8 &&
      confirmPassword !== "" &&
      confirmPassword === password
    ) {
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
        <h1 style={{ 
            marginBottom: "30px",
            fontSize: "28px",
            fontWeight: "bold",
            color: "#333"
        }}>One Stop Book Store</h1><img style={{width:'60%',height:100}} src='https://i.pinimg.com/originals/95/f8/58/95f8588d6469a16271ea2d2fad419d00.png'></img>
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
        />  {usernameError && <p style={{ color: "red" }}>{usernameError}</p>}
        <label 
          htmlFor="full-name" 
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
          Full Name:
        </label>
        <input
          type="text"
          id="full-name"
          value={fullName}
          onChange={handleFullNameChange}
          style={{ 
            padding: "10px",
            borderRadius: "5px",
            border: "1px solid #ccc",
            outline: "none",
            minWidth: "250px"
          }}
        /> {fullNameError && <p style={{ color: "red" }}>{fullNameError}</p>}
        <label 
          htmlFor="age" 
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
          Age:
        </label>
        <input 
        type="text"
        id="age"
        value={age}
        onChange={handleAgeChange}
        style={{ 
          padding: "10px",
          borderRadius: "5px",
          border: "1px solid #ccc",
          outline: "none",
          minWidth: "250px"
        }}
      /> {ageError && <p style={{ color: "red" }}>{ageError}</p>}
      <label 
          htmlFor="age" 
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
        type="text"
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
      <label 
          htmlFor="age" 
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
          Confirm Password:
        </label>
        <input 
        type="text"
        id="confirm-password"
        value={confirmPassword}
        onChange={handleConfirmPasswordChange}
        style={{ 
          padding: "10px",
          borderRadius: "5px",
          border: "1px solid #ccc",
          outline: "none",
          minWidth: "250px"
        }}
      /> {confirmPasswordError && <p style={{ color: "red" }}>{confirmPasswordError}</p>}
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
          Sign Up
        </button>
      </form>
      </div>
  );
    }