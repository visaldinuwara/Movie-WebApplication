import { useEffect, useState } from 'react'
import Search from './components/Search'
import './App.css'

const App = () => {
  const BASE_URL = "http://www.omdbapi.com/?";
  const API_KEY = import.meta.env.VITE_OMDB_API_KEY;

  const [errorMessage, setErrorMessage] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const fetchMovies = async () => {
    try {
      const endPoint = `${BASE_URL}s=${searchTerm}&apikey=3704d809`;
      const response = await fetch(endPoint);
      if (!response.ok) {
        throw new Error('Failed to fetch movies');
      }
      const data = await response.json();
      console.log(data); // should show results in console
      setSearchResults(data.Search || []);
    } catch (error) {
      setErrorMessage(error.message);
    }
  };
  return (
    <main>
      <header>
        <img src='./hero-bg.png' alt="Hero Banner"/>
        <h1 className="text-3xl font-bold underline">
          Find <span className="text-gradient">Movies</span> You'll Enjoy Without the Hassle
        </h1>
      </header>
      <div className='search_div'>
      <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
      <button onClick={fetchMovies} className='fetch-button'>Fetch Movies</button>
      </div>

      <section className="all-movies">
        <h2>All Movies</h2>
        {errorMessage && <p className="error">{errorMessage}</p>}
        <ul>
          {searchResults.map(movie => (
            <li key={movie.imdbID}>{movie.Title} ({movie.Year})</li>
          ))}
        </ul>
      </section>
    </main>
  )
}

export default App