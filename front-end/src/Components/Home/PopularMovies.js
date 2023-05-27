import React, {useState, useEffect} from 'react'
import Titles from '../Titles'
import { BsCollectionFill } from 'react-icons/bs'
import Movie from '../Movie'
import axios from 'axios'

function PopularMovies() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
      axios.get('https://yts.mx/api/v2/list_movies.json?limit=8&sort_by=like_count').then((res) => {
          setMovies(res.data.data.movies);
      }).catch((err) => {
          console.error(err);
      });
  }, []);
  return (
    <div className='my-16'>
        <Titles title="Popular Movies" Icon={BsCollectionFill}/>
        <div className='grid sm:mt-12 mt-6 xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10'>
            {
                movies.slice(0, 8).map((movie, index) => (
                    <Movie key={index} movie={movie} />
                ))
            }
        </div>
    </div>
  )
}

export default PopularMovies