import styles from './Properties.module.css';


import property1Img from '../../assets/info-icon-01.png';
import property2Img from '../../assets/info-icon-02.png';
import property3Img from '../../assets/info-icon-03.png';
import property4Img from '../../assets/info-icon-04.png';

const Properties = () => {
  return (
    <div>
      <div className={styles.properties}>
            
            <div className={styles.property}>
              <img src={property1Img} alt="" />
              
              <div className={styles.propertyText}>
              <p className={styles.boldTitle}>250 m2</p>
              <p>Total Flat Space</p>
              </div>
   
            </div>
   
            <div className={styles.property}>
              <img src={property2Img} alt="" />
   
              <div className={styles.propertyText}>
              <p className={styles.boldTitle}>Contract</p>
              <p>Contract Ready</p>
              </div>
   
            </div>
   
            <div className={styles.property}>
              
              <div className={styles.paddingTop}>
              <img src={property3Img} alt="" />
              <p>Process</p>
              </div>
   
             <div>
             <p className={styles.boldTitle}>Payment</p>
             <p>Payment</p>
             </div>
              
   
            </div>
   
            <div className={`${styles.property} ${styles.noUnderline}`}>
             
             <div className={styles.paddingTop}>
             <img src={property4Img} alt="" />
             <p>Control</p>
             </div>
   
              <div className={styles.propertyText}>
              <p className={styles.boldTitle}>Saftey</p>
              <p>24/7 under</p>
              </div>
   
            </div>
   
           </div>
   
    </div>
  )
}

export default Properties