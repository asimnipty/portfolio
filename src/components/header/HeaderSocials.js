import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithubSquare} from 'react-icons/fa'

export default function HeaderSocial() {
  return (
    <div className='header__socials'>
        <a href='https://www.linkedin.com/in/asim-kumar-nipty/' target="_blank"><BsLinkedin/></a>
        <a href='https://github.com/asimnipty/' target="_blank"><FaGithubSquare/></a>

    </div>
  )
}
