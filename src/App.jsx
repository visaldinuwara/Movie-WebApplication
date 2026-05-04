import { useEffect, useState } from 'react'
import Search from './components/Search'
import Spinner from './components/Spinner'
import './App.css'

const App = () => {
  const BASE_URL = "http://www.omdbapi.com/?";
  const API_KEY = import.meta.env.VITE_OMDB_API_KEY;

  const [errorMessage, setErrorMessage] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [movieList, setMovieList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchMovies = async () => {
    setErrorMessage('');
    setIsLoading(true);
    try {
      const endPoint = `${BASE_URL}s=${searchTerm}&apikey=3704d809`;
      const response = await fetch(endPoint);
      if (!response.ok) {
        throw new Error('Failed to fetch movies');
      }
      const data = await response.json();

      if (data.Response === 'False') {
        setErrorMessage(data.error || 'No Movies found');
        setMovieList([]);
        return;
      }
      setMovieList(data.Search || []);
    } catch (error) {
      setErrorMessage(error.message);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <main>
      <header>
        <img src='./hero-bg.png' alt="Hero Banner" />
        <h1 className="text-3xl font-bold underline">
          Find <span className="text-gradient">Movies</span> You'll Enjoy Without the Hassle
        </h1>
      </header>
      <div className='search_div'>
        <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <button onClick={fetchMovies} className='fetch-button'>Fetch Movies</button>
      </div>

      <section className="all-movies">
        <h2 className="mt-[40px]">All Movies</h2>
        {isLoading ? (
          <Spinner />
        ):errorMessage ? (
          <p className="text-red-500">{errorMessage}</p>
        ):(
          <ul>
            {movieList.map((movie)=>(
              <p className='text-white'>{movie.Title}</p>
            ))}
          </ul>
        )
      }
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