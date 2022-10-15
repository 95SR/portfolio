import React from 'react'
import './Home.css'


function Home() {
  return (
    <section id='home'>
      <div className="container home-container">
        <div className="child-container">
        <h1>
        Hi, I am <span>Syahri</span>  
        </h1> 
        <h1>Female Alien</h1>
        <h2> stayin' in South Korea</h2> 

        
        <button>
            <a href="/cv.pdf" download> Download CV</a>
        </button>
        
        

        </div>
        

          

        

      </div>
    </section>
  )
}

export default Home