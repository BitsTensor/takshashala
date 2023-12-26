import React from 'react'
import photo1 from '../photo1.jpg';
  import photo4 from '../photo4.jpg';
  import photo2 from '../photo2.jpg';
  import photo3 from '../photo3.jpg';
  import photo5 from '../photo5.jpg';
  import photo6 from '../photo6.jpg';
  import photo7 from '../photo7.jpg';
import logo3 from '../logo3.jpg';
import ahilya2 from './ahilyamandir1.jpg';
  import { Link } from 'react-router-dom';

const ahilyaMandir = () => {
  return (
    <div className='ahimandir'>
         <img className='logobox3' src={logo3} alt=''/>
      <div className='ahilyamandir'>
        <h1 className='heading2'><u>Ahilya Mandir</u></h1><br/>
        <img className='ahilyamandir2' src={ahilya2} alt=''/>
   <div className='note1'>
        Ahilya Mandir is said to be the most historic worship place in Darbhanga.
         The temple is a masterpiece of art and ancient Indian architecture. <br/>

 <br/>

It is believed that the temple is dedicated to Gautam Rishi's wife and inside the shrine there is a flat stone said to contain the footprints of Goddess Sita. <br/>

  <br/>

It is a divine place and a lot of devotees come here to worship from various places.
<br/>
 


        </div>
        
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
    <img className='logo1' src={logo3} alt=''/>
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
        </footer></div>
  )
}

export default ahilyaMandir