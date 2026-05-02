import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import Search from './components/Search'
import './App.css'

const App = () => {

  const [searchResults, setSearchResults] = useState([]);
  return (
    <main>
      <div className="patter" />
      <div className="wrapper" />
      <header>
        <img src='./hero-bg.png' alt="Hero Banner"/>
        <h1 className="text-3xl font-bold underline">
          Find <span className="text-gradient">Movies</span> You'll Enjoy Without the Hassle
        </h1>
      </header>
      <Search searchTerm={searchResults} setSearchTerm={setSearchResults}/>
    </main>
  )
}

export default App
