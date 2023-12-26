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
import gurudwarapatna1 from './gurudwarapatna1.jpeg.jpg';
const gurudwara = () => {
  return (
    <div className='guru'>
         <img className='logobox3' src={logo3} alt=''/>

    <div className='gurudwara3'>
      <h1 className='heading2'><u>Takht Sri Harmandir Sahib</u></h1>
    <img className='gurudwara2' src={gurudwarapatna1} alt=''/>
    <div className='note1'>
    The Patna Gurudwara, also known as Takht Sri Harmandir Sahib, holds great historical and religious significance for the Sikh community. 
    Located in the capital city of Bihar, Patna, this Gurudwara marks the birthplace of Guru Gobind Singh, the tenth Sikh Guru.
     The complex includes the sacred Takht, a beautifully adorned prayer hall, and a sarovar (pond) named Gobind Ghat.<br/>
      Pilgrims and visitors find solace in the tranquil atmosphere and participate in religious ceremonies and prayers.
     The Gurudwara not only serves as a spiritual center but also plays a crucial role in promoting Sikh values, community service, and inclusivity.
     Its historical importance, coupled with its architectural beauty, makes the Patna Gurudwara a revered destination for Sikhs and a place of cultural significance for the broader community in Bihar.
     </div></div>
     
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

export default gurudwara