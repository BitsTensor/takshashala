import React from 'react'
import biharmap1 from './biharmap.png';
import photo1 from './photo1.jpg';
import photo4 from './photo4.jpg';
import photo2 from './photo2.jpg';
import photo3 from './photo3.jpg';
import photo5 from './photo5.jpg';
import photo6 from './photo6.jpg';
import photo7 from './photo7.jpg';
import logo2 from './logo2.jpg';
import { Link } from 'react-router-dom';

const exploreBihar = () => {
  return (
    <div className='explore'>
      <div className='explorebihar'>
        <h1 className='heading'><u>Explore Bihar</u></h1>
     <h3> Bihar is famous for several things, </h3><br/>
<img className='biharmap' src={biharmap1} alt=''/>
<div className='note1'>
<b>Historical Significance:</b> Being the birthplace of Buddhism and Jainism, with ancient sites like Bodh Gaya and Nalanda.<br/>
<br/>
<b>Cultural Heritage:</b> Rich folk traditions, festivals like Chhath Puja, and cultural events like the Sonepur Mela.<br/>
<br/>

<b>Religious Sites:</b> Bodh Gaya, a UNESCO World Heritage site, is a major pilgrimage destination. Other religious sites include Rajgir and Vaishali.<br/>
</div><br/>

<b>Educational Legacy:</b> Home to the ancient Nalanda University, a center of learning in ancient India.<br/>
<br/>

<b>Cuisine:</b> Unique Bihari dishes like Litti Chokha, Sattu Paratha, and Thekua.
<br/>
<br/>

<b>Political Influence:</b> Bihar has produced influential political leaders who have played key roles in Indian politics.<br/>
<br/>

<b>Sonepur Mela:</b> One of Asia's largest cattle fairs, attracting traders and visitors for cultural displays and animal trading.<br/>
<br/>

<b>Natural Beauty:</b> Scenic landscapes, including the Ganges River flowing through the state.<br/>
<br/>

Bihar's diverse offerings make it a distinctive and historically significant state in India.<br/>
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
    <img className='logo1' src={logo2} alt=''/>
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

export default exploreBihar