import React from 'react';
import video from'../assets/video.mp4';
import mahabodhi1 from './destinations/gaya/mahabodhi1.jpg';
import ashokanvaishali1 from './destinations/vaishali/ashokanvaishali1.jpg';
import tutlawaterfall1 from './destinations/rohtas/tutlawaterfall1.jpg';
import gurudwarapatna1 from './destinations/patna/gurudwarapatna1.jpeg.jpg';
import mandarhillbanka1 from './destinations/banka/mandarhillbanka1.jpeg.jpg';
import metabudhatemple1 from './destinations/gaya/metabodhatemple1.jpeg';
import littiChokha1 from './foodAndCuisine/littiChokha1.jpg';
import chhathpuja1 from './festivalAndFair/chhathpuja.jpeg.jpg';
import madhubani1 from './artAndCraft/madhubani1.jpeg.jpg';
import metalcraft3 from './artAndCraft/metalcraft3.jpeg.jpg';
import sonepurmela1 from './festivalAndFair/sonepurmela1.jpeg.jpg';
import stonecraft1 from './artAndCraft/stonecraft1.jpeg.jpg';
import photo1 from './photo1.jpg';
import photo4 from './photo4.jpg';
import photo2 from './photo2.jpg';
import photo3 from './photo3.jpg';
import photo5 from './photo5.jpg';
import photo6 from './photo6.jpg';
import photo7 from './photo7.jpg';
import logo2 from './logo2.jpg';
import { Link } from 'react-router-dom';


const homePage=()=> {


  return (
    <div className='home'>
      
      <video  className='video' autoPlay loop muted>
        <source src ={video} type='video/mp4'/>
      </video>
      <div className='content1'>
      <h1 className='text1'> WELCOME</h1>
      <h1 className='text2'>TO</h1>
      <h1 className='text3'>BIHAR</h1>
      </div>
      < div className='content2'>
      <h1 className='text4'>एक </h1>
      <h1 className='text5'>बिहार </h1>
      <h1 className='text4'>ऐसा भी......</h1>
      <h1 className='top'>Some Top Destinations</h1>
      <img  className='mahabodhi'   src={mahabodhi1} alt=''  />
      <div className='textover1'  >MahaBodhi Temple,Gaya</div>
      <img className="ashokan" src={ashokanvaishali1} alt=''/>
      <div className='textover2' >Ashokan Pillar,Gaya</div>
      <img className="tutla" src={tutlawaterfall1} alt=''/>
      <div className='textover3'>Tutla Bhawani Waterfall,Rohtas</div>
      <Link className="a" to="/mahabodhi">MahaBodhi Temple</Link>
      <Link className="b" to="/ashokan">Ashokan Pillar</Link><br/>
      <Link className="c" to="/tutla">Tutla Bhawani Waterfall</Link><br/>
      <img className='gurudwara' src={gurudwarapatna1} alt=''/>
      <div className='textover4'>Patna Sahib,Patna</div>
      <img className='mandarhill' src={mandarhillbanka1} alt=''/>
      <div className='textover5'>Mandar Hills,Banka</div>
      <img className='metabudha' src={metabudhatemple1} alt=''/>
      <div className='textover6'>Meta Budha Temple</div>
      <Link className='d' to="/gurudwara">Sri Hari Mandir Sahib Ji</Link>
      <Link className="e" to="/mandarhill">Mandar Hills</Link><br/>
      <Link className="f" to="/metabudha">MetaBudha Temple</Link><br/>
      <h1 className='top'>Flavors And Traditions Of Bihar</h1>
      
      <img className='chhathpuja' src={chhathpuja1} alt=''/> 
      <div className='textover7'>Chatt Puja</div>
      <img className='madhubani' src={madhubani1} alt=''/>
      <div className='textover8'>Madhubani Painting</div>
      <img className='littichokha' src={littiChokha1} alt=''/>
      <div className='textover9'>Litti Chokha</div>
      <Link className="g" to="/chhatpuja">Chatt Puja</Link><br/>
      <Link className="h" to="/madhubani">Madhubani Painting</Link><br/>
      <Link className="i" to="/littichokha">Litti Chokha</Link><br/>
      <img className='metalcraft'src={metalcraft3}alt=''/>
      <div className='textover10'>Metal Craft</div>
      <img className='sonepur'src={sonepurmela1}alt=''/>
      <div className='textover11'>Sonepur Mela</div>
      <img className='stonecraft'src={stonecraft1}alt=''/>
      <div className='textover12'>Stone Craft</div>
      <Link className="j" to="/metalcraft">Metal Craft</Link><br/>
      <Link className="k" to="/sonepurmela">Sonepur Mela</Link><br/>
      <Link className="l" to="/stonecraft">Stone Craft</Link><br/>
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
            <section className='customer'>
            <h5> Customer Support</h5>
            <a className='customer1' href="https://www.linkedin.com">Linkedln</a><br/>
            <a  className='customer1' href="https://www.facebook.com">Facebook</a><br/>
            <a className='customer1' href="https://www.gmail.com">Gmail</a><br/>
            <a className='customer1' href="https://www.instagram.com">instagram</a><br/><br/><br/><br/>
            <img className='logo2' src={logo2} alt=''/>
            </section>
            
            <p className='copy'>copyright@2023<br/>Essence Of Bihar<br/> All Right Reserved </p>
            
            <section className='downbox'>
              <div className='down'>
                Developed By Fantastic 4 Web
              </div>
            </section>
        </footer>
    
   
    </div>
  )
}

export default homePage
