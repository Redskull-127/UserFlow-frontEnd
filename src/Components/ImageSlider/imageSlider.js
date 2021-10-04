import React, { useState } from 'react';
import { CarouselWrapper, next, presentIndex } from "react-pretty-carousel";
import images from './images';
import styles from './imageSlider.module.css'
import './imageSlider.css'
import { BiLike, BiDislike } from "react-icons/bi";
import { FaArrowLeft, FaChevronDown, FaGripVertical } from 'react-icons/fa';

const ImageSlider = () => {
    const likedImages = []
    const dislikedImages = []

    const handleDislike = (e, image) => {
        // console.log(key)
        if (e.target.classList.contains("dislikeselected")) {
            e.target.classList.remove("dislikeselected")
        } else {
            e.target.classList.add("dislikeselected")
        }
        moveToNext()
        setInterval(() => {
            if (e.target.classList.contains("dislikeselected")) {
                e.target.classList.remove("dislikeselected")
            }
        }, 500);
        dislikedImages.push({ id: presentIndex, image: image })
        console.log(dislikedImages)

    }

    const moveToNext = () => {
        next()
    }

    const handleLike = (e, index) => {
        console.log(presentIndex)
        console.log(index)
        if (e.target.classList.contains("likeselected")) {
            e.target.classList.remove("likeselected")
        } else {
            e.target.classList.add("likeselected")
        }
        moveToNext()
        setInterval(() => {
            if (e.target.classList.contains("likeselected")) {
                e.target.classList.remove("likeselected")
            }
        }, 500);
        likedImages.push({ id: likedImages.length + 1, image: index.image })
        console.log(likedImages)
    }

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <div className={styles.headingSection}>
                    <a href="/"><FaArrowLeft /></a>
                </div>
                <div className={styles.headerButtons}>
                    <button>Mode</button>
                    <button>Selected Photos</button>
                </div>
                {/* <p className="photoSectionTitle" style={{ marginLeft: '40px' }}>{props.imageFolderText}</p> */}
            </div>
            <CarouselWrapper items={3} mode="gallery" showControls={false}>
                {images.map((image) => (
                    <img id="activeimage" src={image.image} className={styles.image} alt="" key={image.id} />
                ))}
            </CarouselWrapper>
            <div className={styles.likedislikebutton}>
                <BiDislike
                    className={styles.dislike}
                    size={60}
                    onClick={(e) => handleDislike(e, document.getElementById("activeimage").src)}
                />
                <BiLike
                    className={styles.like}
                    size={60}
                    onClick={(e) => handleLike(e, document.getElementById("activeimage").src)} />
            </div>
        </div>
    )
}

export default ImageSlider
