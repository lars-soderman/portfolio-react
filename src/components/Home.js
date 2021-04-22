import React from 'react'
// import '../data/portfolio.json'
import Header from './Header'
import Main from './Main'
import Footer from './Footer'

const portfolio = require('../data/portfolio.json')

const Home = () => {
  return (
    <>
      <Header portfolio={portfolio} />
      <Main portfolio={portfolio} />
      <Footer portfolio={portfolio} />
    </>
  )
}

export default Home
