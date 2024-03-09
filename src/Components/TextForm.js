import React, { useState } from "react";

export default function TextForm(props) {
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to uppercase!", "success");
    };
    const handleloClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lowercase!", "success");
    };
    const handleClearClick = () => {
        let newText = " ";
        setText(newText);
        props.showAlert("Text cleared!", "success");
    };

    const handleCopy = () => {
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text copied to clipboard!", "success");
    };

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Handled extra spaces!", "success");
    };

    const handleOnChange = (e) => {
        // console.log("On change");
        setText(e.target.value);
    };

    const slicedText = (text) => {
        return text.trim().split(" ");
    };
    // Onchange ka use karna padega kyuki fir type nahi kar payenge text area me.
    const [text, setText] = useState("");
    return (
        <>
            <div
                className="container"
                style={{ color: props.mode === "dark" ? "white" : "#212529" }}
            >
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea
                        className="form-control"
                        value={text}
                        onChange={handleOnChange}
                        id="myBox"
                        rows="8"
                        style={{
                            backgroundColor:
                                props.mode === "dark" ? "grey" : "white",
                            color: props.mode === "dark" ? "white" : "#212529",
                        }}
                    ></textarea>
                </div>
                <button
                    className="btn btn-primary mx-2 my-1"
                    onClick={handleUpClick}
                >
                    Convert to Uppercase
                </button>
                <button
                    className="btn btn-primary mx-2 my-1"
                    onClick={handleloClick}
                >
                    Convert to Lowercase
                </button>
                <button
                    className="btn btn-primary mx-2 my-1"
                    onClick={handleClearClick}
                >
                    Clear text
                </button>
                <button
                    className="btn btn-primary mx-2 my-1"
                    onClick={handleCopy}
                >
                    Copy text
                </button>
                <button
                    className="btn btn-primary mx-2 my-1"
                    onClick={handleExtraSpaces}
                >
                    Remove Extra Spaces
                </button>
            </div>
            <div
                className="container my-3"
                style={{ color: props.mode === "dark" ? "white" : "#212529" }}
            >
                <h2>Your Text Summary</h2>
                <p>
                    {slicedText(text)[0] === "" ? 0 : slicedText(text).length}{" "}
                    words, {text.trim().length} characters
                </p>
                <p>
                    {0.008 *
                        slicedText(text).filter((element) => {
                            return element.length !== 0;
                        }).length}{" "}
                    Seconds to read
                </p>
                <h2>Preview</h2>
                <p>
                    {text.trim().length > 0
                        ? text
                        : "Enter something to preview"}
                </p>
            </div>
        </>
    );
}
