import React from 'react';
import tilkut1 from './tilkut1.jpeg.jpg';
import tilkut2 from './tilkut2.jpeg';
// import photo1 from '../photo1.jpg';
// import photo4 from '../photo4.jpg';
// import photo2 from '../photo2.jpg';
// import photo3 from '../photo3.jpg';
// import photo5 from '../photo5.jpg';
// import photo6 from '../photo6.jpg';
// import photo7 from '../photo7.jpg';
import logo3 from '../logo2.jpg';
  import { Link } from 'react-router-dom';
const tilkut = () => {
  return (
    <div className='til'>
       <img className='logobox3' src={logo3} alt=''/>
    <div className='tilkut'>
   
        <h1 className='heading'><u>Tilkut</u></h1>
    <h3>Tilkut: Bihar's Culinary Jewel of Sesame Sweetness</h3><br/>
   
    <img className="tilkut2" src={tilkut1} alt=''/>
    <img className="tilkut3" src={tilkut2} alt=''/>
    <div className='note1'>
 Tilkut stands as a culinary jewel in Bihar's treasure trove of sweets.
 Beyond its delightful taste and texture, Tilkut symbolizes the spirit of community, tradition, and the joyous celebration of life.
  As one indulges in the sesame sweetness of Tilkut, they not only savor a traditional treat but also connect with the rich cultural heritage that defines the culinary landscape of Bihar.
   Tilkut is more than a sweet; it is a living tradition, a symbol of hospitality, and a testament to the enduring charm of Bihar's culinary craftsmanship.   
   </div> <br/>
<h3>Historical Roots:</h3><br/>
Tilkut's origins trace back through the annals of time, rooted in ancient traditions and rituals.
 Legend has it that Tilkut was offered as a winter treat during the auspicious festival of Makar Sankranti, symbolizing the transition from winter to spring.
  Over the years, this humble sweet evolved from a seasonal specialty to a year-round delight, becoming an integral part of Bihar's cultural and culinary landscape.
  <br/>
<h3>Ingredients and Preparation:</h3><br/>
Tilkut is a marriage of simple yet essential ingredients—sesame seeds, jaggery, and a touch of ghee (clarified butter).
 The preparation begins with roasting sesame seeds to enhance their nutty flavor.
  The golden-brown seeds are then combined with molten jaggery, creating a sticky yet pliable mixture.
  This amalgamation is skillfully shaped into round discs or squares and left to cool until it solidifies.<br/>

The addition of ghee imparts a subtle richness, balancing the nuttiness of sesame with the sweetness of jaggery. 
The result is a confection that encapsulates the essence of Tilkut, where each bite tells a story of tradition, simplicity, and the joy of indulgence.<br/>

<h3>Cultural Significance:</h3><br/>
<div className='note1'>
Tilkut's cultural significance is deeply embedded in Bihar's traditions. It is not merely a sweet; it is a symbol of warmth, sharing, and togetherness.
 The preparation of Tilkut often involves a communal effort, with families and communities coming together to craft this sweet delight during festivals, weddings, and special occasions.
 The act of sharing Tilkut fosters a sense of camaraderie, making it a true ambassador of Bihar's hospitality.
</div><br/>
<h3>Texture and Taste Harmony:</h3><br/>
What makes Tilkut truly exceptional is the harmonious marriage of textures and tastes.
 The crunchiness of sesame seeds blends seamlessly with the gooey sweetness of jaggery, creating a symphony of flavors that dance on the palate.
  The touch of ghee adds a layer of silkiness, enhancing the overall sensory experience and making Tilkut a truly irresistible treat.
<br/>

<h3>Conclusion:</h3><br/>
Tilkut stands as a culinary jewel in Bihar's treasure trove of sweets.
 Beyond its delightful taste and texture, Tilkut symbolizes the spirit of community, tradition, and the joyous celebration of life.
  As one indulges in the sesame sweetness of Tilkut, they not only savor a traditional treat but also connect with the rich cultural heritage that defines the culinary landscape of Bihar.
   Tilkut is more than a sweet; it is a living tradition, a symbol of hospitality, and a testament to the enduring charm of Bihar's culinary craftsmanship.    
   <br/>         
            
            
            </div>

    {/* <img className='photo' src={photo1} alt=''/>
    <img className='photo' src={photo4} alt=''/>
    <img className='photo' src={photo2} alt=''/>
    <img className='photo' src={photo5} alt=''/>
    <img className='photo' src={photo6} alt=''/>
    <img className='photo' src={photo3} alt=''/>
    <img className='photo' src={photo7} alt=''/> */}




    
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
export default tilkut