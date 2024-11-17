// import React from "react";
// import { useParams } from "react-router-dom";  // Import useParams to get the course ID from URL

// // Mock course data for demonstration (replace with your actual data fetching logic)
// const courseData = [
//   {
//     id: 1,
//     title: "C Programming",
//     description: "Learn the fundamentals of C programming including syntax, control structures, and memory management.",
//     modules: [
//       { name: "Introduction to C", youtubeUrl: "https://www.youtube.com/watch?v=EjavYOFoJJ0" },
//       { name: "Data Types & Variables", youtubeUrl: "https://www.youtube.com/watch?v=NyT9vvSBoeo" },
//       { name: "Control Structures", youtubeUrl: "https://www.youtube.com/watch?v=oYuRtXcwXqw" },
//       { name: "Functions", youtubeUrl: "https://www.youtube.com/watch?v=f--fD8Y0RnA" },
//       { name: "Memory Management", youtubeUrl: "https://www.youtube.com/watch?v=udfbq4M2Kfc" }
//     ]
//   },
//   {
//     id: 2,
//     title: "WebTech Programming",
//     description: "Dive into web technologies including HTML, CSS, JavaScript, and backend frameworks.",
//     modules: [
//       { name: "HTML Basics", youtubeUrl: "https://www.youtube.com/watch?v=uMIjPKUXEEE" },
//       { name: "CSS for Web Design", youtubeUrl: "https://www.youtube.com/watch?v=i1FeOOhNnwU" },
//       { name: "JavaScript Fundamentals", youtubeUrl: "https://www.youtube.com/watch?v=lkIFF4maKMU" },
//       { name: "Responsive Design", youtubeUrl: "https://www.youtube.com/watch?v=x4u1yp3Msao" },
//       { name: "Web Frameworks", youtubeUrl: "https://www.youtube.com/watch?v=8cDb5JJO_E0" }
//     ]
//   },
//   {
//     id: 3,
//     title: "Python Programming",
//     description: "Master Python for software development, data analysis, and web development.",
//     modules: [
//       { name: "Python Basics", youtubeUrl: "https://www.youtube.com/watch?v=kqtD5dpn9C8" },
//       { name: "Data Structures in Python", youtubeUrl: "https://www.youtube.com/watch?v=_t2GVaQasRY&list=PLeo1K3hjS3uu_n_a__MI_KktGTLYopZ12" },
//       { name: "Object-Oriented Programming", youtubeUrl: "https://www.youtube.com/watch?v=qiSCMNBIP2g" },
//       { name: "Libraries & Frameworks", youtubeUrl: "https://www.youtube.com/watch?v=3lhpfPtEm1U" },
//       { name: "Web Development with Python", youtubeUrl: "https://www.youtube.com/watch?v=zuxzE7--RYM" }
//     ]
//   },
//   {
//     id: 4,
//     title: "Java Programming",
//     description: "Understand object-oriented programming with Java, focusing on building applications and Android development.",
//     modules: [
//       { name: "Java Basics", youtubeUrl: "https://www.youtube.com/watch?v=eIrMbAQSU34&t=106s" },
//       { name: "Object-Oriented Programming", youtubeUrl: "https://www.youtube.com/watch?v=bSrm9RXwBaI" },
//       { name: "Java Collections", youtubeUrl: "https://www.youtube.com/watch?v=rzA7UJ-hQn4" },
//       { name: "Multithreading", youtubeUrl: "https://www.youtube.com/watch?v=r_MbozD32eo" },
//       { name: "Android Development", youtubeUrl: "https://www.youtube.com/watch?v=tZvjSl9dswg" }
//     ]
//   },
//   {
//     id: 5,
//     title: "C++ Programming",
//     description: "Learn C++ for system programming, game development, and performance-critical applications.",
//     modules: [
//       { name: "Introduction to C++", youtubeUrl: "https://www.youtube.com/watch?v=s0g4ty29Xgg" },
//       { name: "Data Types & Operators", youtubeUrl: "https://www.youtube.com/watch?v=MiK5tamc-HE" },
//       { name: "Control Structures", youtubeUrl: "https://www.youtube.com/watch?v=z04Uvf7gQ2I" },
//       { name: "Object-Oriented C++", youtubeUrl: "https://www.youtube.com/watch?v=wN0x9eZLix4" },
//       { name: "Advanced C++ Features", youtubeUrl: "https://www.youtube.com/watch?v=i_wDa2AS_8w" }
//     ]
//   }
// ];

// const CourseDetailPage = () => {
//   const { id } = useParams();  // Get course ID from URL
//   const course = courseData.find(course => course.id === parseInt(id));  // Find course by ID

