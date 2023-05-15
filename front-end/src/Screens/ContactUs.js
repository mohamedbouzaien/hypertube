import React from 'react'
import Layout from '../Layout/Layout'
import Head from '../Components/Head'
import { FiMapPin, FiMail, FiPhoneCall} from 'react-icons/fi'

function ContactUs() {
  const contactDatas = [
    {
      id: 0,
      title: "Email Us",
      info: 'If you have any question or need information.',
      icon: FiMail,
      contact: 'info@hypertube.co'
    },
    {
      id: 1,
      title: "Call Us",
      info: 'If you have any urgent info you can call us.',
      icon: FiPhoneCall,
      contact: '+33754212447'
    },
    {
      id: 2,
      title: "Location",
      info: '96 Boulevard Bessières, 75017 Paris, France',
      icon: FiMapPin,
      contact: ''
    }
  ]
  return (
    <Layout>
      <div className='min-height-screen container mx-auto px-2 my-6'>
        <Head title="Contact Us" />
        <div className='grid mg:grid-cols-2 gap-6 lg:mt-20 mt-10 lg:grid-cols-3 xl:gap-8'>
          {
            contactDatas.map((contact) => (
              <div key={contact.id} className='border border-border flex-cols p-10 bg-dry rounded-lg text-center'>
                <span className='flex-cols w-20 h-20 mb-4 rounded-full bg-main text-subMain text-2xl'>
                  <contact.icon />
                </span>
                <h5 className='text-xl font-semibold mb-2'>{contact.title}</h5>
                <p className='mb-0 text-sm text-text leading-7'>
                  <a href={`mailto:${contact.contact}`} className='text-blue-600'>
                    {contact.contact}
                  </a>
                  {' '}
                  { contact.info }
                </p>
              </div>
            ))
          }
        </div>
      </div>
    </Layout>
  )
}

export default ContactUs