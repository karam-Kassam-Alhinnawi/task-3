import styles from './Card.module.css';

const Card = ({cardImg, cardPrice, cardType, cardName, cardBedrooms, cardBathrooms, area, floor, parking }) => {
  return (
       <div className={styles.card}>
        <img src={cardImg} alt="" />

        <div className={styles.cardType}>
            <span>{cardType}</span>
            <span>{cardPrice}</span>
        </div>

        <p className={styles.name}>{cardName}</p>

        <div className={styles.details}>
            <div>
              <p>Bedrooms: {cardBedrooms}</p>
              <p>Area: {area}</p>
              <p>Parking: {parking}</p>
            </div>

            <div>
              <p>Bathrooms: {cardBathrooms}</p>
              <p>Floor: {floor}</p>
            </div>
        </div>

        <button>Schedule a visit</button>

    </div>
  )
}

export default Card