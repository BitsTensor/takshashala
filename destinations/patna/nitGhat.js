import React from 'react';
// import photo1 from '../photo1.jpg';
//   import photo4 from '../photo4.jpg';
//   import photo2 from '../photo2.jpg';
//   import photo3 from '../photo3.jpg';
//   import photo5 from '../photo5.jpg';
//   import photo6 from '../photo6.jpg';
//   import photo7 from '../photo7.jpg';
  import nitGhat1 from './nit2.jpg';
  import nitGhat2 from './nit3.jpg'
  import logo3 from '../logo3.jpg';
  import { Link } from 'react-router-dom';
const nitGhat = () => {
  return (
    <div>nitGhat
          <img className='nit2' src={nitGhat1} alt=''/>
          <img className='nit2' src={nitGhat2} alt=''/>

         {/* <img className='photo' src={photo1} alt=''/>
    <img className='photo' src={photo4} alt=''/>
    <img className='photo' src={photo2} alt=''/>
    <img className='photo' src={photo5} alt=''/>
    <img className='photo' src={photo6} alt=''/>
    <img className='photo' src={photo3} alt=''/>
    <img className='photo' src={photo7} alt=''/>  */}
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

export default nitGhat