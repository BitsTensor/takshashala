import React from 'react';
import '../other.css'
import littiChokha1 from './littiChokha1.jpg'
import littichokha2 from './littichokha2.jpeg.jpg';
import littichokha3 from './littichokha3.png';
import photo1 from '../photo1.jpg';
import photo4 from '../photo4.jpg';
import photo2 from '../photo2.jpg';
import photo3 from '../photo3.jpg';
import photo5 from '../photo5.jpg';
import photo6 from '../photo6.jpg';
import photo7 from '../photo7.jpg';
import logo3 from '../logo2.jpg';
  import { Link } from 'react-router-dom';
const littiChokha = () => {
  return (
    <div className='chokha'>
       <img className='logobox3' src={logo3} alt=''/>

    <div className='litti'>
    <h1 className='heading' ><u>Litti Chokha</u></h1>
    <img className='littichokha2' src={littiChokha1} alt=''/>
      <div className='note1'>
      <h3>Litti Chokha: Bihar's Culinary Delight</h3><br/>

Bihar, a state in eastern India, boasts a rich cultural heritage, and its cuisine reflects the diversity and vibrancy of the region. One dish that stands out as a culinary masterpiece is "Litti Chokha".
 This traditional dish has not only become a symbol of Bihar's gastronomic identity but has also found admirers across the country.<br/>
      </div>
<h3>Litti: The Heart of the Dish</h3><br/>

Litti, the star of the show, is a round wheat flour ball stuffed with a mixture of roasted gram flour, spices, and ghee. These balls are then baked or grilled until they attain a golden-brown hue.
 The magic lies in the smoky flavor that permeates the litti during the cooking process, adding a distinct touch to its taste.<br/>

<h3>Chokha: The Perfect Companion</h3><br/>

Litti's perfect companion is Chokha, a side dish made from roasted and mashed vegetables. Traditionally, it includes roasted eggplant (baingan), tomatoes, and green chilies, seasoned with mustard oil, garlic, and various spices.
 The amalgamation of these ingredients results in a smoky, spicy, and flavorful chokha that complements the blandness of the litti.<br/>
<img className='littichokha3' src={littichokha2} alt=''/>
<div className='note1'><h3>Cultural Significance</h3><br/>

Litti Chokha is not just a dish; it's a cultural phenomenon in Bihar.
 It is deeply rooted in the state's history, tracing its origins to the rural heartland where farmers and laborers relished this wholesome meal after a day of hard work. 
 Over time, it has transcended socio-economic boundaries, becoming a staple in both rural households and urban restaurants.<br/>
</div>
<h3>Versatility and Variations</h3><br/>

One of the remarkable aspects of Litti Chokha is its versatility. While the basic ingredients remain consistent, variations abound.
 Some regions add sattu (roasted gram flour) to the chokha for an extra layer of texture, while others experiment with different stuffing ingredients for the litti.
  This adaptability has allowed the dish to evolve and captivate a diverse audience.<br/>

<h3>Beyond Bihar: Litti Chokha's National Appeal</h3><br/>

In recent years, Litti Chokha has transcended its regional boundaries, gaining popularity across India.
 Food enthusiasts and chefs have embraced this dish, incorporating it into their menus and adapting it to suit contemporary tastes.
  Its rise to fame on the national culinary stage is a testament to the timeless appeal of this rustic yet sophisticated dish.<br/>
  <img className='littichokha4' src={littichokha3} alt=''/>
<div className='note1'><h3>Conclusion</h3><br/>

In essence, Litti Chokha is more than just a meal; it's a cultural icon that has stood the test of time.
 Its simplicity, combined with a burst of flavors, has secured its place in the hearts and taste buds of people, making it a dish that resonates far beyond the borders of Bihar.
 As we savor the smokiness of the litti and relish the robustness of the chokha, we connect with the rich tapestry of Bihar's culinary heritage.
</div>
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

export default littiChokha