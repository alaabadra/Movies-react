export default movieName =>
  fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=6b4029e64c1862a24fbb74c05d0aace8&language=en-US&query=${movieName}`
  )
    .then(res => res.json())
    .catch(err => {
      throw err;
    });
