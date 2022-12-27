import React from 'react'
import Project from '../componants/Project';
import {data} from '../jsfiles/project'

function Projects() {
  return (
    
      
            <section className="projects section">
              <h2 className="section-title">Projects</h2>
             <div className="project">
             {data.map((i,e)=><Project i={i} key={e}/>)}
             </div>
              </section>
          );
        }
    

export default Projects