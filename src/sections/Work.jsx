import React from 'react'
import './Work.css'
import wth from '../img/work_1.JPG'

function Work() {
  return (
    <section id='work'>
      <div className="container">
        <div className="item">
          
          <a href='https://nalssicheck.netlify.app/' target='_blank'><img src={wth} /></a>
          <a href='https://nalssicheck.netlify.app/' target='_blank' className='work-title'>Weather App</a>
        </div>
      </div>
    </section>
  )
}

export default Work