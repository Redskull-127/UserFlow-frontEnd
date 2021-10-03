import React from 'react'
import styles from './Footer.module.css'
import logo from '../../Images/logo-img.svg'
const Footer = () => {
    return (
        <div>
            <footer className={styles.footwrapper}>
                <div className={styles.logo}>
                    <img src={logo} alt="logo-img" />
                    <span>Photoshooto</span>
                    <span className={styles.website}><a href="/"> Photoshooto.com </a></span>
                </div>
                <div className={styles.links}>
                    <ul>
                        <li> <a href="/"> About Us </a></li>
                        <li> <a href="/"> Contact </a> </li>
                        <li> <a href="/">Terms & Conditions</a></li>
                    </ul>
                </div>
                <div className={styles.social}>
                    <ul>
                        <li> <a href="/"><i class="fab fa-facebook-f"></i>f {'\u00A0 \u00A0'}  Facebook </a> </li>
                        <li> <a href="/"><i class="fab fa-twitter"></i>t {'\u00A0 \u00A0'} Twitter </a> </li>
                        <li> <a href="/"><i class="fab fa-instagram"></i>i {'\u00A0 \u00A0'} Instagram </a> </li>
                    </ul>
                </div>
                <div className={styles.email}>
                    <span>Subscribe to our newsletter</span> <br />
                    <input className={styles.ipbox} type="email" name="email-id" placeholder="Email Address"/>
                    <button type="submit" >OK</button>
                </div>
                <div className={styles.address}>
                    <p>Banglore,jaynagar </p>
                    <p> +91 98 4567 8903 </p>
                    <p> Photoshooto@gmail.com</p>
                </div>
            </footer>
        </div>
    )
}
export default Footer
