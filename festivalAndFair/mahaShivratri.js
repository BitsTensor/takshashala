import React from 'react';
import '../other.css';
import mahaShivratri1 from './mahashivratri1.jpg';
import mahashivratri2 from './mahashivratri2.webp';
import photo1 from '../photo1.jpg';
import photo4 from '../photo4.jpg';
import photo2 from '../photo2.jpg';
import photo3 from '../photo3.jpg';
import photo5 from '../photo5.jpg';
import photo6 from '../photo6.jpg';
import photo7 from '../photo7.jpg';
import logo3 from '../logo2.jpg';
  import { Link } from 'react-router-dom';
const mahaShivratri = () => {
  return (
    <div className='maha'>
       <img className='logobox3' src={logo3} alt=''/>

    <div className='shivratri'>
      <img className="mahashivratri2" src={mahaShivratri1} alt='fgfgfgf'/>
      <img className="mahashivratri3" src={mahashivratri2} alt=''/>
     <h1 className='heading'> <u>Maha Shivratri</u></h1>
     <div className='note1'>
     <h3> Mahashivratri : A Divine Celebration of Lord Shiva</h3><br/>


Mahashivratri, one of the most significant and widely celebrated festivals in Bihar, holds immense spiritual and cultural importance.
 Observed with great reverence and devotion, Mahashivratri marks the night dedicated to Lord Shiva, the supreme deity of destruction and transformation in Hinduism.
  The festival, celebrated annually in the month of Phalgun (February or March), brings together people from diverse backgrounds, fostering a deep sense of spirituality and community.</div><br/>
  Mahashivratri in Bihar is not just a religious festival.It is a celebration of spirituality, culture, and community.
<h3>Religious Significance:</h3>
<br/>

Mahashivratri, often referred to as the "Great Night of Shiva," is believed to commemorate the marriage of Lord Shiva to Goddess Parvati.
 Devotees fast during the day, engaging in prayers and meditation, and break their fast at night after performing special rituals. 
 The Lingam, a symbol of Lord Shiva, is bathed with milk, honey, and water, signifying the purification of the soul.<br/>

<h3>Bihar's Unique Traditions:</h3>

In Bihar, Mahashivratri is celebrated with unique customs and rituals that add to the cultural richness of the festival.
 Devotees visit Shiva temples, offering Bilva leaves, milk, and other sacred items to the deity. 
 The air resonates with the chanting of Shiva mantras and the ringing of temple bells, creating an atmosphere of deep spiritual engagement.<br/>

<h3>Jagran and Bhajans:</h3><br/>

Throughout the night of Mahashivratri, many devotees participate in "jagrans" or night-long prayers, staying awake in devotion to Lord Shiva.
 The melodious tunes of devotional songs and bhajans echo through the temples, creating an ambiance of spiritual fervor.
  The night is marked by collective worship, fostering a sense of unity and shared spirituality among the community.<br/>
<div className='note1'>
<h3>Social Harmony and Unity:</h3><br/>

Mahashivratri transcends social and economic boundaries, bringing people together in a shared celebration of faith. 
The festival emphasizes the importance of inner transformation and spiritual growth, promoting values of compassion, forgiveness, and humility.
Regardless of caste, creed, or background, devotees unite in their devotion to Lord Shiva, fostering a sense of social harmony.<br/>
</div>
<h3>Cultural Extravaganza:</h3><br/>

Apart from its religious significance, Mahashivratri in Bihar is also marked by cultural events and fairs.
 Traditional dances, folk music performances, and processions add a festive touch to the celebrations. 
 The streets come alive with vibrant colors, and the aroma of traditional sweets and dishes fills the air, creating a festive atmosphere that extends beyond the temple walls.<br/>


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

export default mahaShivratri