import React, { useState } from 'react'
import Layout from '../Layout/Layout'
import Filters from '../Components/Filters'
import { Movies } from '../Datas/MovieData'
import Movie from '../Components/Movie'
import { CgSpinner } from 'react-icons/cg'


function MoviesPage() {
  const cursor = 3;
  const [page, setPage] = useState(cursor);
  const LoadMore = () => {
    setPage(page + cursor);
  }
  return (
  <Layout>
    <div className='min-height-screen container mx-auto px-2 my-6'>
      <Filters />
      <p className='text-lg font-medium my-6'>
        <span className='font-bold text-subMain'>
          {Movies.length}
        </span>
        {' '} items found
      </p>
      <div className='grid sm:mt-10 mt-6 xl:grid-cols-5 lg:grid-cols-3 sm:grid-cols-2 gap-6'>
        {
          Movies.slice(0, page).map((movie, index) => (
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