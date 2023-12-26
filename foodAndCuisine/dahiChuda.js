import React from 'react';
import '../other.css'
import dahiChuda1 from './dahichura1.jpeg.jpg';
import dahichuda2 from './dahichura2.jpeg.jpg';
import dahichuda3 from './dahichura3.jpeg.jpg';
import photo1 from '../photo1.jpg';
import photo4 from '../photo4.jpg';
import photo2 from '../photo2.jpg';
import photo3 from '../photo3.jpg';
import photo5 from '../photo5.jpg';
import photo6 from '../photo6.jpg';
import photo7 from '../photo7.jpg';
import logo3 from '../logo2.jpg';
  import { Link } from 'react-router-dom';
const dahiChuda = () => {
  return (
    <div className='chuda'>
       <img className='logobox3' src={logo3} alt=''/>

    <div className='dahi'>
      <h1 className='heading'>Dahi Chuda</h1>
      <img className='dahichuda1' src={dahiChuda1} alt=''/>
      <div className='note1'>
     <h3>The Culinary Delight of Bihar: Dahi Chura</h3><br/>
  

Bihar, a state in eastern India, is not only known for its rich cultural heritage and historical significance but also for its diverse and delectable cuisine.
One of the most famous traditional dishes that has stood the test of time and continues to be a staple in Bihari households is "Dahi Chura".
This simple yet flavorful dish holds a special place in the hearts and taste buds of the people of Bihar, reflecting the region's agricultural abundance and cultural vibrancy.<br/>
</div>
<h3>Cultural Significance:</h3><br/>

Dahi Chura is not just a culinary delight; it holds cultural significance, especially during the festival of Makar Sankranti.
 Makar Sankranti, celebrated in January, marks the transition of the sun into the zodiac sign of Capricorn.
  On this auspicious day, people in Bihar traditionally consume Dahi Chura as part of a festive meal.
  It is believed to bring prosperity and good fortune, and the dish is often offered to deities during prayers.<br/>
  
  <img className='dahichuda2' src={dahichuda2} alt=''/>
  <div className='note1'><h3>Nutritional Value:</h3><br/>

Apart from its cultural significance, Dahi Chura is also appreciated for its nutritional value. 
Flattened rice is a good source of carbohydrates and provides energy, while curd contributes to the intake of essential proteins and probiotics.
 The addition of fruits and nuts enhances the nutritional profile, making it a wholesome and satisfying meal.<br/>
{/* <img className='dahichuda2' src={dahichuda2} alt=''/> */}
</div>
<h3>Regional Variations:</h3><br/>

While the basic recipe remains the same, there are regional variations of Dahi Chura across Bihar.
 Different communities and households may have their own unique twists to the dish, incorporating local ingredients and flavors. 
 This diversity adds to the charm of Dahi Chura, making it a versatile dish that can be adapted to suit various preferences.<br/>
<img className='dahichuda3' src={dahichuda3} alt=''/>
<div className='note1'><h3>Conclusion:</h3><br/>

Dahi Chura stands as a symbol of Bihar's culinary heritage, blending simplicity with cultural significance.
 Its unique combination of curd and flattened rice, enriched with additional ingredients, makes it a flavorful and nutritious dish. 
 Beyond its role as a delicious meal, Dahi Chura embodies the spirit of tradition and festivity, bringing people together to celebrate the rich cultural tapestry of Bihar. 
 Whether enjoyed during a festive occasion or as a regular part of daily meals, Dahi Chura continues to be a beloved and timeless dish in the heartland of Bihar.<br/>
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
    </div>
  )
}

export default dahiChuda