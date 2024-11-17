import React from "react";

const PricingPage = () => {
  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "20px",
    textAlign: "center",
  };

  const headingStyle = {
    color: "#333",
    marginBottom: "20px",
  };

  const pricingCardStyle = {
    border: "1px solid #ccc",
    borderRadius: "8px",
    padding: "20px",
    margin: "10px",
    width: "300px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
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

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>Pricing Plans</h1>
      <div style={pricingCardStyle}>
        <h3>Basic Plan</h3>
        <p>Access to free courses</p>
        <p>$0 / month</p>
        <button style={buttonStyle}>Choose Basic</button>
      </div>
      <div style={pricingCardStyle}>
        <h3>Pro Plan</h3>
        <p>Access to premium courses</p>
        <p>$20 / month</p>
        <button style={buttonStyle}>Choose Pro</button>
      </div>
      <div style={pricingCardStyle}>
        <h3>Enterprise Plan</h3>
        <p>Access to all courses and features</p>
        <p>$50 / month</p>
        <button style={buttonStyle}>Choose Enterprise</button>
      </div>
    </div>
  );
};

export default PricingPage;




