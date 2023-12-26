import React from 'react';
import kasar1 from './kasar1.jpeg.jpg';
import kasar2 from './kasar2.jpg';
import photo1 from '../photo1.jpg';
import photo4 from '../photo4.jpg';
import photo2 from '../photo2.jpg';
import photo3 from '../photo3.jpg';
import photo5 from '../photo5.jpg';
import photo6 from '../photo6.jpg';
import photo7 from '../photo7.jpg';
import logo3 from '../logo2.jpg';
  import { Link } from 'react-router-dom';
const kasar = () => {
  return (
    <div className='kasarsweet'> 
       <img className='logobox3' src={logo3} alt=''/>

    <div className='kasar'>

    <img className="kasar2" src={kasar1} alt=''/>
    <img className="kasar3" src={kasar2} alt=''/>
     <h1 className='heading'><u>Kasar</u></h1>
  <h3>  Kasar Sweet of Bihar: A Culinary Delight</h3><br/>

<div className='note1'>
Bihar, a state in eastern India, is known for its rich cultural heritage, historical significance, and diverse cuisine.
 One of the gems of Bihari sweets is the "Kasar," a traditional delicacy that has stood the test of time, winning hearts with its unique flavors and impeccable texture.
  Kasar holds a special place in the hearts and palates of the people of Bihar, and its preparation and consumption are deeply rooted in the state's cultural fabric.
  </div><br/>
<h3>Historical Significance:</h3><br/>
The history of Kasar dates back to ancient times when traditional recipes were passed down from generation to generation.
 This sweet has not only survived but flourished, becoming an integral part of Bihari culinary traditions.
  The preparation of Kasar is often associated with festivals, celebrations, and special occasions, making it a symbol of joy and togetherness.<br/>

<h3>Ingredients and Preparation:</h3><br/>
Kasar is made using simple yet essential ingredients that contribute to its unique taste and texture.
 The primary components include wheat flour, ghee (clarified butter), sugar, and water.
  The process begins with the preparation of a dough using wheat flour and water. 
  The dough is then rolled into small balls and flattened into thin discs. 
  These discs are deep-fried until they attain a golden brown color, imparting a delightful crispiness.<br/>

Once fried, the discs are immersed in a sugar syrup, allowing them to soak in the sweetness and develop a luscious taste.
 Ghee is often added to enhance the richness of Kasar, giving it a distinct flavor that sets it apart from other sweets.
  The careful balance of ingredients and the meticulous preparation contribute to the irresistible appeal of this Bihari delight.
<br/>
<h3>Cultural Significance:</h3><br/>
Kasar holds cultural significance beyond its delectable taste. <div className='note1'>
It is often prepared during festivals like Diwali, Chhath Puja, and weddings, symbolizing prosperity and happiness.
 The act of making Kasar is a communal affair, with families and communities coming together to prepare this sweet, fostering a sense of unity and bonding.
 
During celebrations, Kasar is exchanged among friends and relatives as a gesture of goodwill and affection.
 Its presence on the dessert platter signifies the completion of a meal and adds a touch of sweetness to life's joyous moments.
 </div><br/>
<h3>The Unique Appeal of Kasar:</h3><br/>
What makes Kasar truly special is its ability to strike a perfect balance between sweetness and texture.
 The crispy exterior, courtesy of the deep-frying process, contrasts harmoniously with the soft and syrup-soaked interior.
  The use of ghee elevates the richness, creating a sensory experience that leaves a lasting impression.
<br/>
Kasar's versatility is another factor contributing to its popularity.
 While it is a quintessential part of festive celebrations, it is also enjoyed as a daily treat, proving its timeless appeal in the culinary landscape of Bihar.
<br/>
<h3>Conclusion:</h3><br/>
 Kasar stands as a testament to Bihar's culinary heritage, weaving together history, culture, and the joy of indulgence. 
 Its preparation and consumption have transcended generations, creating a bond that unites people during moments of celebration and everyday life. As one savors the distinct flavors and textures of Kasar, they not only indulge in a sweet treat but also partake in the rich cultural tapestry of Bihar.
            
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

export default kasar