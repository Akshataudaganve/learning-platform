import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  // Inline styles
  const navStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px 20px",
    backgroundColor: "#1e1e2f",
    color: "white",
  };

  const navLinksStyle = {
    display: "flex",
    gap: "20px",
  };

  const linkStyle = {
    color: "white",
    textDecoration: "none",
    fontWeight: "bold",
    fontSize: "16px",
    padding: "8px 12px",
    borderRadius: "4px",
    transition: "background-color 0.3s, color 0.3s",
  };

  const logoStyle = {
    fontSize: "22px",
    fontWeight: "bold",
    color: "#ff6f61", // Highlighted logo color
    textDecoration: "none",
  };

//   const linkHoverStyle = {
//     backgroundColor: "#ff6f61",
//     color: "white",
//   };

  return (
    <nav style={navStyle}>
      {/* Logo */}
      <div>
        <Link to="/" style={logoStyle}>LOGO</Link>
      </div>

      {/* Navigation Links */}
      <div style={navLinksStyle}>
        {/* Navigation links */}
        <Link
          to="/"
          style={linkStyle}
          onMouseEnter={(e) => (e.target.style.backgroundColor = "#ff6f61")}
          onMouseLeave={(e) => (e.target.style.backgroundColor = "transparent")}
        >
          Home
        </Link>
        <Link
          to="/pricing"
          style={linkStyle}
          onMouseEnter={(e) => (e.target.style.backgroundColor = "#ff6f61")}
          onMouseLeave={(e) => (e.target.style.backgroundColor = "transparent")}
        >
          Pricing
        </Link>
        <Link
          to="/courses"
          style={linkStyle}
          onMouseEnter={(e) => (e.target.style.backgroundColor = "#ff6f61")}
          onMouseLeave={(e) => (e.target.style.backgroundColor = "transparent")}
        >
          Courses
        </Link>
        <Link
          to="/signup"
          style={linkStyle}
          onMouseEnter={(e) => (e.target.style.backgroundColor = "#ff6f61")}
          onMouseLeave={(e) => (e.target.style.backgroundColor = "transparent")}
        >
          Signup
        </Link>
        <Link
          to="/profile"
          style={linkStyle}
          onMouseEnter={(e) => (e.target.style.backgroundColor = "#ff6f61")}
          onMouseLeave={(e) => (e.target.style.backgroundColor = "transparent")}
        >
          Profile
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;






