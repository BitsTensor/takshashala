import React from 'react';
import chandangrah1 from './destinations/aurangabad/chandangadh1.jpg'
 import daudkhanfort from './destinations/aurangabad/daudkhanfort.jpg'
  import  umatemple1 from './destinations/aurangabad/umatemple1.jpg'
import ajgaibinathtemple1 from './destinations/bhagalpur/ajgaibinathtemple1.jpg'
 import  ruinsofvikarmshila1 from './destinations/bhagalpur/ruinsofvikramshila1.jpg'
 import vikarmshilauniversity1 from './destinations/bhagalpur/vikramshilauniversity1.jpg'
 import aranyadevitemple1 from './destinations/bhojpur/aranyadevitemple1.jpg';
 import jagdishpurfort1 from './destinations/bhojpur/jagadishpurfort1.jpg';
 import stmaryschurch1 from './destinations/bhojpur/stmaryschruch1.jpg';
import DargahDariyaShahBaba1 from './destinations/buxar/dargahdariyashahbaba1.jpg';
 import NavlakhaMandir1 from './destinations/buxar/navlakhamandir1.jpg';
 import SriNathBabaMandir1   from  './destinations/buxar/srinathbabamandir1.jpg';
 import  AhilyaMandir1 from './destinations/darbhanga/ahilyamandir1.jpg';
 import AnandBaghPalace1 from './destinations/darbhanga/anandbaghpalace1.jpg';
 import  Kusheshwarsthan1 from './destinations/darbhanga/kusheshwarsthan1.jpg';
import  BhitiharwaAshram1 from './destinations/eastChamparan/bhitiharwaashram1.jpg';
import  KesariyaStupa1 from './destinations/eastChamparan/kesariyastupa1.jpg';
import someshwarNathDham1 from './destinations/eastChamparan/someshwarnathdham1.jpg'; 
import Mayasarowar1 from  './destinations/gaya/mayasarovar1.jpg'; 
import TibetanTemple1 from './destinations/gaya/tibetantemple1.jpg';
import VishnuPadTemple1 from './destinations/gaya/vishnupadtemple1.jpg';
import BarabarCaves1 from './destinations/jahanabad/barabarcaves1.jpg';

import NagarjunaHills1 from './destinations/jahanabad/nagarjunahills1.jpg';
import KarkatGarh1 from './destinations/kaimur/karkatgarh1.jpg';
import MundeshwariDeviTemple1 from './destinations/kaimur/mundeshwaridevitemple1.jpg';
import TelharKund1 from './destinations/kaimur/telharkund1.jpg';
import AshokaStupa1 from './destinations/munger/ashokastupa1.jpg';
import BiharSchoolOfYoga1 from './destinations/munger/biharschoolofyoga1.jpg';
import MungerFort1 from  './destinations/munger/mungerfort1.jpg';           
import BadiDargah1 from './destinations/nalanda/badidargah1.jpg';  

import GoraKatora1 from './destinations/nalanda/ghorakatora1.jpg'; 
import JainMandir1 from './destinations/nalanda/jainmandir1.jpg'; 
import GunawaJainMandir1 from './destinations/nawada/gunawajainmandir1.jpg'; 
import KokolatWaterfall1 from './destinations/nawada/kakolatwaterfall1.jpg'; 
import SarvodayaAshram1 from './destinations/nawada/sarvodayaashram1.jpg'; 
import DutchBuilding1 from './destinations/patna/dutch1.jpg';  
import MahavirMandir1 from './destinations/patna/mahavirmandir1.jpg';

import NITGhat1 from './destinations/patna/nit1.jpg'; 
import SabhyataDwar1 from './destinations/patna/sabhyatadwar1.jpg'; 
import KaimurHills1 from './destinations/rohtas/kaimurhills1.jpg'; 
import RohtasGarh1 from './destinations/rohtas/rohtasgarhfort1.jpg'; 
import  SherShahSuriTomb1 from './destinations/rohtas/shershahsuritomb1.jpg'; 
import KhatuShyamMandir1 from './destinations/samastipur/khatushyam1.jpg'; 

import Morwara1 from './destinations/samastipur/morwara1.jpg'; 
import VidyaPatiNagar1 from './destinations/samastipur/vidyapatinagar1.jpg'; 
import HleshwarSthan1 from './destinations/sitaMarhi/haleshwarsthan1.jpg'; 
import PanthPakar1 from './destinations/sitaMarhi/panthpakar1.jpg';  
import PunauraDham1 from './destinations/sitaMarhi/punauradham1.jpg'; 
import LauriaNandanGarh1 from './destinations/westChamparan/laurianandangarh1.jpg'; 
import ValmikiTigerReserve1 from './destinations/westChamparan/valmikitigerreserve1.jpg'; 
import photo1 from './photo1.jpg';
import photo4 from './photo4.jpg';
import photo2 from './photo2.jpg';
import photo3 from './photo3.jpg';
import photo5 from './photo5.jpg';
import photo6 from './photo6.jpg';
import photo7 from './photo7.jpg';
import logo2 from './logo2.jpg';
import { Link } from 'react-router-dom';

