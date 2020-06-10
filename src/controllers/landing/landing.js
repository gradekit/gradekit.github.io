import React, { useRef } from 'react'
import classes from './style.module.css';
import NavBar from '../../components/NavBar/NavBar';
import ImageGallery from 'react-image-gallery';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import screenshot_1 from '../../assets/screenshot_1.png';
import screenshot_2 from '../../assets/screenshot_2.png';
import screenshot_3 from '../../assets/screenshot_3.png';
import screenshot_4 from '../../assets/screenshot_4.png';
import screenshot_5 from '../../assets/screenshot_5.png';
import screenshot_6 from '../../assets/screenshot_6.png';


const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop-60)   

function Landing() { 
    const landingRef = useRef(null);
    const downloadRef = useRef(null);
    const featuresRef = useRef(null);
    const contactRef = useRef(null);
    const scrollToLanding = () => scrollToRef(landingRef);
    const scrollToDownload = () => scrollToRef(downloadRef);
    const scrollToFeatures = () => scrollToRef(featuresRef);
    const scrollToContact = () => scrollToRef(contactRef);
    const handleOnDragStart = (e) => e.preventDefault()

    return (
        <div className={classes.landingPageContainer}>
            <NavBar onGradeKitClick={scrollToLanding} onDownloadClick={scrollToDownload} onFeaturesClick={scrollToFeatures} onContactClick={scrollToContact}></NavBar>
            <section ref={landingRef} className={classes.landingContainer}>
                <div className={classes.descriptionContainer}>
                    <p className={classes.description}>GradeKit helps students track their GPA</p>
                    <button onClick={()=>scrollToDownload()}>DOWNLOAD NOW, 100% FREE</button>
                </div>
                <div className={classes.screenshotContainer}>
                    <div className={classes.device}>
                        <img className={classes.screenshot}src={screenshot_1} alt="Landing Screenshot"></img>
                    </div>
                </div>
            </section>
            <section ref={downloadRef} className={classes.downloadContainer}>
                <div>
                    DOWNLOAD
                </div>
            </section>
            <section ref={featuresRef} className={classes.featuresContainer}>
                <div className={classes.features}>
                    FEATURES
                </div>
                <div className={classes.carouselContainer}>
                    <AliceCarousel mouseTrackingEnabled>
                    <img src={screenshot_4} onDragStart={handleOnDragStart} className={classes.carouselItem}/>
                    <img src={screenshot_3} onDragStart={handleOnDragStart} className={classes.carouselItem}/>
                    <img src={screenshot_2} onDragStart={handleOnDragStart} className={classes.carouselItem}/>
                    <img src={screenshot_5} onDragStart={handleOnDragStart} className={classes.carouselItem}/>
                    <img src={screenshot_6} onDragStart={handleOnDragStart} className={classes.carouselItem}/>  
                    </AliceCarousel>
                </div>
            </section>
            <section ref={contactRef}>
                <div>
                    CONTACT
                </div>
            </section>
        </div>
    )
}

export default Landing;