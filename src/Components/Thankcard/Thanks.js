import React from 'react'
import style from './Thanks.module.css';

const Thanks = () => {
    return (
        <div>
            <div className={style.center}>
  <div className={style.reno}>
    <div className={style.container}>
      <img id={style["pic"]} src="cancel.png" width="5%;"/>
      {/* <button id={style["btn"]}>
        <i className="fa fa-close" />
      </button> */}
      <h2> Thank you</h2>
      <img src="thankyou pic.jpg" width="40%;" />
      <h4>Thank you for sending photographer photos</h4>
      <h4> You will get notified if client send selected photos</h4>
      <button id={style["button"]}>Done</button>
    </div>
  </div>
</div>

        </div>
    )
}

export default Thanks
 