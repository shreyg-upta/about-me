// import 'regenerator-runtime/runtime';
import React, { useState, useEffect, useRef } from "react";
import * as styles from "./Talk.module.css";
import Footer from "./components/footer.jsx";
import Navbar from "./components/navbar.jsx";
import Cursor from "./components/cursor.jsx";
import PleaseOpenInLaptop from "./components/PleaseOpenInLaptop.jsx";
import sendIcon from "./assets/sendIcon.png";
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import { set } from 'lodash';




// import { handleConversation } from "../../backend/handleConversation";
function AboutMe() {
  const [audioBlob, setAudioBlob] = useState(null);
  const mediaRecorderRef = useRef(null);
  const [transcribing, setTranscribing] = useState(false);
  const [convHistory, setConvHistory] = useState([
  ]);
  const [input, setInput] = useState("");
  const [t2i, setT2i] = useState("");
  const [showPleaseWait, setShowPleaseWait] = useState(false);
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition();
  const startRecording = () => {
    resetTranscript(); // Clear the old transcription
    SpeechRecognition.startListening({ language: 'en-IN' })
  };
  const stopRecording = () => {
    SpeechRecognition.stopListening();
    
  };
  if (!browserSupportsSpeechRecognition) {
    return null
};

useEffect(() => {
  let hasCalled = false;
  if (!listening && !hasCalled) {
    hasCalled = true;
    handleSubmit(transcript);
  }
}, [listening]);


  const handleSubmit = async (text) => {
    if (text === "") return;
    setConvHistory([...convHistory, text]);
    setShowPleaseWait(true);
    console.log("Submit called with input:", text);
    const response = await fetch("https://about-me-nlgd.onrender.com/api/conversation", {
      method: "POST",
      body: JSON.stringify({ inputPrompt: text, convHistory: convHistory }),
      headers: {
        "Content-Type": "application/json",
      },
      mode: 'cors',
    credentials: 'same-origin', // or 'include' if sending cookies
    });

    const data = await response.json();
    setConvHistory(data.updatedConvHistory);
    setInput(""); // Reset the input after submit
    setShowPleaseWait(false);
    const value = new SpeechSynthesisUtterance(data.response);
    window.speechSynthesis.speak(value);
  };
  return (
    <>
      {/* <PleaseOpenInLaptop /> */}
      <Cursor />
      <Navbar className={styles.navi} />

      <div className={styles.main_content}>
        {convHistory.length == 0 && (
          <>
            <button
              onClick={listening ?  stopRecording: startRecording}
              disabled={transcribing}
            >
              {listening
                ? "Click to stop"
                : "Speak"}
            </button>
            {listening? "ShreyGPT is listening.. Click to stop"
              : "Ask ShreyGPT anything about me"}
            {audioBlob && (
              <audio controls src={URL.createObjectURL(audioBlob)} />
            )}
          </>
        )}
        {convHistory.length != 0 && (
          <>
            <div className={styles.chatContainer}>
              <div className={styles.chatBox}>
                {convHistory.map((message, index) => (
                  <div
                    key={index}
                    className={`${styles.message} ${
                      index % 2 === 0 ? styles.user : styles.ShreyGPT
                    }`}
                  >
                    {message}
                  </div>
                ))}
              </div>
            </div>
          </>
        )}
        {showPleaseWait && <div className={styles.wait}>Please wait...</div>}
        <div className={styles.inputB}>
        <input 
          autoFocus 
          value={input} 
          onChange={(e) => setInput(e.target.value)} 
          onKeyPress={(e) => e.key === 'Enter' && handleSubmit(input)} 
        />
        <div>
          {input === "" &&
          <button
            onClick={listening ? stopRecording : startRecording}
            disabled={transcribing}
          >
            <img 
              src="https://img.icons8.com/ios/452/microphone.png" 
              alt="mic"
              className={input === "" ? styles.iconNormal : styles.iconInverted}
            />
          </button>
}
{input !== "" &&
          <button onClick={() => handleSubmit(input)} disabled={input === ""}>
            <img 
              src={sendIcon} 
              alt="send" 
              className={input === "" ? styles.iconNormal : styles.iconInverted}
            />
          </button>
}
        </div>
      </div>
      </div>
      <div className={styles.footer}>
        <Footer />
      </div>
    </>
  );
}

export default AboutMe;
