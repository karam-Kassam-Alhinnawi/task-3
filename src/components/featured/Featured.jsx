import styles from './Featured.module.css';


const Featured = ({featuredImg, featuredIcon, property1Img, property1Title, property1Desc, property2Img, property2Title, property2Desc, property3Img, property3Title, property3Desc, property4Img, property4Title, property4Desc}) => {

  const accordionItems = document.querySelectorAll(`.${styles.Maincontent}`);

  accordionItems.forEach(item => {
    item.addEventListener('click', () => {
      item.classList.add(`active`)
    });
  });

  
  return (
    <div className={styles.featured}>

       <div className={styles.imgsDiv}>
        <img className={styles.img2} src={featuredIcon} alt="" />
        <img src={featuredImg} alt="" />
       </div>

       <div className={styles.featuredApartment}>
          <p>| FEATURED</p>
          <p>Best Apartment & Sea View</p>
          
          <div className={styles.accordion}>

            <div className={`${styles.Maincontent} ${styles.active}`}>
               <div className={styles.label}>List One</div>
               <div className={styles.content}>
               <p>Lorem ipsum dolor sit amet, consectetur adipiscing  ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
               </div>
            </div>
            <div className={styles.Maincontent}>
               <div className={styles.label}>List Two</div>
               <div className={styles.content}>
               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
               </div>
            </div>
            <div className={styles.Maincontent}>
               <div className={styles.label}>List Three</div>
               <div className={styles.content}>
               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
               </div>
            </div>

          </div>


       </div>
          
        <div className={styles.properties}>
            
         <div className={styles.property}>
           <img src={property1Img} alt="" />
           
           <div className={styles.propertyText}>
           <p className={styles.boldTitle}>{property1Title}</p>
           <p>{property1Desc}</p>
           </div>

         </div>

         <div className={styles.property}>
           <img src={property2Img} alt="" />

           <div className={styles.propertyText}>
           <p className={styles.boldTitle}>{property2Title}</p>
           <p>{property2Desc}</p>
           </div>

         </div>

         <div className={styles.property}>
           
           <div className={styles.paddingTop}>
           <img src={property3Img} alt="" />
           <p>Process</p>
           </div>

          <div>
          <p className={styles.boldTitle}>{property3Title}</p>
          <p>{property3Desc}</p>
          </div>
           

         </div>

         <div className={`${styles.property} ${styles.noUnderline}`}>
          
          <div className={styles.paddingTop}>
          <img src={property4Img} alt="" />
          <p>Control</p>
          </div>

           <div className={styles.propertyText}>
           <p className={styles.boldTitle}>{property4Title}</p>
           <p>{property4Desc}</p>
           </div>

         </div>

        </div>


    </div>
  )
}

export default Featured