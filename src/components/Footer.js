import React from 'react'
import SocialMedia from './SocialMedia'


const Footer = ({ portfolio }) => {
  return (
    <footer className="for-more">
        <div className="social-media-icons bottom">
          <SocialMedia portfolio={portfolio} />
            {/* <a href="https://github.com/lars-soderman"><img src="resources/github.svg" alt="Github" /></a>
            <a href="https://www.linkedin.com/in/lars-soderman/"><img src="resources/linkedin.svg" alt="LinkedIn" /></a>
            <a href="https://stackoverflow.com/users/14960150/lars-s%c3%b6derman"><img src="resources/stack-overflow.svg" alt="Stack overflow" /></a>
            <a href="mailto: lars.soderman@gmail.com"><img src="resources/email.svg" alt="Email" /></a> */}
        </div>
    </footer>
  )
}

export default Footer
