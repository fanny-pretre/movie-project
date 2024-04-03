import Cast from "./Cast";
import "./style.css";
import { useState } from "react";

function Card({ movies }) {
  const [modal, SetModal] = useState(false);

  const toggleModal = () => {
    SetModal(!modal);
  };

  return (
    <div className="wrapper">
      <div className="card" onClick={toggleModal}>
        <div className="poster">
          <img src={movies.img} alt={movies.imgAlt} />
        </div>
      </div>
      {modal && (
        <div className="modal" onClick={toggleModal}>
          <div className="overlay"></div>
          <div className="modal-content">
            <div className="details">
              <h1> {movies.movieName} </h1>
              <h2>
                {movies.movieDate} • {movies.movieTime}
              </h2>
              <div className="rating">
                <span>4.2/5</span>
              </div>
              <div className="tags">
                <p className="tag">{movies.tag1}</p>
                <p className="tag"> {movies.tag2} </p>
                <p className="tag"> {movies.tag3} </p>
              </div>
              <p className="desc">{movies.movieDesc}</p>
              <div className="cast">
                <h3>Cast</h3>
                <Cast />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Card;
