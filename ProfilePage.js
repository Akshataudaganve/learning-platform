import React, { useState } from "react";

const ProfilePage = () => {
  // State to store user input
  const [userInfo, setUserInfo] = useState({
    username: "",
    email: "",
    age: "",
    birthday: "",
    education: "",
    bio: ""
  });

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic for submitting the form (you can later add API call or saving in localStorage)
    alert("Profile updated successfully!");
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1 style={{ textAlign: "center", color: "#333", marginBottom: "20px" }}>User Profile</h1>
      
      <form onSubmit={handleSubmit} style={{ maxWidth: "500px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "15px" }}>
        {/* Username */}
        <div>
          <label htmlFor="username" style={{ fontSize: "16px", color: "#333", display: "block", marginBottom: "5px" }}>Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={userInfo.username}
            onChange={handleInputChange}
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "4px",
              border: "1px solid #ccc",
              fontSize: "16px",
            }}
            required
          />
        </div>
        
        {/* Email */}
        <div>
          <label htmlFor="email" style={{ fontSize: "16px", color: "#333", display: "block", marginBottom: "5px" }}>Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={userInfo.email}
            onChange={handleInputChange}
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "4px",
              border: "1px solid #ccc",
              fontSize: "16px",
            }}
            required
          />
        </div>

        {/* Age */}
        <div>
          <label htmlFor="age" style={{ fontSize: "16px", color: "#333", display: "block", marginBottom: "5px" }}>Age:</label>
          <input
            type="number"
            id="age"
            name="age"
            value={userInfo.age}
            onChange={handleInputChange}
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "4px",
              border: "1px solid #ccc",
              fontSize: "16px",
            }}
            required
          />
        </div>

        {/* Birthday */}
        <div>
          <label htmlFor="birthday" style={{ fontSize: "16px", color: "#333", display: "block", marginBottom: "5px" }}>Birthday:</label>
          <input
            type="date"
            id="birthday"
            name="birthday"
            value={userInfo.birthday}
            onChange={handleInputChange}
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "4px",
              border: "1px solid #ccc",
              fontSize: "16px",
            }}
            required
          />
        </div>

        {/* Education */}
        <div>
          <label htmlFor="education" style={{ fontSize: "16px", color: "#333", display: "block", marginBottom: "5px" }}>Education:</label>
          <input
            type="text"
            id="education"
            name="education"
            value={userInfo.education}
            onChange={handleInputChange}
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "4px",
              border: "1px solid #ccc",
              fontSize: "16px",
            }}
            required
          />
        </div>

        {/* Bio */}
        <div>
          <label htmlFor="bio" style={{ fontSize: "16px", color: "#333", display: "block", marginBottom: "5px" }}>Bio:</label>
          <textarea
            id="bio"
            name="bio"
            value={userInfo.bio}
            onChange={handleInputChange}
            style={{
              width: "100%",
              padding: "10px",
              borderRadius: "4px",
              border: "1px solid #ccc",
              fontSize: "16px",
              height: "100px",
            }}
            required
          />
        </div>

        {/* Submit Button */}
        <div style={{ textAlign: "center" }}>
          <button
            type="submit"
            style={{
              padding: "10px 20px",
              backgroundColor: "#007BFF",
              color: "#fff",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
              fontSize: "16px",
            }}
          >
            Save Profile
          </button>
        </div>
      </form>

      {/* Display User Info */}
      {userInfo.username && (
        <div style={{ marginTop: "30px", textAlign: "center" }}>
          <h3 style={{ color: "#333", fontSize: "24px" }}>Profile Information</h3>
          <p><strong>Username:</strong> {userInfo.username}</p>
          <p><strong>Email:</strong> {userInfo.email}</p>
          <p><strong>Age:</strong> {userInfo.age}</p>
          <p><strong>Birthday:</strong> {userInfo.birthday}</p>
          <p><strong>Education:</strong> {userInfo.education}</p>
          <p><strong>Bio:</strong> {userInfo.bio}</p>
        </div>
      )}
    </div>
  );
};

export default ProfilePage;
