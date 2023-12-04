import ContactForm from '@/components/Forms/ContactForm/ContactForm'
import React from 'react'

const ContactPage = () => {
  return (
    <div className=' animate-show max-w-7xl mx-auto my-28 flex flex-col justify-center items-center gap-5'>
      <p className=' max-w-lg text-center text-4xl font-bold'>Contact Us</p>
      <p className=' max-w-lg text-center text-base'>Say Hello send us your thoughts about our products or share your ideas with our Team!</p>
      <ContactForm/>
      
    </div>
  )
}

export default ContactPage