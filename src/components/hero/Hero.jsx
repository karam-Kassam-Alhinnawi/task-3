import React from 'react'
import styles from './Hero.module.css';
import { faAnglesRight } from '@fortawesome/free-solid-svg-icons';
import { faAnglesLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


// Importing props such as, Images, a heading for the H1, and the name of the country and the city
const Hero = ({heroImg1, heroImg2, heroImg3, heading, country, city}) => {

  // the index of the slides
  let index = 0;

  // The updateSlider function takes all of the imgs and loop over them and then displays the images
  const updateSlider = () => {
    let imgs = document.querySelectorAll(`.${styles.slide}`);
    imgs.forEach((img, i) => {
      img.style.display = i === index ? 'block' : 'none'
    });

    // This is for the dots that are on the hero section
    let heroDots = document.querySelectorAll(`.${styles.heroDots}`);
    heroDots.forEach((dot, i) => {
      dot.className = i === index ? `${styles.dot} ${styles.active}` : styles.dot
    })
  }

  // This will make the hero dots work by changing the index of the slides
  const handleheroDotsCount = (number) => {
     index = number;
     updateSlider();
  }

  const handleNextImage = () => {
    index = (index + 1) % 3;
    updateSlider();
  }
  
  const handlePrevImage = () => {
    index = (index - 1 + 3) % 3;
    updateSlider()
  }

  updateSlider();

  return (
    <div className={styles.slider}>
      <div className={styles.slides}>


      <div className={styles.hero}>
        <p>{city}, <span>{country}</span></p>
        <h1>{heading}</h1>
      </div>


        <img src={heroImg1} className={styles.slide} alt="" />
        <img src={heroImg2} className={styles.slide} alt="" />
        <img src={heroImg3} className={styles.slide} alt="" />
      </div>


       <FontAwesomeIcon icon={faAnglesLeft} onClick={handlePrevImage} size='xl' className={styles.prev}/>
       <FontAwesomeIcon icon={faAnglesRight} size='xl' onClick={handleNextImage} className={styles.next}/>


      <div className={styles.dots}>
        <span className={styles.dot} onClick={() => handleheroDotsCount(0)}></span>
        <span className={styles.dot} onClick={() => handleheroDotsCount(1)}></span>
        <span className={styles.dot} onClick={() => handleheroDotsCount(2)}></span>
      </div>


    </div>
  )
}

export default Hero