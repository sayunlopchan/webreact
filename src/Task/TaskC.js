import axios from 'axios'
import React, { useState } from 'react'

const TaskC = () => {


  let [data, setData] = useState(null);

  axios.get('http://www.omdbapi.com', {
    params: {
      apikey: 'ca1bf188',
      Title: 'Guardians of the Galaxy Vol. 2',
      i: 'tt3896198'
    }
  }).then((res) => {
    setData(res.data)
  }
  ).catch((err) => {
    setData(err.data)
  })


  return (
    <div>
      {
        data && <div className='wrapper flex flex-wrap justify-center items-center'>
          <div className="card grid grid-cols-2 h-[460px] w-[650px] m-2 bg-slate-300 p-2 ">
            <div>
              <img src={data.Poster} alt="poster of GOTG v2" />
            </div>
            <div className='font-mono'>
              <h1 className='font-bold'>{data.Title}</h1>
              <div className='text-sm'>
                <p className='italic'> Date: {data.Year}</p>
                <p>{data.Rated}</p>
                <p>Released date: {data.Released}</p>
                <p>Genre: {data.Genre}</p>
                <p>Director: {data.Director}</p>
                <p>Writer: {data.Writer}</p>
                <p>Actors: {data.Actors}</p>
                <p>Plot: {data.Plot}</p>
                <p>Languge: {data.Language}</p>
                <p>Country: {data.Country}</p>
                <h1 className='italic text-red-700'>Awards:</h1>
                <p className='italic'>{data.Awards}</p>
              </div>
            </div>
          </div>
        </div>
      }
    </div >
  )
}

export default TaskC