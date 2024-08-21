import styles from './Contact.module.css';
import img1 from '../../assets/phone-icon.png';
import img2 from '../../assets/email-icon.png';

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
      <div className={styles.map}>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11339.6622901742!2d-80.12956069511154!3d25.944782351436526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9acfee073549d%3A0xf4e74db7a5da487a!2sSunny%20Isles%20Beach%2C%20FL%2033160%2C%20USA!5e0!3m2!1sen!2s!4v1724242918357!5m2!1sen!2s" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>     
      </div>

      <div className={styles.contactInfo}>
       
       <div className={styles.contactDiv}>
        <img src={img1} alt="" />

        <div>
          <h2>010-020-0304</h2>
          <p>Phone Number</p>
        </div>
        </div>

       <div className={styles.contactDiv}>
        <img src={img1} alt="" />

        <div>
          <h2>info@villa.co</h2>
          <p>Business Email</p>
        </div>

       </div>
      </div>
      </div>
        
       
       
    


        <div className={styles.form}>
            <form action="">

                <div className={styles.inputBox}>
                <label htmlFor="">
                    Full Name
                </label>
                    <input type="text" placeholder='Your Name...' />
                </div>

                <div className={styles.inputBox}>
                <label htmlFor="">
                    Email Address
                </label>
                    <input type="text" placeholder='Your E-Mail...' />
                </div>

                <div className={styles.inputBox}>
                <label htmlFor="">
                    Subject
                </label>
                    <input type="text" placeholder='Subject...' />
                </div>

                <div className={styles.inputBox}>
                <label htmlFor="">
                    Message
                </label>
                <textarea placeholder='Your Message' rows={8}></textarea>

                </div>

                <button type='submit'>Send Message</button>
            </form>
        </div>

       
       </div>
    </div>
  )
}

export default Contact