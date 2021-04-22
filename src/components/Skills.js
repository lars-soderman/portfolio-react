import React from 'react'

const Skills = (props) => {
  return (
    <>
      <h3>{props.title}</h3>
      <ul className="comma-list">
        {props.skills.map(skill => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
    </>
  )
}

export default Skills
