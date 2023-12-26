import React from 'react';
import photo1 from '../photo1.jpg';
  import photo4 from '../photo4.jpg';
  import photo2 from '../photo2.jpg';
  import photo3 from '../photo3.jpg';
  import photo5 from '../photo5.jpg';
  import photo6 from '../photo6.jpg';
  import photo7 from '../photo7.jpg';
import logo3 from '../logo3.jpg';
  import { Link } from 'react-router-dom';
  import dutchBuilding1 from './dutch1.jpg';
function dutchBuilding() {
  return (
    
      
    <div className='building'>
         <img className='logobox3' src={logo3} alt=''/>

        <div className='dutchbuilding'>
            <h1 className='heading2'><u>Dutch Building</u></h1><br/>
    <img className='dutchbuilding2' src={dutchBuilding1} alt=''/>
   
<div className='note1'>
   
Many palaces were built during the Darbhanga Raj period and Darbhanga House in Patna is one of them.
 This marvelous piece of architecture, situated on the banks of the river Ganges, was built in the year 1901.
  British architect Charles Munt designed this palace, and he was the same architect who designed the Anandbagh Palace in Darbhanga.

 
<br/>
The main feature of Darbhanga House is the Devi Kali temple which was built in between two blocks. 
At that time only the people of the royal family were allowed to enter this temple but today thousands of devotees come to this temple with reverence.
</div> The kings of Darbhanga were also known for promoting education. In the year 1955, the Darbhanga Palace in Patna was donated by the royal family to Patna University.
  Presently, it is a part of Patna University which offers postgraduate courses. 
Darbhanga House has always been one of the favorite places for tourists
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

export default dutchBuilding