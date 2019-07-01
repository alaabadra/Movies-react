import React from "react";
import Cardhome from "../Cardhome";
import "./style.css";

const Home = ({ watchList }) => {
  return (
    <div className="main">
      <h1 className="main--header">The last movie you added</h1>
      <div className="watchList-list">
        {watchList && watchList.length !== 0 ? (
          watchList
            .slice(0, 4)
            .map((search, index) => (
              <Cardhome key={index} id={index} data={search} />
            ))
        ) : (
          <h1 className="emptyListHome">No Movie in your List</h1>
        )}
      </div>
    </div>
  );
};

export default Home;
