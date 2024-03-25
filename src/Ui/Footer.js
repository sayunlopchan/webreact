import React from 'react'

const Footer = () => {
  return (
    <div className='relative bg-slate-100'>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className=' '><path fill="#0099ff" fillOpacity="1" d="M0,96L80,117.3C160,139,320,181,480,202.7C640,224,800,224,960,197.3C1120,171,1280,117,1360,90.7L1440,64L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>

      <div className='absolute bottom-0 ml-2 '>
        <p>All Rights Reserved 2024 ©</p>
      </div>
    </div>
  )
}

export default Footer