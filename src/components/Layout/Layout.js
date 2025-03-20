import Header from "./Header/Header";
import styles from "./Layout.module.css"
import Sidebar from "./Sidebar/Sidebar";
import Catalog from "./Catalog/Catalog";
import Pagination from "./Pagination/Pagination";

const Layout = () => {
    return ( 
        <>  
            <Header/>
            <div className={styles.headTitle}>
                <h1>Sizning talablaringizga mos keladigan katalogdan <br/>daraxtlarni tanlang</h1>
                {/* <input type="search" placeholder="Qidirish"/> */}
            </div>
            <div className={styles.main}>
                <Sidebar/>
                <Catalog/>
            </div>
            <Pagination/>
        </>
     );
}
 
export default Layout;