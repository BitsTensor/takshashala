import React from 'react';
import { Link } from 'react-router-dom';
import photo1 from './photo1.jpg';
import photo4 from './photo4.jpg';
import photo2 from './photo2.jpg';
import photo3 from './photo3.jpg';
import photo5 from './photo5.jpg';
import photo6 from './photo6.jpg';
import photo7 from './photo7.jpg';
import logo2 from './logo2.jpg';
const aboutUs = () => {
  return (
    < div className='about'>
         <img className='logobox3' src={logo2} alt=''/>

      < div className='about22'>
   Welcome to Essence of Bihar,<br/> where the vibrant culture and rich heritage of Bihar come alive through our<br/> web platform.<br/>
   Our passionate team of developers is dedicated to creating an immersive<br/> online experience, seamlessly blending tradition with technology.
 <br/>
  Explore the essence of Bihar like never before, crafted with expertise and a commitment to showcasing the beauty of this unique region.
  </div>
    <img className='photo' src={photo1} alt=''/>
    <img className='photo' src={photo4} alt=''/>
    <img className='photo' src={photo2} alt=''/>
    <img className='photo' src={photo5} alt=''/>
    <img className='photo' src={photo6} alt=''/>
    <img className='photo' src={photo3} alt=''/>
    <img className='photo' src={photo7} alt=''/>
    <footer>         
    <section className='footerlink'> 
    <img className='logo1' src={logo2} alt=''/>
      <h5> Navigation On Link</h5>
    <Link 
             className="nav-link" id='link11'
              to="/">HOME</Link>   
              <Link 
              className="nav-link" id='link12'
              to="/explorebihar">EXPLOREBIHAR</Link>  
            <Link className="nav-link"  id='link13' to="/destinations">DESTINATIONS</Link>
            <Link className="nav-link" id='link14' to="/artsandcultures">ARTS&CULTURES</Link>
            <Link className="nav-link" id='link15' to="/aboutus">ABOUTUS</Link>
            </section>
            <section className='downbox'>
              <div className='down'>
                Developed By Fantastic 4 Web
              </div>
            </section>

        </footer>
    
    </div>
  )
}

export default aboutUs