import React from 'react'
import { motion } from 'framer-motion'

function About() {
  return (
    <motion.div 
    animate={{
      y:  ['80px', '-80px', '00px']    
      
    }}
    transition={{
      type: 'tween',
      duration: 2
    }} className='about'>
        <div className="aboutbox">
        <h1 className='section-title'>About</h1>
        <p className='aboutp'>Hello stranger! 👋, my name is Vinay Thakur and I am a Full Stack Developer, passionate about building digital products that improve everyday experience for people. I love to work on exciting projects that test what I've learnt, whilst being exposed to the power and potential of the ever-evolving technologies around us. I'm always looking for better, and more importantly, ethical and accessible ways to solve the common problems we are faced with day-to-day.</p>
        <p className="mailp">Drop a mail @ <a href = "mailto: vinaythakur2313@gmail.com"> vinaythakur2313@gmail.com</a></p>
        </div>
        

    </motion.div >
  )
}

export default About