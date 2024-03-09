import "./App.css";
import About from "./Components/About";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import Alert from "./Components/Alert";
import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
    const [mode, setMode] = useState("light"); // whether dark mode is enabled or not.
    const [alert, setAlert] = useState(null);

    const showAlert = (msg, type) => {
        setAlert({ msg: msg, type: type });
        setTimeout(() => setAlert(null), 2000);
    };

    const toggleMode = () => {
        if (mode === "light") {
            setMode("dark");
            document.body.style.backgroundColor = "#042743";
            showAlert("dark mode has been enabled", "success");
        } else {
            setMode("light");
            document.body.style.backgroundColor = "white";
            showAlert("light mode has been enabled", "success");
        }
    };

    return (
        <>
            <BrowserRouter>
                <div>
                    <Navbar
                        title="TextUtils"
                        aboutText="About"
                        mode={mode}
                        toggleMode={toggleMode}
                    />
                    <Alert alert={alert} />
                    <div className="container my-3">
                        <Routes>
                            <Route
                                exact
                                path="/"
                                element={
                                    <TextForm
                                        heading="Enter The text to analyze below"
                                        mode={mode}
                                        showAlert={showAlert}
                                    />
                                }
                            />
                            <Route exact path="/about" element={<About />} />
                        </Routes>
                    </div>
                </div>
            </BrowserRouter>
        </>
    );
}

export default App;
