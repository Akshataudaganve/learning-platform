import React, { useState } from "react";
import { useParams } from "react-router-dom";

// Mock quiz data for demonstration
const quizzes = {
  1: {
    title: "C Programming Quiz",
    questions: [
      {
        question: "What does C stand for in programming?",
        options: ["Compiler", "Control", "Code"],
        answer: 1,
      },
      {
        question: "Which is a valid data type in C?",
        options: ["float", "string", "boolean"],
        answer: 0,
      },
      {
        question: "Which symbol is used to comment a single line in C?",
        options: ["//", "#", "/* */"],
        answer: 0,
      },
      {
        question: "What does the 'return' keyword do in C?",
        options: ["Exits a function", "Loops indefinitely", "Starts execution"],
        answer: 0,
      },
      {
        question: "Which header file is used for input/output operations in C?",
        options: ["stdio.h", "math.h", "string.h"],
        answer: 0,
      },
    ],
  },
  2: {
    title: "WebTech Programming Quiz",
    questions: [
      {
        question: "What does HTML stand for?",
        options: [
          "Hyper Text Markup Language",
          "High Text Machine Language",
          "Hyperlinks and Text Markup Language",
        ],
        answer: 0,
      },
      {
        question: "Which of these is a CSS framework?",
        options: ["Bootstrap", "React", "Vue"],
        answer: 0,
      },
      {
        question: "What does CSS stand for?",
        options: ["Cascading Style Sheets", "Colorful Style Sheets", "Creative Style Syntax"],
        answer: 0,
      },
      {
        question: "Which HTML element is used to include JavaScript?",
        options: ["<script>", "<style>", "<javascript>"],
        answer: 0,
      },
      {
        question: "Which of these is a JavaScript library?",
        options: ["jQuery", "Bootstrap", "Flask"],
        answer: 0,
      },
    ],
  },
  3: {
    title: "Python Programming Quiz",
    questions: [
      {
        question: "Which data type is immutable in Python?",
        options: ["List", "Dictionary", "Tuple"],
        answer: 2,
      },
      {
        question: "Which of these is a Python framework?",
        options: ["Django", "React", "Angular"],
        answer: 0,
      },
      {
        question: "What does the 'def' keyword do in Python?",
        options: ["Defines a function", "Deletes a variable", "Creates a loop"],
        answer: 0,
      },
      {
        question: "Which method is used to add an item to a list in Python?",
        options: ["add()", "append()", "insert()"],
        answer: 1,
      },
      {
        question: "What does 'len()' function do in Python?",
        options: ["Finds the type of an object", "Calculates the length", "Checks for errors"],
        answer: 1,
      },
    ],
  },
  4: {
    title: "Java Programming Quiz",
    questions: [
      {
        question: "Which keyword is used to create an object in Java?",
        options: ["class", "new", "static"],
        answer: 1,
      },
      {
        question: "Which method is called first in a Java program?",
        options: ["main()", "start()", "init()"],
        answer: 0,
      },
      {
        question: "What is the size of 'int' data type in Java?",
        options: ["4 bytes", "8 bytes", "2 bytes"],
        answer: 0,
      },
      {
        question: "Which of these is not a Java data type?",
        options: ["int", "float", "real"],
        answer: 2,
      },
      {
        question: "Which package contains Java's collection classes?",
        options: ["java.util", "java.lang", "java.io"],
        answer: 0,
      },
    ],
  },
  5: {
    title: "C++ Programming Quiz",
    questions: [
      {
        question: "Who developed C++?",
        options: ["Bjarne Stroustrup", "Dennis Ritchie", "James Gosling"],
        answer: 0,
      },
      {
        question: "Which operator is used to access a member of a class in C++?",
        options: [".", "->", "::"],
        answer: 1,
      },
      {
        question: "What is the extension of C++ files?",
        options: [".cpp", ".java", ".py"],
        answer: 0,
      },
      {
        question: "Which keyword is used to inherit a class in C++?",
        options: ["extends", "inherits", "public"],
        answer: 2,
      },
      {
        question: "What is polymorphism in C++?",
        options: [
          "Ability to perform different tasks",
          "Error checking",
          "Compiling code",
        ],
        answer: 0,
      },
    ],
  },
};

const QuizPage = () => {
  const { id } = useParams(); // Get the course ID from the URL
  const quiz = quizzes[id]; // Get the quiz for the course ID
  const [answers, setAnswers] = useState({});
  const [score, setScore] = useState(null);

  if (!quiz) {
    return (
      <div style={{ textAlign: "center", padding: "20px" }}>
        <h2>Quiz Not Found!</h2>
        <p>Sorry, we couldn't find the quiz you're looking for.</p>
      </div>
    );
  }

  // Handle answer selection
  const handleAnswerChange = (questionIndex, optionIndex) => {
    setAnswers((prev) => ({ ...prev, [questionIndex]: optionIndex }));
  };

  // Handle quiz submission
  const handleSubmit = () => {
    let calculatedScore = 0;
    quiz.questions.forEach((q, index) => {
      if (answers[index] === q.answer) calculatedScore += 1;
    });
    setScore(calculatedScore);
  };

  return (
    <div style={{ padding: "20px", maxWidth: "600px", margin: "0 auto" }}>
      <h1>{quiz.title}</h1>

      {quiz.questions.map((q, index) => (
        <div key={index} style={{ marginBottom: "20px" }}>
          <h4>{q.question}</h4>
          {q.options.map((option, optionIndex) => (
            <label key={optionIndex} style={{ display: "block", marginBottom: "5px" }}>
              <input
                type="radio"
                name={`question-${index}`}
                value={optionIndex}
                checked={answers[index] === optionIndex}
                onChange={() => handleAnswerChange(index, optionIndex)}
                style={{ marginRight: "10px" }}
              />
              {option}
            </label>
          ))}
        </div>
      ))}

      <button
        onClick={handleSubmit}
        style={{
          padding: "10px 20px",
          backgroundColor: "#28a745",
          color: "#fff",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
          marginTop: "20px",
        }}
      >
        Submit
      </button>

      {score !== null && (
        <div style={{ marginTop: "20px", textAlign: "center" }}>
          <h2>Your Score: {score} / {quiz.questions.length}</h2>
        </div>
      )}
    </div>
  );
};

export default QuizPage;
