import styles from "./Catalog.module.css"
import tree1 from "../../../images/photo_2025-03-20_11-16-35.jpg"
import tree2 from "../../../images/photo_2025-03-20_11-09-58.jpg"
import tree3 from "../../../images/photo_2025-03-20_11-10-15.jpg"
import tree4 from "../../../images/photo_2025-03-20_11-10-20.jpg"
import tree5 from "../../../images/photo_2025-03-20_11-10-25.jpg"
import tree6 from "../../../images/photo_2025-03-20_11-10-31.jpg"
import tree7 from "../../../images/photo_2025-03-20_11-10-35.jpg"
import tree8 from "../../../images/photo_2025-03-20_11-14-43.jpg"
import tree9 from "../../../images/photo_2025-03-20_11-14-47.jpg"
import axios from "axios"
import { useEffect, useState } from "react"
const Catalog = () => {
    const [trees, setTrees] = useState()
    useEffect(() => {
        axios.get("http://192.168.241.133:8087/marketplace/api/v1/trees?page=1&size=3")
        .then(response => {
            setTrees(response.data);
        })
    })
    return ( 
        <div>
            <h2>Qidiruv natijalari: <span>(43)</span></h2>
            <div className={styles.catalog}>
                <div>
                    <img src={tree1}/>
                    <div className={styles.info}>
                        <h3>KASHTAN</h3>
                        <span>25,000 so'm</span>
                    </div>
                    <span>Bu daraxtlar bizning iqlim sharoitimizga, ya'ni yozning jaziramasiga va qishning sovuqligiga bardosh beradi.</span>
                </div>
                <div>
                    <img src={tree2}/>
                    <div className={styles.info}>
                        <h3>PENSILVANIYA SHUMTOL</h3>
                        <span>15,000 so'm</span>
                    </div>
                    <span>Boʻyi 15 (20) m gacha yetadigan daraxt. Zaytundoshlar oilasiga mansub oʻsimlik. </span>
                </div>
                <div>
                    <img src={tree3}/>
                    <div className={styles.info}>
                        <h3>GO'ZAL KATALPA</h3>
                        <span>18,000 so'm</span>
                    </div>
                    <span>Och va to‘q tusli bo‘z hamda o‘rtacha sho‘rlangan tuproqlarda yaxshi o‘sadi</span>
                </div>
                <div>
                    <img src={tree4}/>
                    <div className={styles.info}>
                        <h3>ODDIY QAYRAG'OCH</h3>
                        <span>15,000 so'm</span>
                    </div>
                    <span>Koʻchatlar asosan erta bahor (mart) yoki kech kuzda (oktyabr-noyabr) ekiladi</span>
                </div>
                <div>
                    <img src={tree5}/>
                    <div className={styles.info}>
                        <h3>DALA ZARANGI</h3>
                        <span>20,000 so'm</span>
                    </div>
                    <span>Koʻchatlarning tez rivojlanishi uchun ikkinchi yildan boshlab mineral oʻgʻitlar (mart, sugʻoriladigan sharoitda 50 g ammiakli selitra) bilan oziqlantirish tavsiya etiladi.</span>
                </div>
                <div>
                    <img src={tree6}/>
                    <div className={styles.info}>
                        <h3>IPAK AKATSIYASI</h3>
                        <span>18,000 so'm</span>
                    </div>
                    <span>Koʻchatlar asosan erta bahorda (mart) ekiladi. Koʻchatlar ekishdan oldin loy quyqasiga botirib olinadi.</span>
                </div>
                <div>
                    <img src={tree7}/>
                    <div className={styles.info}>
                        <h3>Oq saksovul</h3>
                        <span>50,000 so'm</span>
                    </div>
                    <span>Qurg'oqchilikka chidamli va eroziyaga qarshi kurashadi.</span>
                </div>
                <div>
                    <img src={tree8}/>
                    <div className={styles.info}>
                        <h3>CHINOR</h3>
                        <span>30,000 so'm</span>
                    </div>
                    <span>Koʻchatlar asosan erta bahorda (mart) ekiladi. Koʻchatlar ekishdan oldin loy quyqasiga botirib olinadi.</span>
                </div>
                <div>
                    <img src={tree9}/>
                    <div className={styles.info}>
                        <h3>GLEDICHIYA</h3>
                        <span>30,000 so'm</span>
                    </div>
                    <span>Koʻchatlarini ekish agrotexnikasi: Koʻchatlar asosan erta bahorda (mart) ekiladi. Koʻchatlar ekishdan oldin loy quyqasiga botirib olinadi</span>
                </div>
            </div>
        </div>
     );
}
 
export default Catalog;