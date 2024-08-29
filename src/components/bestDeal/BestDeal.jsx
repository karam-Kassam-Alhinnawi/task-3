import styles from './BestDeal.module.css';
import bestDealImg1 from '../../assets/deal-01.jpg';
import bestDealImg2 from '../../assets/deal-02.jpg';
import bestDealImg3 from '../../assets/deal-03.jpg';
import { useState } from 'react';

const BestDeal = () => {

    const [selectedButtonIndex, setSelectedButtonIndex] = useState(0);

    const handleButtonClick = (index) => {
      setSelectedButtonIndex(index)
    }

   const buttons = ['Apartment', 'Villa House', 'Penthouse'];

   const data = [
     {
      img: bestDealImg1,
      name: 'Property',
      space: '185 m2',
      number: '26th',
      rooms: '4',
      parking: true,
      payment: 'Bank'
     },

     {
      img: bestDealImg2,
      name: 'Villa',
      space: '250 m2',
      number: '26th',
      rooms: '5',
      parking: true,
      payment: 'Bank'
     },

     {
      img: bestDealImg3,
      name: 'PentHouse',
      space: '320 m2',
      number: '34th',
      rooms: '6',
      parking: true,
      payment: 'Bank'
     }
   ]

  return (
    <div className={styles.bestDeal}>
       <div className={styles.bestDealTopSection}>
        
        <div>
        <p>| BEST DEAL</p>
        <h2>Find Your Best <br /> Deal Right Now!</h2>
        </div>

        <div className={styles.buttons}>
          {buttons.map((button, index) => (
            <button className={styles.btn} onClick={() => handleButtonClick(index)} style={{backgroundColor: selectedButtonIndex === index  ? 'red' : ''}}>{button}</button>
          ))}
        </div>

       </div>

       <div className={styles.bestDealBottomSection}>

          <div className={styles.properties}>
         {data.map((arrData, index) => (
           index === selectedButtonIndex && (
            <>
                <div className={styles.property}>              
                <p>Total Flat Space</p>
                <p className={styles.boldTitle}>{arrData.space}</p>
                </div>

                <div className={styles.property}>              
                <p>Floor Number</p>
                <p className={styles.boldTitle}>{arrData.number}</p>
                </div>

                <div className={styles.property}>              

                <p>Number of rooms</p>
                <p className={styles.boldTitle}>{arrData.rooms}</p>
                </div>

                <div className={styles.property}>              

                <p>Parking Available</p>
                <p className={styles.boldTitle}>{arrData.parking ? 'Yes' : 'No'}</p>
                </div>

                <div className={styles.property} style={{borderBottom: 'none'}}>              

                <p>Payment Process</p>
                <p className={styles.boldTitle}>{arrData.payment}</p>

                </div>
            </>
           )
          ))}       
        </div>

        {data.map((arrImg, index) => ( 
          index === selectedButtonIndex && <img src={arrImg.img} alt="" />
        ))}

        {data.map((arrData, index) => (
         index === selectedButtonIndex && (
          <div className={styles.info}>
         <p>Extra Info About {arrData.name}</p>
         <p>Lorem ipsum odor amet, consectetuer adipiscing elit. Nulla vel vehicula parturient metus cursus. Cras orci cubilia finibus natoque luctus, scelerisque ornare pulvinar. Penatibus non posuere eu congue</p> 
         <p>magnis risus efficitur dolor hendrerit. Risus velit dignissim parturient dui odio curabitur ante ultrices iaculis. Etiam facilisi hendrerit purus scelerisque litora eros etiam. Euismod nisi montes sociosqu, cras sollicitudin ad tincidunt sit maximus.</p>
         <button className={styles.Button}>Schedule a visit</button>

      </div>
         )
        ))}

       </div>
    </div>
  )
}

export default BestDeal