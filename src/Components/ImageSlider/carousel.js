import React, { useRef } from 'react';
import Carousel, { next, previous } from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import styles from './carousel.module.css';
import images from './images';
import { BiLike, BiDislike, BiLeftArrowAlt } from "react-icons/bi";
import { FaMoon } from 'react-icons/fa';
import { flushSync } from 'react-dom';

const MyCarousel = () => {
    const likedImages = []
    const dislikedImages = []
    const reference = useRef()
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 1,
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
        }
    };

    // const ButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
    //     const { carouselState: { currentSlide } } = rest;

    //     const handleDislike = (e, image, index) => {
    //         dislikedImages.push({ id: currentSlide - 1, image: reference.current.currentSrc })
    //         console.log(dislikedImages)
    //         next()
    //     }

    //     const handleLike = (e, image, index) => {
    //         console.log(reference.current.currentSrc)
    //         likedImages.push({ id: currentSlide - 1, image: reference.current.currentSrc })
    //         next()
    //     }

    //     return (
    //         <div className="carousel-button-group">
    //             <BiDislike className="dislike"
    //                 size={60}
    //                 onClick={handleDislike} />
    //             <BiLike className="like"
    //                 size={60}
    //                 onClick={handleLike} />
    //         </div>
    //     );
    // };

    const handleDislike = (e, image, index) => {
        dislikedImages.push({ id: index, image: image })
        console.log(dislikedImages)
        reference.current.next()
    }

    const handleLike = (e, image, index) => {
        // console.log(reference.current.state.currentSlide)
        likedImages.push({ id: index, image: image })
        console.log(likedImages)
        reference.current.next()
    }

    return (
        <div>
            <div className={styles.tophead}>
                <div className={styles.backarrow}>
                    <a href="/"><BiLeftArrowAlt size={50} /></a>
                </div>
                <div className={styles.imagecount}>1 / 243</div>
                <div className={styles.topheadbuttons}>
                    <button className={styles.modebtn}><FaMoon /><p> Mode</p></button>
                    <button>Selected Photos</button>
                    <button>Declined Photos</button>
                </div>
            </div>
            <Carousel ref={reference} responsive={responsive} infinite={true} draggable={false} swipeable={true} arrows={false} renderButtonGroupOutside={true} centerMode={true} >
                {images.map((image, index) => (
                    <div>
                        <div className={styles.images}>
                            <img id="activeimage" src={image.image} className={styles.image} alt="image" key={index} />
                        </div>
                        <div className={styles.likedislikebutton}>
                            <BiDislike
                                className={styles.dislike}
                                size={50}
                                onClick={(e) => handleDislike(e, image.image, index)}
                            />
                            <BiLike
                                className={styles.like}
                                size={50}
                                onClick={(e) => handleLike(e, image.image, index)}
                            />
                        </div>
                    </div>
                ))}
            </Carousel>
        </div>
    );
};

export default MyCarousel
