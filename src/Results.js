import React  , { useState , useEffect } from 'react';
import './Results.css';
import VideoCard from './VideoCard';
import axios from './axios';
import requests from './request';
import FlipMove from 'react-flip-move';

function Results({selectedOptions}) {



  const [movies , setMovies] = useState([]);

    useEffect(() => {

      async function fetchData() {
        const request = await axios.get(selectedOptions).catch((error) => {

    return   console.log(error);

  } );

    setMovies(request.data.results);
    console.log(request.data.results);


        return request;

      }

fetchData();
    } , [selectedOptions])

  return (
    <div className="results">


<FlipMove>

    {movies.map((movie) => (
       <VideoCard  key={movie.id} movie = {movie}/>
    ))}

</FlipMove>





    </div>
  );
}

export default Results;
