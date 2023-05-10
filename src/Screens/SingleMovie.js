import React from 'react'
import Layout from '../Layout/Layout'
import { useParams } from 'react-router-dom'
import { Movies } from '../Datas/MovieData';

function SingleMovie() {
  const {id} = useParams();
  const movie = Movies.find((movie) => movie.name === id);
  return (
    <Layout>

    </Layout>
  )
}

export default SingleMovie