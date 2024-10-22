import React, { useState } from 'react';

export const TextForm = () => {
    const [text, setText] = useState("");
    const [isDisabled, setIsDisabled] = useState(false);
    const [secondsRemaining, setSecondsRemaining] = useState(60); // 60 seconds countdown
    let timer; // Declare timer variable outside the component

    // Function to count words, ignoring empty strings and extra spaces
    const countWords = (str) => {
        const wordsArray = str.trim().split(/\s+/).filter(word => word !== "");
        return wordsArray.length;
    };

    // Start the countdown timer when the user starts typing
    const handleTextChange = (event) => {
        setText(event.target.value);

        // Start the timer on the first key press
        if (secondsRemaining === 60) {
            timer = setInterval(() => {
                setSecondsRemaining((prevSeconds) => {
                    if (prevSeconds <= 1) {
                        clearInterval(timer);
                        setIsDisabled(true); // Disable textarea when time is up
                        return 0; // Ensure it doesn't go below 0
                    }
                    return prevSeconds - 1;
                });
            }, 1000); // Update every second
        }
    };

    return (
        <div>
            <div>
                <textarea
                    value={text}
                    onChange={handleTextChange}
                    placeholder="Enter your text here..."
                    rows="10"
                    cols="50"
                    disabled={isDisabled}
                />
            </div>
            <div>
                <p>Character Count: {text.length}</p>
                <p>Word Count: {countWords(text)}</p>
                <p>Time Remaining: {isDisabled ? 0 : secondsRemaining} seconds</p>
            </div>
        </div>
    );
};
