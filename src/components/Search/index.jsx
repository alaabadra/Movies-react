import React from "react";
import "./style.css";
import Header from "../Header";
import Cardsearch from "../Cardsearch";

const Search = ({ change, search, submit, idAdd, isInWatchlist }) => (
  <section id="movie-list" className="watchList">
    <Header change={change} submit={submit} />
    {search !== null ? (
      search.length !== 0 ? (
        <div className="watchList--main">
          <h1 className="watchList-h1">Search Result</h1>
          <div className="watchList-list">
            {search.map((search, index) => (
              <Cardsearch key={index} idAdd={idAdd} id={index} movieId={search.id} data={search} isInWatchlist={isInWatchlist} />
            ))}
          </div>
        </div>
      ) : (
        <div className="watchList--main">
          <h1 className="watchList-h1">Search Result</h1>
          <div className="watchList-list">
            <h1 className="noResult">No Mathcing Result</h1>
          </div>
        </div>
      )
    ) : (
      <></>
    )}
  </section>
);

export default Search;
