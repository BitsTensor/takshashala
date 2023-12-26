import React from 'react'
import tikuli1 from './tikuli1.jpeg.jpg'
import tikuli2 from './tikuli2.jpeg.jpg';
import photo1 from '../photo1.jpg';
 import photo4 from '../photo4.jpg';
 import photo2 from '../photo2.jpg';
 import photo3 from '../photo3.jpg';
 import photo5 from '../photo5.jpg';
 import photo6 from '../photo6.jpg';
 import photo7 from '../photo7.jpg';
 import logo2 from '../logo2.jpg';
 import { Link } from 'react-router-dom';
const tikuliPainting = () => {
  return (
    <div className='tikuli'>
    <div className='tikulipainting'>
    <h1 className='heading'><u>Tikuli Painting</u></h1>
    <h3>Tikuli Painting of Bihar: A Glimpse into Miniature Marvels</h3><br/>
  <img className="tikuli2" src={tikuli1} alt=''/>
  <div className='note1'>
Bihar, a state in eastern India, boasts a rich and diverse cultural heritage that extends to various forms of traditional art.
 One such hidden gem is Tikuli painting, an ancient and intricate art form that has been practiced for centuries.
  Tikuli paintings, characterized by their miniature size and exquisite detailing, offer a unique glimpse into the artistic prowess of Bihar.<br/>
  </div>
<h3>Origin and Evolution:</h3><br/>

Tikuli painting, also known as "Bindi art" or "Nayee painting," has its roots in the Mithila region of Bihar, where it has been passed down through generations.
 The name "Tikuli" is derived from the Hindi word for "bindi," the decorative dot worn on the forehead, and the paintings often feature vibrant and delicate patterns reminiscent of these traditional adornments.<br/>

The art form has evolved over the years, blending traditional techniques with contemporary themes and styles.
 Originally, Tikuli paintings were created as a form of folk art on handmade paper, showcasing scenes from mythology, daily life, and nature.
  Today, Tikuli artists experiment with various surfaces, including cloth and even glass, expanding the possibilities of this ancient art.<br/>

<h3>Technique and Style:</h3><br/>

Tikuli paintings are characterized by their meticulous detailing and miniature scale.
 Artists use fine brushes made from animal hair to create intricate patterns, designs, and depictions. 
 The color palette is vibrant, featuring bold hues that add life to the tiny canvases.
  Traditional motifs often include images of gods, goddesses, animals, birds, and scenes from rural life, each narrating a story or conveying a message.<br/>

One distinguishing feature of Tikuli paintings is the use of black outlines that define the intricate details and provide a sense of structure to the compositions. 
The fine lines and delicate strokes contribute to the overall charm of Tikuli art, making it visually appealing and culturally significant.<br/>
<img className="tikuli3" src={tikuli2} alt=''/>
<h3>Cultural Significance:</h3><br/>
<div className='note1'>
Tikuli painting has deep cultural roots in Bihar, particularly in the Mithila region.
 Historically, women in the community would engage in Tikuli painting during festivals, weddings, and other auspicious occasions. 
 The paintings were not only decorative but also served as expressions of creativity and storytelling. 
 Over time, Tikuli art has gained recognition beyond the local community, attracting attention for its unique style and cultural significance.<br/>
 </div>
<h3>Revival and Recognition:</h3><br/>

In recent years, there has been a renewed interest in promoting and preserving Tikuli painting.
 Various government initiatives, art organizations, and individual artists have worked towards the revival and recognition of this traditional art form.
  Exhibitions, workshops, and collaborations with contemporary artists have helped Tikuli painting find its way into the mainstream art scene, both in India and internationally.<br/>

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

export default tikuliPainting