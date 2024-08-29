import styles from './Contact.module.css';
import img1 from '../../assets/phone-icon.png';
import img2 from '../../assets/email-icon.png';

const ContactInfo = ({className}) => {
  return (
         <div className={`${styles.contactInfo} ${className}`}>
       
       <div className={styles.contactDiv}>
        <img src={img1} alt="" />

        <div>
          <h2>010-020-0304</h2>
          <p>Phone Number</p>
        </div>
        </div>

       <div className={styles.contactDiv}>
        <img src={img2} alt="" />

        <div>
          <h2>info@villa.co</h2>
          <p>Business Email</p>
        </div>

       </div>
       
    </div>
  )
}

export default ContactInfo