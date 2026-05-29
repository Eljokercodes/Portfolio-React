import { AiOutlineHome } from "react-icons/ai";
import { LuCircleUserRound } from "react-icons/lu";
import { BiBook } from "react-icons/bi";
import { RiCustomerServiceLine } from "react-icons/ri";
import { BiSolidMessageSquareDetail } from "react-icons/bi";
import './nav.css'

import { useState } from "react";

function Nav() {
  
  const [activeNav,setActiveNav]=useState('#')
  return (
      <nav className="nav" id="nav">
        <a href="#" className={activeNav==='#' ? 'active' : ''} onClick={()=>setActiveNav('#')}><AiOutlineHome/></a>
        <a href="#about" className={activeNav==='#about' ? 'active' : ''} onClick={()=>setActiveNav('#about')}><LuCircleUserRound/></a>
        <a href="#services" className={activeNav==='#services' ? 'active' : ''} onClick={()=>setActiveNav('#services')}><BiBook/></a>
        <a href="#projects" className={activeNav==='#projects' ? 'active' : ''} onClick={()=>setActiveNav('#projects')}><RiCustomerServiceLine/></a>
        <a href="#contact" className={activeNav==='#contact' ? 'active' : ''} onClick={()=>setActiveNav('#contact')}><BiSolidMessageSquareDetail/></a>
      </nav>
  )
}

export default Nav