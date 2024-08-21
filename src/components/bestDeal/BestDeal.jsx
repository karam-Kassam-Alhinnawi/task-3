import styles from './BestDeal.module.css';
import bestDealImg from '../../assets/deal-01.jpg'

const BestDeal = ({button1Name, button2Name, button3Name, property1Title, property1Desc,
   property2Title, property2Desc, property3Title, property3Desc, property4Title, property4Desc,
   property5Title, property5Desc
  }) => {


      let button = document.querySelectorAll(`.${styles.btn}`);
       button.forEach((btn) => {
         btn.addEventListener('click', () => {
           if(btn.classList === styles.active){
             btn.classList.remove(`${styles.active}`)
            } else{
              btn.classList.add(`${styles.active}`)
          }
         })
       })
       

  return (
    <div className={styles.bestDeal} id='property'>
       <div className={styles.bestDealTopSection}>
        
        <div>
        <p>| BEST DEAL</p>
        <h2>Find Your Best <br /> Deal Right Now!</h2>
        </div>

        <div className={styles.buttons}>
            <button className={styles.btn}>{button1Name}</button>
            <button className={styles.btn}>{button2Name}</button>
            <button className={styles.btn}>{button3Name}</button>
        </div>

       </div>

       <div className={styles.bestDealBottomSection}>

       <div className={styles.properties}>
            
            <div className={styles.property}>              

              <p>{property1Desc}</p>
              <p className={styles.boldTitle}>{property1Title}</p>
   
            </div>
   
            <div className={styles.property}>   

              <p>{property2Desc}</p>
              <p className={styles.boldTitle}>{property2Title}</p>
   
            </div>
   
            <div className={styles.property}>
   
             <p>{property3Desc}</p>
             <p className={styles.boldTitle}>{property3Title}</p>
   
            </div>
   
            <div className={styles.property}>
   
              <p>{property4Desc}</p>
              <p className={styles.boldTitle}>{property4Title}</p>
   
            </div>

            <div className={styles.property}>
   
              <p>{property5Desc}</p>
              <p className={styles.boldTitle}>{property5Title}</p>
   
            </div>
   
        </div>

        <img src={bestDealImg} alt="" />

        <div className={styles.info}>
           <p>Extra Info About Property</p>
           <p>Lorem ipsum odor amet, consectetuer adipiscing elit. Nulla vel vehicula parturient metus cursus. Cras orci cubilia finibus natoque luctus, scelerisque ornare pulvinar. Penatibus non posuere eu congue</p> 
           <p>magnis risus efficitur dolor hendrerit. Risus velit dignissim parturient dui odio curabitur ante ultrices iaculis. Etiam facilisi hendrerit purus scelerisque litora eros etiam. Euismod nisi montes sociosqu, cras sollicitudin ad tincidunt sit maximus.</p>
           <button className={styles.Button}>Schedule a visit</button>

        </div>

       </div>
    </div>
  )
}

export default BestDeal