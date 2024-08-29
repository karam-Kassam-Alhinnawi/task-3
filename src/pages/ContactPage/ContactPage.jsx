import styles from './ContactPage.module.css';
import PageHeader from '../../components/pageHeader/PageHeader'
import Map from '../../components/contact/Map'
import Form from '../../components/contact/Form'
import ContactInfo from '../../components/contact/ContactInfo';

const ContactPage = () => {
  return (
    <div>
        <PageHeader PageName='Contact Us'/>

        <div className={styles.ContactPage}>
        
        <div className={styles.desc}>
        <p style={{color: 'orangered'}}>| CONTACT US</p>
        <h2>Get In Touch <br /> With Our Agents</h2>
        <p style={{color: 'grey'}} id={styles.lorem}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum labore, quod quasi odio quaerat obcaecati um dolor sit amet consectetur adipisicing elit. Voluptatum labore, quod quasi odio quaerat obcaecati um dolor sit amet consectetur adipisicing elit. Voluptatum labore, quod quasi odio quaerat obcaecatium dolor sit amet consectetur adipisicing elit. Voluptatum labore, quod quasi odio quaerat obcaecati !</p>
        <ContactInfo className={styles.ContactInfo}/>
        </div>

        <Form className={styles.form}/>
         
        </div>
        <Map className={styles.map}/>
    </div>
  )
}

export default ContactPage