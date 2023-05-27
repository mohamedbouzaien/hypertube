import React, { useState, useEffect } from 'react'
import Titles from '../Titles';
import { BsBookmarkStarFill, BsCaretLeftFill, BsCaretRightFill } from 'react-icons/bs';
import {Swiper, SwiperSlide} from 'swiper/react';
import { Autoplay, Navigation } from 'swiper';
import { FaHeart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Rating from '../Rating';
import axios from 'axios';

function TopRated() {
    const [nextEl, setNextEl] = useState(null);
    const [prevEl, setPrevEl] = useState(null);
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        axios.get('https://yts.mx/api/v2/list_movies.json?limit=8&minimum_rating=9').then((res) => {
            setMovies(res.data.data.movies);
        }).catch((err) => {
            console.error(err);
        });
    }, []);
  return (
    <div className='my-16'>
        <Titles title="Top Rated" Icon={BsBookmarkStarFill} />
        <div className='mt-10'>
            <Swiper
                navigation={{nextEl, prevEl}}
                slidesPerView={4}
                spaceBetween={40}
                autoplay={true}
                speed={1000}
                loop={true}
                modules={[Navigation, Autoplay]}>
                   {
                    movies.map((movie, index) => (
                        <SwiperSlide key={index}>
                            <div className='p-4 h-rate hovered border border-border bg-dry rounded-lg overflow-hidden'>
                                <img src={movie.medium_cover_image}
                                alt={movie.title}
                                className="w-full h-full object-cover rounded-lg" />
                                <div className='px-4 hovers gap-6 text-center absolute bg-black bg-opacity-70 top-0 left-0 right-0 bottom-0'>
                                    <button className='w-12 h-12 flex-cols transitions hover:bg-subMain rounded-full bg-white bg-opacity-30 text-white'>
                                        <FaHeart />
                                    </button>
                                    <Link to={`/movies/${movie.imdb_code}`} className="font-semibold text-xl trancuted line-clamp-2">{movie.title}</Link>
                                    <div className='flex gap-2 text-star'>
                                        <Rating value={movie.rating} />
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))
                   }
            </Swiper>
            <div className='w-full px-1 flex-rows gap-6 pt-12'>
                <button className='hover:bg-dry transitions text-sm rounded w-8 h-8 flex-cols bg-subMain text-white' ref={(node) => setPrevEl(node)}>
                    <BsCaretLeftFill />
                </button>
                <button className='hover:bg-dry transitions text-sm rounded w-8 h-8 flex-cols bg-subMain text-white' ref={(node) => setNextEl(node)}>
                    <BsCaretRightFill />
                </button>
            </div>
        </div>
    </div>
  )
}

export default TopRated