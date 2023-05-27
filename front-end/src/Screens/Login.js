import React from 'react'
import Layout from '../Layout/Layout'
import { Input } from '../Components/UsedInputs'
import { FiLogIn } from 'react-icons/fi'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <Layout>
      <div className='container mx-auto px-2 my-24 flex-cols'>
        <div className='w-full gap-6 2xl:w-2/5 flex-cols p-14 md:w-3/5 bg-dry rounded-lg border border-border'>
          <img src='/logo.png' alt='logo' className='w-full h-12 object-contain'/>
          <Input label="Email" placeholder="You Email here" type="email" bg={true} />
          <Input label="Password" placeholder="You Password here" type="password" bg={true} />
          <Link to="/dashboard" className="bg-subMain transitions hover:bg-main flex-rows gap-4 text-white p-4 rounded-lg w-full">
            <FiLogIn /> Login
          </Link>
          <p className='text-center text-border'>
            Don't have an account? {" "}
            <Link to="/register" className='text-dryGray font-semibold ml-2'>
              Register
            </Link>
          </p>
        </div>
      </div>
    </Layout>
  )
}

export default Login