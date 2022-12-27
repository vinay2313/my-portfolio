import React from 'react'

function Project({i}) {
  return (
    <div className="project-container">
    <div className="project-img">
      <div className="diver"> <img className="imageheight" src={i.img} alt="Nykaaman" /></div>
      <p className="project-title">{i.name} </p>
      <p className="project-subtitle">
    {i.text}  <br />
        <br />
        A collaborative project, built in 6 days by a team of 6 developers
        <br />
        <br />HTML | CSS  | Javascript |MongoDB |Node.js |Express
      </p>
      <div className="projects-btn">
        
        <a href={i.link} target="_blank" className="small-btn button">
          Live<i className="bx bx-link-external" />
        </a>
      </div>
    </div>
  </div>
  )
}

export default Project