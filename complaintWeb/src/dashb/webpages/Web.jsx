import React from 'react'
import Head from '../../components/pages/Head'
import Home from '../../components/pages/Home'
import Headers from '../../components/pages/Header2'
import Dhexda from './Dhexda'
import Footer from './Footer'

export default function Web() {
  return (
    <div>
       <Headers/>
       <Dhexda/>
      <div className='bg-green-'>
      <Home/>
      </div>
      <Footer/>
    </div>
  )
}
