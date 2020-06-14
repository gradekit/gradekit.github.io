import React, { useRef, useState, useEffect } from 'react'
import classes from './style.module.css';
import NavBar from '../../components/NavBar/NavBar';
import AliceCarousel from 'react-alice-carousel';
import { HashLink as Link } from 'react-router-hash-link';
import 'react-alice-carousel/lib/alice-carousel.css';
import screenshot_1 from '../../assets/screenshot_1.png';
import screenshot_2 from '../../assets/screenshot_2.png';
import screenshot_3 from '../../assets/screenshot_3.png';
import screenshot_4 from '../../assets/screenshot_4.png';
import screenshot_5 from '../../assets/screenshot_5.png';
import screenshot_6 from '../../assets/screenshot_6.png';
import app_store_badge from '../../assets/app_store_badge.svg';
import github_logo from '../../assets/github.svg';
import linkedin_logo from '../../assets/linkedin.svg';
import personal_icon from '../../assets/personal_icon.png';


function Landing() { 
    const landingRef = useRef(null);
    const downloadRef = useRef(null);
    const featuresRef = useRef(null);
    const contactRef = useRef(null);
    const [offset, setOffset] = useState(window.innerHeight*0.08);
    const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop-offset)   
    const scrollToLanding = () => scrollToRef(landingRef);
    const scrollToDownload = () => scrollToRef(downloadRef);
    const scrollToFeatures = () => scrollToRef(featuresRef);
    const scrollToContact = () => scrollToRef(contactRef);
    const handleOnDragStart = (e) => e.preventDefault();

    useEffect(() => {
        function handleResize() {
            setOffset(window.innerHeight*0.08);
        }
      
        window.addEventListener('resize', handleResize);
    }, []);

    return (
        <div className={classes.landingPageContainer}>
            <NavBar onGradeKitClick={scrollToLanding} onDownloadClick={scrollToDownload} onFeaturesClick={scrollToFeatures} onContactClick={scrollToContact}></NavBar>
            <section ref={landingRef} className={classes.landingContainer}>
                <div className={classes.descriptionContainer}>
                    <p className={classes.description}>GradeKit helps students track their GPA</p>
                    <button className={classes.downloadButton} onClick={()=>scrollToDownload()}>DOWNLOAD NOW, 100% FREE</button>
                </div>
                <div className={classes.screenshotContainer}>
                    <div className={classes.device}>
                        <img className={classes.screenshot}src={screenshot_1} alt="Landing Screenshot"></img>
                    </div>
                </div>
            </section>
            <section ref={downloadRef} className={classes.downloadContainer}>
                <p className={classes.downloadTitle}>The most detailed and personalizable GPA & Grade Tracker out there.</p>
                <a className={classes.downloadLink} href="https://apps.apple.com/app/id1516769736">
                    <img src={app_store_badge} alt="app_store_badge"></img>
                </a>
            </section>
            <section ref={featuresRef} className={classes.featuresContainer}>
                <div className={classes.features}>
                    <div className={classes.featuresRow}>
                        <div className={classes.feature}>GPA & Grade Tracker</div>
                        <div className={classes.feature}>See how your scores affect your GPA</div>
                    </div>
                    <div className={classes.featuresRow}>
                        <div className={classes.feature}>Custom Grading Scales</div>
                        <div className={classes.feature}>Hide courses/assignments from tracking</div>
                    </div>
                </div>
                <div className={classes.carouselContainer}>
                    <AliceCarousel mouseTrackingEnabled>
                    <img src={screenshot_4} onDragStart={handleOnDragStart} className={classes.carouselItem} alt="screenshot"/>
                    <img src={screenshot_3} onDragStart={handleOnDragStart} className={classes.carouselItem} alt="screenshot"/>
                    <img src={screenshot_2} onDragStart={handleOnDragStart} className={classes.carouselItem} alt="screenshot"/>
                    <img src={screenshot_5} onDragStart={handleOnDragStart} className={classes.carouselItem} alt="screenshot"/>
                    <img src={screenshot_6} onDragStart={handleOnDragStart} className={classes.carouselItem} alt="screenshot"/>  
                    </AliceCarousel>
                </div>
            </section>
            <section ref={contactRef} className={classes.contactContainer}>
                <div className={classes.personalContainer}>
                    <p className={classes.name}>
                        Korman Chen
                    </p>
                    <div className={classes.logos}>
                        <a href="https://kchen97.github.io/home/" rel="noopener noreferrer" target="_blank">
                            <img className={classes.logo} src={personal_icon} alt="logo"></img>
                        </a>
                        <a href="https://github.com/kchen97" rel="noopener noreferrer" target="_blank">
                            <img className={classes.logo} src={github_logo} alt="logo"></img>
                        </a>
                        <a href="https://www.linkedin.com/in/kormanchen/" rel="noopener noreferrer" target="_blank" style={{marginLeft: "10px"}}>
                            <img className={classes.logo} src={linkedin_logo} alt="logo"></img>
                        </a>
                    </div>
                </div>
                <div>
                <div className={classes.personalContainer}>
                    <p className={classes.name}>
                        Kevin Diec
                    </p>
                    <div className={classes.logos}>
                        <a href="https://3kevind.github.io/kevindiec/" target="_blank" rel="noopener noreferrer">
                            <img className={classes.logo} src={personal_icon} alt="logo"></img>
                        </a>
                        <a href="https://github.com/3kevind/" target="_blank" rel="noopener noreferrer">
                            <img className={classes.logo} src={github_logo} alt="logo"></img>
                        </a>
                        <a href="https://www.linkedin.com/in/kevin-diec/" target="_blank" rel="noopener noreferrer" style={{marginLeft: "10px"}}>
                            <img className={classes.logo} src={linkedin_logo} alt="logo"></img>
                        </a>
                    </div>
                </div>
            </div>
            </section>
            <section className={classes.footer}>
                <Link to="/privacy" style={{color: "rgba(81,171,242,1)"}}>Privacy Policy</Link>
                <Link to="/terms" style={{color: "rgba(81,171,242,1)"}}>Terms</Link>
            </section>
        </div>
    )
}

export default Landing;