import React, {useState, useEffect} from 'react'
import Layout from '../Layout/Layout'
import { useParams } from 'react-router-dom'
import Infos from '../Components/Single/Infos';
import axios from 'axios'

function SingleMovie() {
  const {id} = useParams();
  const [movie, setMovie] = useState(null);
  useEffect(() => {
      axios.get('https://yts.mx/api/v2/movie_details.json?imdb_id=' + id).then((res) => {
        console.log(res.data.data.movie);
          setMovie(res.data.data.movie);
      }).catch((err) => {
          console.error(err);
      });
  }, [id]);
  return (
    <Layout>
      {
        movie &&
        <Infos movie={movie} />
        /*<Casts />*/
      }
    </Layout>
  )
}

export default SingleMovie