import React from "react";

const HomePage = () => {
  // Inline style for the main container
  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh", // Full viewport height
    backgroundColor: "#f4f4f4", // Light background color for the page
    padding: "20px",
  };

  // Style for the main box
  const boxStyle = {
    width: "90%", // Increased width to 90% of the viewport width
    maxWidth: "1200px", // Increased max width of the box
    backgroundColor: "#003366", // Dark blue color for the box
    color: "white", // Text color inside the box
    padding: "50px", // Padding around the text for spaciousness
    borderRadius: "8px", // Rounded corners for the box
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Shadow effect around the box
    textAlign: "center", // Centers the text
    marginBottom: "30px", // Space between the box and the "About Us" section
  };

  // Style for the title
  const titleStyle = {
    fontSize: "48px", // Bigger font size for the title
    fontWeight: "bold", // Makes the title bold
    marginBottom: "20px", // Spacing below the title
  };

  // Style for the description
  const descriptionStyle = {
    fontSize: "20px", // Larger font size for the description
    marginBottom: "20px", // Spacing between description and contact info
  };

  // Style for the "About Us" section
  const aboutUsStyle = {
    fontSize: "20px", // Larger font for the about us section
    textAlign: "center", // Centers the text
    padding: "20px", // Padding for the "About Us" section
    marginTop: "30px", // Space between description and "About Us"
    color: "#333", // Darker color for the "About Us" section text
  };

  // Style for the contact info
  const contactStyle = {
    fontSize: "16px", // Smaller font size for contact info
    marginTop: "20px", // Space between description and contact info
  };

  return (
    <div style={containerStyle}>
      <div style={boxStyle}>
        <h1 style={titleStyle}>Welcome to Our Learning Platform!</h1>
        <p style={descriptionStyle}>
          Our platform offers a wide range of online courses to help you
          enhance your skills. Whether you're looking to learn new things or
          advance in your career, we are here to help you achieve your goals!
        </p>
        <div style={contactStyle}>
          <p>If you need any help, feel free to reach out to us!</p>
          <p>Contact number: 9876543210</p>
          <p>Email: pesuhelp@pesu.pes.edu</p>
        </div>
      </div>

      {/* About Us section outside the main box */}
      <div style={aboutUsStyle}>
        <h2>About Us</h2>
        <p>
          We are a leading online learning platform committed to providing
          top-notch education. Our goal is to make quality learning accessible
          to all, empowering individuals to improve their skills and reach their
          full potential.
        </p>
      </div>
    </div>
  );
};

export default HomePage;
