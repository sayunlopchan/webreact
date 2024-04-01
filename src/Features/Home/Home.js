import React, { useState } from "react"
import { useApiHooks } from "../../Hooks/api_hooks"
import Details from "../Links/Details";
const Home = () => {


  const [id, setId] = useState(null);
  const [load, data, err] = useApiHooks({ s: 'spider' });

  if (load) {
    return <h1>Loading..</h1>
  } if (err) {
    return <h1>err..</h1>
  }

  return (
    <div className="p-5">
      {data && data.Search.map((movie) => {
        return <div key={movie.imdbID}>
          <div onClick={() => setId(movie.imdbID)} className="grid grid-cols-2 cursor-pointer">

            <div className="flex gap-5 shadow-lg p-4">

              <div className="img ">
                <img className="h-24 w-24 object-cover" src={movie.Poster} alt="" />
              </div>

              <div className="info">
                <h1>{movie.Title}</h1>
                <p>Release: {movie.Year}</p>
              </div>
            </div>
          </div>

        </div>
      })}

      {id && <Details id={id} />}

    </div>
  )
}

export default Home