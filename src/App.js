import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from "react";
import Alert from "./components/Alert";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const toggleMode = () => {
    removeBodyClass();
    if (mode === "dark") {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode Enabled", "success");
      document.title = "Light Mode";
    } else {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark Mode Enabled", "success");
      document.title = "Dark Mode";
    }
  };
  const removeBodyClass = () => {
    document.body.classList.remove("bg-primary");
    document.body.classList.remove("bg-success");
    document.body.classList.remove("bg-warning");
    document.body.classList.remove("bg-danger");
    document.body.classList.remove("bg-light");
    document.body.classList.remove("bg-dark");
  };

  const customMode = (cls) => {
    removeBodyClass();
    document.body.classList.add("bg-" + cls);
  };
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  return (
    <>
      <Router>
        <Navbar
          title="TextUtils"
          about="About"
          mode={mode}
          toggleMode={toggleMode}
          customMode={customMode}
        />
        <div className="container my-3">
          <Alert alert={alert} />
          <Routes>
            <Route
              path="/"
              element={
                <TextForm
                  heading="Enter your text"
                  mode={mode}
                  showAlert={showAlert}
                />
              }
            />
            <Route path="/about" element={<About />} />
            <Route
              path="/textForm"
              element={
                <TextForm
                  heading="Enter your text"
                  mode={mode}
                  showAlert={showAlert}
                />
              }
            />
          </Routes>
          {/* <Alert alert={alert}/>
          <TextForm heading="Enter your text" mode={mode}  showAlert={showAlert}/> */}
        </div>
      </Router>

      {/* <div className="container  my-3">
        <About/>
      </div> */}
    </>
  );
}

export default App;

{
  /* <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React With Me
        </a>
      </header>
    </div> */
}
