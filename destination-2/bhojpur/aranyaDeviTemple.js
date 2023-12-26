import React from 'react';
import '../place.css';
  import photo1 from '../photo1.jpg';
  import photo4 from '../photo4.jpg';
  import photo2 from '../photo2.jpg';
  import photo3 from '../photo3.jpg';
  import photo5 from '../photo5.jpg';
  import photo6 from '../photo6.jpg';
  import photo7 from '../photo7.jpg';
  import logo3 from '../logo3.jpg';
import aranyaDeviTemple1 from './aranyadevitemple1.jpg';
// import logo2 from '../logo2.jpg';
import { Link } from 'react-router-dom';
const aranyaDeviTemple = () => {
  return (
    <div className='devimandir'>
       <img className='logobox3' src={logo3} alt=''/>
        <div className='aranyadevi'>
            <h1 className='heading2'><u>AranyaDevi Mandir</u></h1>
    
<h3>Aranya Devi Mandir in Bhojpur, Bihar: A Sanctum of Serenity</h3>
<img className='aranyadevitemple2' src={aranyaDeviTemple1} alt=''/>
 <br/> <div className='note1'>
Nestled in the district of Bhojpur, Bihar, the Aranya Devi Mandir stands as a cherished spiritual abode, enveloped in tranquility and divine grace.
 Dedicated to Goddess Aranya Devi, this temple holds profound religious significance for devotees who visit to seek blessings and solace.
 <br/> <br/>
The temple, surrounded by lush greenery, creates a serene ambiance conducive to prayer and reflection.
 Its architectural splendor, adorned with intricate designs, mirrors the rich cultural heritage of the region.
 </div> Pilgrims and visitors alike are drawn to the peaceful atmosphere that pervades the temple premises.
  <br/> 
Goddess Aranya Devi is revered as a guardian and bestower of grace.
 Legend has it that the temple has ancient roots, and the goddess has been a beacon of hope and protection for generations.
  Devotees believe in the deity's benevolence and come to offer prayers, seeking blessings for prosperity and well-being.
  <br/> <br/>
Festivals and religious celebrations at Aranya Devi Mandir are vibrant occasions, marked by devotion and fervor.
 The temple serves as a cultural hub, bringing the community together in shared rituals and festivities.
 <br/> <br/>
For those exploring the cultural and spiritual tapestry of Bihar, Aranya Devi Mandir in Bhojpur beckons as not just a religious site but a haven of serenity and devotion.
 It stands as a testament to the enduring faith of the people and the intrinsic connection between spirituality and the natural beauty that surrounds this sacred place.
     <br/>       
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

export default aranyaDeviTemple