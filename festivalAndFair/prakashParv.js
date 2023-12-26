import React from 'react';
import photo1 from '../photo1.jpg';
  import photo4 from '../photo4.jpg';
  import photo2 from '../photo2.jpg';
  import photo3 from '../photo3.jpg';
  import photo5 from '../photo5.jpg';
  import photo6 from '../photo6.jpg';
  import photo7 from '../photo7.jpg';
import logo3 from '../logo2.jpg';
  import { Link } from 'react-router-dom';
import '../other.css'
import prakashparv2 from './prakashparv2.jpeg.jpg';
const prakashParv = () => {
  return (
    <div className='prakash'>
         <img className='logobox3' src={logo3} alt=''/>

        <div className='prakashprav'>
        <h1 className='heading'><u>Prakash Parv</u></h1>
    <img className="prakashparv3" src={prakashparv2} alt=''/>
    <div className='note1'>
<br/>
   Prakash Parv is celebrated on the auspicious occasion of Guru Gobind Singh Ji Maharaj Jayanti.
   The day is observed in honor and remembrance of the great warrior, poet, philosopher, and spiritual master.
   On this day, Sikhs all over the world send greetings to one another and vow to follow the path and teachings of Guruji. 
 <br/>
Gurudwaras across India and the world are lit up with beautiful lights and decorations.
 In addition to this, a 'Langar' is organized in every gurudwara,
  and Sikhs perform community service as well.
   In some places, the 'Nagar Prabhat Pheri' is also organized wherein Sikhs join in with great fervor and enthusiasm. 

 
During Prakash Parv, Ardas is done, and prayers are offered in the Gurdwaras.
 Special bhajan-kirtan is also performed on this occasion.
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

export default prakashParv