import React from "react";
import "./styles.css";
import { useState } from "react";

const Movies = {
  Comedy: [
    { name: "Phir Hera Pheri", rating: "4/5" },
    { name: "The Hangover", rating: "3.5/5" }
  ],

  Horror: [
    {
      name: "The Conjuring",
      rating: "5/5"
    },
    {
      name: "Tumbaad",
      rating: "4.5/5"
    }
  ],
  Action: [
    {
      name: "Robot",
      rating: "3.5/5"
    },
    {
      name: "Avengers",
      rating: "5/5"
    }
  ]
};

export default function App() {
  const [selectedGenre, setGenre] = useState("Action");
  function genreClickHandler(genre) {
    setGenre(genre);
  }
  return (
    <div className="App">
      <h1><span role = "img" aria-label = "clapper">🎬</span> goodmovies </h1>
      <p style={{ fontSize: "medium" }}>
        {" "}
        Checkout my favourite Movies. Select a genre to get started{" "}
      </p>

      <div>
        {Object.keys(Movies).map((genre) => (
          <button
            onClick={() => genreClickHandler(genre)}
            style={{
              cursor: "pointer",
              background: "#E5E7EB",
              borderRadius: "0.5rem",
              padding: "0.5rem  1rem",
              border: "1px solid black",
              margin: "1rem 0.3rem",
              fontWeight: "bold",
            }}
          >
            {genre}
          </button>
        ))}
      </div>
      <hr />
      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {Movies[selectedGenre].map((movies) => (
            <li
              key={movies.name}
              style={{
                listStyle: "none",
                padding: "1rem",
                border: "1px solid #D1D5DB",
                width: "70%",
                margin: "1rem 0rem",
                borderRadius: "0.5rem"
              }}
            >
              {" "}
              <div style={{ fontSize: "larger", fontWeight:"bold" }}> {movies.name} </div>
              <div style={{ fontSize: "smaller", fontWeight:"bold" }}> {movies.rating} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
