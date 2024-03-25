import React from 'react'

const Contact = () => {
  return (
    <div className='grid grid-rows-1 place-items-center'>
      <div>
        <img src="https://images.unsplash.com/photo-1505915838157-dc2f7fb696b4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGxhbmRzY2FwZSUyMHRlbXBsZSUyMG5lcGFsfGVufDB8fDB8fHww" alt="" className='h-[300px] w-[95vw] rounded-lg my-[5vh]' />
      </div>

      <div className="text flex flex-col items-center ">
        <h1 className='font-bold'>Contact</h1>
        <div className="w-[40vw] text-center bg-red-200 p-4 rounded">
          <p className=''>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus quibusdam fugit repellat. Tempora, sequi explicabo id maiores sapiente, veniam eos esse illo natus, dolores possimus eligendi debitis blanditiis porro tenetur?</p>
        </div>
      </div>
    </div>
  )
}

export default Contact