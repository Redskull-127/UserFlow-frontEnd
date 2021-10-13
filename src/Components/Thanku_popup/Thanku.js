import React from 'react'
import styles from './Thanku.module.css'
import x from './icons/x-mark-32.png'
const Thanks = (props) => {
    return (
        <div className={styles.boxWrapper}>
            <div className={styles.box}>
                <img className={styles.cross} onClick={props.handleClose} src={x} alt="cross-icon" />
                <p className={styles.msg}>Thank You</p>
                <label htmlFor="" > Reference Link</label>
                <form action="submit" method="POST">
                    <input className={styles.txtip} type="text" />
                    <button onClick={props.handleClose}>Done</button>
                </form>
            </div>
        </div>
    )
}

export default Thanks
