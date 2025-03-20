import styles from "./Select.module.css"

const Select = () => {
    return ( 
       <select className={styles.language}>
            <option className={styles.option}>O'zbek</option>
            <option className={styles.option}>Русский</option>
            <option className={styles.option}>English</option>
       </select> 
     );
}
 
export default Select;