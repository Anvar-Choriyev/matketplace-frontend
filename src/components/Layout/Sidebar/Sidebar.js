import styles from "./Sidebar.module.css"

const Sidebar = () => {
    return ( 
        <div> 
            <h2>Filtrlash:</h2>
            <div className={styles.sidebar}>
                <select>
                    <option>Daraxt turi</option>
                    <option>Saksaul</option>
                    <option>Zarang</option>
                    <option>Qayrag'och</option>
                    <option>Chinor</option>
                    <option>Shaftoli</option>
                </select>
                <select>
                    <option>Viloyat</option>
                    <option>Andijon</option>
                    <option>Buxoro</option>
                    <option>Samarqand</option>
                    <option>Farg'ona</option>
                    <option>Qashqadaryo</option>
                    <option>Xorazm</option>
                    <option>Toshkent vil.</option>
                    <option>Toshkent</option>
                    <option>Sirdaryo</option>
                    <option>Surxondaryo</option>
                    <option>Namangan</option>
                    <option>Jizzax</option>
                    <option>Navoiy</option>
                    <option>Qoraqalpog'iston</option>
                </select>
                <select>
                    <option>Tuman</option>
                </select>
                <select>
                    <option>Hudud turi</option>
                    <option>Hokimiyat hududi</option>
                    <option>O'rmon hududi</option>
                    <option>Shaxsiy hudud</option>
                </select>
                <select>
                    <option>Narxi dan gacha</option>
                    <option>10000 - 15000 so'm</option>
                    <option>15000 - 20000 so'm</option>
                    <option>20000 - 25000 so'm</option>
                    <option>25000 - 30000 so'm</option>
                </select>
                <button type="submit" className={styles.button}>Tasdiqlash</button>
            </div>
        </div>
     );
}
 
export default Sidebar;