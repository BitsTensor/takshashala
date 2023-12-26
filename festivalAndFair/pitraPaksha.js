import React from 'react';
import '../other.css';
import pitrapaksha1 from './pitrapaksh1.jpeg.jpg';
import pitrapaksha2 from './pitrapaksha2.jpeg';
import pitrapaksha3 from './pitrapaksha3.jpeg';
import photo1 from '../photo1.jpg';
import photo4 from '../photo4.jpg';
import photo2 from '../photo2.jpg';
import photo3 from '../photo3.jpg';
import photo5 from '../photo5.jpg';
import photo6 from '../photo6.jpg';
import photo7 from '../photo7.jpg';
import logo3 from '../logo2.jpg';
  import { Link } from 'react-router-dom';
const pitrapaksha = () => {
  return (
    <div className='pitra'>
       <img className='logobox3' src={logo3} alt=''/>

    <div className='pitrapaksha'>
      <img className="pitrapaksha2" src={pitrapaksha1} alt=''/> 
      <h1 className='heading'><u>PitraPaksha</u></h1>
      <div className='note1'>
      <h3> Pitrapaksha in Bihar: A Solemn Tribute to Ancestors</h3><br/>


Pitrapaksha, also known as Pitru Paksha or Shraaddha, is a unique and deeply significant festival observed in Bihar, as well as in various parts of India.
 This annual fortnight-long event is dedicated to paying homage to departed ancestors, seeking their blessings, and performing rituals to ensure their peaceful transition to the afterlife.
  Pitrapaksha is marked by solemnity and reverence, creating a sacred atmosphere that resonates with the beliefs and traditions of the people of Bihar.
  </div>
<h3>Duration and Timing:</h3><br/>

Pitrapaksha occurs during the waning phase of the moon in the Hindu month of Bhadrapada (usually in September), continuing for approximately 16 lunar days.
 This period is considered particularly auspicious for performing rituals to honor ancestors, as it is believed that their spirits are more receptive and close to the earthly realm during this time.<br/>

<h3>Rituals and Traditions:</h3><br/>

The central theme of Pitrapaksha revolves around performing 'Shraaddha,' a ritual that involves offering food, water, and prayers to the departed souls.
 Families gather to perform these ceremonies, seeking to express gratitude to their ancestors and ensure their well-being in the afterlife.<br/>
 <img className="pitrapaksha3" src={pitrapaksha3} alt=''/>
 <div className='note1'>
<h3>Pind Daan:</h3><br/>

One of the most significant rituals during Pitrapaksha is the 'Pind Daan,' where a symbolic rice ball, representing the soul of the departed, is offered to the holy river or sacred water bodies.
 Pilgrims often visit places like Gaya, believed to be a highly auspicious site for performing Pind Daan, to fulfill their ancestral duties.<br/>
 </div>
<h3>Significance:</h3><br/>

Pitrapaksha holds great cultural and spiritual significance in Bihar, emphasizing the importance of maintaining a strong connection with one's roots and ancestors.
 It is believed that performing these rituals during Pitrapaksha not only pleases the departed souls but also brings blessings and positive energy to the living members of the family.<br/>
 <img className="pitrapaksha4" src={pitrapaksha2} alt=''/>
<h3>Community and Social Harmony:</h3><br/>
<div className='note1'>
Pitrapaksha is a time when families come together to collectively remember and honor their ancestors.
 The communal nature of the festival fosters a sense of unity, shared responsibility, and emotional support within the community.
  The belief in honoring one's ancestors transcends social and economic boundaries, creating a sense of equality and common purpose.
  </div>
<br/>

<br/>
Pitrapaksha in Bihar is a festival that blends spiritual devotion with familial bonds and cultural traditions.
 It serves as a poignant reminder of the importance of remembering and paying respect to those who came before us.
  As families come together to perform the rituals and share in the solemnity of the occasion, Pitrapaksha becomes a time for reflection, gratitude, and the continuation of a timeless tradition that connects generations.<br/>
    
    
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

export default pitrapaksha