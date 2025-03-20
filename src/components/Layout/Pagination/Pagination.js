import styles from "./Pagination.module.css"
import repeat from "../../../logo/redo.png"
import left from "../../../logo/angle-left-b.png"
import right from "../../../logo/angle-right.png"

const Pagination = () => {
    return ( 
        <div className={styles.pages}>
            <div className={styles.pagination}>
                <a href="#"><img src={left}/></a>
                <a href="#">1</a>
                <a href="#">2</a>
                <a href="#">3</a>
                <a href="#">4</a>
                <a href="#">...</a>
                <a href="#"><img src={right}/></a>
                <a href="#"><img src={right}/></a>
            </div>
            <button><img src={repeat}/> Batafsil</button>
        </div>
     );
}
 
export default Pagination;