import React from 'react'
import Layout from '../Layout/Layout'
import { useParams } from 'react-router-dom'
import { Movies } from '../Datas/MovieData';
import Infos from '../Components/Single/Infos';
import Casts from '../Components/Single/Casts';

function SingleMovie() {
  const {id} = useParams();
  const movie = Movies.find((movie) => movie.name === id);
  return (
    <Layout>
      <Infos movie={movie} />
      <Casts />
    </Layout>
  )
}

export default SingleMovie