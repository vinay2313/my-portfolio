import React, { useState } from 'react'
import {HiBars3} from 'react-icons/hi2'
import { Link } from 'react-router-dom'
function Navbar() {
  const [cls ,setCls] = useState("1")
  const [side ,setSide]=useState("side")
  console.log(cls)
  return (
    <nav>
  <div className="log">
    <img
      className="imglogo"
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/B_logo_1.svg/1250px-B_logo_1.svg.png"
      alt=""
    />
  </div>
  <ul className="navul">
   <Link  onClick={()=>setCls("1")} to={'/'}> <li className={`li   home${cls} `}>Home</li></Link>
   <Link onClick={()=>setCls("2")} to={'/about'}> <li className={`li   about${cls} `}>About</li></Link>
   <Link onClick={()=>setCls("3")} to={'/skills'}> <li className={`li   skills${cls} `}>Skills</li></Link>
   <Link onClick={()=>setCls("4")} to={'/projects'}> <li className={`li   projects${cls} `}>Projects</li></Link>
   <Link onClick={()=>setCls("5")} to={'/contact'}> <li className={`li   contact${cls} `}>Contact</li></Link>
    
    <li className="tbar"  onClick={()=>{
      if(side=="sided"){
        setSide("side")
      }else{
        setSide("sided")
      }
    }}><HiBars3/></li>
  </ul>
  <ul className={`navulside ${side}`}>
   <Link  onClick={()=>{setCls("1");setSide("side")}} to={'/'}> <li className={`liside   home${cls} `}>Home</li></Link>
   <Link onClick={()=>{setCls("2");setSide("side")}} to={'/about'}> <li className={`liside   about${cls} `}>About</li></Link>
   <Link onClick={()=>{setCls("3");setSide("side")}} to={'/skills'}> <li className={`liside   skills${cls} `}>Skills</li></Link>
   <Link onClick={()=>{setCls("4");;setSide("side")}} to={'/projects'}> <li className={`liside   projects${cls} `}>Projects</li></Link>
   <Link onClick={()=>{setCls("5");setSide("side")}} to={'/contact'}> <li className={`liside   contact${cls} `}>Contact</li></Link>
    
  </ul>

</nav>

  )
}

export default Navbar