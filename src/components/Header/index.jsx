import React from "react";
import "./style.css";

const Header = ({ change, submit }) => (
  <section className="header">
    <div className="header--main">
      <form className='searchForm' action="/search" onSubmit={submit}>
        <input
          className="header-input"
          onChange={change}
          type="text"
          placeholder="Search"
        />
      </form>
    </div>
  </section>
);

export default Header;
