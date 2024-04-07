import React, { useState } from 'react'

const UseStateHooks = () => {

  const [state, setState] = useState(0);

  const plus = () => {
    setState(state + 5);
  }
  const minus = () => {
    setState(state - 5);
  }
  const reset = () => {
    setState(state == 0);
  }

  return (
    <div className='flex flex-col gap-4 justify-center items-center'>
      <div>
        <h1>Counter:{state}</h1>
      </div>
      <div className='flex gap-3'>
        <button onClick={plus} className='p-2 border border-black rounded-lg'>plus 5</button>
        <button onClick={minus} className='p-2 border border-black rounded-lg'>Minus 5</button>
        <button onClick={reset} className='p-2 border border-black rounded-lg'>Reset</button>
      </div>
    </div>
  )
}

export default UseStateHooks