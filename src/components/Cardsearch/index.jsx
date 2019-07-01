import React from "react";
import "./style.css";

const Cardsearch = ({ data: { title, overview, poster_path }, id, idAdd, isInWatchlist, movieId }) => (
  <div className="list">
    {poster_path ? (
      <img
        className="img"
        src={`https://image.tmdb.org/t/p/w600_and_h900_bestv2${poster_path}`}
        alt="movie poster"
      />
    ) : (
      <img className="img" alt="No Movie Poster" />
    )}
    {isInWatchlist(movieId)? <i
      id={id}
      className="fas fas fa-check addToWatchList"
    >
      {" "}
      Already in watchlist
    </i>: <i
      onClick={e => idAdd(e, title)}
      id={id}
      className="fas fa-plus-circle addToWatchList"
    >
      {" "}
      Add To Watch List
    </i>}
    
    <div className="description">
      <h3>
        Name : <br /> {title}
      </h3>
      <h3>
        Overview : <br /> {overview}
      </h3>
    </div>
  </div>
);

export default Cardsearch;