//   if (!course) {
//     return <div>Course not found</div>;  // Handle if course is not found
//   }

//   const handleModuleClick = (moduleUrl) => {
//     if (moduleUrl) {
//       // Check if it's a valid YouTube URL
//       const isValidUrl = moduleUrl.startsWith("https://www.youtube.com/watch");
//       if (isValidUrl) {
//         window.open(moduleUrl, "_blank");
//       } else {
//         console.error("Invalid YouTube URL:", moduleUrl);  // Log invalid URL
//         alert("This module does not have a valid YouTube URL.");
//       }
//     } else {
//       console.error("No YouTube URL provided.");
//       alert("No URL found for this module.");
//     }
//   };

//   return (
//     <div style={{ padding: "20px" }}>
//       <h1 style={{ color: "#333", textAlign: "center" }}>{course.title}</h1>
//       <p style={{ color: "#555", textAlign: "center", marginBottom: "30px" }}>{course.description}</p>

//       <h3>Modules:</h3>
//       <div style={{
//         display: "flex", flexDirection: "column", gap: "20px", justifyContent: "center", marginBottom: "30px", width: "100%"
//       }}>
//         {course.modules.map((module, index) => (
//           <div
//             key={index}
//             style={{
//               border: "1px solid #ddd", borderRadius: "8px", padding: "20px", width: "100%", maxWidth: "500px", backgroundColor: "#f9f9f9",
//               boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", cursor: "pointer", transition: "transform 0.3s", margin: "0 auto"
//             }}
//             onClick={() => handleModuleClick(module.youtubeUrl)}
//           >
//             <h4 style={{ color: "#333", fontSize: "16px", textAlign: "center" }}>{module.name}</h4>
//           </div>
//         ))}
//       </div>

//       <div style={{ textAlign: "center", marginTop: "30px" }}>
//         <button
//           style={{
//             padding: "10px 20px", backgroundColor: "#007BFF", color: "#fff", border: "none", borderRadius: "4px", cursor: "pointer"
//           }}
//         >
//           Take Quiz
//         </button>
//       </div>

//       <div style={{ textAlign: "center", marginTop: "20px" }}>
//         <button
//           onClick={() => window.open("https://chat.openai.com", "_blank")}  // Open ChatGPT
//           style={{
//             padding: "10px 20px", backgroundColor: "#28a745", color: "#fff", border: "none", borderRadius: "4px", cursor: "pointer"
//           }}
//         >
//           Chat with GPT
//         </button>
//       </div>
//     </div>
//   );
// };

// export default CourseDetailPage;




import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';

// Mock data for course details
const courseData = [
  {
    id: 1,
    title: "C Programming",
    description: "Learn the fundamentals of C programming including syntax, control structures, and memory management.",
    duration: "3 Months",
    modules: [
      { name: "Introduction to C", youtubeUrl: "https://www.youtube.com/watch?v=EjavYOFoJJ0" },
      { name: "Data Types & Variables", youtubeUrl: "https://www.youtube.com/watch?v=NyT9vvSBoeo" },
      { name: "Control Structures", youtubeUrl: "https://www.youtube.com/watch?v=oYuRtXcwXqw" },
      { name: "Functions", youtubeUrl: "https://www.youtube.com/watch?v=f--fD8Y0RnA" },
      { name: "Memory Management", youtubeUrl: "https://www.youtube.com/watch?v=udfbq4M2Kfc" },
    ],
    reviews: ["Great course for beginners!", "Helped me understand C basics."],
  },
  {
    id: 2,
    title: "WebTech Programming",
    description: "Dive into web technologies including HTML, CSS, JavaScript, and backend frameworks.",
    duration: "4 Months",
    modules: [
      { name: "HTML Basics", youtubeUrl: "https://www.youtube.com/watch?v=uMIjPKUXEEE" },
      { name: "CSS for Web Design", youtubeUrl: "https://www.youtube.com/watch?v=i1FeOOhNnwU" },
      { name: "JavaScript Fundamentals", youtubeUrl: "https://www.youtube.com/watch?v=lkIFF4maKMU" },
      { name: "Responsive Design", youtubeUrl: "https://www.youtube.com/watch?v=x4u1yp3Msao" },
      { name: "Web Frameworks", youtubeUrl: "https://www.youtube.com/watch?v=8cDb5JJO_E0" },
    ],
    reviews: ["Loved the interactive assignments.", "Best course for frontend devs!"],
  },
  {
    id: 3,
    title: "Python Programming",
    description: "Master Python for software development, data analysis, and web development.",
    duration: "6 Months",
    modules: [
      { name: "Python Basics", youtubeUrl: "https://www.youtube.com/watch?v=kqtD5dpn9C8" },
      { name: "Data Structures in Python", youtubeUrl: "https://www.youtube.com/watch?v=_t2GVaQasRY&list=PLeo1K3hjS3uu_n_a__MI_KktGTLYopZ12" },
      { name: "Object-Oriented Programming", youtubeUrl: "https://www.youtube.com/watch?v=qiSCMNBIP2g" },
      { name: "Libraries & Frameworks", youtubeUrl: "https://www.youtube.com/watch?v=3lhpfPtEm1U" },
      { name: "Web Development with Python", youtubeUrl: "https://www.youtube.com/watch?v=zuxzE7--RYM" },
    ],
    reviews: ["Very detailed and easy to follow.", "Perfect for data science enthusiasts."],
  },
];

