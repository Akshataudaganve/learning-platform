import React, { useState } from "react";

const SignupPage = () => {
  // State for form inputs
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    dob: "",
    gender: "",
    password: "",
  });

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to handle form submission (e.g., send data to server)
    console.log("Form data submitted:", formData);
  };

  // Styles
  const formStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "20px",
    margin: "50px auto",
    maxWidth: "400px",
    backgroundColor: "#f4f4f4",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  };

  const inputStyle = {
    width: "100%",
    padding: "10px",
    margin: "10px 0",
    border: "1px solid #ccc",
    borderRadius: "4px",
  };

  const buttonStyle = {
    padding: "10px 20px",
    backgroundColor: "#ff6f61",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    fontWeight: "bold",
  };

  const headerStyle = {
    marginBottom: "20px",
    color: "#333",
  };

  const linkStyle = {
    color: "#ff6f61",
    textDecoration: "none",
  };

  return (
    <div style={formStyle}>
      <h2 style={headerStyle}>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="firstName"
          placeholder="Enter your first name"
          style={inputStyle}
          value={formData.firstName}
          onChange={handleInputChange}
          required
        />
        <input
          type="text"
          name="lastName"
          placeholder="Enter your last name"
          style={inputStyle}
          value={formData.lastName}
          onChange={handleInputChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Enter your email address"
          style={inputStyle}
          value={formData.email}
          onChange={handleInputChange}
          required
        />
        <input
          type="tel"
          name="mobile"
          placeholder="Enter your mobile number"
          style={inputStyle}
          value={formData.mobile}
          onChange={handleInputChange}
          required
        />
        <label
          style={{
            width: "100%",
            textAlign: "left",
            fontSize: "14px",
            marginBottom: "5px",
            color: "#555",
          }}
        >
          Date of Birth
        </label>
        <input
          type="date"
          name="dob"
          style={inputStyle}
          value={formData.dob}
          onChange={handleInputChange}
          required
        />
        <select
          name="gender"
          style={inputStyle}
          value={formData.gender}
          onChange={handleInputChange}
          required
        >
          <option value="" disabled>
            Select your gender
          </option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
        <input
          type="password"
          name="password"
          placeholder="Enter a password"
          style={inputStyle}
          value={formData.password}
          onChange={handleInputChange}
          required
        />
        <button type="submit" style={buttonStyle}>
          Register
        </button>
      </form>
      <p style={{ marginTop: "20px" }}>
        Already registered?{" "}
        <a href="/login" style={linkStyle}>
          Login now
        </a>
      </p>
    </div>
  );
};

export default SignupPage;
