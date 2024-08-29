import styles from './Contact.module.css';
import ContactInfo from './ContactInfo';
import Form from './Form';
import Map from './Map';

const Contact = () => {
  return (
    <div className={styles.contact}>
       <div className={styles.backgroundLayer}></div>

       <div className={styles.textLayer}>
        <p>| CONTACT US</p>
        <h2>Get In Touch <br /> With Our Agents</h2>
       </div>

       <div className={styles.info}>

      <div className={styles.contactMainInfo}>
      <Map/>

      <ContactInfo/>
      </div>

        <Form/>

       </div>
    </div>
  )
}

export default Contact