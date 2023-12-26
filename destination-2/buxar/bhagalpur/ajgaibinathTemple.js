import React from 'react'
import photo1 from '../photo1.jpg';
 import photo4 from '../photo4.jpg';
 import photo2 from '../photo2.jpg';
 import photo3 from '../photo3.jpg';
 import photo5 from '../photo5.jpg';
 import photo6 from '../photo6.jpg';
 import photo7 from '../photo7.jpg';
 import Ajgaibinathtemple1 from './ajgaibinathtemple1.jpg';
 import logo3 from '../logo3.jpg';
 import { Link } from 'react-router-dom';
 
const ajgaibinathTemple = () => {
  return (
    < div className='ajgaibinath'>
         <img className='logobox3' src={logo3} alt=''/>
 
    <div className='ajgaibinathtemple'>
            <h1 className='heading2'><u>Ajgaibinath temple</u></h1>
    <img className='ajgaibinathtemple2' src={Ajgaibinathtemple1} alt=''/>
 
<div className='note1'>
<br/>
  The Ajgaibinath Temple or Ajgaivinath Dham is a famous Hindu temple located in Sultanganj,
   Bhagalpur district, Bihar, India. It is a significant pilgrimage site for Hindus and holds great religious importance.
    It is situated on the bank of holy river Ganga.
    It lies in the Anga region of Bihar.

<h3>Religious significance</h3><br/>
Ajgaibinath Temple is also known as Mankamna Temple.
 Devotees say that wishes made at this place are fulfilled.</div>
  In this regard, according to Mahant Premanand ji of this temple,
   "There is such a belief of this place that the official worship of this place is done first.
   Only after this the Mahadev of Devghar is worshipped.[1]
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

export default ajgaibinathTemple




    
   
   
  

 