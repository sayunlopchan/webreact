import React from 'react'
import DisplayData from './DisplayData'
import DisplayTech from './DisplayTech'
import DisplaySeaction from './DisplaySeaction'
import Footer from '../../Ui/Footer'

const Main = () => {
  return (
    <div>
      <DisplaySeaction />
      <DisplayTech />
      <DisplayData />
      <Footer />
    </div>
  )
}

export default Main