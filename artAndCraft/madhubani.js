import React from 'react';
import logo2 from '../logo2.jpg';
import madhubani1 from './madhubani1.jpeg.jpg';
import madhubani2 from './madhubani2.jpeg.jpg';
import photo1 from '../photo1.jpg';
import photo4 from '../photo4.jpg';
import photo2 from '../photo2.jpg';
import photo3 from '../photo3.jpg';
import photo5 from '../photo5.jpg';
import photo6 from '../photo6.jpg';
import photo7 from '../photo7.jpg';
import { Link } from 'react-router-dom';
const madhubani = () => {
  return (
    <div className='madhu'>
      <div className='madhubanip'>
    <h1 className='heading'>Madhubani</h1>
    <img className="madhubani2" src={madhubani1} alt=''/>
    <img className="madhubani3" src={madhubani2} alt=''/>
   <h3> Madhubani Painting: The Vivid Tapestry of Bihar's Artistic Heritage</h3><br/>

<div className='note1'>
Bihar, a state in the eastern part of India, is not only rich in historical and cultural heritage but also boasts a vibrant artistic tradition. 
One of the most celebrated forms of art originating from Bihar is Madhubani painting, a unique and ancient style that has gained global recognition for its intricate designs and vibrant colors.
 Also known as Mithila art, Madhubani painting has its roots in the Mithila region and has been passed down through generations, making it an integral part of the state's cultural identity.<br/>
 </div>
<h3>Historical Background:</h3><br/>

Madhubani painting has a rich historical background, dating back to ancient times. 
Legend has it that King Janaka of Mithila commissioned artists to create elaborate paintings for his daughter Sita's wedding to Lord Rama, as described in the Hindu epic Ramayana.
 Over the centuries, Madhubani painting became a traditional art form practiced by the women of Mithila, initially on the walls of their homes during auspicious occasions and later on canvas and paper.<br/>

<h3>Distinctive Features:</h3><br/>

What sets Madhubani painting apart is its distinctive style characterized by intricate geometric patterns, bold lines, and vibrant colors.
 The themes of Madhubani paintings often revolve around mythological stories, religious symbols, and scenes from daily life.
  The artists use natural pigments, such as powdered rice, turmeric, indigo, and other plant-based dyes, to create a dazzling array of colors.
   The paintings are known for their symmetry and precision, with each element carefully placed to create a harmonious composition.<br/>

<h3>Styles and Themes:</h3><br/>

Madhubani painting is traditionally divided into different styles, each with its unique characteristics.
 The Bharni, Kachni, and Tantrik styles are some of the prominent ones, each representing a distinct approach to the art form.
  Bharni is characterized by the use of bright colors and intricate detailing, Kachni employs finer lines and delicate patterns, while Tantrik paintings often depict tantric symbols and rituals.
   The themes range from depictions of Hindu deities like Krishna and Rama to scenes from nature, weddings, and daily life.<br/>

<h3>Cultural Significance:</h3><br/>
<div className='note1'>
Madhubani painting goes beyond being just a visual art form; it holds deep cultural and social significance in the region.
 Traditionally, women in Mithila would paint the walls of their homes with these intricate designs during festivals, weddings, and other auspicious occasions.
  The paintings were not just an expression of creativity but also a form of storytelling, passing down myths, legends, and cultural narratives from one generation to the next.<br/>
  </div>
<h3>Contemporary Adaptations:</h3><br/>

In recent years, Madhubani painting has evolved and adapted to contemporary art forms.
 Artists have started using new mediums such as paper, cloth, and canvas, expanding the reach of this traditional art beyond the walls of homes. 
 The government and various organizations have also recognized the importance of Madhubani painting, promoting it as a means of economic empowerment for the women artists of the region.<br/>

<h3>Global Recognition:</h3><br/>

Madhubani painting has transcended its regional boundaries and gained international acclaim.
 The intricate designs and vibrant colors have captured the attention of art enthusiasts and collectors around the world.
  Numerous exhibitions and workshops showcasing Madhubani art have been organized globally, further solidifying its place in the pantheon of world art.<br/>

<h3>Conclusion:</h3><br/>

Madhubani painting stands as a testament to the rich cultural heritage of Bihar and India as a whole.
 Its evolution from a traditional art form on the walls of rural homes to a globally recognized style reflects the resilience and adaptability of India's artistic traditions.
  As Madhubani painting continues to captivate the world with its vibrant colors and intricate designs, it serves as a reminder of the rich tapestry of cultural diversity that defines the Indian subcontinent.<br/>
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

export default madhubani