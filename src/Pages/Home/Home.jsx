import React from 'react'
import Header from '../../Components/Header/Header'
import Main from '../../Components/Main/Main'
import Orders from '../../Components/Orders/Orders'
import './Home.scss'
function Home() {
  return (
    <div className='home'>
        <Header/>
        <Main/>
        <Orders/>
    </div>
  )
}

export default Home