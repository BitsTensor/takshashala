import React from 'react';
import photo1 from '../photo1.jpg';
  import photo4 from '../photo4.jpg';
  import photo2 from '../photo2.jpg';
  import photo3 from '../photo3.jpg';
  import photo5 from '../photo5.jpg';
  import photo6 from '../photo6.jpg';
  import photo7 from '../photo7.jpg';
import logo2 from '../logo3.jpg';
  import { Link } from 'react-router-dom';
 import mahavirMandir1 from './mahavirmandir1.jpg';
const mahavirMandir = () => {
  return (
       <div  className='maha'>
         <img className='logobox3' src={logo2} alt=''/>

      <div className='mahavirmandir'>
        <h1 className='heading2'><u>Mahavir Mandir</u></h1><br/>
        <img className='mahavir2' src={mahavirMandir1} alt=''/>
     

<div className='note1'>
    
Mahavir Mandir, located near Patna Junction, is one of the most popular temples dedicated to Lord Hanuman. 
This famous temple is a symbol of devotion and spirit and every day devotees come here with their wishes, and they believe that Sankat Mochan fulfills their every wish.
 Many devotees also recite Hanuman Chalisa inside the temple.<br/>

 

On the auspicious occasion of Ramnavmi, huge crowds of devotees throng the Mahavir temple, which makes the view even more captivating.
 Another feature of the temple is its offerings, the naivedyam here is famous all over the country.

 </div>
<br/>
In the Mahavir temple, many ordinary people are treated at a minimal fee from the income donated by the devotees. 
Mahaveer Cancer Institute, Mahavir Arogya Sansthan, Mahavir Netralaya, and Mahavir Vatsalya Hospital are being run smoothly by this holy temple in the public interest.
 Whenever you come to Patna, visit the Mahavir temple.
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

export default mahavirMandir