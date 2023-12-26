import React from 'react'
import photo1 from '../photo1.jpg';
  import photo4 from '../photo4.jpg';
  import photo2 from '../photo2.jpg';
  import photo3 from '../photo3.jpg';
  import photo5 from '../photo5.jpg';
  import photo6 from '../photo6.jpg';
  import photo7 from '../photo7.jpg';
  import stMarysChurch1 from './stmaryschruch1.jpg';
  import logo3 from '../logo3.jpg';
  // import logo2 from '../logo2.jpg';
  import { Link } from 'react-router-dom';
const stMarysChurch = () => {
  return (
    <div className='mchurch'>
     <img className='logobox3' src={logo3} alt=''/>
    <div className='stmaryschurch'>
      <h1 className='heading2'><u>St Marys Church</u></h1>

<h3>Mary's Church in Bhojpur, Bihar: A Historical and Spiritual Gem</h3>

<br/>
<div className='note1'>
<img className='stmarychurch2' src={stMarysChurch1} alt=''/>
St. Mary's Church, situated in the picturesque district of Bhojpur in Bihar, stands as a testament to the rich history and religious diversity of the region.
 This historic church, dedicated to St. Mary, is not only a place of worship but also an architectural marvel that reflects the cultural tapestry of Bhojpur.
 <br/>
The church, with its classic architectural style, invokes a sense of reverence and awe.
 Its towering spires and intricate detailing showcase a blend of historical influences, providing a glimpse into the past.
  St. Mary's Church holds a significant place in the annals of Bihar's history, witnessing the passage of time and the evolution of the region.
  </div> <br/>
Devotees and visitors to St. Mary's Church are welcomed by an atmosphere of tranquility and spirituality.
 The church serves as a place of solace for those seeking moments of reflection and prayer.
  The serene surroundings and well-maintained grounds contribute to the peaceful ambiance, making it a destination for both religious observance and historical appreciation.
 <br/>
Beyond its spiritual role, St. Mary's Church contributes to the cultural and social identity of Bhojpur.
 Festivals and community events held at the church foster a sense of community, bringing together people of diverse backgrounds in shared celebration.
<br/>
In essence, St. Mary's Church in Bhojpur stands not only as a place of worship but also as a symbol of historical continuity and cultural resilience.
 It invites visitors to explore the intersection of faith and history, offering a glimpse into the rich heritage of Bihar.
            
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

export default stMarysChurch