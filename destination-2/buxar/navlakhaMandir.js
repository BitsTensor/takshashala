import React from 'react'
import photo1 from '../photo1.jpg';
  import photo4 from '../photo4.jpg';
  import photo2 from '../photo2.jpg';
  import photo3 from '../photo3.jpg';
  import photo5 from '../photo5.jpg';
  import photo6 from '../photo6.jpg';
  import photo7 from '../photo7.jpg';
import logo3 from '../logo3.jpg';
  import { Link } from 'react-router-dom';
  import navlakhaMandir1 from './navlakhamandir1.jpg';
const navlakhaMandir = () => {
  return (
    <div className='nlmandir'>
          <img className='logobox3' src={logo3} alt=''/>
        <div className='navlakhmandir'>
            <h1 className='heading2'><u>Navlakha Mandir</u></h1>
   
      <h3>Navlakha Mandir in Buxar: A Architectural Marvel and Spiritual Oasis</h3><br/>
      <img className='navlakha2' src={navlakhaMandir1} alt=''/>
      <div className='note1'>
Nestled in the heart of Buxar, Bihar, the Navlakha Mandir stands as a testament to architectural splendor and spiritual sanctity.
 This ancient temple is dedicated to the Hindu deity Lord Vishnu and is renowned for its historical significance and intricate design.<br/>

The term "Navlakha" translates to "nine lakh," and the temple is believed to have been constructed with a budget of nine lakh rupees, a considerable sum during its era.
 Built on the banks of the holy Ganges River, the temple's location enhances its spiritual ambiance, offering devotees a tranquil space for prayer and contemplation.
</div> <br/>
Navlakha Mandir showcases impressive architectural elements, with its towering spires and intricately carved pillars.
 The temple's sanctum sanctorum enshrines a deity of Lord Vishnu, attracting devotees who seek blessings and solace. 
 The serene surroundings and the rhythmic flow of the Ganges create an atmosphere conducive to spiritual introspection.
 <br/>
The temple holds special significance during festivals and religious occasions when it becomes a hub of cultural and religious activities.
 Pilgrims and tourists alike visit Navlakha Mandir to marvel at its architectural grandeur, experience the divine vibrations, and immerse themselves in the cultural heritage of Buxar.
 <br/>
As a revered landmark, Navlakha Mandir stands not only as a place of worship but also as a living testament to the rich history and cultural legacy of Bihar.
 Its enduring allure beckons those in search of both architectural marvels and spiritual rejuvenation.
 <br/>        
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
        </footer></div>
  )
}

export default navlakhaMandir