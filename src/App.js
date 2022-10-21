import { useState,useEffect } from 'react';
import { GiUfo,Gi3DHammer} from "react-icons/gi";
import {Home, About, Work, Contact, Footer} from './sections'
import './App.css';

function App() {
  const [loading,setLoading] =useState(false);
  const [active,setActive] = useState('#home');
  const [windowSize,setWindowSize] = useState(window.innerWidth);
  const [navShow, setNavShow] = useState(false);
  const [offsetY, setOffsetY] = useState(window.scrollY);
  const [height, setHeight] = useState(window.innerHeight);

  useEffect(()=>{
    setLoading(true);
    setTimeout(() => {
      setLoading(false)
    }, 5000);

  },[])

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(window.innerWidth);
      setHeight(window.innerHeight);
    }

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  function handleScroll (){
    setOffsetY(window.scrollY);
    if(window.scrollY < height*1 -100) {
      setActive('#home')
    } else if (window.scrollY >= height*1 -100 && window.scrollY < height*2-100 ) {
      setActive('#about')
    } else if (window.scrollY >= height*2-100 && window.scrollY < height*3-100) {
      setActive('#work')
    } else{
      setActive('#contact')
    }
  }

  window.addEventListener('scroll', handleScroll);

  console.log(window.scrollY)
  

  const showMenu= () => {
    setNavShow(!navShow);
  }
  



  return (
    <div className="App">
      {
        loading ?
        <div className='loading-container'>
          <p className='loading'>Female Alien Livin in South Korea <span className='cursor'></span></p>
        </div>
        
        :
        <div className='sections'>
          <nav className={windowSize<=600 && !navShow ? 'hide' : ''}>
            <a href='#home' onClick={showMenu} className={active === '#home' ? 'active' : ""}>Home</a>
            <a href='#about' onClick={showMenu} className={active === '#about' ? 'active' : ""}>About</a>
            <a href='#work' onClick={showMenu} className={active === '#work' ? 'active' : ""}>Work</a>
            <a href='#contact' onClick={showMenu} className={active === '#contact' ? 'active' : ""}>Contact</a>
            
          
            
          
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
