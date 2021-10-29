import React from 'react'
import styles from './versionPopup.module.css'
import x from '../Thanku_popup/icons/x-mark-32.png'
const VersionPop = (props) => {
    return (
        <div className={styles.boxWrapper}>
            <div className={styles.box}>
                <img className={styles.cross} src={x} onClick={props.handleClose} alt="cross-icon"/>
                <p className={styles.msg}>Select what type of pictures you want</p>
                <div className={styles.checkboxElements}>
                    <div className={styles.checkboxOut}>
                    <span>Compressed version</span>
                    <input type="checkbox" className={styles.checkboxBox}/>
                    </div>
                    <div className={styles.checkboxOut}>
                    <span>Original version</span>
                    <input type="checkbox" className={styles.checkboxBox}/>
                    </div>
                
                </div>
                
                
                    <button onClick={props.handleClose}>Submit</button>
                
            </div>
        </div>
    )
}

export default VersionPop

