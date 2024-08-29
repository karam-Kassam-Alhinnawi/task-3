import MainAccordian from '../accordian/MainAccordian';
import Properties from '../properties/Properties';
import styles from './Featured.module.css';


const Featured = ({featuredImg, featuredIcon}) => {

  
  return (
    <div className={styles.featured}>

       <div className={styles.imgsDiv}>
        <img className={styles.img2} src={featuredIcon} alt="" />
        <img src={featuredImg} alt="" />
       </div>

       <div className={styles.featuredApartment}>
          <p>| FEATURED</p>
          <p>Best Apartment & Sea View</p>
          
         <div className={styles.accordian}>
         <MainAccordian/>
         </div>


       </div>
          
        <Properties/>

    </div>
  )
}

export default Featured