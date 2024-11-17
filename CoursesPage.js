import React, { useState } from "react";
import { Link } from "react-router-dom";  // Import Link from react-router-dom

const CoursesPage = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const courses = [
    { title: "C Programming", description: "Learn the fundamentals of C programming including syntax, control structures, and memory management.", id: 1 },
    { title: "WebTech Programming", description: "Dive into web technologies including HTML, CSS, JavaScript, and backend frameworks.", id: 2 },
    { title: "Python Programming", description: "Master Python for software development, data analysis, and web development.", id: 3 },
    { title: "Java Programming", description: "Understand object-oriented programming with Java, focusing on building applications and Android development.", id: 4 },
    { title: "C++ Programming", description: "Learn C++ for system programming, game development, and performance-critical applications.", id: 5 },
  ];

  const filteredCourses = courses.filter(course =>
    course.title.toLowerCase().startsWith(searchQuery.toLowerCase())
  );

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div>
      <h1 style={{ textAlign: "center", color: "#333", marginBottom: "20px" }}>Welcome to the Courses Page</h1>

      <input
        type="text"
        placeholder="Search for a course..."
        value={searchQuery}
        onChange={handleSearchChange}
        style={{
          display: "block", width: "60%", margin: "0 auto 20px", padding: "10px", border: "1px solid #ccc", borderRadius: "4px", fontSize: "16px"
        }}
      />

      <div style={{
        display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "20px"
      }}>
        {filteredCourses.length > 0 ? (
          filteredCourses.map((course, index) => (
            <div key={index} style={{
              border: "1px solid #ddd", borderRadius: "8px", padding: "20px", width: "250px", backgroundColor: "#f9f9f9",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", transition: "transform 0.3s"
            }}>
              <h2 style={{ color: "#333", fontSize: "20px", marginBottom: "10px" }}>{course.title}</h2>
              <p style={{ color: "#555", fontSize: "14px", marginBottom: "15px" }}>{course.description}</p>
              
              {/* Link to CourseDetailPage using the course ID */}
              <Link to={`/course/${course.id}`} style={{
                display: "block", textAlign: "center", marginTop: "10px", color: "#007BFF", textDecoration: "none"
              }}>View Details</Link>
            </div>
          ))
        ) : (
          <p>No courses found</p>
        )}
      </div>
    </div>
  );
};

export default CoursesPage;
