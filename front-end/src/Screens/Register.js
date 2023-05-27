import React from 'react'
import Layout from '../Layout/Layout'
import { Input } from '../Components/UsedInputs'
import { FiLogIn } from 'react-icons/fi'
import { Link } from 'react-router-dom'

function Register() {
  return (
    <Layout>
    <div className='container mx-auto px-2 my-24 flex-cols'>
      <div className='w-full gap-6 2xl:w-2/5 flex-cols p-14 md:w-3/5 bg-dry rounded-lg border border-border'>
        <img src='/logo.png' alt='logo' className='w-full h-12 object-contain'/>
        <Input label="Username" placeholder="You Username here" type="text" bg={true} />
        <Input label="First name" placeholder="You First Name here" type="text" bg={true} />
        <Input label="Last name" placeholder="You Last Name here" type="text" bg={true} />
        <Input label="Email" placeholder="You Email here" type="email" bg={true} />
        <Input label="Password" placeholder="You Password here" type="password" bg={true} />
        <Link to="/dashboard" className="bg-subMain transitions hover:bg-main flex-rows gap-4 text-white p-4 rounded-lg w-full">
          <FiLogIn /> Register
        </Link>
        <p className='text-center text-border'>
          Already have an account? {" "}
          <Link to="/login" className='text-dryGray font-semibold ml-2'>
            Login
          </Link>
        </p>
      </div>
    </div>
  </Layout>
  )
}

export default Register