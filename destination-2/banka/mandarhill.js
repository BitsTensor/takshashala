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

import mandarhillbanka1 from './mandarhillbanka1.jpeg.jpg'
const mandarhill = () => {
  return (
    < div className='mandar'>
         <img className='logobox3' src={logo3} alt=''/>

    <div className='mandarhill3'>
      <h1 className='heading2'><u>Mandar Hills</u></h1>
    <img className='mandar2' src={mandarhillbanka1} alt=''/>
<h3>Mandar Hills: A Sacred Beacon in the Heart of Bihar</h3> 



Nestled in the serene landscape of Banka district in Bihar, Mandar Hills stands as a sacred and historical landmark that weaves together spirituality, mythology, and natural beauty. Revered by both locals and pilgrims alike, Mandar Hills holds a special place in the cultural and religious tapestry of Bihar.
<div className='note1'>
<h3>Geography and Landscape:</h3>

Mandar Hills, also known as Mandar Parvat or Mandar Giri, is situated near the bank of the Ganges River in Banka district. The hills rise majestically, providing a picturesque backdrop to the surrounding plains. The verdant greenery and the calm ambiance contribute to the hills' allure, making them not only a religious site but also a place of tranquility and natural beauty.
</div>
<h3>Mythological Significance:</h3>

The significance of Mandar Hills is deeply rooted in Hindu mythology, specifically in the sacred texts of the Puranas. According to legend, during the churning of the ocean (Samudra Manthan), a celestial mountain known as Mandar Parvat was used as a churning rod. As the gods and demons sought to extract the nectar of immortality (amrita) from the ocean, Lord Vishnu took the form of the cosmic tortoise (Kurma Avatar) and supported the mountain on his back.

The association with this mythological event has endowed Mandar Hills with divine importance, making it a revered site for devotees and a destination for pilgrimage.

<h3>Historical Significance:</h3>

Beyond its mythological roots, Mandar Hills also have historical significance. The region has witnessed the rise and fall of various kingdoms, and the hills have served as a silent witness to the passage of time. The remnants of ancient temples and structures atop the hills hint at the historical importance of this sacred site.

<h3>Religious Practices and Pilgrimage:</h3>

Mandar Hills attract pilgrims and devotees throughout the year, but the most significant pilgrimage occurs during the month of Kartik (October-November) when the Kartik Purnima Mela is celebrated. Thousands of devotees undertake the parikrama (circumambulation) of the hills, walking the 50 km path that encircles Mandar Parvat.

Atop the hills, the Mandareswar Mahadev Temple dedicated to Lord Shiva is a major attraction. The Shiva Lingam here is believed to have manifested naturally, adding to the sanctity of the site. Pilgrims also offer water, milk, and flowers to the sacred tree known as Akshayavat, believed to be an eternal and indestructible banyan tree.

<h3>Natural Attractions:</h3>

Apart from its religious significance, Mandar Hills also offer scenic beauty and tranquility. The lush greenery, panoramic views of the surrounding landscape, and the gentle breeze make it an ideal place for introspection and meditation.

<h3>Preservation and Tourism:</h3>

Efforts have been made to preserve the natural and cultural heritage of Mandar Hills while promoting tourism in a sustainable manner. The local administration and religious authorities work together to maintain the cleanliness of the pilgrimage routes and ensure the safety and comfort of the visitors.



Mandar Hills, with its blend of mythology, history, and natural beauty, stands as a symbol of the spiritual and cultural richness of Bihar. As a sacred pilgrimage site and a haven for those seeking solace amidst nature, Mandar Hills continue to attract people from diverse backgrounds, fostering a sense of unity and reverence for the divine. The hills remain an enduring beacon, inviting pilgrims and nature enthusiasts to experience the unique synthesis of spirituality and serenity that defines this sacred destination in the heart of Bihar.
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

export default mandarhill