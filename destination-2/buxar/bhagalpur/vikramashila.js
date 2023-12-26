import React from 'react'
import photo1 from '../photo1.jpg';
 import photo4 from '../photo4.jpg';
 import photo2 from '../photo2.jpg';
 import photo3 from '../photo3.jpg';
 import photo5 from '../photo5.jpg';
 import photo6 from '../photo6.jpg';
 import photo7 from '../photo7.jpg';
 import Vikramshila1 from './vikramshilauniversity1.jpg';
 import logo3 from '../logo3.jpg';

 import { Link } from 'react-router-dom';
const vikramashila = () => {
  return (
    
    <div className='vikram'>
       <img className='logobox3' src={logo3} alt=''/>
    < div className='vikramshila'>
    <h1 className='heading2'><u> Vikramshila University</u></h1>
    {/* <img className='vikramshila2' src={Vikramshila1} alt=''/> */}

 <div className='note1'>           <img className='vikramshila2' src={Vikramshila1} alt=''/>
 Vikramashila (Sanskrit: विक्रमशिला, IAST: Vikramaśilā , Bengali:- বিক্রমশিলা, Romanisation:- Bikrômôśilā ) was one of the three most important Buddhist monasteries in India during the Pala Empire, along with Nalanda and Odantapuri. Its location is now the site of Antichak village near Kahalgaon, Bhagalpur district in Bihar.
<br/>
Vikramashila was established by the Pala emperor Dharmapala (783 to 820 AD) in response to a supposed decline in the quality of scholarship at Nalanda.
 Atiśa, the renowned pandita and philosopher, is listed as a notable abbot. It was destroyed by the forces of Muhammad bin Bakhtiyar Khalji around 1193.
</div>  <br/>
<h3>History</h3>
A number of monasteries grew up during the Pāla period in ancient Bengal and Magadha.
 According to Tibetan sources, five great Mahaviharas stood out: Vikramashila, the premier university of the era; Nalanda, past its prime but still illustrious,
  Somapura, Odantapura, and Jagaddala.[4] The five monasteries formed a network; "all of them were under state supervision" and there existed "a system of co-ordination among them.
   It seems from the evidence that the different seats of Buddhist learning that functioned in eastern India under the Pāla were regarded together as forming a network, an interlinked group of institutions," and it was common for great scholars to move easily from position to position among them.
<br/>
Vikramashila was founded by Pāla king Dharmapala in the late 8th or early 9th century. 
It prospered for about four centuries before it was destroyed by Bakhtiyar Khilji along with the other major centres of Buddhism in India around 1193.
<br/>
Vikramashila is known to us mainly through Tibetan sources, especially the writings of Tāranātha,
 the Tibetan monk historian of the 16th–17th centuries.
<br/>
Vikramashila was one of the largest Buddhist universities, with more than one hundred teachers and about one thousand students.
 It produced eminent scholars who were often invited by foreign countries to spread Buddhist learning, culture and religion.
<br/>
One such scholar was Atisha Dipankara, a founder of the Sarma traditions of Tibetan Buddhism.
 Subjects like philosophy, grammar, metaphysics, Indian logic etc. were taught here, but the most important branch of learning was Buddhist tantra.
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

export default vikramashila




 
    


   
 




    
   
   
  

 