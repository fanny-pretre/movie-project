import Cast from "./Cast";
import { useState } from "react";
import { Rating } from "react-simple-star-rating";

const castMembers = [
  {
    castSrc: "https://i.postimg.cc/jqgkqhSb/cast-11.jpg",
    castAlt: "Marco Andrews",
    castTitle: "Marco Andrews",
  },
  {
    castSrc: "https://i.postimg.cc/xd3twv4B/cast-31.jpg",
    castAlt: "Jessica Enduro",
    castTitle: "Jessica Enduro",
  },
  {
    castSrc: "https://i.postimg.cc/C1MmSZy5/cast-32.jpg",
    castAlt: "Charles Garcia",
    castTitle: "Charles Garcia",
  },
];

function Card({ movies }) {
  // LA MODALE
  const [modal, setModal] = useState(false);

  const toggleModal = (isOpen) => {
    setModal(isOpen !== undefined ? isOpen : !modal);
  };

  // LES RATINGS
  const [rating, setRating] = useState(0);

  const handleRating = (rate) => {
    setRating(rate);
  };

  return (
    <div className="wrapper">
      <div className="card" onClick={() => toggleModal(true)}>
        <div className="poster">
          <img src={movies.img} alt={movies.imgAlt} />
        </div>
      </div>
      {modal && (
        <div className="modal">
          <div className="overlay"></div>
          <div className="modal-content">
            <div className="details">
              <h1> {movies.movieName} </h1>
              <h2>
                {movies.movieDate} • {movies.movieTime}
              </h2>
              <div className="rating">
                <Rating
                  onClick={() => {
                    handleRating();
                  }}
                  ratingValue={rating}
                />
                <span>4.2/5</span>
              </div>
              <div className="modal-bottom" onClick={() => toggleModal(false)}>
                <div className="tags">
                  <p className="tag">{movies.tag1}</p>
                  <p className="tag"> {movies.tag2} </p>
                  <p className="tag"> {movies.tag3} </p>
                </div>
                <p className="desc">{movies.movieDesc}</p>
                <div className="cast">
                  <h3>Cast</h3>
                  <div className="castImages">
                    {castMembers.map((castMember) => (
                      <Cast key={castMember.castTitle} cast={castMember} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Card;
