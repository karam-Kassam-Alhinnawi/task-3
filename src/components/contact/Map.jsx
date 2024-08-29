import styles from './Contact.module.css';

const Map = ({className}) => {
  return (
    <div className={`${styles.map} ${className}`}>
        <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11339.6622901742!2d-80.12956069511154!3d25.944782351436526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9acfee073549d%3A0xf4e74db7a5da487a!2sSunny%20Isles%20Beach%2C%20FL%2033160%2C%20USA!5e0!3m2!1sen!2s!4v1724242918357!5m2!1sen!2s" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>     
      </div>
  )
}

export default Map