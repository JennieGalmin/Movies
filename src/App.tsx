import React, { useEffect, useState } from 'react'

interface Movie {
  id: string,
  l: string, 
  s: string,
  i: {imageUrl: string}
}


const App = () => {

  const [movies, setMovies] = useState<Movie[]>([])



  const fetchData = async () => {
  const url = 'https://imdb8.p.rapidapi.com/auto-complete?q=game';
  const options = {
    method: 'GET',
    headers: {
      'x-rapidapi-key': 'e892977ecfmsha4861a2f0dc65ccp10dec6jsn98637e40bbcb',
      'x-rapidapi-host': 'imdb8.p.rapidapi.com'
    }
  };
  
  try {
    const response = await fetch(url, options);
    const result = await response.json();
    console.log(result);
    setMovies(result.d)
  } catch (error) {
    console.error(error);
  }
  }

  useEffect(()=> {
    fetchData();
  },[]);


  return (
    <>
      <div className='header'>
      <h1>Movie App</h1>

      <input type='text' className='input'></input>
      <button className='button'>Sök</button>
      </div>
      <div className='movieList'>
      {movies.map((movie) => (
        <li key={movie.id}>
          {movie.i && <img src={movie.i.imageUrl} alt={movie.l} />}
          <h2>{movie.l}</h2>
          <p>{movie.s}</p>
        </li>
      ))}
      </div>
    </>
  )
}

export default App

