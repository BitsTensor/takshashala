import React from 'react'
import photo1 from '../photo1.jpg';
  import photo4 from '../photo4.jpg';
  import photo2 from '../photo2.jpg';
  import photo3 from '../photo3.jpg';
  import photo5 from '../photo5.jpg';
  import photo6 from '../photo6.jpg';
  import photo7 from '../photo7.jpg';
  import logo3 from '../logo3.jpg';
  import { Link } from 'react-router-dom';
  import dargahDariyaShahBaba1 from './dargahdariyashahbaba1.jpg';
const dargahDariyaShahBaba = () => {
  return (
    <div className='dargah'>
        <img className='logobox3' src={logo3} alt=''/>
      <div className='dargahdariyababa'>
    <h1 className='heading2'><u>Dargah Dariya Shah Baba </u></h1> <br/>
        <img className='dargah2' src={dargahDariyaShahBaba1} alt=''/>
        <div className='note1'>
     Dargah Dariya Shah Baba is in Buxar district.
     The people of this dargah believe that Baba had come from Medina 450 years ago and gave spiritual education to the local people here.
<br/><br/>
On the occasion of the annual Urs, the display of copper utensils, perfume cases, incense sticks cases, etc. 
used by Baba is done from the 15th to 17th of the second Islamic month.
<br/>
This dargah is easily accessible for Ziarat as it is located right opposite the fort grounds, one km away from the bus stand and railway station.
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

export default dargahDariyaShahBaba