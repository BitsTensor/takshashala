import React from 'react';
import './App.css';
import Navbar from './styles/navbar.js';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import HomePage from './components/homePage.js';
import AboutUs from './components/aboutUs.js';
import ArtsAndCultures from './components/artsAndCultures.js';
import Destinations from './components/destinations.js';
import ExploreBihar from './components/exploreBihar.js';

import Madhubani from './components/artAndCraft/madhubani.js';
import MetalCraft from './components/artAndCraft/metalCraft.js';
import StoneCraft from './components/artAndCraft/stoneCraft.js';
import TikuliPainting from './components/artAndCraft/tikuliPainting.js';
import WoodCraft from './components/artAndCraft/woodCraft.js';
import ChattPuja from './components/festivalAndFair/chattPuja.js';
import MahaShivratri from './components/festivalAndFair/mahaShivratri.js';
import PitraPaksha from './components/festivalAndFair/pitraPaksha.js';
import PrakashParv from './components/festivalAndFair/prakashParv.js';
import RajgirMahotsav from './components/festivalAndFair/rajgirMahotsav.js';
import SonepurMela from './components/festivalAndFair/sonepurMela.js';
import DahiChuda from './components/foodAndCuisine/dahiChuda.js';
import Jalebi from './components/foodAndCuisine/jalebi.js';
import Kasar from './components/foodAndCuisine/kasar.js';
import LaungLata from './components/foodAndCuisine/laungLata.js';
import LittiChokha from './components/foodAndCuisine/littiChokha.js';
import MakhanaKheer from './components/foodAndCuisine/makhanaKheer.js';
import Tilkut from './components/foodAndCuisine/tilkut.js';
import MahaBodhi from './components/destinations/gaya/mahaBodhi.js';
import Ashokan from './components/destinations/vaishali/ashokan.js'
import Tutla from './components/destinations/rohtas/tutla.js';
import Gurudwara from './components/destinations/patna/gurudwara.js';
import MetaBudha from './components/destinations/gaya/metaBudha.js';
import Mandarhill from './components/destinations/banka/mandarhill.js';
import ChandanGarh from './components/destinations/aurangabad/chandanGadh.js';
import DaudkhanFort from './components/destinations/aurangabad/daudKhanFort.js';
import UmaTemple from './components/destinations/aurangabad/umaTemple.js';
import AjgaibinathTemple  from './components/destinations/bhagalpur/ajgaibinathTemple.js';
import RuinsOfVikramshila from './components/destinations/bhagalpur/ruinsOfVikramshila.js';
import Vikramshila from './components/destinations/bhagalpur/vikramashila.js';
import AranyaDeviTemple  from './components/destinations/bhojpur/aranyaDeviTemple.js';
import JagdishPurFort from './components/destinations/bhojpur/jagdispurFort.js';
import StMarysChurch from './components/destinations/bhojpur/stMarysChurch.js';
import DargahDariyaShahBaba from './components/destinations/buxar/dargahDariyaShahBaba.js';
import NavlakhaMandir from './components/destinations/buxar/navlakhaMandir.js';
import SriNathBabaMandir from './components/destinations/buxar/sriNathBabaMandir.js';
import AhilyaMandir from './components/destinations/darbhanga/ahilyaMandir.js';
import AnandBaghPalace from './components/destinations/darbhanga/anandBaghPalace.js';
import Kusheshwarsthan from './components/destinations/darbhanga/kusheshwarsthan.js';
import BhitiharwaAshram from './components/destinations/eastChamparan/bhitiharwaAshram.js';
import KesariyaStupa from './components/destinations/eastChamparan/kesariyaStupa.js';
import SomeshwarNathDham from './components/destinations/eastChamparan/someshwarNathDham.js';
import Mayasarowar from './components/destinations/gaya/mayasarover.js';
import TibetanTemple from './components/destinations/gaya/tibetanTemple.js';
import VishnuPadTemple from  './components/destinations/gaya/vishnuPadTemple.js';
import ThaweMandir from  './components/destinations/gopalganj/thaweMandir.js';
import BarabarCaves from  './components/destinations/jahanabad/barabarCaves.js';
import NagarjunaHills from  './components/destinations/jahanabad/nagarjunaHills.js';
import KarkatGarh from  './components/destinations/kaimur/karkatGarh.js';
import MundeshwariDeviTemple from  './components/destinations/kaimur/MundeshwariDeviTemple.js';
import TelharKund from  './components/destinations/kaimur/telharKund.js';
import AshokaStupa from  './components/destinations/munger/ashokaStupa.js';
import BiharSchoolOfYoga from  './components/destinations/munger/biharSchoolOfYoga.js';
import MungerFort from  './components/destinations/munger/mungerFort.js';
import  BadiDargah from  './components/destinations/nalanda/badiDargah.js';
import GoraKatora from './components/destinations/nalanda/goraKatoraLake.js';
import JainMandir from './components/destinations/nalanda/JainMandir.js';
import GunawaJainMandir from './components/destinations/nawada/gunawaJainMandir.js';
import KokolatWaterfall from  './components/destinations/nawada/kokolatWaterfall.js';
import SarvodayaAshram from './components/destinations/nawada/sarvodayaAshram.js';
import DutchBuilding from './components/destinations/patna/dutchBuilding.js';
import MahavirMandir from './components/destinations/patna/mahavirMandir.js';
import NITGhat from './components/destinations/patna/nitGhat.js';
import SabhyataDwar from './components/destinations/patna/sabhyataDwar.js';
import KaimurHills from './components/destinations/rohtas/kaimurHills.js';
import RohtasGarh from './components/destinations/rohtas/rohtasGarhFort.js';
import SherShahSuriTomb from './components/destinations/rohtas/sherSharShuriTomb.js';
import KhatuShyamMandir from './components/destinations/samastipur/khatuShyamMandir.js';
import Morwara from './components/destinations/samastipur/morwara.js';
import VidyaPatiNagar from './components/destinations/samastipur/vidyaPatiNagar.js';
import HleshwarSthan from './components/destinations/sitaMarhi/haleshwarSthan.js';
import PanthPakar from './components/destinations/sitaMarhi/panthPakar.js';
import PunauraDham from './components/destinations/sitaMarhi/punauraDham.js';
import LauriaNandanGarh from './components/destinations/westChamparan/lauriaNandangarh.js';
import ValmikiTigerReserve from './components/destinations/westChamparan/valmikitigerreserve1.jpg';


