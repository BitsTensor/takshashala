import React from 'react'
import photo1 from '../photo1.jpg';
 import photo4 from '../photo4.jpg';
 import photo2 from '../photo2.jpg';
 import photo3 from '../photo3.jpg';
 import photo5 from '../photo5.jpg';
 import photo6 from '../photo6.jpg';
 import photo7 from '../photo7.jpg';
 import RuinsOfVikramshila1 from './ruinsofvikramshila1.jpg';
 import logo3 from '../logo3.jpg';
 import { Link } from 'react-router-dom';

const ruinsOfVikramshila = () => {
  return (
    < div className='ruins'>
         <img className='logobox3' src={logo3} alt=''/>
 <div className='ruinsofvikramshila'>
            <h1 className='heading2'><u> Ruins of Vikramshila </u></h1><br/>
    <div className='note1'>

    Situated at Antichak in Kahalgaon sub-division, 38 KM from Bhagalpur,    <img className='ruinsofvikramshila2' src={RuinsOfVikramshila1} alt=''/>
     ancient Vikramshila University was famous as a Centre of learning during the Pala dynasty. 
    The university was established by the King Dharmpala. <br/>
<br/>
Two things impressed Dharmpala and motivated him to establish the university;
 first, the rocky hillock anchored around the confluence of the Kosi and Ganga rivers at Bateshwar Sthan 
 was not only a scenic attraction but also a popular Tantric site.
 Second, the Ganga here was Uttar Vahini (flowing northwards) and as such, the place was a pilgrim cente
 r which drew large crowds during Varsavardhana.
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

export default ruinsOfVikramshila

   
 




    
   
   
  

 