import React from 'react'
import './popup2.css'
import loading from './loading.PNG'

const Popup2 = () => {
    return (
        <div>
            <button class="open-btn">Click here</button>
            <div class="my-modal">
                <div class="modal-content">
                    <span class="close-btn">&times;</span>
                    <p class="bold-text" style="text-align: center; margin-bottom: 15px;">Please wait, we are compressing files
                        for photoselection</p>
                    <img src={loading} alt="loading" />
                    <p id="loader-percent"><span style="color: rgb(0, 212, 0);">70%</span><br /><span
                        style="color: rgba(104, 104, 104, 0.973);">Done</span></p><br />
                    <div id="content">
                        <p style="margin-bottom: 10px; color: rgba(104, 104, 104, 0.973);">Choose watermark for your pictures
                        </p>
                        <div class="wrapper">
                            <div class="option">
                                <input type="checkbox" class="cb" id="photoshooto-checkbox" name="photoshooto-checkbox"
                                    value="checkbox1" />
                                <label class="option-text bold-text" for="photoshooto-checkbox">Photoshooto</label><br />
                            </div>
                            <div class="option">
                                <input type="checkbox" class="cb" id="my-studio-checkbox" name="my-studio-checkbox"
                                    value="checkbox2" />
                                <label class="option-text bold-text" for="my-studio-checkbox">My studio logo</label><br />
                            </div>
                            <div class="option">
                                <ion-icon name="cloud-upload-outline" id="upload-icon"></ion-icon>
                                <p id="logo-text">Insert your logo here</p>
                            </div>
                        </div>
                        <button type="submit" id="continue-btn">Continue</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Popup2
