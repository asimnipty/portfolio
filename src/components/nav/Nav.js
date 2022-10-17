import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {FaUniversity} from 'react-icons/fa'
import {GiSkills} from 'react-icons/gi'
import {FcWorkflow} from 'react-icons/fc'
import {HiOutlineMail} from 'react-icons/hi'
import { useState } from 'react'

export default function Nav() {
  const [activeNav, setActiveNav] = useState("#")
  return (
    <nav>
      <a href="#" onClick={() => setActiveNav('#')} className={activeNav === "#" ? 'active' : ''}><AiOutlineHome/></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === "#about" ? 'active' : ''}><AiOutlineUser/></a>
      <a href="#education" onClick={() => setActiveNav('#education')} className={activeNav === "#education" ? 'active' : ''}><FaUniversity/></a>
      <a href="#skills" onClick={() => setActiveNav('#skills')} className={activeNav === "#skills" ? 'active' : ''}><GiSkills/></a>
      <a href="#projects" onClick={() => setActiveNav('#projects')} className={activeNav === "#projects" ? 'active' : ''}><FcWorkflow/></a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === "#contact" ? 'active' : ''}><HiOutlineMail/></a>
    </nav>
  )
}
