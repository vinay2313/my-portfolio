import React from 'react'
import { dataf } from '../jsfiles/fdata'
import { bdata } from '../jsfiles/bdata'
import Skill from '../componants/Skill'
function Skills() {
  return (
    <div>
         <h1 className='section-title'style={{marginTop: "50px"}}>Skills</h1>
      <div className="skills">
        <div className="skillsf">
         <h2 className="shead">
         Front-end Skills
         </h2>
         {
          dataf.map((i,x)=><Skill i={i} key={x}/>)
         }
      
        </div>
        <div className="skillsb">
        <h2 className="shead">
        Back-end Skills
        </h2>
        {
          bdata.map((i,x)=><Skill i={i} key={x}/>)
         }
        </div>
    </div>
    </div>
  )
}

export default Skills