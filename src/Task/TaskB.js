import React, { useState } from 'react'

const TaskB = () => {

  const [show, setShow] = useState(false);

  const openDialog = () => {
    setShow((prev) => !prev)
  }


  return (
    <div className='flex flex-col justify-center items-center h-[50vh] bg-slate-300 relative'>
      <h1>Task 2</h1>
      <div>
        <button
          onClick={openDialog}
          className='bg-black text-white py-2 px-4 rounded-lg hover:bg-slate-800'>Dailog</button>
      </div>
      {
        show &&
        <div className='bg-white h-[300px] w-[600px] absolute flex flex-col justify-center items-center'>
          <h1 className='top-10 absolute font-bold'>Hello!!!</h1>
          <p className='p-3 text-slate-600'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus provident, commodi corporis natus aliquam libero nulla error. Tenetur sint iusto laborum, voluptas modi laboriosam perferendis recusandae. Fugiat, quas nostrum! Earum.</p>

          <div className=' flex gap-3 absolute bottom-10 right-10'>
            <button onClick={openDialog} className='bg-red-400 p-2 rounded-lg font-bold hover:bg-red-500'>Cancel</button>
            <button onClick={openDialog} className='bg-green-400 p-2 rounded-lg font-bold hover:bg-green-500'>Confirm</button>
          </div>
        </div>
      }
    </div>
  )
}

export default TaskB