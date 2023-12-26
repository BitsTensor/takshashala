import React from 'react';
import stonecraft1 from './stonecraft1.jpeg.jpg';
import stonecraft2 from './stonecraft2.jpeg.jpg';
import stonecraft3 from './stonecraft3.jpeg.jpg';
import photo1 from '../photo1.jpg';
 import photo4 from '../photo4.jpg';
 import photo2 from '../photo2.jpg';
 import photo3 from '../photo3.jpg';
 import photo5 from '../photo5.jpg';
 import photo6 from '../photo6.jpg';
 import photo7 from '../photo7.jpg';
 import logo2 from '../logo2.jpg';
 import { Link } from 'react-router-dom';
const stoneCraft = () => {
  return (
    <div className='stone'>
    <div className='stoneCrafts'>
      <h1 className='heading'><u>StoneCraft</u></h1>
    <img className="stonecraft2" src={stonecraft1} alt=''/>
    <img className="stonecraft3" src={stonecraft2} alt=''/>
    <img className="stonecraft4" src={stonecraft3} alt=''/>
    <h3> Stone Craft: Carving Timeless Tales in Stone</h3><br/>
<div className='note1'>
Bihar, a state renowned for its cultural diversity and historical significance, boasts a rich tradition of artistic craftsmanship.
 Among the various art forms that have flourished in the region, stone craft stands out as a testament to the skill and creativity of Bihar's artisans.
  The intricate carvings, meticulous detailing, and timeless beauty of Bihar's stone craft have earned it a distinguished place in India's cultural heritage.<br/>
  </div>
<h3>Historical Roots:</h3><br/>

The tradition of stone craft in Bihar dates back to ancient times, with roots embedded in the state's historical and architectural heritage.
 The Mauryan and Gupta empires, which had their centers in Bihar, significantly contributed to the development of stone craft.
  The elaborate carvings on pillars, stupas, and other architectural structures from this era reflect the expertise of the artisans in manipulating stone to create enduring works of art.<br/>

<h3>Materials and Techniques:</h3><br/>
<div className='note1'>
Bihar's stone craft primarily involves the use of various types of stone, such as granite, sandstone, and soapstone.
 The artisans employ a combination of traditional techniques and modern tools to carve intricate designs into the stone surfaces.
  Hand chisels, hammers, and other carving tools are used to shape the stone, with the process requiring a delicate balance of skill, precision, and creativity.<br/>
  </div>
<h3>Themes and Motifs:</h3><br/>

The themes of Bihar's stone craft often draw inspiration from religious and mythological narratives, showcasing the rich cultural tapestry of the region. 
Sculptures of Hindu deities, mythological scenes, and intricate patterns adorn the stone creations.
 The motifs range from delicate floral designs to depictions of gods and goddesses, each intricately carved to evoke a sense of beauty and spirituality.<br/>

<h3>Architectural Marvels:</h3><br/>

Bihar's stone craft has left an indelible mark on the architectural landscape of the state. 
Numerous temples, stupas, and other religious structures feature exquisite stone carvings that narrate stories from Hindu mythology. 
The Mahabodhi Temple in Bodh Gaya, a UNESCO World Heritage Site, is a prime example of Bihar's stone craft prowess, with its intricately carved panels and stupas.<br/>

<h3>Utilitarian and Decorative Objects:</h3><br/>

While Bihar's stone craft is often associated with monumental structures, it extends to the creation of utilitarian and decorative objects.
 Stone-carved utensils, figurines, and ornamental pieces showcase the versatility of the craft. 
 These items not only serve practical purposes but also contribute to the aesthetic beauty of homes and religious spaces.<br/>

<h3>Cultural Significance:</h3>
<div className='note1'>
Stone craft in Bihar is deeply intertwined with the cultural and religious practices of the region.
 The sculptures and carvings play a vital role in religious rituals and ceremonies, serving as objects of veneration.
  Additionally, the cultural significance of Bihar's stone craft extends beyond religious contexts, influencing the broader artistic and architectural traditions of the state.<br/>
  </div>
<h3>Preservation and Revival:</h3><br/>

In contemporary times, efforts have been made to preserve and revive Bihar's stone craft.
 Government initiatives, cultural organizations, and individual artisans are working together to ensure the continuation of traditional techniques and the exploration of innovative approaches.
  The promotion of stone craft as a form of sustainable livelihood for artisans has contributed to the revitalization of this ancient art form.<br/>

<h3>Conclusion:</h3><br/>

Bihar's stone craft stands as a testament to the enduring legacy of artistic craftsmanship in the region.
 The intricate carvings and timeless beauty of stone creations reflect the cultural richness and historical significance of Bihar.
  As the tradition continues to evolve and adapt to contemporary contexts, Bihar's stone craft remains a source of pride and inspiration, echoing the stories and traditions of the region through the enduring medium of stone.<br/>
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

export default stoneCraft