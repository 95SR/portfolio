import { useState,useEffect } from 'react';

import {Home, About, Work, Contact, Footer} from './sections'
import './App.css';

function App() {
  const [loading,setLoading] =useState(false);
  const [active,setActive] = useState('#home')

  useEffect(()=>{
    setLoading(true);
    setTimeout(() => {
      setLoading(false)
    }, 5000);

  },[])



  return (
    <div className="App">
      {
        loading ?
        <p className='loading'>Female Alien Livin in South Korea</p>
        :
        <div className='sections'>
          <nav>
            <a href='#home' onClick={()=> setActive('#home')} className={active === '#home' ? 'active' : ""}>Home</a>
            <a href='#about' onClick={()=> setActive('#about')} className={active === '#about' ? 'active' : ""}>About</a>
            <a href='#work' onClick={()=> setActive('#work')} className={active === '#work' ? 'active' : ""}>Work</a>
            <a href='#contact' onClick={()=> setActive('#contact')} className={active === '#contact' ? 'active' : ""}>Contact</a>
            
          </nav>
          
          <Home/>
          <About/>
          <Work/>
          <Contact/>
          <Footer/>
        </div>
      }
      
    </div>
  );
}

export default App;
