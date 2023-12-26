import React from 'react';
import { Link } from 'react-router-dom';
import photo1 from './photo1.jpg';
import photo4 from './photo4.jpg';
 import photo2 from './photo2.jpg';
 import photo3 from './photo3.jpg';
 import photo5 from './photo5.jpg';
 import photo6 from './photo6.jpg';
 import photo7 from './photo7.jpg';
 import logo2 from './logo2.jpg';
const artsAndCultures = () => {
  return (
    <div className="art&culture">
      <section className="artandcraft">
      <h4><u>Arts & Crafts</u></h4>
          <div className="craftsection">
          <Link className="art_item" to="/madhubani">Madhubani</Link><br/>
          <Link className="art_item" to="/metalcraft">MetalCraft</Link><br/>
          <Link className="art_item" to="/stonecraft">StoneCraft</Link><br/>
          <Link className="art_item" to="/tikulipainting">TikuliPainting</Link><br/>
          <Link className="art_item" to="/woodcraft">woodCraft</Link>
           </div>
       </section>
       <section className="festivalandfair">
        <h4 id='z'><u>Festivals & Fairs</u></h4>
        <div className="fairsection">
          <Link className="festival" to="/chattpuja"> Chatt Puja</Link><br/>
          <Link className="festival" to="/mahaShivratri">MahaShiv Ratri</Link><br/>
          <Link className="festival" to="/pitrapaksha">Pitra Paksha</Link><br/>
          <Link className="festival" to="/prakashParv">Prakash Parv</Link><br/>
          <Link className="festival" to="/rajgirmahotsav">Rajgir Mahotsav</Link><br/>
          <Link className="festival" to="/sonepurmela">Sonepur Mela</Link>
        </div>
       </section>
       <section className="foodandcuisine">
        <h4 id='y'><u>Food & Cuisine</u></h4>
        <div className="foodsection">
        <Link className="food" to="/dahichuda">DahiChuda</Link><br/>
        <Link className="food" to="/jalebi">Jalebi</Link><br/>
        <Link className="food" to="/kasar">Kasar</Link><br/>
        <Link className="food" to="/launglata">Laung Lata</Link><br/>
        <Link className="food" to="/littichokha">Litti Chokha</Link><br/>
        <Link className="food" to="/makhanakheer">Makhana Kheer</Link><br/>
        <Link className="food" to="/tilkut">Tilkut</Link><br/>

        </div>
       </section>
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

export default artsAndCultures