import styles from "./Navbar.module.css"

const Navbar = () => {
    return ( 
        <ul className={styles.navbar}>
            <li>Katalog</li>
            <li>Loyiha haqida</li>
            <li>Yangiliklar</li>
            <li>Xayriya</li>
            <li>Kontaktlar</li>
        </ul>
     );
}
 
export default Navbar;