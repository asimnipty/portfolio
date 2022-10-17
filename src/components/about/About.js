import React from 'react'
import './About.css'
import ME from '../../assets/me.png'
import {FaAward} from 'react-icons/fa'
import {GiSkills} from 'react-icons/gi'
import {FcWorkflow} from 'react-icons/fc'

export default function About() {
  return (
    <section id='about'>
      <h5>Got to know</h5>
      <h2>About me</h2>

      <div className='conainer about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={ME} alt=''/>
          </div>
        </div>
        <div className='about__content'>
          <div className='about__cards'>
            <article className='about_card'>
              <GiSkills className='about__card-icon'/>
              <h4>Skills</h4>
              <small>Skill set</small>
            </article>

            <article className='about_card'>
              <FaAward className='about__card-icon'/>
              <h4>Experiences</h4>
              <small>Field of Experiences</small>
            </article>

            <article className='about_card'>
              <FcWorkflow className='about__card-icon'/>
              <h4>Projects</h4>
              <small>Self paced projects </small>
            </article>
          </div>

          <p>
            this is about objective this is about objective this is about objective this is about objective
            this is about objective
            this is about objective this is about objective this is about objective this is about objective
            this is about objective
            this is about objective this is about objective this is about objective this is about objective
            this is about objective
          </p>

          <a href='#contact' className='btn btn-primary'> Let's Talk</a>
        </div>
      </div>
    </section>
  )
}
