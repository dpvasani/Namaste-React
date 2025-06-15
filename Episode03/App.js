// app.js
import React from "react";
import ReactDOM from "react-dom/client";

// ✅ Simple functional component
const Title = () => <h1>🌟 Welcome to JSX & React World</h1>;

// ✅ App component demonstrating multiple JSX use cases
const App = () => {
  const name = "Darshan";
  const greet = () => "Hello";

  const userInput = "<script>alert('Hacked')</script>";

  const element = <h2>🔁 Rendered JSX Element</h2>;

  return (
    <>
      {/* Functional component */}
      <Title />

      {/* JSX Expression */}
      <h3>{greet()}, {name}!</h3>

      {/* Single-line JSX */}
      <p>This is a single-line JSX element</p>

      {/* Multi-line JSX with fragment */}
      <>
        <div className="card">
          <h4>✅ Multiple JSX Elements</h4>
          <p>Wrapped inside a React Fragment</p>
        </div>
      </>

      {/* Rendering a JSX element variable */}
      {element}

      {/* Component function call (not recommended for complex components) */}
      {Title()}

      {/* XSS Protection in JSX */}
      <p>🔐 User Input (escaped): {userInput}</p>

      {/* Raw HTML rendering (Dangerous!) */}
      <div dangerouslySetInnerHTML={{ __html: "<strong>⚠️ Raw HTML Rendered</strong>" }} />

      {/* Nested JSX */}
      <h5>Nested JSX: <span>✅ Working!</span></h5>
    </>
  );
};

// 📦 Render to DOM using React 18 method (since you're using Parcel, assume latest React)
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
