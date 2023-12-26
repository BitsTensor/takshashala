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
  import sriNathBabaMandir1 from './srinathbabamandir1.jpg'
const sriNathBabaMandir = () => {
  return (
   
      
    <div className='babamandir'>
          <img className='logobox3' src={logo3} alt=''/>

        <div className='srinath'>
            <h1 className='heading'><u>Sri Nath baba Mandir</u></h1>

       <h3>Sri Nath Baba Mandir in Buxar, Bihar: A Spiritual Haven</h3>     <br/>
       <img className='srinath2' src={sriNathBabaMandir1} alt=''/>
<div className='note1'>
Sri Nath Baba Mandir, located in the historic town of Buxar in Bihar, stands as a revered spiritual destination drawing devotees and seekers alike.
 Dedicated to Sri Nath Baba, a revered saint, the temple holds immense religious significance.
  Devotees flock to this sacred site seeking blessings and spiritual solace. <br/>

The temple complex exudes a serene and tranquil atmosphere, providing a peaceful haven for prayer and meditation.
 The architecture reflects a blend of traditional design elements, creating a space that resonates with spirituality.
  Pilgrims often engage in rituals and prayers, immersing themselves in the divine aura of the temple.</div>
  <br/>
Legend has it that Sri Nath Baba was a saintly figure known for his spiritual wisdom and benevolence. 
His teachings and blessings are believed to have miraculous powers, drawing devotees from far and wide.
 The temple, therefore, serves as a place not only for religious worship but also as a symbol of faith and devotion.
 <br/>
Beyond its religious significance, Sri Nath Baba Mandir contributes to the cultural and social fabric of Buxar.
 Festivals and religious celebrations held at the temple bring the community together, fostering a sense of unity and shared spirituality.
 <br/>
For those visiting Buxar, Sri Nath Baba Mandir is not just a religious site but a spiritual retreat that offers a moment of respite and connection with the divine. 
The temple stands as a testament to the enduring faith and cultural richness of the region, inviting all who seek solace and spiritual enlightenment.
            
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

export default sriNathBabaMandir