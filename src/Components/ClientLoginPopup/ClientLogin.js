import React from 'react'
import styles from './clientLogin.module.css'
import x from '../Thanku_popup/icons/x-mark-32.png'
import { IoIosInformationCircle , IoIosCheckmark } from "react-icons/io";
const Clientlogin = (props) => {
    return (
        <div>
            <div className={styles.boxWrapper}>
            <div className={styles.box}>
                <img className={styles.cross} onClick={props.handleClose} src={x} alt="cross-icon" />
                <p className={styles.info}>Please provide Client's details</p>

                <form action="" method="POST">
                    <div className={styles.clientlogin}>
                        <div className={styles.emailcredentials}>
                            <label htmlFor ="email">E-mail</label><br/>
                            <div className = "emailcheck"><input type = "email" className = "emailbox" id = "email" /><IoIosCheckmark /></div>
                        </div>
                        <div className={styles.passcredentials}>
                            <label htmlFor ="password">Password</label><br/>
                            <div className = "passcheck"><input type = "password" className = "passwordbox" id ="password" /><IoIosInformationCircle/></div>
                        </div>
                    </div>
                    <button onClick={props.handleClose}>Continue</button>
                </form>
                
            </div>
        </div>
        </div>
    )
}

export default Clientlogin

