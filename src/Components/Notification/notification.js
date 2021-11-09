import React from 'react'
import { FaArrowLeft, FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import { BsThreeDots } from "react-icons/bs";
import notificationContent from './notificationContent.json';
import './notificationStyle.css';

export default function Notification(props) {
    return (
        <div>
            
            <div className = "notificationContainer">

                <div className="headingSection">
                    <a href="/"><FaArrowLeft/></a>
                    <h1 className="notificationHeading">{props.heading}</h1>
                </div>

                <div className = "contentSection">

                    <div className = "mainContent">
                            
                                {
                                    notificationContent.map((noti, index) =>{
                                        
                                        const colors = ['green', 'yellow', 'blue', 'red'];
                                        console.log(index%4, colors[index%4]);

                                        return<div className = "cardView">

                                            <div className = "leftview">
                                                <div className="imageicondiv"><img className="imageicon" src = "data:image/png;base64,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" /></div>
                                                <div className = "centerMsg">
                                                    <div className = "name">{noti.name}</div>
                                                    <div className = "notificationMsg" style={{color: colors[index%4]}}>{noti.notification}</div>
                                                </div>
                                            </div>
                                            
                                            <div className = "rightview">
                                                <div className = "threedots"><BsThreeDots/></div>
                                                <div className = "time">{noti.time}</div>
                                            
                                            </div>

                                        </div>

                                    })
                                }
                            
                    </div>


                    <div className = "sideContent">
                                <div className = "about">
                                    <ul>
                                        <li className = "sidetxt">About</li>
                                        <li className = "sidetxt">Contact us</li>
                                        <li className = "sidetxt">FAQ</li>
                                        <li className = "sidetxt">Terms & conditions</li>
                                    </ul>
                                </div>
                                <div className = "socialmedia">
                                    <div className = "facebook"><p className = "sidetxt"><FaFacebookF/>  Facebook</p></div>
                                    <div className = "twitter"><p className = "sidetxt"><FaTwitter/>  Twitter</p></div>
                                    <div className = "instagram"><p className = "sidetxt"><FaInstagram/>  Instagram</p></div>
                                </div>
                    </div>
                </div>

                
                
            </div>
        </div>
    )
}