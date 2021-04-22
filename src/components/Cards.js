import React from 'react'

// const portfolio = require('../data/portfolio.json')


const Cards = (props) => {
  // "More" section has a different structure from the other cards
  if (props.more) {
    return (
      <div className="container">
        {props.projects.map(project => (
          <div key={project.text} className="project">
            <a href={project.link}>
              <h3>{project.title}</h3>
              <p>{project.text}</p>
              <ul className="tags">
                {project.tags.map(tag => (
                  <li key={tag}>{tag}</li>  
                ))}
              </ul>
            </a>
          </div>
        ))}
      </div>
    )
  } else {
    // These are the "normal cards"
    return (
      <div className="container flex">
      {props.projects.map(project => (
        <div key={project.text} className="project card">
          <a href={project.link}>
            <div className="thumbnail">
              <img src={project.thumb} alt={project.title} />
              <h3>{project.title}</h3>
            </div>
            <p>{project.text}</p>
            {project.tags && 
              <ul className="tags">
                {project.tags.map(tag => (
                  <li key={tag}>{tag}</li>  
                ))}
              </ul>
            }
          </a>
        </div>
      ))}
      <div className="project card empty"></div>
    </div>

    )
  }
}

export default Cards
