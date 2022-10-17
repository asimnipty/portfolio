import React from 'react'
import { icons } from 'react-icons'
import './Experiences.css'
import {BsFillCheckCircleFill} from 'react-icons/bs'

export default function Experiences() {
  return (
    <section id='experiences'>
      <h5>Skills I have</h5>
      <h2> My Experiences</h2>

      <div className='container experience__container'>
        <div className='experience__developer'>
          <h3>Web Development</h3>
          <div className='experience__content'>
            <article className='experience__details'>
              <BsFillCheckCircleFill />
              <h4>HTML</h4>
            </article>
            <article className='experience__details'>
              <BsFillCheckCircleFill />
              <h4>CSS</h4>
            </article>
            <article className='experience__details'>
              <BsFillCheckCircleFill />
              <h4>JavaScript</h4>
            </article>
            <article className='experience__details'>
              <BsFillCheckCircleFill />
              <h4>React JS</h4>
            </article>
            <article className='experience__details'>
              <BsFillCheckCircleFill />
              <h4>Python</h4>
            </article>
          </div>
        </div>
        {/* end of dev */}
        <div className='experience__generic'>
          <h3>IT Experiences </h3>
          <div className='experience__content'>
            <article className='experience__details'>
              <BsFillCheckCircleFill />
              <h4>System Analyst</h4>
            </article>
            <article className='experience__details'>
              <BsFillCheckCircleFill />
              <h4>AWS GCP</h4>
            </article>
            <article className='experience__details'>
              <BsFillCheckCircleFill />
              <h4>Networking</h4>
            </article>
            <article className='experience__details'>
              <BsFillCheckCircleFill />
              <h4>IT Operation</h4>
            </article>
            <article className='experience__details'>
              <BsFillCheckCircleFill />
              <h4>Project Management</h4>
            </article>
          </div>
        </div>
      </div>

    </section>
  )
}
