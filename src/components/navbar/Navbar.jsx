import styles from './Navbar.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { NavLink, useNavigate } from 'react-router-dom';

export const Navbar = () => {

    let isOpen = false;

    const toggleMenu = () => {
      const menu = document.getElementById('navbarMenu');
      isOpen = !isOpen;
      menu.style.display = isOpen ? 'flex' : 'none';
    };  

    const navigate = useNavigate();

  return (
    <nav className={styles.navbar}>
        <div className={styles.brandTitle} onClick={() => navigate('/')} style={{cursor: 'pointer'}}>VILLA</div>

      <FontAwesomeIcon icon={faBars} className={styles.icon} onClick={toggleMenu}/>
 
        <div id='navbarMenu' className={styles.navbarLinks}>
             <ul>
                <li><NavLink to='/' className={({ isActive, isPending }) => isPending ? "pending" : isActive ? styles.activeLink : '' }>Home</NavLink></li>
                <li><NavLink to='/properties' className={({ isActive, isPending }) => isPending ? "pending" : isActive ? styles.activeLink : '' }>Properties</NavLink></li>
                <li><NavLink to='/details' className={({ isActive, isPending }) => isPending ? "pending" : isActive ? styles.activeLink : '' }>Property Details</NavLink></li>
                <li><NavLink to='/contact' className={({ isActive, isPending }) => isPending ? "pending" : isActive ? styles.activeLink : '' }>Contact us</NavLink></li>
            </ul>

        <button className={styles.navbarButton}>Schedule a visit</button>
        </div> 


    </nav>
  );
};
 