import { useState } from "react";
import { affirmations } from "./data";

function App() {
  const [message, setMessage] = useState<string>(
    "Click the button for a little kindness ✨"
  );
  const [copied, setCopied] = useState(false);

  function newAffirmation() {
    if (affirmations.length < 2) return;

    let next = message;
    while (next === message) {
      const index = Math.floor(Math.random() * affirmations.length);
      next = affirmations[index];
    }
    setMessage(next);
  }

  function copyMessage() {
    navigator.clipboard.writeText(message);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  }

  return (
    <div className="app">
      <h1>💬 Daily Affirmation</h1>

      <div className="card">
        <p className="message" key={message}>
          {message}
        </p>
        <div className="buttons">
          <button onClick={newAffirmation}>New affirmation 💖</button>
          <button onClick={copyMessage}>
            {copied ? "Copied! ✅" : "Copy 📋"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;