import React, { useState, useEffect } from 'react'
import Layout from '../Layout/Layout'
import Filters from '../Components/Filters'
import Movie from '../Components/Movie'
import { CgSpinner } from 'react-icons/cg'
import axios from 'axios'

function MoviesPage() {
  const cursor = 10;
  const [page, setPage] = useState(cursor);
  const [movies, setMovies] = useState([]);
  useEffect(() => {
      axios.get('https://yts.mx/api/v2/list_movies.json').then((res) => {
          console.log(res.data.data.movies);
          setMovies(res.data.data.movies);
      }).catch((err) => {
          console.error(err);
      });
  }, []);
  const LoadMore = () => {
    setPage(page + cursor);
  }
  return (
  <Layout>
    <div className='min-height-screen container mx-auto px-2 my-6'>
      <Filters />
      <p className='text-lg font-medium my-6'>
        <span className='font-bold text-subMain'>
          {movies.length}
        </span>
        {' '} items found
      </p>
      <div className='grid sm:mt-10 mt-6 xl:grid-cols-5 lg:grid-cols-3 sm:grid-cols-2 gap-6'>
        {
          movies.slice(0, page).map((movie, index) => (
            <Movie key={index} movie={movie} />
          ))
        }
      </div>
      <div className='w-full flex-cols md:my-20 my-10'>
        <button onClick={LoadMore} className='flex-rows gap-3 text-white py-3 px-8 rounded font-semibold border-2 border-subMain'>
          Loading More <CgSpinner className='animate-spin' />
        </button>
      </div>
    </div>
  </Layout>
  )
}

export default MoviesPage