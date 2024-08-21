import Hero from './components/Hero/Hero';
import './App.css'
import { Navbar } from './components/Navbar/Navbar'
import { TopLinks } from './components/TopLinks/TopLinks';
import VideoView from './components/videoView/VideoView';
import BestDeal from './components/bestDeal/BestDeal';
import Card from './components/cards/Card'; 
import Contact from './components/contact/Contact';

// Import the images for the hero section
import heroImg1 from './assets/banner-01.jpg';
import heroImg2 from './assets/banner-02.jpg';
import heroImg3 from './assets/banner-03.jpg';
import Featured from './components/featured/Featured';

// Import the imgs for the featured section
import featuredImg from './assets/featured.jpg';
import featuredIcon from './assets/featured-icon.png';

import property1Img from './assets/info-icon-01.png';
import property2Img from './assets/info-icon-02.png';
import property3Img from './assets/info-icon-03.png';
import property4Img from './assets/info-icon-04.png';

// Import Card Imgs

import cardImg1 from './assets/property-01.jpg';
import cardImg2 from './assets/property-02.jpg';
import cardImg3 from './assets/property-03.jpg';
import cardImg4 from './assets/property-04.jpg';
import cardImg5 from './assets/property-05.jpg';
import cardImg6 from './assets/property-06.jpg';


function App() {
  return (
    <>
     <TopLinks/>
     <Navbar/>

     <Hero heroImg1={heroImg1} heroImg2={heroImg2} heroImg3={heroImg3} heading='Hurray! Get The Best Villa For You' country='Canada' city='Toronto'/>
    
     <Featured featuredImg={featuredImg} featuredIcon={featuredIcon} property1Img={property1Img}
      property2Img={property2Img} property3Img={property3Img} property4Img={property4Img}
      property1Title='250 m2' property1Desc='Total Flat Space' 
      property2Title='Contract' property2Desc='Contract Ready' property3Title='Payment' property3Desc='Payment'
      property4Title='Saftey' property4Desc='24/7 under'
     />

     <VideoView/>

     <BestDeal button1Name='Apartment' button2Name='Villa House' button3Name='Penthouse'
     property1Title='185 m2' property1Desc='Total Flat Space'
     property2Title='26th' property2Desc='Floor Number'
     property3Title='4' property3Desc='Number Of Rooms'
     property4Title='Yes' property4Desc='Parking Availble'
     property5Title='Bank' property5Desc='Payment Method'
     />

     <div className='cards' id='properties'>
     <Card cardImg={cardImg1} cardType='Luxury Villa' cardBedrooms='8' cardBathrooms='8' area='545m2' floor='8' parking='6 Spots' cardPrice='$2.264.000' cardName='18 New Street Miami, OR 97219'/>
     <Card cardImg={cardImg2} cardType='Luxury Villa' cardBedrooms='6' cardBathrooms='5' area='450m2' floor='3' parking='8 Spots' cardPrice='$1.180.000' cardName='54 Mid Street Florida, OR 97289'/>
    
     <Card cardImg={cardImg3} cardType='Luxury Villa' cardBedrooms='5' cardBathrooms='4' area='225m2' floor='3' parking='10 Spots' cardPrice='$2.264.000' cardName='26 Old Street Miami, OR 97219'/>
     <Card cardImg={cardImg4} cardType='Apartment' cardBedrooms='4' cardBathrooms='3' area='125m2' floor='25th' parking='2 cars' cardPrice='$584.000' cardName='12 New Street Miami, OR 97219'/>
    
     <Card cardImg={cardImg5} cardType='PentHouse' cardBedrooms='4' cardBathrooms='4' area='545m2' floor='8' parking='6 Spots' cardPrice='$925.000' cardName='34 Beach Street Miami, OR 14219'/>
     <Card cardImg={cardImg6} cardType='Modern Condo' cardBedrooms='4' cardBathrooms='3' area='165m2' floor='26th' parking='3 cars' cardPrice='$450.000' cardName='18 New Street Portland, OR 97219'/>
     </div>

     <Contact/>

    </>
  )
}

export default App
