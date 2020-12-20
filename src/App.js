import React, { useState } from "react";
import "./styles.css";

var emojipedia = {
  "😂": "laughing",
  "😉": "wink",
  "🤔": "confused",
  "🤮": "puke",
  "🥱": "bored",
  "🤡": "clown",
  "😋": "yummy",
  "☠": "deadly",
  "❤": "heart",
  "🧡": "red heart",
  "💛": "yellow heart",
  "💚": "green heart",
  "💙": "blue heart",
  "💜": "purple",
  "🍕": "pizza",
  "💘": "crush",
  "🍗": "chicken",
  "🍟": "fries"
};

export default function App() {
  var [meaning, setMeaning] = useState("");

  function emojiHandler(event) {
    var userInput = event.target.value;
    meaning = emojipedia[userInput];
    setMeaning(meaning);
  }
  function EmojiClickHandler(item) {
    meaning = emojipedia[item];
    setMeaning(meaning);
  }

  var ar = Object.keys(emojipedia);

  return (
    <div className="App">
      <h2>Search/Click emojis to know their meaning.</h2>
      <input onChange={emojiHandler}></input>
      <div>{meaning}</div>
      <div>
        {ar.map(function (item) {
          return (
            <span
              onClick={() => EmojiClickHandler(item)}
              style={{
                fontSize: "larger",
                padding: "0.2rem",
                cursor: "pointer"
              }}
              key={item}
            >
              {item}
            </span>
          );
        })}
      </div>
    </div>
  );
}
