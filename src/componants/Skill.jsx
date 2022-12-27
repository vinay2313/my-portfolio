import { motion } from 'framer-motion'
import React from 'react'


function Skill({i}) {
   
  return (
    <>
    
  
 

<motion.div 
  animate={{
    y:  ['-80px', '80px', '00px']    
    
  }}
  transition={{
    type: 'tween',
    duration: 2
  }} className="skill"
     >
    <p className='skillicon'>{i.icon}</p>
    <p className='sname'>{i.name}</p>
  
  </motion.div>

</>
  )
}

export default Skill
