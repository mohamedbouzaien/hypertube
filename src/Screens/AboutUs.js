import React from 'react'
import Head from '../Components/Head'
import Layout from '../Layout/Layout'

function AboutUs() {
  return (
    <Layout>
      <div className='min-height-screen container mx-auto px-2 my-6'>
        <Head title="About Us" />
        <div className='xl:py-20 py-10 px-4'>
          <div className="grid grid-flow-row xl:grid-cols-2 gap-4 xl:gap-16 items-center">
            <div>
              <h3 className='text-xl lg:text-3xl mb-4 font-semibold'>
                Welcome to HyperTube
              </h3>
              <p>Your go-to streaming platform for all your entertainment needs. Our mission is to provide you with the best possible viewing experience, whether you're watching movies, TV shows, or live events.</p>
              <p>At Hypertube, we believe that streaming should be accessible to everyone, regardless of their location or device. That's why we offer a seamless, user-friendly interface that's optimized for both desktop and mobile use. With Hypertube, you can enjoy your favorite content from anywhere, at any time.</p>
              <p>Our team of passionate streaming enthusiasts is dedicated to curating a diverse selection of high-quality content from around the world. From blockbuster hits to indie gems, we have something for everyone. And with our personalized recommendation system, you'll never run out of things to watch.</p>
              <p>We take pride in our commitment to user privacy and security. Our platform is designed with the latest encryption and security protocols to ensure that your data is always safe and secure.</p>
              <p>At Hypertube, we're not just a streaming service, we're a community. We value your feedback and are constantly striving to improve our platform to meet your needs. Join our community today and experience the future of streaming.</p>
            </div>
            <img src='/images/about.jpg' alt="aboutus" className='w-full xl:block hidden h-header rounded-lg object-cover' />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default AboutUs