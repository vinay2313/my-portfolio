import React from 'react'
import { FaLinkedinIn} from 'react-icons/fa';
import { BsGithub} from 'react-icons/bs';
import {motion} from 'framer-motion'
function Home() {
  return (
 <div className="home">
    <motion.div 
  animate={{
    y:  ['-300px', '0px', '00px']    
    
  }}
  transition={{
    type: 'tween',
    duration: 2
  }} className="hbox1">
      <h1>
        Hi{" "}
        <img
          className="h1logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Emoji_u1f44b.svg/480px-Emoji_u1f44b.svg.png"
          alt=""
        />{" "}
        ,
      </h1>
      <h1>
        I'am <span className="name">Vinay Thakur</span>
      </h1>
      <h1>MERN Developer</h1>
      <a href="https://drive.google.com/file/d/1_-D8AH5pO9RYGeV8kh6Ezzwbd6TMP4mY/view?usp=share_link" target="_blank" rel="noopener noreferrer"><button className="hbtn">Resume</button></a>
      <h3>
      <a href="https://www.linkedin.com/in/vinay-thakur-90194b246/" className='ina' target="_blank" rel="noopener noreferrer"><FaLinkedinIn/></a>
      <a href="https://github.com/vinay2313" className='gita' target={"_blank"}><BsGithub/></a>
</h3>
    </motion.div>
    <motion.div 
  animate={{
    x:  ['300px', '0px', '00px']    
    
  }}
  transition={{
    type: 'tween',
    duration: 2
  }} className="hbox2">
      <img
        src="https://icons.veryicon.com/png/o/internet--web/prejudice/user-128.png"
        alt=""
        className="user"
      />
    </motion.div>
  </div>
    )
}

export default Home