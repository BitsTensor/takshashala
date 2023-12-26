import React from 'react';
import sonepurmela1 from './sonepurmela1.jpeg.jpg';
import sonepurmela2 from './sonepurmela2.jpeg.jpg';
import sonepurmela3 from './sonepurmela3.jpg';
import photo1 from '../photo1.jpg';
import photo4 from '../photo4.jpg';
import photo2 from '../photo2.jpg';
import photo3 from '../photo3.jpg';
import photo5 from '../photo5.jpg';
import photo6 from '../photo6.jpg';
import photo7 from '../photo7.jpg';
import logo3 from '../logo2.jpg';
  import { Link } from 'react-router-dom';

const sonepurMela = () => {
  return (
    <div className='mela'>
       <img className='logobox3' src={logo3} alt=''/>

      <div className='sonePurMela'>
    <h1 className='heading'><u>SonepurMela</u></h1>
    <img className="sonepurmela2" src={sonepurmela1} alt=''/>
    <img className="sonepurmela3" src={sonepurmela3} alt=''/>
    <img className="sonepurmela4" src={sonepurmela2} alt=''/>
    <h3 >Sonepur Mela: Bihar's Magnificent Cattle Fair</h3><br/>
<div className='note1'>

The Sonepur Mela, also known as the Harihar Kshetra Mela, stands as one of the largest and most celebrated fairs in Bihar, encapsulating the essence of the state's vibrant cultural heritage.
 Held annually, this grand event draws people from far and wide, offering a kaleidoscope of experiences, from the lively market atmosphere to the colorful festivities that make the Sonepur Mela a unique and iconic celebration.<br/>
 </div>
<h3>Historical Roots:</h3>

Sonepur Mela has a rich historical legacy that dates back over a thousand years.
 Legend has it that the fair traces its origins to ancient times when Emperor Ashoka inaugurated it as a cattle and horse trading event.
  Over the centuries, the fair has evolved into a comprehensive cultural and commercial extravaganza, encompassing not only the trade of animals but also a myriad of arts, crafts, and traditional performances.<br/>

<h3>Duration and Venue:</h3>

The Sonepur Mela usually takes place in the month of November and lasts for several weeks, culminating on Kartik Purnima, the full moon night. 
The fair is held at the confluence of the sacred rivers Ganges and Gandak, near the town of Sonepur, creating a picturesque setting that adds to the allure of the event.<br/>

<h3>Cattle Trading and Animal Fair:</h3>
<div className='note1'>
One of the most distinctive features of the Sonepur Mela is its reputation as the largest cattle fair in Asia. 
The fairgrounds witness a vast array of animals, including elephants, horses, camels, cows, and various other domestic and exotic species.
 The traditional practice of trading elephants, often adorned with</div> colorful accessories, is a major attraction that draws animal enthusiasts and traders alike.<br/>

Apart from the livestock trade, the fair also hosts various competitions showcasing the strength and agility of animals, adding an element of excitement and entertainment to the event.

<h3>Commercial Hub and Handicrafts:</h3>

The Sonepur Mela transforms the otherwise serene landscape into a bustling market.
 The fairgrounds are dotted with countless stalls and makeshift shops offering a diverse range of products, including handicrafts, textiles, jewelry, and traditional artifacts. 
 The fair serves as a platform for local artisans to showcase their skills and for traders to engage in vibrant commercial activities.<br/>

<h3>Cultural Performances and Entertainment:</h3>

Sonepur Mela is not just about commerce; it's a celebration of culture and entertainment.
 Traditional folk performances, including music, dance, and theater, create a lively and vibrant ambiance.
  Visitors can witness performances by local artists, showcasing the rich cultural tapestry of Bihar. 
  The melodic tunes of folk music, the energetic beats of traditional dance forms, and the vibrant colors of cultural displays contribute to the festive atmosphere.<br/>

<h3>Religious Significance:</h3>
<div className='note1'>
The fair has a spiritual dimension as well, with pilgrims taking a dip in the holy rivers during Kartik Purnima, believing it to be an auspicious act that cleanses them of sins.
 The sacredness of the location adds a profound spiritual ambiance to the Sonepur Mela, making it a unique blend of cultural, commercial, and religious experiences.<br/>
 </div>
<h3>Preservation and Modernization:</h3>
<br/>

In recent years, efforts have been made to preserve the traditional aspects of the Sonepur Mela while incorporating modern amenities and facilities. 
The fair continues to attract a diverse audience, from rural communities to international tourists, making it a melting pot of cultures and experiences.<br/>



The Sonepur Mela stands as a living testament to Bihar's cultural vibrancy and historical richness. 
From its origins as a grand trading event to its contemporary avatar as a multifaceted cultural carnival, the Sonepur Mela remains a symbol of the state's resilience and adaptability.
 As it continues to evolve with the times, the Sonepur Mela retains its status as a must-visit destination for those seeking an authentic and immersive experience of Bihar's diverse traditions.
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

export default sonepurMela