const CourseDetailPage = () => {
  const { id } = useParams(); // Get course ID from URL
  const course = courseData.find((course) => course.id === parseInt(id)); // Find course by ID
  const [newReview, setNewReview] = useState(""); // State to hold new review input
  const [allReviews, setAllReviews] = useState(course?.reviews || []); // State to hold all reviews

  if (!course) {
    return (
      <div style={{ padding: "20px", textAlign: "center" }}>
        <h2>Course Not Found!</h2>
        <p>Sorry, we couldn't find the course you're looking for.</p>
      </div>
    );
  }

  // Handle adding a new review
  const handleAddReview = () => {
    if (newReview.trim()) {
      setAllReviews([...allReviews, newReview]);
      setNewReview(""); // Reset the input field
    }
  };

  // Handle module clicks
  const handleModuleClick = (moduleUrl) => {
    if (moduleUrl) {
      // Check if it's a valid YouTube URL
      const isValidUrl = moduleUrl.startsWith("https://www.youtube.com/watch");
      if (isValidUrl) {
        window.open(moduleUrl, "_blank");
      } else {
        alert("This module does not have a valid YouTube URL.");
      }
    } else {
      alert("No URL found for this module.");
    }
  };

  return (
    <div style={{ padding: "20px", maxWidth: "800px", margin: "0 auto" }}>
      <h1 style={{ textAlign: "center" }}>{course.title}</h1>
      <p style={{ textAlign: "center", marginBottom: "30px" }}>{course.description}</p>
      <p><strong>Duration:</strong> {course.duration}</p>

      {/* Modules Section */}
      <h3>Modules:</h3>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          marginBottom: "30px",
        }}
      >
        {course.modules.map((module, index) => (
          <div
            key={index}
            style={{
              border: "1px solid #ddd",
              borderRadius: "8px",
              padding: "20px",
              backgroundColor: "#f9f9f9",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              cursor: "pointer",
              transition: "transform 0.3s",
            }}
            onClick={() => handleModuleClick(module.youtubeUrl)}
          >
            <h4 style={{ textAlign: "center" }}>{module.name}</h4>
          </div>
        ))}
      </div>

      {/* Quiz Section */}
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <Link
          to={`/quiz/${id}`} // Link to the quiz page for this course
          style={{
            padding: "10px 20px",
            backgroundColor: "#007BFF",
            color: "#fff",
            textDecoration: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Take Quiz for {course.title}
        </Link>
      </div>

      {/* Review Section */}
      <div style={{ marginTop: "40px" }}>
        <h2>Course Reviews</h2>
        {allReviews.length > 0 ? (
          <ul style={{ listStyleType: "none", padding: 0 }}>
            {allReviews.map((review, index) => (
              <li
                key={index}
                style={{
                  marginBottom: "10px",
                  background: "#f9f9f9",
                  padding: "10px",
                  borderRadius: "4px",
                }}
              >
                {review}
              </li>
            ))}
          </ul>
        ) : (
          <p>No reviews yet. Be the first to add one!</p>
        )}

        {/* Add Review Form */}
        <div style={{ marginTop: "20px" }}>
          <textarea
            value={newReview}
            onChange={(e) => setNewReview(e.target.value)}
            placeholder="Write your review here..."
            style={{
              width: "100%",
              padding: "10px",
              fontSize: "16px",
              borderRadius: "4px",
              border: "1px solid #ccc",
              resize: "none",
              marginBottom: "10px",
            }}
            rows={4}
          ></textarea>
          <button
            onClick={handleAddReview}
            style={{
              padding: "10px 20px",
              backgroundColor: "#28a745",
              color: "#fff",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            Submit Review
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseDetailPage;
