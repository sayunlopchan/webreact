import axios from "axios"
import { useState } from "react";
import TaskC from "../../Task/TaskC";


const Home = () => {




  // let [msg, setMsg] = useState(null);

  // setTimeout(() => {
  //   setMsg = ('hvdg')
  //   console.log(msg + 'clg')
  //   console.log(setMsg + 'clg')

  // }, 1000)
  // let [award, setAwards] = useState(null);

  // const app = axios.get('http://www.omdbapi.com', {
  //   params: {
  //     title: 'Guardians of the Galaxy Vol. 2',
  //     apikey: 'ca1bf188',
  //     i: 'tt3896198',
  //   }
  // }).then((res) => {
  //   setAwards(res.data.Awards);
  //   console.log(res)
  // }).catch((err) => {
  //   console.log(err)
  // })

  // console.log(app)
  // console.log('fvvvfvdvs')




  return (
    <div>
      <TaskC />
    </div>
  )
}

export default Home