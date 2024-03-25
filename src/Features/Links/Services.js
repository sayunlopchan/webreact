import React from 'react'

const Services = () => {
  return (
    <div className='grid grid-rows-1 place-items-center'>
      <div>
        <img src="https://images.unsplash.com/photo-1628087236657-0cc963ad15fd?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className='h-[300px] w-[95vw] rounded-lg my-[5vh]' />
      </div>

      <div className="text flex flex-col items-center ">
        <h1 className='font-bold'>Services</h1>
        <div className="w-[40vw] text-center bg-red-200 p-4 rounded">
          <p className=''>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus quibusdam fugit repellat. Tempora, sequi explicabo id maiores sapiente, veniam eos esse illo natus, dolores possimus eligendi debitis blanditiis porro tenetur?</p>
        </div>
      </div>
    </div>
  )
}

export default Services