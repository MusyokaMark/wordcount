import React, { useState } from "react";
import './Wordcount.css';
const Wordcount = () => {

    const handleUpClick = () => {
        setText(" you have clicked to upeer case");
        let newText = text.toUpperCase();
        setText(newText);
    }


    const handleDownClick = () => {
        setText(" you have clicked to upper case");
        let newText = text.toLowerCase();
        setText(newText);
    }

    const handleCopyChange = () => {
        let newText = document.getElementById("textarea")
        newText.select();
        navigator.clipboard.writeText(newText.value);
        alert("text copied")

    }

    const handleExtraChange = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
    }

    const handleOnchange = () => {
        console.log("on change")
        setText(event.target.value)
    }

    const [text, setText] = useState('');
    return (
        <>
            <div class="body">
                <h1 className="text">Word Count</h1>
                <div className="box">
                    <textarea className="text-area" value={text} onChange={handleOnchange}
                        placeholder='enter text here' id="textarea"></textarea>

                    <div className=" button">
                        <button className="btn-btn-primary" onClick={handleUpClick}>  Upper case </button>

                        <button className="btn-btn-primary" onClick={handleDownClick}>  Lower case </button>

                        <button className="btn-btn-primary" onClick={handleCopyChange}>  Copy Text </button>

                        <button className="btn-btn-primary-1" onClick={handleExtraChange}>  Remove Extra Space </button>
                    </div>
                </div>
                <div className="para">
                    <p> Words :  {text.split(" ").length - 1}</p>
                    <p> Characters :  {text.length}</p>
                    <p>Paragraphs: {text.split("\n").filter(paragraph => paragraph.trim() !== "").length}</p>
                    <p> Time Taken :  {0.008 * text.split("").length}</p>
                    {/* <p>PREVIEW :  {text}</p> */}
                </div>
            </div>
        </>

    )
}
export default Wordcount;