import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { FaHeart, FaSearch } from 'react-icons/fa'
import { CgUser } from 'react-icons/cg'
function Navbar() {
  const Hover =({isActive}) => (isActive ? 'text-subMain' : 'hover:text-subMain transitions text-white');
  return (
    <>
      <div className='bg-main shadow-md sticky top-0 z-20'>
        <div className='container mx-auto py-6 px-2 lg:grid gap-10 grid-cols-7 justify-between items-center'>
          <div className='col-span-1 lg:block hidden'>
            <Link to="/">
              <img src='/logo.png' alt='logo' className='w-full h-12 object-contain' />
            </Link>
          </div>
          <div className='col-span-3'>
            <form className='w-full text-sm bg-dryGray rounded flex-btns gap-4'>
              <button type='submit' className='bg-subMain text-white w-12 flex-cols h-12 rounded' >
                <FaSearch />
              </button>
              <input type='text' placeholder='Search movie' className='font-medium placeholder:text-border text-sm w-11/12 h-12 bg-transparent border-none px-2 text-black' />
            </form>
          </div>
          <div className='col-span-3 font-medium text-sm hidden xl:gap-14 2xl:gap-20 justify-between lg:flex xl:justify-end items-center'>
            <NavLink to="/movies" className={Hover}>Movies</NavLink>
            <NavLink to="/about-us" className={Hover}>About us</NavLink>
            <NavLink to="/contact-us" className={Hover}>Contact us</NavLink>
            <NavLink to="/login" className={Hover}><CgUser className='h-8 w-8' /></NavLink>
            <NavLink to="/favorites" className={`${Hover} relative`}>
              <FaHeart className='h-6 w-6' />
              <div className='w-5 h-5 flex-cols rounded-full text-xs bg-subMain text-white absolute -top-3 -right-1'>
                3
              </div>
            </NavLink>
          </div>
        </div>
      </div> 
    </>
  )
}

export default Navbar