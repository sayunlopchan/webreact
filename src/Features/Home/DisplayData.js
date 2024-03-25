import React from 'react'

const DisplayData = () => {
  return (

    <div className='flex flex-col items-center gap-10 bg-slate-100 '>

      {/* Header */}
      <div>
        <h1 className='font-bold text-[30px] text-orange-500'>About me</h1>
      </div>

      {/* circle */}
      <div className='h-[500px] w-[500px] max-sm:h-[320px] max-sm:w-[320px] relative z-[1]'>
        <div className="h-[500px] w-[500px] max-sm:h-[320px] max-sm:w-[320px] rounded-full bg-orange-500 flex justify-center ">
          <div className=' text-[20px] max-sm:text-[15px] font-bold absolute top-[30%] text-white'>
            <p>Name: <span className='font-normal italic'>Sayun Lopchan</span></p>
            <p>Age: <span className='font-normal italic'>21</span></p>
            <p>Address: <span className='font-normal italic'>Bhairahawa</span></p>
            <p>Skills: <span className='font-normal italic'>MERN Stack</span></p>
            <p>language: <span className='font-normal italic'>Nepali,English</span></p>
            <p>Social Media:</p>
            <p>
              <a href="" className='font-normal italic hover:text-blue-500'>facebook</a>,
              <a href="" className='font-normal italic hover:text-purple-300' >Instagram</a>,
              <a href="https://github.com/sayunlopchan" className='font-normal italic hover:text-black'>Github</a>
            </p>
          </div>
          <div className="h-[200px] w-[200px] max-sm:h-[100px] max-sm:w-[100px] rounded-full bg-yellow-400 absolute left-0  z-[-1]"></div>
          <div className="h-[100px] w-[100px] max-sm:h-[50px] max-sm:w-[50px] rounded-full bg-lime-600 absolute bottom-2 right-3 z-[-1]"></div>
          <div className="h-[100px] w-[100px] max-sm:h-[50px] max-sm:w-[50px] rounded-full bg-red-600 absolute  right-3 z-[-1]"></div>
        </div>
      </div>
    </div>
  )
}

export default DisplayData