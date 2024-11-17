// import React, { useState } from "react";

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     const response = await fetch("http://localhost:5000/api/users/login", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ email, password }),
//     });

//     const data = await response.json();
//     if (response.ok) {
//       alert(data.message);
//     } else {
//       alert(data.message);
//     }
//   };

//   const formStyle = {
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center",
//     justifyContent: "center",
//     padding: "20px",
//     margin: "50px auto",
//     maxWidth: "400px",
//     backgroundColor: "#f4f4f4",
//     borderRadius: "8px",
//     boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
//   };

//   const inputStyle = {
//     width: "100%",
//     padding: "10px",
//     margin: "10px 0",
//     border: "1px solid #ccc",
//     borderRadius: "4px",
//   };

//   const buttonStyle = {
//     padding: "10px 20px",
//     backgroundColor: "#ff6f61",
//     color: "white",
//     border: "none",
//     borderRadius: "4px",
//     cursor: "pointer",
//     fontWeight: "bold",
//   };

//   return (
//     <div style={formStyle}>
//       <h2>Login</h2>
//       <form onSubmit={handleLogin}>
//         <input
//           type="email"
//           placeholder="Email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           style={inputStyle}
//           required
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           style={inputStyle}
//           required
//         />
//         <button type="submit" style={buttonStyle}>Login</button>
//       </form>
//     </div>
//   );
// };

// export default Login;









// import React, { useState } from "react";

// const LoginPage = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     const response = await fetch("http://localhost:5000/api/users/login", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ email, password }),
//     });

//     const data = await response.json();
//     if (response.ok) {
//       alert(data.message);
//     } else {
//       alert(data.message);
//     }
//   };

//   const formStyle = {
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center",
//     padding: "20px",
//     margin: "50px auto",
//     maxWidth: "400px",
//     backgroundColor: "#f4f4f4",
//     borderRadius: "8px",
//     boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
//   };

//   const inputStyle = {
//     width: "100%",
//     padding: "10px",
//     margin: "10px 0",
//     border: "1px solid #ccc",
//     borderRadius: "4px",
//   };

//   const buttonStyle = {
//     padding: "10px 20px",
//     backgroundColor: "#ff6f61",
//     color: "white",
//     border: "none",
//     borderRadius: "4px",
//     cursor: "pointer",
//     fontWeight: "bold",
//   };

//   return (
//     <div style={formStyle}>
//       <h2>Login</h2>
//       <form onSubmit={handleLogin}>
//         <input
//           type="email"
//           placeholder="Email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           style={inputStyle}
//           required
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           style={inputStyle}
//           required
//         />
//         <button type="submit" style={buttonStyle}>Login</button>
//       </form>
//     </div>
//   );
// };

// export default LoginPage;




import React from "react";

const LoginPage = () => {
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
      <h2 style={headerStyle}>Login</h2>
      <form>
        <input 
          type="email" 
          placeholder="Enter your email address" 
          style={inputStyle} 
          required 
        />
        <input 
          type="password" 
          placeholder="Enter your password" 
          style={inputStyle} 
          required 
        />
        <button type="submit" style={buttonStyle}>Login</button>
      </form>
      <p style={{ marginTop: "20px" }}>
        Don't have an account?{" "}
        <a href="/signup" style={linkStyle}>Sign up here</a>
      </p>
    </div>
  );
};

export default LoginPage;
