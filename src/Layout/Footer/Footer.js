import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  const Links = [
    {
      title: 'HyperTube',
      links: [{
        name: 'Home',
        link: '/'
      },
      {
        name: 'About Us',
        link: '/about-us'
      },
      {
        name: 'Contact Us',
        link: '/contact-us'
      },
      {
        name: 'Movies',
        link: '/movies'
      }]
    },
    {
      title: 'Top Categories',
      links: [{
        name: 'Action',
        link: '#'
      },
      {
        name: 'Romance',
        link: '#'
      },
      {
        name: 'Thriller',
        link: '#'
      },
      {
        name: 'Documentary',
        link: '#'
      }
      ]
      },{
        title: 'My Account',
        links: [{
          name: 'Dashboard',
          link: '/dashboard'
        },
        {
          name: 'My Favorites',
          link: '/favorites'
        },
        {
          name: 'Profile',
          link: '/profile'
        },
        {
          name: 'Change Password',
          link: '/password'
        }]
    }
  ]
  return (
    <div className='bg-dry py-4 border=t-2 border-black'>
      <div className='container mx-auto px-2'>
        <div className='grid grid-cols-2 md:grid-cols-7 xl:grid-cols-12 sm:gap-9 lg:gap-11 xl:gap-7 py-10 justify-between'>
            {
              Links.map((link, index) => (
                <div key={index} className='col-span-1 md:col-span-2 lg:col-span-3 pb-3.5 sm:pb-0'>
                  <h3 className='text-md lg:leading-7 font-medium mb-4 sm:mb-5 lg:mb-6 pb-0.5'>{link.title}</h3>
                  <ul className='text-sm flex flex-col space-y-3'>
                    {link.links.map((subLink, index) => (
                      <li key={index} className='flex items-baseline'>
                        <Link to={subLink.link} className="text-border inline-block w-full hover:text-subMain">{subLink.name}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))
            }
            <div className='pb-3.5 sm:pb-0 col-span-1 md:col-span-2 lg:col-span-3'>
              <Link to="/">
                <img src='/logo.png' alt='logo' className='w-2/4 h-12 object-contain' />
              </Link>
              <p className='leading-7 text-sm text-border mt-3'><span>All Rights are protected.</span><br /><span>Made by <Link to="https://github.com/mohamedbouzaien" className='hover:text-subMain'>mbouzaie</Link> et <Link to="https://github.com/BenElhadj" className='hover:text-subMain'>bhamdi</Link></span></p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer