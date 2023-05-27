import React from 'react'
import Titles from '../Titles'
import { FaUserFriends } from 'react-icons/fa'
import Swiper, { Autoplay } from 'swiper'
import { SwiperSlide } from 'swiper/react'

function Casts() {
  const UsersData = [];
  return (
    <div className='my-12'>
      <Titles title="Casts" Icon={FaUserFriends} />
      <div className='mt-10'>
        <Swiper autoplay={{
          delay:1000,
          disableOnInteraction: false}} loop={true} speed={1000} module={[Autoplay]}
          spaceBetween={10}
          breakpoints={{
            0:{
              slidesPerView: 1,
              spaceBetween: 10
            },
            400:{
              slidesPerView: 2,
              spaceBetween: 10
            },
            768:{
              slidesPerView: 3,
              spaceBetween: 10
            },
            1024:{
              slidesPerView: 4,
              spaceBetween: 10
            },
            1280:{
              slidesPerView: 5,
              spaceBetween: 10
            },
          }} >
            {
              UsersData.map((user, index) => (
                <SwiperSlide key={index}>
                  <div className='w-full p-3 italic text-xs text-text rounded flex-cols bg-dry border border-gray-800'>
                    <img src={`/images/${user.image}`} alt={user.name} className='w-full h-64 object-cover rounded mb-2' />
                  </div>
                </SwiperSlide>
              ))
            }
          </Swiper>
      </div>
    </div>
  )
}

export default Casts