import React from 'react';

const MovieCart = ({ movie: { imdbID, Title, Year, Poster, Type } }) => {
  return (
    <div className='movie-card'>
      <img src={Poster ? Poster : "./assets/no-poster.png"} alt="Poster" />
      <div className='mt-4'>
        <h3>{Title}</h3>
        <div className="content">
          <div className="rating">
            <img src='../star.svg' alt="Rating" />
            <p>{Year ? Year : 'N/A'}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
export default MovieCart;