import styles from './Accordian.module.css';

const Accordian = ({label, content, isOpen, onClick}) => {

  return (
    <div className={styles.accordion} >

         <div className={`${styles.Maincontent} ${isOpen ? styles.active : ''}`} >
            <div className={styles.label} onClick={onClick}>
                <span style={{color: isOpen ? 'orangered' : 'black'}}>{label}</span>
                </div>
             <div className={styles.content}>
                 {isOpen && <p>{content}</p>}
                </div>
            </div>

          </div>
  )
}

export default Accordian