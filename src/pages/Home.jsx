import Hero from '../components/Hero/Hero'
import Featured from '../components/featured/Featured'
import VideoView from '../components/videoView/VideoView'
import BestDeal from '../components/bestDeal/BestDeal'
import Card from '../components/cards/Card'
import Contact from '../components/contact/Contact'

// Import the images for the hero section
import heroImg1 from '../assets/banner-01.jpg';
import heroImg2 from '../assets/banner-02.jpg';
import heroImg3 from '../assets/banner-03.jpg';

// Import the imgs for the featured section
import featuredImg from '../assets/featured.jpg';
import featuredIcon from '../assets/featured-icon.png';


// Import Card Imgs

import cardImg1 from '../assets/property-01.jpg';
import cardImg2 from '../assets/property-02.jpg';
import cardImg3 from '../assets/property-03.jpg';
import cardImg4 from '../assets/property-04.jpg';
import cardImg5 from '../assets/property-05.jpg';
import cardImg6 from '../assets/property-06.jpg';

const cards = [
  {img: cardImg1, type: 'Luxury Villa', bedrooms: '8', bathrooms: '8', area: '545m2', floor: '8', parking: '6 Spots', cardPrice: '$2.264.000', cardName: '18 New Street Miami, OR 97219'},
  {img: cardImg2, type:'Luxury Villa', bedrooms:'6', bathrooms:'5', area:'450m2', floor:'3', parking:'8 Spots', cardPrice: '$1.180.000', cardName: '54 Mid Street Florida, OR 97289'},
  {img: cardImg3, type: 'Luxury Villa', bedrooms: '5', bathrooms: '4', area: '225m2', floor: '3', parking: '10 Spots', cardPrice: '$2.264.000', cardName: '26 Old Street Miami, OR 97219'},
 
  {img: cardImg4, type: 'Apartment', bedrooms: '4', bathrooms: '3', area: '125m2', floor: '25th', parking: '2 cars', cardPrice: '$584.000', cardName: '12 New Street Miami, OR 97219'},
  
  {img: cardImg5, type: 'PentHouse', bedrooms: '4', bathrooms: '4', area: '545m2', floor: '8', parking: '6 Spots', cardPrice: '$925.000', cardName: '34 Beach Street Miami, OR 14219'},

  {img: cardImg6, type: 'Apartment', bedrooms: '4', bathrooms: '3', area: '165m2', floor: '26th', parking: '3 cars', cardPrice: '$450.000', cardName: '18 New Street Portland, OR 97219'},
]

const Home = () => {
  return (
    <div>

     <Hero heroImg1={heroImg1} heroImg2={heroImg2} heroImg3={heroImg3} heading='Hurray! Get The Best Villa For You' country='Canada' city='Toronto'/>
    
     <Featured featuredImg={featuredImg} featuredIcon={featuredIcon}/>

     <VideoView/>

     <BestDeal
     property1Title='185 m2' property1Desc='Total Flat Space'
     property2Title='26th' property2Desc='Floor Number'
     property3Title='4' property3Desc='Number Of Rooms'
     property4Title='Yes' property4Desc='Parking Availble'
     property5Title='Bank' property5Desc='Payment Method'
     />

     <div className='cards' id='properties'>
       {cards.map(({img, type, bedrooms, bathrooms, area, floor, parking, cardPrice, cardName}) => (
        <Card cardImg={img} cardType={type} cardBedrooms={bedrooms} cardBathrooms={bathrooms} area={area} floor={floor} parking={parking} cardPrice={cardPrice} cardName={cardName}/>
       ))}    
     </div>

     <Contact/>
    </div>
  )
}

export default Home