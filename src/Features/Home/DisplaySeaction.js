
import { useLottie } from 'lottie-react'
import yoga from '../../Assest/animation.json'

const DisplaySeaction = () => {

  const animation = {
    animationData: yoga,
    loop: true,
  }
  const style = {
    height: 500,
  }
  const { View } = useLottie(animation, style)

  return (
    <div className='grid grid-cols-2 max-sm:grid-cols-1 items-center  mb-16'>

      <div className="animation h-[500px]">
        {View}
      </div>

      <div className="text space-y-2 max-sm:text-center">
        <h1 className='text-slate-600 text-[30px]'>Hi, I am <span className='text-orange-600 font-semibold'>Sayun Locphan</span></h1>
        <p className='text-pink-600 text-sm italic'>- Some Dev, Freelance, Rounder -</p>
        <div className='text-start max-sm:px-5'>
          <p className='font-light text-slate-800'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt est, autem possimus iste labore quaerat ut nesciunt mollitia magnam odit. Totam, nesciunt quia. Ullam et adipisci cum. Repellat, at nobis.</p>
        </div>
        <button className='bg-blue-500 text-white rounded-lg p-2 hover:bg-blue-600'>Read more</button>
      </div>

    </div>
  )
}

export default DisplaySeaction