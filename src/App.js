import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Nav from "./components/Navbar";
import Watchlist from "./components/Wathchlist";
import getMovie from "./utils/getMovie";
import Search from "./components/Search";
import Popup from "./components/Popup";
import Home from "./components/Home";

class App extends Component {
  state = {
    watchList: [],
    isError: null,
    searchResult: null,
    MovieToAdd: { display: "none" },
    ids: []
  };
  search = null;

  componentDidUpdate() {
    localStorage.setItem("state", JSON.stringify(this.state));
  }

  componentDidMount() {
    this.setState(JSON.parse(localStorage.getItem("state")));
    this.setState({ searchResult: null });
  }
  handleIdToAdd = (e, title) => {
    this.setState({
      MovieToAdd: {
        id: e.target.id,
        name: title
      }
    });
  };

  hidePopup = () => {
    this.setState({ MovieToAdd: { display: "none" } });
  };

  handleAddToWatchList = e => {
    e.preventDefault();
    const date = e.target[0].value;
    const id = e.target[1].id;
    const {
      title: name,
      overview,
      poster_path,
      id: idMovie
    } = this.state.searchResult[id];
    this.setState({
      MovieToAdd: { display: "none" },
      watchList: [
        {
          name,
          overview,
          img: `https://image.tmdb.org/t/p/w600_and_h900_bestv2${poster_path}`,
          date
        }
      ].concat(this.state.watchList),
      ids: [idMovie].concat(this.state.ids)
    });
  };

  handleWatchlistDone = e => {
    const id = e.target.id;
    this.setState(prevState => {
      const cloneState = { ...prevState };
      cloneState.watchList[id].status = true;
      return cloneState;
    });
  };

isInWatchlist = (id) => this.state.ids.includes(id)

  handleGetMovie = e => {
    e.preventDefault();
    getMovie(this.search)
      .then(response => {
        this.setState({ searchResult: response.results });
        const html = document.querySelector("html");
        const sectionTwoTitel = document.querySelector(".watchList--main");
        setTimeout(() => (html.scrollTop = sectionTwoTitel.offsetTop), 200);
      })
      .catch(() => this.setState({ isError: "Error" }));
  };

  handleSearchInput = e => {
    this.search = e.target.value;
  };

  render() {
    if (this.state.isError) return <h1>Error ...</h1>;

    return (
      <BrowserRouter>
        <Nav />
        <Popup
          data={this.state.MovieToAdd}
          submit={this.handleAddToWatchList}
          click={this.hidePopup}
        />
        <Switch>
          <Route
            exact
            path={"/"}
            component={() => <Home watchList={this.state.watchList} />}
          />
          <Route
            exact
            path={"/search"}
            component={() => (
              <Search
                search={this.state.searchResult}
                change={this.handleSearchInput}
                submit={this.handleGetMovie}
                idAdd={this.handleIdToAdd}
                isInWatchlist={this.isInWatchlist}
              />
            )}
          />
          <Route
            exact
            path={"/movie-list"}
            component={() => (
              <Watchlist
                click={this.handleWatchlistDone}
                watchList={this.state.watchList}
              />
            )}
          />
          <Route
            component={() => (
              <img
                src="http://www.gmailsupportpedia.com/images/404.jpg"
                style={{
                  "margin-left": "25%"
                }}
                alt="404 PAGE NOT FOUND"
              />
            )}
          />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
