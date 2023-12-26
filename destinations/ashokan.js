import React from 'react'
import ashokanvaishali1 from './ashokanvaishali1.jpg';
import ashokanpillar3 from './ashokan3.jpeg';
import logo3 from './logo3.jpg';
  import { Link } from 'react-router-dom';
import photo4 from './photo4.jpg';
import photo2 from './photo2.jpg';
import photo3 from './photo3.jpg';
import photo5 from './photo5.jpg';
import photo6 from './photo6.jpg';
import photo7 from './photo7.jpg';

const ashokan = () => {
  return (
    < div className='ashokanpillar'>
      <h1 className='heading2'><u>Ashokan Pillar</u></h1>
       <img className="ashokan2" src={ashokanvaishali1} alt=''/>
       <div className='note1'>
     <h3>The Famous Ashokan Pillar of Vaishali : A Symbol of Enduring Legacy</h3>  

Vaishali, an ancient city in Bihar, holds within its boundaries a remarkable testament to India's rich history – the Famous Ashokan Pillar.<br/>
 Erected during the reign of the Mauryan Emperor Ashoka, this pillar stands as a silent sentinel, embodying the emperor's commitment to the spread of Buddhism and his efforts towards moral governance.</div><br/>

Constructed in the 3rd century BCE, the Ashokan Pillar in Vaishali is part of a series of pillars commissioned by Emperor Ashoka across the Indian subcontinent.<br/>
These pillars, often made of polished sandstone, served as edicts to communicate Ashoka's teachings and principles. <br/>
The Vaishali pillar, standing at an impressive height, reflects the typical Mauryan architectural style with its sturdy, monolithic structure.<br/>

One of the distinctive features of the Ashokan Pillar in Vaishali is its abacus, crowned with a magnificent lion capital.<br/>
<div className='note1'>
 The lion capital, now a national emblem of India, is a symbol of strength, courage, and the wheel of dharma – a key motif in Buddhism representing the path to enlightenment. 
 This iconic symbol is a powerful representation of Ashoka's commitment to the principles of non-violence, compassion, and moral righteousness.<br/>
 <img className='ashokan3'   src={ashokanpillar3} alt=''/>

The inscriptions on the pillar, written in Brahmi script, detail Ashoka's teachings and his emphasis on the practice of Dharma.  </div>
They serve as a historical treasure trove, providing insights into the governance and ethical ideals of the Mauryan Empire.
 These inscriptions not only convey the emperor's conversion to Buddhism but also emphasize religious tolerance and respect for all faiths.<br/>
<br/>
Beyond its historical and religious significance, the Famous Ashokan Pillar of Vaishali has become a revered pilgrimage site and a symbol of national pride.
 Pilgrims, historians, and tourists alike are drawn to its towering presence, reflecting upon the enduring legacy of one of India's greatest rulers. 
 The pillar has also played a pivotal role in promoting Vaishali as an important archaeological and cultural destination.<br/>

Preservation efforts over the years have ensured that this ancient relic stands proudly, offering a tangible connection to India's glorious past. 
<br/><br/>The Famous Ashokan Pillar of Vaishali not only serves as a symbol of Ashoka's profound impact on Indian society but also as a beacon, guiding present and future generations towards a deeper understanding of their cultural and spiritual heritage.
 In its silent existence, the pillar speaks volumes about the transformative power of moral governance and the timeless relevance of the principles it represents.<br/>
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

export default ashokan