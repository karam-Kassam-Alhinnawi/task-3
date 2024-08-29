import styles from './Details.module.css'

import PageHeader from "../../components/pageHeader/PageHeader"
import image from '../../assets/property-01.jpg'
import Properties from "../../components/properties/Properties"
import MainAccordian from '../../components/accordian/MainAccordian'
import BestDeal from '../../components/bestDeal/BestDeal'

const Details = () => {
  return (
    <div className={styles.container}>
      <PageHeader PageName='Details'/>

      <div className={styles.propertyDetails}>
        <div className={styles.ApartmentDetails}>
        <img src={image} id={styles.propertyDetailsImg} alt="" />

        <div className={styles.cardType}>
            <span>Apartment</span>
            <p>24 New Street Miami, OR 24560</p>
            <hr />
        </div>

        <div className={styles.desc}>
        <p>Lorem ipsum dolor sit amet consectetur <span>dolor</span> elit. Asperiores quas architecto ullam aliquid autem voluptate porro adipisci? Quam pariatur velit ea, quibusdam laborum quos, nemo impedit autem molestias quas ad.</p>
        <p>Lorem ipsum dolor sit amet consectetur <a href="#">Here Is a link</a> elit. Asperiores quas architecto ullam aliquid autem voluptate porro adipisci? Quam pariatur velit ea, quibusdam laborum quos, nemo impedit autem molestias quas ad.</p>
      </div>

      <div className={styles.accordian}>
      <MainAccordian/>
      </div>
        </div>
      <Properties/>
      </div> 

     <BestDeal/>

    </div>
  )
}

export default Details