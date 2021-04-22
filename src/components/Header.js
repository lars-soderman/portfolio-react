import React from 'react'
import SocialMedia from './SocialMedia'

const Header = ({ portfolio }) => {
  return (
    <header>
      <div className="container">
        <div className="social-media-icons">
          <SocialMedia portfolio={portfolio} />
        </div>
      </div>
      <div className="title">
        <h1>{portfolio.header.heading1}</h1>
        <h2>{portfolio.header.heading2}</h2>
        <p>{portfolio.header.heading3}</p>
      </div>
      <div className="lars-pic">
        <div className="lars-pic-wrapper">
            <img src={portfolio.header.imageSrc} alt="This is me" />
        </div>
      </div>
    </header>
  )
}

export default Header
