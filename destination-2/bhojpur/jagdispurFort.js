import React from 'react'
import photo1 from '../photo1.jpg';
  import photo4 from '../photo4.jpg';
  import photo2 from '../photo2.jpg';
  import photo3 from '../photo3.jpg';
  import photo5 from '../photo5.jpg';
  import photo6 from '../photo6.jpg';
  import photo7 from '../photo7.jpg';
  import jagdispurFort1 from './jagadishpurfort1.jpg';
  import logo3 from '../logo3.jpg';
  // import logo2 from '../logo2.jpg';
  import { Link } from 'react-router-dom';
const jagdispurFort = () => {
  return (
    <div className='jdpfort'>
        <img className='logobox3' src={logo3} alt=''/>
    <div className='jagdishpurfort'>
        <h1 className='heading2'><u>JagdishPur Fort </u></h1>
        
<h3>Jagdishpur, Bhojpur, Bihar: Blending Heritage and Progress</h3>
<img className='jagdispurfort2' src={jagdispurFort1} alt=''/>
<br/>
<div className='note1'>
Jagdishpur, situated in the Bhojpur district of Bihar, is a town that harmoniously weaves together historical significance and modern progress.
 Historically, it has been associated with the indomitable spirit of the Indian freedom struggle.
  The Jagdishpur Fort, a historical marvel, stands as a silent witness to the region's rich past. 
  Constructed during the Mughal era, this fort has played a role in various historical events, showcasing the resilience and valor of its people.
  <br/><br/>
In addition to its historical roots, Jagdishpur has evolved into a</div> hub of industrial and economic activity. 
It houses manufacturing units, contributing to Bihar's economic development.
 The town's landscape is dotted with vibrant marketplaces and cultural landmarks, creating a blend of traditional charm and contemporary dynamism.
 <br/><br/>
Jagdishpur is not only a testament to Bihar's historical legacy but also a symbol of resilience and progress.
 As it continues to embrace modernization, the town remains anchored in its cultural heritage, making it a fascinating destination that invites exploration and appreciation for the dynamic blend of old and new.
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

export default jagdispurFort