import React from 'react'
import tutlawaterfall1 from './tutlawaterfall1.jpg'
import logo3 from '../logo3.jpg';
  import { Link } from 'react-router-dom';

const tutla = () => {
  return (
    <div className='tutlabhawani'>
      <h1 className='heading2'><u>Tutla Bhawani Waterfall</u></h1>
       <img className="tutla2" src={tutlawaterfall1} alt=''/>
       <div className='note1'>
       Tutla Dam, situated in the Rohtas district of Bihar, is a significant water reservoir contributing to the region's irrigation and water management. <br/>
       Built across the Son River, the dam plays a crucial role in harnessing water resources for agricultural purposes, thereby enhancing the overall productivity of the surrounding areas.<br/><br/>
        Completed in the mid-20th century, Tutla Dam stands as a testament to engineering prowess and strategic water infrastructure development.</div><br/>
         Its reservoir not only facilitates irrigation but also serves as a source of drinking water for nearby communities.<br/>
        The dam has become an integral part of the local landscape, providing essential support to the agricultural and economic activities in the Rohtas district.<br/>
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

export default tutla