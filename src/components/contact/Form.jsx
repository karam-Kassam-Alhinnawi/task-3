import styles from './Contact.module.css'

const Form = ({height, className}) => {
  return (
        <div className={`${styles.form} ${className}`}>
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
  )
}

export default Form