const destinations = () => {
  return (
    <div className='Desti'>
    <div className='destinations'>
    <div id='destination'>DESTINATIONS</div>
    <h1 className='title'> Aurangabad</h1>
    <img className='picture1' src={chandangrah1} alt=''/>
    <img className='picture1' src={daudkhanfort} alt=''/>
    <img className='picture1' src={umatemple1} alt=''/>
    <Link className="place1" to="/chandangadh">ChandanGarh</Link>
  
    <Link className="place2" to="/daudkhanfort">Daudkhan Fort</Link>
    <Link className="place3" to="/umatemple">UmaTemple</Link>
    <h1 className='title'> Bhagalpur</h1>
    <img className='picture2' src={ajgaibinathtemple1} alt=''/>
    <img className='picture2' src={ruinsofvikarmshila1} alt=''/>
    <img className='picture2' src={vikarmshilauniversity1} alt=''/>
    <Link className="place4" to="/ajgaibinathtemple">Ajgaibinath Temple</Link>
    <Link className="place5" to="/ruinsofvikramshila">Ruins Of Vikramshila</Link>
    <Link className="place6" to="/vikramshila">Vikramshila</Link>
    <h1 className='title'>Bhojpur </h1>
     <img className='picture3' src={aranyadevitemple1} alt=''/>
    <img className='picture3' src={jagdishpurfort1} alt=''/>
    <img className='picture3' src={stmaryschurch1} alt=''/> 
    <Link className="place7" to="/aranyadevitemple">AranyaDevi Temple</Link>
    <Link className="place8" to="/jagdishpurfort">JagdishPur Fort</Link>
    <Link className="place9" to="/stmaryschurch">St Marys Church</Link>
    <h1 className='title'>Buxar </h1>
     <img className='picture4' src={DargahDariyaShahBaba1} alt=''/> 
    <img className='picture4' src={NavlakhaMandir1} alt=''/>
     <img className='picture4' src={SriNathBabaMandir1} alt=''/> 
    <Link className="place10" to="/dargah">Dargah DariyaShah Baba</Link>
    <Link className="place11" to="/navlakha">Navlakha Mandir</Link>
    <Link className="place12" to="/srinathbaba">SriNathBaba Mandir</Link>
    <h1 className='title'>Darbhanga</h1>
    <img className='picture5' src={AhilyaMandir1} alt=''/> 
    <img className='picture5' src={AnandBaghPalace1} alt=''/> 
     <img className='picture5' src={Kusheshwarsthan1} alt=''/>
    
    <Link className="place13" to="/ahilya">Ahilya Mandir</Link>
    <Link className="place14" to="/ananndbagh">AnandBagh Palace</Link>
    <Link className="place15" to="/kusheshwarsthan">Kusheshwarsthan</Link>
    <h1 className='title'>East Champaran </h1>
    <img className='picture6' src={BhitiharwaAshram1} alt=''/> 
    <img className='picture6' src={KesariyaStupa1} alt=''/> 
     <img className='picture6' src={someshwarNathDham1} alt=''/> 
    <Link className="place17" to="/ashram">Bhitiharwa Ashram</Link>
    <Link className="place18" to="/kesariyastupa">KesariyaStupa</Link>
    <Link className="place19" to="/someshwarnathdham">SomeshwarNath Dham</Link>
    <h1 className='title'>Gaya</h1>
   <img className='picture7' src={ Mayasarowar1} alt=''/>
    <img className='picture7' src={TibetanTemple1} alt=''/> 
    <img className='picture7' src={VishnuPadTemple1} alt=''/> 


    <Link className="place20" to="/mayasarowar">Mayasarowar</Link>
    <Link className="place21" to="/tibetantemple">Tibetan Temple</Link>
    <Link className="place22" to="/vishnupadtemple">VishnuPad Temple</Link> 
    <h1 className='title'>jahanabad </h1>
      <img className='picture8' src={BarabarCaves1} alt=''/> 
   <img className='picture8' src={NagarjunaHills1} alt=''/>  
    <Link className="place24" to="/barabarcaves">BarabarCaves</Link>
    <Link className="place25" to="/nagarjunahills"> NagarjunaHills</Link>
    <h1 className='title'>kaimur </h1>
        <img className='picture9' src={KarkatGarh1} alt=''/> 
        <img className='picture9' src={MundeshwariDeviTemple1} alt=''/>
         <img className='picture9' src={TelharKund1} alt=''/>  
    <Link className="place26" to="/karkatgarh">KarkatGarh</Link>
    <Link className="place27" to="/mundeshwari">Mundeshwari Devi Temple</Link>
    <Link className="place28" to="/telharkund">TelharKund</Link>
    <h1 className='title'>Munger </h1>
    <img className='picture10' src={AshokaStupa1} alt=''/> 
     <img className='picture10' src={BiharSchoolOfYoga1} alt=''/> 
     <img className='picture10' src={MungerFort1} alt=''/>  
    <Link className="place29" to="/ashokastupa">AshokaDham</Link>
    <Link className="place30" to="/biharschoolofstupa">Biharschoolofyoga</Link>
    <Link className="place31" to="/mungerfort">MungerFort</Link>
    <h1 className='title'>Nalanda </h1>
      <img className='picture11' src={BadiDargah1} alt=''/> 
    <img className='picture11' src={GoraKatora1} alt=''/> 
    <img className='picture11' src={JainMandir1} alt=''/>
    <Link className="place32" to="/badidargah">BadiDargah</Link>
    <Link className="place33" to="/gorakatora">GoraKatora</Link>
    <Link className="place34" to="/jainmandir">JainMandir</Link>
    <h1 className='title'>Nawada </h1>
      <img className='picture12' src={GunawaJainMandir1} alt=''/> 
     <img className='picture12' src={KokolatWaterfall1} alt=''/> 
    <img className='picture12' src={SarvodayaAshram1} alt=''/>  
    <Link className="place35" to="/gunawajainmandir">GunawaJainMandir</Link>
    <Link className="place36" to="/kokolatwaterfall">KokolatWaterfall</Link>
    <Link className="place37" to="/sarvodayaashram">SarvodayaAshram</Link>
    <h1 className='title'>Patna </h1>
     <img className='picture13' src={DutchBuilding1} alt=''/>
    <img className='picture13' src={MahavirMandir1} alt=''/> 
    <img className='picture13' src={NITGhat1} alt=''/> 
     <img className='picture13' src={SabhyataDwar1} alt=''/>  
    <Link className="place38" to="/dutchbuilding">DutchBuilding</Link>
    <Link className="place39" to="/mahavimandir">MahavirMandir</Link>
    <Link className="place40" to="/nitghat">NIT Ghat</Link>
    <Link className="place41" to="/sabhyatadwar">Sabhyata Dwar</Link>
    <h1 className='title'>Rohtas </h1>
   <img className='picture14' src={KaimurHills1} alt=''/>
    <img className='picture14' src={RohtasGarh1} alt=''/> 
    <img className='picture14' src={SherShahSuriTomb1} alt=''/> 
    <Link className="place42" to="/kaimurhills">KaimurHills</Link>
    <Link className="place43" to="/rohtasgarh">RohtasGarh</Link>
    <Link className="place44" to="/shershahsuritomb">SherShahSuriTomb</Link>
    <h1 className='title'>Samastipur </h1>
    <img className='picture15' src={KhatuShyamMandir1} alt=''/>
    <img className='picture15' src={Morwara1} alt=''/> 
    <img className='picture15' src={VidyaPatiNagar1} alt=''/>  
    <Link className="place45" to="/khatushyam">KhatuShyam Mandir</Link>
    <Link className="place46" to="/morwara">Morwara</Link>
    <Link className="place47" to="/vidyapatinagar">VidyaPatiNagar</Link>
    <h1 className='title'>Sitamarhi </h1>
   <img className='picture16' src={HleshwarSthan1} alt=''/>
     <img className='picture16' src={PanthPakar1} alt=''/>
     <img className='picture16' src={PunauraDham1} alt=''/> 
    <Link className="place48" to="/halehwarsthan">HleshwarSthan</Link>
    <Link className="place49" to="/panthpakar">PanthPakar</Link>
    <Link className="place50" to="/punauradham">PunauraDham</Link>
    <h1 className='title'>WestChamparan </h1>
      <img className='picture17' src={LauriaNandanGarh1} alt=''/>
     <img className='picture17' src={ValmikiTigerReserve1} alt=''/>  
   
    <Link className="place51" to="/laurianandan">LauriaNandanGarh</Link>
    <Link className="place52" to="/valmikitigerreserve">ValmikiTigerReserve</Link>
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

export default destinations