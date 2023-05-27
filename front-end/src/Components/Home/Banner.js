import React, { useEffect, useState } from 'react'
import { Autoplay } from 'swiper'
import { Swiper, SwiperSlide} from 'swiper/react'
import FlexMovieItems from '../FlexMovieItems'
import { Link } from 'react-router-dom'
import { FaHeart } from 'react-icons/fa'
import axios from 'axios'

function Banner() {
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        axios.get('https://yts.mx/api/v2/list_movies.json?limit=5').then((res) => {
            console.log(res.data.data.movies);
            setMovies(res.data.data.movies);
        }).catch((err) => {
            console.error(err);
        });
    }, []);
  return (
    <div className='relative w-full'>
        <Swiper direction="vertical"
                slidesPerView={1} loop={true} speed={1000}
                modules={[Autoplay]} autoplay={{
                    delay: 4000,
                    disableOnInteraction: false
                }}
                className="w-full x1:h-96 bg-dry lg:h-64 h-48" >
                    {   movies &&
                        movies.map((movie, index) => (
                            <SwiperSlide key={index} className="relative rounded overflow-hidden">
                                <img src={movie.background_image}
                                alt={movie.title} className='w-full h-full object-cover' />
                                <div className='absolute linear-bg x1:pl-52 sm:pl-32 pl-8 top-0 bottom-0 right-0 left-0 flex flex-col justify-center lg:gap-8 md:gap-5 gap-4'>
                                    <h1 className='xl:text-4xl truncate capitalize font-sans sm:text-2xl text-xl font-bold'>
                                        {movie.title}
                                    </h1>
                                    <div className='flex gap-5 items-center text-dryGray'>
                                        <FlexMovieItems movie={movie} />
                                    </div>
                                    <div className='flex gap-5 items-center'>
                                        <Link to={`/movies/${movie.imdb_code}`} className="bg-subMain hover:text-main transitions text-white px-8 py-3 rounded font-medium sm:text-sm text-xs">
                                            Watch
                                        </Link>
                                        <button className='bg-white hover:text-subMain transitions text-white px-4 py-3 rounded text-sm bg-opacity-30'>
                                            <FaHeart />
                                        </button>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
    </div>
  )
}

export default Banner