import styles from './Navbar.module.css';
import { TopLinks } from '../TopLinks/TopLinks';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

export const Navbar = () => {

    let isOpen = false;

    const toggleMenu = () => {
      const menu = document.getElementById('navbarMenu');
      isOpen = !isOpen;
      menu.style.display = isOpen ? 'flex' : 'none';
    };  

  return (
    <nav className={styles.navbar}>
        <div className={styles.brandTitle}>VILLA</div>

      <FontAwesomeIcon icon={faBars} className={styles.icon} onClick={toggleMenu}/>
 
        <div id='navbarMenu' className={styles.navbarLinks}>
             <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#property">Properties</a></li>
                <li><a href="#properties">Property Details</a></li>
                <li><a href="">Contact us</a></li>
            </ul>

        <button className={styles.navbarButton}>Schedule a visit</button>
        </div> 


    </nav>
  );
};
 