import Card from "./components/Card";
import { useState } from "react";
import React from "react";
import "./style.scss";

const movies = [
  {
    img: "https://i.postimg.cc/jjBSrfnQ/poster1-img.jpg",
    imgAlt: "Location Unknown",
    movieName: "Location Unknown",
    movieDate: "2021",
    movieTime: "1hr 38min",
    score: 4.2,
    tag1: "Italian",
    tag2: "Drama",
    tag3: "Indie",
    movieDesc:
      "Marco, a disillusioned backpacker in his late 20s, embarks on a solitary journey in search for meaning.",
    cast1Src: "https://i.postimg.cc/jqgkqhSb/cast-11.jpg",
    cast1Alt: "Marco Andrews",
    cast1Title: "Marco Andrews",
  },
  {
    img: "https://i.postimg.cc/jjBSrfnQ/poster1-img.jpg",
    imgAlt: "Location Unknown",
    movieName: "Movie 2",
    movieDate: "2021",
    movieTime: "1hr 38min",
    score: 4.2,
    tag1: "Italian",
    tag2: "Drama",
    tag3: "Indie",
    movieDesc:
      "Marco, a disillusioned backpacker in his late 20s, embarks on a solitary journey in search for meaning.",
    cast1Src: "https://i.postimg.cc/jqgkqhSb/cast-11.jpg",
    cast1Alt: "Marco Andrews",
    cast1Title: "Marco Andrews",
  },
];

function App() {
  return <Card movies={movies[0]} />;
}

export default App;
