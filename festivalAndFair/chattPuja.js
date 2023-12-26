import React from 'react';
// import chhathpuja from './chhathpuja.jpeg.jpg';
// import chhathpuja1 from './chhathpuja1.jpeg';
import chhathpuja2 from './chhathpuja2.jpg';
import photo1 from '../photo1.jpg';
import photo4 from '../photo4.jpg';
import photo2 from '../photo2.jpg';
import photo3 from '../photo3.jpg';
import photo5 from '../photo5.jpg';
import photo6 from '../photo6.jpg';
import photo7 from '../photo7.jpg';
import logo3 from '../logo2.jpg';
  import { Link } from 'react-router-dom';

const chattPuja = () => {
  return (
    <div className='chhath'>
       <img className='logobox3' src={logo3} alt=''/>

      <div className='ChhathPuja'>
    <h1 className='heading'><u>Chhath Puja</u></h1>
     {/* <img className="chattpuja2" src={chhathpuja} alt=''/> */}
    {/* <img className="chattpuja3" src={chhathpuja1} alt=''/> */}
  
   <h3> Chhath Puja: Bihar's Spectacular Salute to the Sun </h3><br/>
   <img className="chhathpuja2" src={chhathpuja2} alt=''/> 

<div className='note1'>
Chhath Puja, a vibrant and deeply revered festival, holds a special place in the hearts of the people of Bihar, where it is celebrated with unparalleled fervor and devotion.
 This ancient festival, dedicated to the worship of the Sun God, is a unique cultural celebration that transcends religious boundaries and has become an integral part of Bihar's identity.<br/>
 </div>
<h3>Historical and Cultural Significance:</h3><br/>

Chhath Puja has ancient roots, tracing its origins back to the Vedic period.
 It is believed to have been initiated by Draupadi, the queen from the Indian epic Mahabharata, who observed a fast and worshipped the Sun God for the well-being of her husbands. 
 Over the centuries, Chhath Puja has evolved into a grand celebration, deeply ingrained in Bihar's cultural fabric.<br/>

Chhath Puja is not merely a religious observance; it is a cultural phenomenon that brings communities together, fostering a sense of unity and solidarity.
 The festival is marked by rituals, songs, and a unique connection between nature and spirituality, making it a one-of-a-kind celebration.<br/>

<h3>Duration and Rituals:</h3><br></br>

Chhath Puja is a four-day festival that typically falls in October or November, depending on the Hindu lunar calendar. 
The rituals associated with the festival are rigorous and demand unwavering devotion from the participants, often led by women.<br/>
<br/>
1. *Nahay Khay (Day 1):* The first day involves devotees taking a dip in a holy river or pond before preparing a pure vegetarian meal.<br/>
<br/>
2. *Lohanda and Kharna (Day 2):* On the second day, devotees observe a fast and prepare a special meal called "Thekua".
 This meal, consisting of wheat flour, jaggery, and ghee, is offered to the Sun God.<br/>
<br/>
3. *Sandhya Arghya (Day 3):* This day is marked by offerings made to the setting sun. 
Devotees gather by riverbanks or other water bodies, performing rituals and singing traditional Chhath songs.<br/>
<br/>
4. *Usha Arghya (Day 4):* On the final day, devotees offer prayers to the rising sun.
 The festival concludes with breaking the fast and sharing the Prasad (offerings) with family and friends.<br/>
<br/>
<h3>Sun Worship and Environmental Harmony:</h3><br/>

At the core of Chhath Puja is the reverence for the Sun God, symbolizing life, energy, and the divine force that sustains all living beings.
 The rituals performed during the festival emphasize purity and discipline, fostering a spiritual connection with nature.<br/>

Chhath Puja also underscores environmental harmony, as the rituals involve direct communion with natural elements such as water, the earth, and the sun.
 The act of standing in water during the offerings and fasting without water exemplifies the devotees' commitment to their faith and the environment.<br/>

<h3>Social Harmony and Community Bonding:</h3><br/>

Chhath Puja transcends caste, creed, and social hierarchies, bringing people from all walks of life together.
 Communities join hands to build temporary platforms near water bodies for the rituals, and the entire process involves a collective effort.
  The festival thus becomes a symbol of social harmony, fostering unity and solidarity among the people of Bihar.<br/>

<h3>Conclusion:</h3><br/>

Chhath Puja is not just a festival; it's a cultural extravaganza that showcases the deep-rooted spirituality and communal harmony of the people of Bihar.
 The rigorous rituals, the vibrant songs, and the unique connection with nature make Chhath Puja a spectacle that captivates not only the devotees but also those who witness its grandeur.
  As Bihar continues to celebrate this ancient festival with unwavering enthusiasm, Chhath Puja remains a shining example of cultural resilience and spiritual devotion.<br/>

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

export default chattPuja