import React from 'react'
import styles from './Hellouser.module.css'
import x from '../Thanku_popup/icons/x-mark-32.png'
const Hellouser = (props) => {
    return (
        <div>
            <div className={styles.boxWrapper}>
            <div className={styles.box}>
                <img className={styles.cross} onClick={props.handleClose} src={x} alt="cross-icon" />
                <p className={styles.msg}>Hello,Vishwa</p>
                <p className={styles.info}>Choose the file location</p>
                <form action="" method="POST">
                    <div className={styles.customSelect}>
                        <select name="file" id="file_location">
                            <option value="Photoshooto cloud">Photoshooto cloud</option>
                            <option value="Local document">Local document</option>
                        </select>
                    </div>
                    <button onClick={props.handleClose}>Next</button>
                </form>
            </div>
        </div>
        </div>
    )
}

export default Hellouser

