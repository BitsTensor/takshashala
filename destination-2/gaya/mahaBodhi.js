import React from 'react'
import '../place.css'
import mahabodhi1 from './mahabodhi1.jpg';
import mahabodhi3 from './mahabodhi3.jpeg';
import photo1 from '../photo1.jpg';
  import photo4 from '../photo4.jpg';
  import photo2 from '../photo2.jpg';
  import photo3 from '../photo3.jpg';
  import photo5 from '../photo5.jpg';
  import photo6 from '../photo6.jpg';
  import photo7 from '../photo7.jpg';

import logo3 from '../logo3.jpg';
  import { Link } from 'react-router-dom';
const mahaBodhi = () => {
  return (
    <div className='bodhi'>
           <img className='logobox3' src={logo3} alt=''/>
    <div className='bodhitemple'>
      <h1 className='heading2'>The MahaBodhi Temple</h1>
      <img  className='mahabodhi2'   src={mahabodhi1} alt=''  />
   <div className='note1'>   
The Mahabodhi Temple, located in Bodhgaya, Bihar, is an architectural and spiritual marvel that stands as a testament to the profound historical and cultural significance of Buddhism.
Recognized as a UNESCO World Heritage Site, this sacred complex holds the Bodhi Tree, under which Siddhartha Gautama attained enlightenment and became the Buddha.<br/>
</div> <br/>
<div className='note1'>
The origins of the Mahabodhi Temple can be traced back to the 6th century when it was initially built by Emperor Ashoka. 
Over the centuries, the temple has undergone various renovations and additions, resulting in a fusion of architectural styles that reflects the rich cultural history of the region.
</div> <br/>
The main temple structure rises majestically, characterized by a soaring pyramidal spire adorned with intricate carvings and reliefs depicting scenes from the life of Buddha.
 Pilgrims and visitors are greeted by a serene atmosphere as they enter the temple complex, which exudes a sense of spirituality and historical resonance.<br/>

Central to the Mahabodhi Temple is the Bodhi Tree, a direct descendant of the tree under which Buddha achieved enlightenment. 
This revered tree serves as a focal point for meditation and prayer, drawing devotees from across the globe.
 The serene surroundings and the profound historical legacy create an ambiance conducive to contemplation and inner peace.<br/>
<br/><img className='mahabodhi3' src={mahabodhi3} alt=''/>
<div className='note1'>
The Mahabodhi Temple is not merely an architectural masterpiece but a living heritage site that continues to play a central role in the practice and propagation of Buddhism.
 Pilgrims embark on journeys to Bodhgaya, seeking spiritual enlightenment and a connection to the roots of their faith.
  The temple complex also serves as an educational center, with scholars and practitioners engaging in discourse and study within its hallowed grounds.
  </div><br/>

Beyond its spiritual and cultural significance, the Mahabodhi Temple has become a symbol of India's commitment to preserving its diverse heritage.
 Ongoing preservation efforts ensure that this sacred site endures for future generations, maintaining its allure as a place of pilgrimage, reflection, and inspiration.<br/>
<br/>
In conclusion, the Mahabodhi Temple in Bodhgaya, Bihar, stands as an enduring testament to the profound teachings of Buddhism and the transformative journey of Siddhartha Gautama to enlightenment.
 Its architectural splendor, historical richness, and spiritual ambiance make it not only a jewel of Bihar but a beacon for those seeking wisdom, inner peace, and a connection to the roots of one of the world's major religions.
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

export default mahaBodhi