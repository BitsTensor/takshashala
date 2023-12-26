import React from 'react';
import photo1 from '../photo1.jpg';
  import photo4 from '../photo4.jpg';
  import photo2 from '../photo2.jpg';
  import photo3 from '../photo3.jpg';
  import photo5 from '../photo5.jpg';
  import photo6 from '../photo6.jpg';
  import photo7 from '../photo7.jpg';
  import sabhyataDwar1 from './sabhyatadwar1.jpg'
  import logo3 from '../logo3.jpg';
  import { Link } from 'react-router-dom';

const sabhyataDwar = () => {
  return (
    <div className='dwar'>
         <img className='logobox3' src={logo3} alt=''/>

      <div className='sabhyatadwar'>
        <h1 className='heading2'><u>Sabhyata Dwar</u></h1>
         <img className='sabhyatadwar2' src={sabhyataDwar1} alt=''/>

<div className='note1'>
There are many places to visit in Patna, and the Sabhyata Dwar has been added to that list. 
 It was inaugurated by the Hon'ble Chief Minister Shri Nitish Kumar in the year 2018. <br/>
<br/>
Sabhyata Dwar is in the northern part of Gandhi Maidan has unique architecture that is a sure example of a masterpiece.
 This monument is made of red and sandstone, on top of it you can see a small stupa.
  This monument mentions many things from history which must be visited to lookout. <br/>

  

Sabhyata Dwar attracts the attention of many tourists.
 People gather here, especially in the evening to relax.
 </div></div>
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

export default sabhyataDwar