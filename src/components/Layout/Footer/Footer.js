import styles from "./Footer.module.css"
import logo from "../../../logo/Subtract.png"

const Footer = () => {
    return ( 
        <div className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.logo}>
                    <img src={logo}/>
                    <div className={styles.logoText}>
                        <h4><span>YASHIL</span> OLAM</h4>
                        <p>Green future is here</p>
                        <h5>Mamlakatni ko‘kalamzorlashtirish bo‘yicha bizning harakatimizga qo‘shiling – yil davomida daraxtlarni bepul ekish va parvarish qilish.</h5>
                    </div>  
                </div>
                <div className={styles.footerMenu}>
                    <div>Menyu</div>
                    <div>Kontaktlar</div>
                    <div>Katalog</div>
                    <div>Amir Temur ko'chasi 15-uy</div>
                    <div>Loyiha haqida</div>
                    <div>+998 (XX) XXX-XX-XX</div>
                    <div>Yangiliklar</div>
                    <div>+998 (XX) XXX-XX-XX</div>
                    <div>Xayriya</div>
                    <div>+998 (XX) XXX-XX-XX</div>
                    <div>Kontaktlar</div>
                    <div>+998 (XX) XXX-XX-XX</div>
                    <div>Ro'yxatdan o'tish</div>
                    <div>info@ozeleneniya-servis.ru</div>
                    <div>Savat</div>
                    <div>Dushanba-Juma: 9:00 - 18:00, Shanba-Yakshanba: yopiq</div>
                    <div>Mening buyurtmalarim</div>
                </div>
            </div>
        </div>
     );
}
 
export default Footer;