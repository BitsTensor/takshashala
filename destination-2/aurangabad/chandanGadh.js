import React from 'react';
import '../place.css';
import ChandanGadh2 from './chandangadh1.jpg';
import photo1 from '../photo1.jpg';
 import photo4 from '../photo4.jpg';
 import photo2 from '../photo2.jpg';
 import photo3 from '../photo3.jpg';
 import photo5 from '../photo5.jpg';
 import photo6 from '../photo6.jpg';
 import photo7 from '../photo7.jpg';
import logo3 from '../logo3.jpg';
// import logo2 from '../logo2.jpg';
import { Link } from 'react-router-dom';
const chandanGadh =  ()  =>{
  return(
    
    <div className='chandangadhplace'>
      <img className='logobox3' src={logo3} alt=''/>
        <div className='chandangadh'>
        <h1 className='heading2'><u>Chandan Garh</u></h1><br/>
    <img className='chandangadh3' src={ChandanGadh2} alt=''/> 
<div className='note1'>
 Pawai, Mali and Chandangarh are a delight for people who are interested in archaeology and even otherwise it’s a sheer pleasure to witness its treasures.
 The place is filled with archaeological treasures like remains of old forts of the rulers who may have migrated from Rajasthan
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
        </footer>
    </div>
  )
}

export default chandanGadh