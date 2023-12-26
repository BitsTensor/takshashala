import React from 'react';
import woodcraft1 from './woodcraft1.jpeg.jpg';
import woodcraft2 from './woodcraft2.jpeg.jpg';
import woodcraft3 from './woodcraft3.jpeg.jpg';
import photo1 from '../photo1.jpg';
 import photo4 from '../photo4.jpg';
 import photo2 from '../photo2.jpg';
 import photo3 from '../photo3.jpg';
 import photo5 from '../photo5.jpg';
 import photo6 from '../photo6.jpg';
 import photo7 from '../photo7.jpg';
 import logo2 from '../logo2.jpg';
 import { Link } from 'react-router-dom';
const woodCraft = () => {
  return (
    <div className='wood'>
      <div className='woodcrafts'>
     <h1 className='heading'><u>WoodCraft</u></h1> 
   <h3> Bihar Woodcraft: A Time-Honored Tradition</h3><br/>
<img className="woodcraft2" src={woodcraft1} alt=''/>
<div className='note1'>
Bihar, a state in eastern India, boasts a rich cultural heritage that encompasses various forms of traditional art and craft.
 Among the many artistic expressions that have flourished in the region, Bihar Woodcraft stands out as a testament to the skill, creativity, and cultural identity of the people. 
 Rooted in ancient traditions and deeply connected to the socio-economic fabric of the state, Bihar Woodcraft has earned recognition for its intricate designs, craftsmanship, and timeless beauty.
 </div>
<h3>Historical Background:</h3><br/>

The history of Bihar Woodcraft dates back centuries, finding its roots in the rich artistic traditions of the Mauryan and Gupta empires.
 The art form gained prominence during the reign of the Mauryan emperor Ashoka, who was a patron of the arts and played a significant role in promoting various crafts in the region.
  Over the years, Bihar Woodcraft evolved, drawing inspiration from religious and cultural influences, including Buddhism and Hinduism.<br/>
  <img className="woodcraft3" src={woodcraft2} alt=''/>
  <div className='note1'>
<h3>Materials and Techniques:</h3><br/>

Bihar Woodcraft primarily involves the use of locally available wood, such as sheesham (rosewood), mango wood, and sal wood.
 Artisans employ a variety of techniques, including carving, engraving, and lacquering, to transform raw wood into exquisite pieces of art. 
 The carving is often intricate, depicting scenes from mythology, religious symbols, and floral patterns. 
 The skillful use of chisels, gouges, and other carving tools allows artisans to create detailed and visually appealing designs.<br/>
 </div>
<h3>Themes and Motifs:</h3><br/>

The themes and motifs in Bihar Woodcraft are diverse, reflecting the cultural and religious diversity of the region.
 Many pieces feature scenes from Hindu mythology, such as depictions of gods and goddesses, epic tales like the Ramayana and Mahabharata, and images of sacred animals.
  Additionally, motifs inspired by nature, such as flowers, leaves, and birds, are commonly found in Bihar Woodcraft, adding a touch of natural beauty to the art form.<br/>

<h3>Utility and Cultural Significance:</h3><br/>

Bihar Woodcraft is not merely decorative; many items crafted in this tradition serve practical purposes in daily life.
 Household items such as furniture, decorative panels, doors, and utensils are often adorned with intricate woodcarvings, blending functionality with artistic expression. 
 These items not only enhance the aesthetic appeal of homes but also reflect the cultural identity and values of the people of Bihar.<br/>
 <img className="woodcraft4" src={woodcraft3} alt=''/>
<h3>Challenges and Preservation:</h3><br/>

<div className='note1'>
While Bihar Woodcraft has stood the test of time, it faces contemporary challenges such as competition from mass-produced items and changing consumer preferences.
 Artisans are also grappling with the scarcity of skilled craftsmen and the need for modern marketing strategies to reach a wider audience. 
 Efforts are being made by governmental and non-governmental organizations to preserve and promote Bihar Woodcraft through training programs, exhibitions, and market linkages.<br/>
 </div>
<h3>Conclusion:</h3><br/>

Bihar Woodcraft is a treasure trove of artistic expression that reflects the cultural vibrancy and rich heritage of the state.
 The intricate designs, skilled craftsmanship, and cultural significance of these wooden masterpieces make them a valuable contribution to India's artistic landscape.
  As efforts continue to preserve and promote this traditional art form, Bihar Woodcraft is likely to endure as a symbol of the state's enduring creativity and craftsmanship.<br/>







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

export default woodCraft