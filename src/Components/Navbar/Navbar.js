import React from 'react'
import styles from './Navbar.module.css'
import img from '../../Images/logo-img.svg'
import { Link, NavLink } from "react-router-dom";
import { FaBell } from 'react-icons/fa';


const Navbar = () => {
    return (
        <div className={styles.navContainer}>
            <div className={styles.image}>
                <Link to='/'><img src={img} alt="logo" /></Link>
                <h1 className={styles.heading}>Photoshooto</h1>
            </div>
            <div className={styles.navlink}>
                <NavLink className={styles.link} activeClassName="active" to="/">About Us</NavLink>
                <NavLink className={styles.link} activeClassName="active" to="/">Contact Us</NavLink>
            </div>
            <div className={styles.icons}>
                <div><Link to='/'><FaBell color='white'/></Link></div>
                <div className={styles.profile}></div>
            </div>
        </div>
    )
}

export default Navbar
