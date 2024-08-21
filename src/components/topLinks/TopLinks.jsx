import styles from "./TopLinks.module.css";
import emailImg from '../../assets/email-icon.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";


export const TopLinks = () => {

  return (
    <div className={styles.TopLinks}>
      {/* The Div For the companie's info */}
      <div className={styles.info}>

        <div className={styles.mainInfo}>
         <img src={emailImg} alt="" />
         <p>info@company.com</p>
        </div>

        <div className={styles.verticalLine}></div> 
        {/* This Div Is Made To Make a Vertical Line Between The Two Div's */}

        <div className={styles.mainInfo}>
         <img src={emailImg} alt="" />
         <p>Sunny Isles Beach, FL 33160</p>
        </div>

      </div>

      {/* This Div Is for the Social Media Icons */}

      <div className={styles.icons}>
       <FontAwesomeIcon icon={faFacebook} size="lg" className={styles.icon}/>
       <FontAwesomeIcon icon={faTwitter} size="lg" className={styles.icon}/>
       <FontAwesomeIcon icon={faLinkedin} size="lg" className={styles.icon}/>
       <FontAwesomeIcon icon={faInstagram} size="lg" className={styles.icon}/>
      </div>


    </div>
  )
}
