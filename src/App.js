import { useState,useEffect } from 'react';
import { GiUfo,Gi3DHammer} from "react-icons/gi";
import {Home, About, Work, Contact, Footer} from './sections'
import './App.css';

function App() {
  const [loading,setLoading] =useState(false);
  const [active,setActive] = useState('#home');
  const [windowSize,setWindowSize] = useState(window.innerWidth);
  const [navShow, setNavShow] = useState(false);

  useEffect(()=>{
    setLoading(true);
    setTimeout(() => {
      setLoading(false)
    }, 5000);

  },[])

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(window.innerWidth);
    }

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  console.log(windowSize)

  const showMenu= () => {
    setNavShow(!navShow);
  }



  return (
    <div className="App">
      {
        loading ?
        <p className='loading'>Female Alien Livin in South Korea</p>
        :
        <div className='sections'>
          <nav className={windowSize<=600 && !navShow ? 'hide' : ''}>
            <a href='#home' onClick={()=> setActive('#home')} className={active === '#home' ? 'active' : ""}>Home</a>
            <a href='#about' onClick={()=> setActive('#about')} className={active === '#about' ? 'active' : ""}>About</a>
            <a href='#work' onClick={()=> setActive('#work')} className={active === '#work' ? 'active' : ""}>Work</a>
            <a href='#contact' onClick={()=> setActive('#contact')} className={active === '#contact' ? 'active' : ""}>Contact</a>
            
          
            
          
          </nav>

          <a className={windowSize>=600 ? 'burger hide' : 'burger'} onClick={showMenu}><GiUfo /></a>

         
          
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
