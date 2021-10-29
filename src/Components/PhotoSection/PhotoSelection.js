import React from 'react'
import { FaArrowLeft, FaChevronDown,FaGripVertical } from 'react-icons/fa';
import './PhotoSection.css';
import ImagesHandler from './ImagesHandler';
import data from './images';
import MehendhiSection from './MehendhiSection';
import imageData from './MehendhiImages';
export default function PhotoSection(props) {
    return (
        <div>
            <div className="photoSectionContainer">
               <div className="photoSelectionHeader">
                    <div className="headingSection">
                        <a href="/"><FaArrowLeft/></a>
                        <h1 className="headingPhotoSection">{props.heading}</h1>
                    </div>
                    <div className="photoSectionButtons">
                        <button><FaGripVertical/> Grid View <FaChevronDown/></button>
                        <button>Previrew</button>
                    </div>
                    <p className="photoSectionTitle" style={{marginLeft: '40px'}}>{props.imageFolderText}</p>
                </div>   
                        <div className="cardSection">
                            {
                                data.map((image)=>{
                                return <div key={image.key}><ImagesHandler img = {image.imgSrc}/></div>
                            })
                            }
                         </div>
                    <p className="photoSectionTitle">{props.mehandiText}</p>
                        <div className="cardSection">
                            {
                                imageData.map((element)=>{
                                    return <div key={element.key}><MehendhiSection img = {element.img}/></div>
                                })
                            }
                        </div>
             </div>     
        </div>
    )
}
