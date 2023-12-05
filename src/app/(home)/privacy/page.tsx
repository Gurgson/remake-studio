import React from 'react'

const PrivacyPage = async () => {
  return (
    <div className='mx-auto max-w-3xl grid gap-10 animate-show'>
      <p className='text-center text-4xl font-medium'>Privacy Policy</p>
      <p className='text-base'>Duis rutrum dictum libero quis rutrum. Etiam sed neque aliquam, sollicitudin ante a, gravida arcu. Nam fringilla molestie velit, eget pellentesque risus scelerisque a. Nam ac urna maximus, tempor magna et, placerat urna. Curabitur eu magna enim. Proin placerat tortor lacus, ac sodales lectus placerat quis. </p>
      <h1 className=' text-2xl font-medium'>Security</h1>
      <p className='text-base'>Duis rutrum dictum libero quis rutrum. Etiam sed neque aliquam, sollicitudin ante a, gravida arcu. Nam fringilla molestie velit, eget pellentesque risus scelerisque.</p>
      <h1 className='text-2xl font-medium'>Cookies</h1>
      <ul className=' list-disc list-inside'>
        <li>Duis rutrum dictum libero quis rutrum. Etiam sed neque aliquam, sollicitudin.</li>
        <li>Nam fringilla molestie velit, eget pellentesque risus scelerisque a</li>
      </ul>
    </div>
  )
}

export default PrivacyPage