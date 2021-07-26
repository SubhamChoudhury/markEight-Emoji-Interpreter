import React, { useState } from "react";
import "./styles.css";

const emojiDictionary = {
  "😊": "Smiling",
  "😳": "disbelief",
  "😔": "Sad",
  "🥡": "Takeout Box",
  "❤️": "Love",
  "😑": "Annoyance",
  "🤝": "Handshake",
  "👋": "Waving Hand",
  "✋": "Raised Hand",
  "✌️": "Victory Hand",
  "✍️": "Writing Hands",
  "👍": "Thumbs Up",
  "👎": "Thumbs Down",
  "✊": "Raised Fist",
  "👏": "Clapping Hands",
  "👐": "Open Hands",
  "🙌": "Raising Hands"
};

var emojisWeknow = Object.keys(emojiDictionary);

export default function App() {
  const [meaning, setMeaning] = useState(" ");

  function emojiInputHandler(event) {
    //processing
    var userInput = event.target.value;

    var meaning = emojiDictionary[userInput];

    if (meaning === undefined) {
      meaning = "Oops ! The database failed to recognise it! 😅";
    }

    setMeaning(meaning);
  }

  function emojiClickHandler(emoji) {
    //processing
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }
  return (
    <div className="App">
      <nav>Inside Emojis</nav>
      <input
        placeholder="Enter your emoji here..."
        onChange={emojiInputHandler}
      />
      <h2>{meaning}</h2> {/* required output*/}
      <p>Emojis we know</p>
      {emojisWeknow.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{
              fontSize: "2rem",
              padding: "0.5rem",
              cursor: "pointer"
            }}
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}
      <div style={{ margin: "2rem" }}></div>
    </div>
  );
}
