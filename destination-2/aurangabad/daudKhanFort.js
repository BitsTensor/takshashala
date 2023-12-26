import React from 'react'
import DaudKhanFort3 from './daudkhanfort.jpg'
import photo1 from '../photo1.jpg';
 import photo4 from '../photo4.jpg';
 import photo2 from '../photo2.jpg';
 import photo3 from '../photo3.jpg';
 import photo5 from '../photo5.jpg';
 import photo6 from '../photo6.jpg';
 import photo7 from '../photo7.jpg';
 import { Link } from 'react-router-dom';
 import logo2 from '../logo3.jpg';
const daudKhanFort = () => {
  return (
    <div className='daudkhanplace'>
      <img className='logobox3' src={logo2} alt=''/>
    <div className='daudkhanfort'>
        <h1 className='heading2'><u>DuadKhan </u></h1><br/>
    <img className='dhuakhanfort3' src={DaudKhanFort3} alt=''/>
    <div className='note1'>
 This fort is situated at Daudnagar, on eastern bank of the river Sone.
 It was founded by Daud khan, governor of Bihar under the 17th Century Mughal emperor Aurangzeb.<br/>
Governor Daud is said to have stopped and taken rest at the place on his way back from a conquest, and founded the town named after him. Later, Aurangazeb granted Daudnagar to him.
 There are an old mosque and ‘sarais’, built by Daud Khan as well his grandson Ahmed Khan in the Town.
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

export default daudKhanFort