function App() { 
   
  return (
    <div className="App">
    <BrowserRouter>
    <Navbar/>
    <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/aboutus" element={<AboutUs/>}/>
        <Route path="/artsandcultures" element={<ArtsAndCultures/>}/>
        <Route path="/destinations" element={<Destinations/>}/>
        <Route path="/explorebihar" element={<ExploreBihar/>}/>
        
        <Route path="/madhubani" element={<Madhubani/>}/>
        <Route path="/metalcraft" element={<MetalCraft/>}/>
        <Route path="/stonecraft" element={<StoneCraft/>}/>
        <Route path="/tikulipainting" element={<TikuliPainting/>}/>
        <Route path="/woodcraft" element={<WoodCraft/>}/> 
        <Route path="/chattpuja" element={<ChattPuja/>}/> 
        <Route path="/mahaShivratri" element={<MahaShivratri/>}/>
        <Route path="/pitrapaksha" element={<PitraPaksha/>}/> 
        <Route path="/prakashparv" element={<PrakashParv/>}/> 
        <Route path="/rajgirmahotsav" element={<RajgirMahotsav/>}/> 
        <Route path="/sonepurmela" element={<SonepurMela/>}/> 
        <Route path="/dahichuda" element={<DahiChuda/>}/> 
        <Route path="/jalebi" element={<Jalebi/>}/> 
        <Route path="/kasar" element={<Kasar/>}/> 
        <Route path="/launglata" element={<LaungLata/>}/> 
        <Route path="/littichokha" element={<LittiChokha/>}/> 
        <Route path="/makhanakheer" element={<MakhanaKheer/>}/> 
        <Route path="/tilkut" element={<Tilkut/>}/> 
        <Route path="/mahabodhi" element={<MahaBodhi/>}/>
        <Route path="/ashokan" element={<Ashokan/>}/>
        <Route path="/mahabodhi" element={<MahaBodhi/>}/>
        <Route path="/tutla" element={<Tutla/>}/>
        <Route path="/gurudwara" element={<Gurudwara/>}/>
        <Route path="/mandarhill" element={<Mandarhill/>}/>
        <Route path="/metabudha" element={<MetaBudha/>}/>
        <Route path="/chandangadh" element={<ChandanGarh/>}/>
        <Route path="/daudkhanfort" element={<DaudkhanFort/>}/>  
        <Route path="/umatemple" element={<UmaTemple/>}/>
        <Route path="/ajgaibinathtemple" element={<AjgaibinathTemple/>}/>
        <Route path="/ruinsofvikramshila" element={<RuinsOfVikramshila/>}/>
        <Route path="/vikramshila" element={<Vikramshila/>}/>
        <Route path="/aranyadevitemple" element={<AranyaDeviTemple/>}/>
        <Route path="/jagdishpurfort" element={<JagdishPurFort/>}/>
        <Route path="/stmaryschurch" element={<StMarysChurch/>}/>
        <Route path="/dargah" element={<DargahDariyaShahBaba/>}/>
        <Route path="/navlakha" element={<NavlakhaMandir/>}/>
        <Route path="/srinathbaba" element={<SriNathBabaMandir/>}/>
        <Route path="/ahilya" element={<AhilyaMandir/>}/>
        <Route path="/ananndbagh" element={<AnandBaghPalace/>}/>
        <Route path="/kusheshwarsthan" element={<Kusheshwarsthan/>}/>
        <Route path="/ashram" element={<BhitiharwaAshram/>}/>
        <Route path="/kesariyastupa" element={<KesariyaStupa/>}/>
        <Route path="/someshwarnathdham" element={<SomeshwarNathDham/>}/>
        <Route path="/mayasarowar" element={<Mayasarowar/>}/>
        <Route path="/tibetantemple" element={<TibetanTemple/>}/>
        <Route path="/vishnupadtemple" element={<VishnuPadTemple/>}/>
        <Route path="/thawemandir" element={<ThaweMandir/>}/>
        <Route path="/barabarcaves" element={<BarabarCaves/>}/>
        <Route path="/nagarjunahills" element={<NagarjunaHills/>}/>
        <Route path="/karkatgarh" element={<KarkatGarh/>}/>
        <Route path="/mundeshwari" element={<MundeshwariDeviTemple/>}/>
        <Route path="/telharkund" element={<TelharKund/>}/>
        <Route path="/ashokastupa" element={<AshokaStupa/>}/>
        <Route path="/biharschoolofstupa" element={<BiharSchoolOfYoga/>}/>
        <Route path="/mungerfort" element={<MungerFort/>}/>
        <Route path="/badidargah" element={<BadiDargah/>}/>

        <Route path="/gorakatora" element={<GoraKatora/>}/>
        <Route path="/jainmandir" element={<JainMandir/>}/>
        <Route path="/gunawajainmandir" element={<GunawaJainMandir/>}/>
        <Route path="/kokolatwaterfall" element={<KokolatWaterfall/>}/>
        <Route path="/sarvodayaashram" element={<SarvodayaAshram/>}/>
        <Route path="/dutchbuilding" element={<DutchBuilding/>}/>
        <Route path="/mahavimandir" element={<MahavirMandir/>}/>
        <Route path="/nitghat" element={<NITGhat/>}/>
        <Route path="/sabhyatadwar" element={<SabhyataDwar/>}/>
        <Route path="/kaimurhills" element={<KaimurHills/>}/>
        <Route path="/rohtasgarh" element={<RohtasGarh/>}/>
        <Route path="/shershahsuritomb" element={<SherShahSuriTomb/>}/>
        <Route path="/khatushyam" element={<KhatuShyamMandir/>}/>
        <Route path="/morwara" element={<Morwara/>}/>
        <Route path="/vidyapatinagar" element={<VidyaPatiNagar/>}/>
        <Route path="/halehwarsthan" element={<HleshwarSthan/>}/>
        <Route path="/panthpakar" element={<PanthPakar/>}/>
        <Route path="/punauradham" element={<PunauraDham/>}/>
        <Route path="/laurianandan" element={<LauriaNandanGarh/>}/>
        <Route path="/valmikitigerreserve" element={<ValmikiTigerReserve/>}/>
       
        </Routes>
    </BrowserRouter>
    
    </div>
  )
}
export default App