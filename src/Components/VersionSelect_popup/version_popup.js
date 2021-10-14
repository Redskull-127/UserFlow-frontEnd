import React from 'react'
import styles from './versionPopup.module.css'
import x from './x-mark-32.png'
const Version = () => {
    return (
        <div className={styles.boxWrapper}>
            <div className={styles.box}>
                <img className={styles.cross} src={x} alt="cross-icon"/>
                <p className={styles.msg}>Select what type of pictures you want</p>
                <label htmlFor="" > Reference Link</label>
                <form action="submit" method="POST">
                    <input className={styles.txtip} type="text" />
                    <button type="submit">Done</button>
                </form>
            </div>
        </div>
    )
}

export default Version
