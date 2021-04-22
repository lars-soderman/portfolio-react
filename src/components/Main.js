import React from 'react'

import Cards from './Cards'
import Skills from './Skills'

const Main = ({ portfolio }) => {
  return (
    <>
      <main>
        <section className="intro">
          <div className="container">
            <p>{portfolio.header.text}</p>
              <Skills title="Tech" skills={portfolio.skills.tech} />
              <Skills title="Soon" skills={portfolio.skills.soon} />
          </div>
        </section>

        <section className="featured projects">
          <h2>Featured projects</h2>
          <Cards featured projects={portfolio.projects.featured}/>
        </section>

        <section className="more">
          <h2>More projects</h2>
          <Cards more projects={portfolio.projects.more}/>
        </section>

        <section className="thoughts projects">
          <h2>Thoughts about coding</h2>
          <Cards thoughts projects={portfolio.projects.thoughts}/>
        </section>

        <section className="non-frontend projects">
          <h2>Non-frontend projects</h2>
          <Cards nonFrontend projects={portfolio.projects.nonFrontend}/>
        </section>

        <section className="skills">
          <h2>Skills</h2>
          <div className="container flex">
            <div>
              <Skills title="Tech" skills={portfolio.skills.tech} />
              <Skills title="Soon" skills={portfolio.skills.soon} />
            </div>
            <div>
              <Skills title="Toolbox" skills={portfolio.skills.toolbox} />
            </div>
            <div>
              <Skills title="More" skills={portfolio.skills.more} />
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

export default Main
