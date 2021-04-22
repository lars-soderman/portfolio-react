import React from 'react'

// const portfolio = require('../data/portfolio.json')

const SocialMedia = ({ portfolio }) => {
  return (
    <>
      {portfolio.socialMedia.map((item) => (
        <a key={item.name} href={item.link}>
          <img src={item.icon} alt={item.alt} />
        </a>
      ))}
    </>
  )
}

export default SocialMedia
