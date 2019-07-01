import React from "react";
import "./style.css";

const Cardhome = ({ data: { img, status, name, date, overview } }) => (
  <div className="list">
    <img className="img" src={img} alt="movie poster" />
    {status ? (
      <i className="fas fa-check icon"> Done</i>
    ) : (
      <div>
        <i className="far fa-clock icon"> Waiting</i>
      </div>
    )}
    <div className="description">
      <h3>
        Name : <br /> {name}
      </h3>
      <h3>
        Watching Date : <br /> {date}
      </h3>
      <h3>
        Overview : <br /> {overview}
      </h3>
    </div>
  </div>
);

export default Cardhome;
