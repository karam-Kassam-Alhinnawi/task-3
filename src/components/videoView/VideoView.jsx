import styles from './VideoView.module.css';
import img from  '../../assets/video.jpg';
import video from '../../assets/video-frame.jpg';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const VideoView = () => {
  return (
    <div className={styles.VideoView}>

       <img className={styles.videoViewImg} src={img} alt="" />        

       <div className={styles.videoText}>
       <p>| VIDEO VIEW</p>
       <h2>Get Closer View & Different Feeling</h2>
       </div>

      <div className={styles.videoDiv}>
       <img src={video} alt="" />
       <FontAwesomeIcon icon={faPlay} className={styles.icon} />
      </div>

      <div className={styles.videoStats}>

        <div className={styles.stat}>
          <p>34</p>
          <span>Buliding <br /> Finished Now</span>
        </div>

        <div className={styles.stat}>
        <p>12</p>
        <span>Years <br /> Experience </span>
        </div>

        <div className={styles.stat}>
        <p>24</p>
        <span>Awards <br /> Won 2023</span>
        </div>


      </div>
      
    </div>
  )
}

export default VideoView