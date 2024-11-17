// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import HomePage from "./pages/HomePage";
// import SignupPage from "./pages/SignupPage";
// import LoginPage from "./pages/LoginPage";
// import CoursesPage from "./pages/CoursesPage";
// import CourseDetailPage from "./pages/CourseDetailPage";
// import QuizPage from "./pages/QuizPage";
// import PricingPage from "./pages/PricingPage";
// import ProfilePage from "./pages/ProfilePage";  // Import ProfilePage

// function App() {
//   return (
//     <Router>
//       <div>
//         <Navbar />
//         <Routes>
//           <Route path="/" element={<HomePage />} />
//           <Route path="/signup" element={<SignupPage />} />
//           <Route path="/login" element={<LoginPage />} />
//           <Route path="/courses" element={<CoursesPage />} />
//           <Route path="/course/:id" element={<CourseDetailPage />} />
//           <Route path="/quiz" element={<QuizPage />} />
//           <Route path="/pricing" element={<PricingPage />} />
//           <Route path="/profile" element={<ProfilePage />} />  {/* Add ProfilePage route */}
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;






import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import SignupPage from "./pages/SignupPage";
import LoginPage from "./pages/LoginPage";
import CoursesPage from "./pages/CoursesPage";
import CourseDetailPage from "./pages/CourseDetailPage";
import QuizPage from "./pages/QuizPage"; // Import QuizPage
import PricingPage from "./pages/PricingPage";
import ProfilePage from "./pages/ProfilePage"; // Import ProfilePage

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/courses" element={<CoursesPage />} />
          <Route path="/course/:id" element={<CourseDetailPage />} />
          <Route path="/quiz/:id" element={<QuizPage />} />
                                                             {/* Update the QuizPage route */}
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;









