import React from "react";
import Cardwatchlist from "../Cardwatchlist";
import "./style.css";

const Watchlist = ({ click, watchList }) => (
  <section id="movie-list" className="watchList">
    <div className="watchList--main">
      <h1 className="watchList-h1">Watch List</h1>
      <div className="watchList-list">
        {watchList && watchList.length !== 0 ? (
          watchList.map((list, index) => (
            <Cardwatchlist key={index} click={click} id={index} data={list} />
          ))
        ) : (
          <h1 className="emptyList">Move List is empty</h1>
        )}
      </div>
    </div>
  </section>
);

export default Watchlist;
