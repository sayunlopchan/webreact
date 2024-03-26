import React, { useState } from 'react'

const Home = () => {
  const [count, countUpdate] = useState(0)

  const handleAdd = () => {
    return countUpdate(count + 1);
  }

  const handleMinus = () => {
    return countUpdate(count - 1);
  }


  return (
    <div className='flex flex-col justify-center items-center h-[80vh] gap-3 font-mono'>
      <div className='border-black border h-[200px] w-[200px] flex justify-center items-center'>
        <span className='text-[40px] font-bold '>
          {count}
        </span>
      </div>
      <div className='space-x-4'>
        <button onClick={handleAdd} className='bg-green-400 p-2 rounded-lg font-bold hover:bg-green-500'>Increment</button>

        <button onClick={handleMinus} className='bg-red-400 p-2 rounded-lg font-bold hover:bg-red-500'>Decrement</button>
      </div>
    </div>
  )
}

export default Home