import React from "react";
import {useNavigate} from "react-router-dom"
import logo from "../../../logo/Subtract.png"
import styles from "./Header.module.css"
import Select from "../Select/Select";
import Navbar from "../Navbar/Navbar";
import basket from "../../../logo/shopping-basket.png"
import account from "../../../logo/Vector.png"

function Header() {

    return (
        <div className={styles.header}>
            <div className={styles.logo}>
                <img src={logo}/>
                <div className={styles.logoText}>
                    <h4><span>YASHIL</span> OLAM</h4>
                    <p>Green future is here</p>
                </div>
            </div>
            <Select/>
            <Navbar/>
            <div className={styles.basket}>
                <img src={basket}/>
                <p>Savatcha</p>
            </div>
            <div className={styles.account}>
                <img src={account}/>
                <p>Akkount</p>
            </div>
        </div>
    ) 
}

export default Header;