import { useState } from 'react';
import PageHeader from '../../components/pageHeader/PageHeader'
import styles from './Properties.module.css';

import cardImg1 from '../../assets/property-01.jpg';
import cardImg2 from '../../assets/property-02.jpg';
import cardImg3 from '../../assets/property-03.jpg';
import cardImg4 from '../../assets/property-04.jpg';
import cardImg5 from '../../assets/property-05.jpg';
import cardImg6 from '../../assets/property-06.jpg';
import Card from '../../components/cards/Card';

const Properties = () => {
  const [activeButton, setActiveButton] = useState('Show All');

  const buttons = ['Show All', 'Apartment', 'Luxury Villa', 'PentHouse'];

  const paginationButtons = [
    {index: 1},
    {index: 2, isActive: true},
    {index: 3},
    {index: '>>'},
  ];

  const handleClickedButton = (index) => {
    setActiveButton(index);
  }

  const cards = [
    {img: cardImg1, type: 'Luxury Villa', bedrooms: '8', bathrooms: '8', area: '545m2', floor: '8', parking: '6 Spots', cardPrice: '$2.264.000', cardName: '18 New Street Miami, OR 97219'},
    {img: cardImg2, type:'Luxury Villa', bedrooms:'6', bathrooms:'5', area:'450m2', floor:'3', parking:'8 Spots', cardPrice: '$1.180.000', cardName: '54 Mid Street Florida, OR 97289'},
    {img: cardImg3, type: 'Luxury Villa', bedrooms: '5', bathrooms: '4', area: '225m2', floor: '3', parking: '10 Spots', cardPrice: '$2.264.000', cardName: '26 Old Street Miami, OR 97219'},
   
    {img: cardImg4, type: 'Apartment', bedrooms: '4', bathrooms: '3', area: '125m2', floor: '25th', parking: '2 cars', cardPrice: '$584.000', cardName: '12 New Street Miami, OR 97219'},
    
    {img: cardImg5, type: 'PentHouse', bedrooms: '4', bathrooms: '4', area: '545m2', floor: '8', parking: '6 Spots', cardPrice: '$925.000', cardName: '34 Beach Street Miami, OR 14219'},
  
    {img: cardImg6, type: 'Apartment', bedrooms: '4', bathrooms: '3', area: '165m2', floor: '26th', parking: '3 cars', cardPrice: '$450.000', cardName: '18 New Street Portland, OR 97219'},

    {img: cardImg2 , type: 'Apartment', bedrooms: '4', bathrooms: '3', area: '165m2', floor: '26th', parking: '3 cars', cardPrice: '$450.000', cardName: '18 New Street Portland, OR 97219'},
    {img: cardImg3 , type: 'PentHouse', bedrooms: '4', bathrooms: '3', area: '165m2', floor: '26th', parking: '3 cars', cardPrice: '$450.000', cardName: '18 New Street Portland, OR 97219'},
    {img: cardImg4 , type: 'PentHouse', bedrooms: '4', bathrooms: '3', area: '165m2', floor: '26th', parking: '3 cars', cardPrice: '$450.000', cardName: '18 New Street Portland, OR 97219'},
  ]

  return (
    <div className={styles.properties}>
      <PageHeader PageName='Properties'/>

      <div className={styles.buttons}>
      {buttons.map((button) => (
            <button className={styles.button} onClick={() => handleClickedButton(button)} style={{backgroundColor: activeButton === button  ? 'red' : ''}}>{button}</button>
       ))}
      </div>

      <div className='cards' id='properties'>
       {cards.map(({img, type, bedrooms, bathrooms, area, floor, parking, cardPrice, cardName}) => (
        (type === activeButton || activeButton === 'Show All') &&
          <Card cardImg={img} cardType={type} cardBedrooms={bedrooms} cardBathrooms={bathrooms} area={area} floor={floor} parking={parking} cardPrice={cardPrice} cardName={cardName}/>
       ))}    
     </div>

     <div className={styles.pagination}>
       {paginationButtons.map(({index, isActive}) => (
        <button className={isActive ? styles.active : ''}>{index}</button>
       ))}
     </div>



    </div>
  )
}

export default Properties