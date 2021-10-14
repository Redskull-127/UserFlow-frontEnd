import React from 'react'
import loading from "./loading.PNG";
import styles from "./popup1.module.css";
import './popup1.css'

const Popup1 = () => {
    const modal = document.querySelector('.my-modal');
        const openBtn = document.querySelector('.open-btn');
        const closeBtn = document.querySelector('.close-btn');
        //open modal
        openBtn.addEventListener('click', () => {
            modal.style.display = 'block';
        })
        //close modal from button
        closeBtn.addEventListener('click', () => {
            modal.style.display = 'none';
        })
        //close modal by clicking outside
        window.addEventListener('click', (e) => {
            if (e.target == modal)
                modal.style.display = 'none';
        })
    return (
        <div>
            <button className={styles.openBtn}>Click here</button>
            <div className={styles.myModal}>
                <div className={styles.modalContent}>
                    <span className={styles.closeBtn}>&times;</span>
                    <p className="bold-text my-heading">Please wait, we are compressing files
                        for photoselection</p>
                    <img src={loading} alt="loading" />
                    <p id="loader-percent"><span className={styles.percentage}>70%</span><br /><span
                        className={styles.done}>Done</span></p><br />
                    <div id="content">
                        <p className={styles.chooseWatermark}>Choose watermark for your pictures
                        </p>
                        <div className={styles.wrapper}>
                            <div className={styles.option}>
                                <input type="checkbox" className={styles.cb} id="photoshooto-checkbox" name="photoshooto-checkbox"
                                    value="checkbox1" />
                                <label className="option-text bold-text" for="photoshooto-checkbox">Photoshooto</label><br />
                            </div>
                            <div className={styles.option}>
                                <input type="checkbox" className={styles.cb} id="my-studio-checkbox" name="my-studio-checkbox"
                                    value="checkbox2" />
                                <label className="option-text bold-text" for="my-studio-checkbox">My studio logo</label><br />
                            </div>
                            <div className={styles.option}>
                                <ion-icon name="cloud-upload-outline" id={styles.uploadIcon}></ion-icon>
                                <p id={styles.logoText}>Insert your logo here</p>
                            </div>
                        </div>
                        <input type="text" id={styles.fname} name="fname" placeholder="Enter name" />
                        <button type="submit" id={styles.continueBtn}>Continue</button>
                    </div>
                </div >
            </div >
        </div >
    )
}

export default Popup1
