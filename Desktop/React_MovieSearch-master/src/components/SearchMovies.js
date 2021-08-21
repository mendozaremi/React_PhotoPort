import React, { useState }from "react";
import MovieCard from './movieCard';

const SearchMovies = () => {

  // States - inpute query, movies
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);

    const searchMovies = async (e) => {
        e.preventDefault();

        const url = `https://api.themoviedb.org/3/search/movie?api_key=74516cab96a2824bc7dc5e7dabde44f4&language=en-US&query=${query}&page=1&include_adult=false`;

        try{
          const res = await fetch(url);
          const data = await res.json();
          console.log(data.results);

          setMovies(data.results);
        }catch(err){
          console.error(err);
        }
    }

  return (
    <>
      <form className="form" onSubmit={searchMovies}>
        <label className="label" htmlFor="query">Movie Name</label>
          <input
          type="text"
          name="query"
          placeholder="Search Movies"
          value={query} onChange={(e) => setQuery(e.target.value)}
          >
          </input>
        <button className="button" type="submit">Search</button>
      </form>
      <div className="card-list">
        { movies.filter(movie => movie.poster_path).map( movie => (
          <MovieCard movie={movie} key={movie.id}/>
        ))}
      </div>
      </>
  )
}

export default SearchMovies
