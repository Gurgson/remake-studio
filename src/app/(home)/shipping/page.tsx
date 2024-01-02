import FAQItem from '@/components/FAQItem/FAQItem'
import { FAQData } from '@/components/FAQItem/FAQItem-types'
import { Metadata } from 'next';
import React from 'react'
const placeholderAnw = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
export const metadata : Metadata = {
  title: `${process.env.WEBSITE_NAME} - Terms Of Use`,
}
const DeliveryPage = async () => {
  const FAQ : Array<FAQData> = [
    {
      question: "How can I track my order after it has been shipped?",
      answear: placeholderAnw
    },
    {
      question: "Do you offer international shipping?",
      answear: placeholderAnw
    },
    {
      question: "Can I cancel my order before it's shipped?",
      answear: placeholderAnw
    },
    {
      question: "What payment methods do you accept?",
      answear: placeholderAnw
    },
    {
      question: "What is your  return policy",
      answear: placeholderAnw
    }
]
  return (
    <div className='max-w-3xl mx-auto animate-show'>
      <p className='text-4xl font-semibold mb-8 text-center'>Shipping and Returns</p>
      <p className='py-4 indent-6'>Duis rutrum dictum libero quis rutrum. Etiam sed neque aliquam, sollicitudin ante a, gravida arcu. Nam fringilla molestie velit, eget pellentesque risus scelerisque a. Nam ac urna maximus, tempor magna et, placerat urna. Curabitur eu magna enim. Proin placerat tortor lacus, ac sodales lectus placerat quis. </p>
      {FAQ.map((item, key)=><FAQItem key={`faq-${key}`} props={item}/>)}
      
    </div>
  )
}

export default DeliveryPage