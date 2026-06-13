import Button from "./Button";
import { useState } from "react";

function HeaderAboutWork() {

    function onMouseEnter(e) {
        e.target.style.color = '#60E1CB';
        e.target.style.borderColor = '#60E1CB';
    }

    function onMouseLeave(e) {
        e.target.style.color = '#7BC0E3';
        e.target.style.borderColor = '#7BC0E3';
    }

    const btnStyle = {
        background: 'none',
        margin: 'none',
        border: '1px solid #7BC0E3',
        color: '#7BC0E3',
        padding: '10px 20px',
        borderRadius: '20px',
        cursor: 'pointer',
        fontSize: '16px',
    };

    const aboutWorkStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexFlow: 'Column nowrap',
        gap: '15px',
        margin: '20px'
    };

    const aboutWorkTitleStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexFlow: 'Column nowrap',
        gap: '25px'
    }

    const subtitleStyle = {
        color: '#7BC0E3',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        letterSpacing: '2px',
        fontSize: '14px',
        marginBottom: '10px',
        display: 'block'
    }

    const titleStyle = {
        color: '#FFFFFF',
        paddingTop: '10px',
        fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
        fontWeight: '800',
        fontSize: '46px',
        margin: 0
    };

    const aboutWorkBtnStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexFlow: 'row wrap',
        gap: '50px'
    }

    const webServiceImages = [
        "/images/web1.png",
        "/images/web2.png",
        "/images/web3.png",
        "/images/web4.png",
        "/images/web5.png"
    ];

    const aiServiceImages = [
        "/images/ai1.png",
        "/images/ai2.png",
        "/images/ai3.png",
        "/images/ai4.png",
        "/images/ai5.png"
    ];

    const seoServiceImages = [
        "/images/seo1.png",
        "/images/seo2.png",
        "/images/seo3.png"
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [currentImages, setCurrentImages] = useState(webServiceImages);

    const handlePrev = () => {
        setCurrentIndex((prev) => (prev - 1 + currentImages.length) % currentImages.length);
    };

    const handleNext = () => {
        setCurrentIndex((prev) => (prev + 1) % currentImages.length);
    };

    const handleCategoryClick = (e, newImages) => {
        e.preventDefault();
        setCurrentImages(newImages);
        setCurrentIndex(0);
    };

    const carouselStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '80px',
        marginTop: '50px',
        width: '100%',
    };

    const arrowBtnStyle = {
        background: 'none',
        border: 'none',
        color: '#60E1CB',
        fontSize: '60px',
        cursor: 'pointer',
        padding: '0 20px',
        transition: 'color 0.3s ease',
    };

    const imageContainerStyle = {
        display: 'flex',
        gap: '60px',
        overflow: 'hidden',
        justifyContent: 'center',
        alignItems: 'center',
        minWidth: '450px',
        minHeight: '350px'
    };

    const visibleImages = (images) => [
        images[(currentIndex - 1 + images.length) % images.length],
        images[currentIndex],
        images[(currentIndex + 1) % images.length]
    ];

    return (
        <div className="aboutwork-main" style={aboutWorkStyle}>
            <div className="aboutwork-title" style={aboutWorkTitleStyle}>
                <span style={subtitleStyle}>Portfolio</span>
                <h3 style={titleStyle}>Our Great <span style={{color: '#60E1CB'}}>Work</span></h3>
                <div className="aboutwork-btn" style={aboutWorkBtnStyle}>
                    <Button textbtn={'Website Development'} href={''} onClick={(e) => handleCategoryClick(e, webServiceImages)} style={btnStyle} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}/>
                    <Button textbtn={'AI Automation & Integration'} href={''} onClick={(e) => handleCategoryClick(e, aiServiceImages)} style={btnStyle} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}/>
                    <Button textbtn={'Search Engine Optimization'} href={''} onClick={(e) => handleCategoryClick(e, seoServiceImages)} style={btnStyle} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}/>
                </div>
            </div>
            <div className="aboutWorkCarousel" style={carouselStyle}>
                <button 
                    style={arrowBtnStyle} 
                    onClick={handlePrev}
                    onMouseEnter={(e) => e.target.style.color = '#7BC0E3'}
                    onMouseLeave={(e) => e.target.style.color = '#60E1CB'}
                >
                    &lt;
                </button>
                <div style={imageContainerStyle}>
                    {visibleImages(currentImages).map((src, idx) => (
                        <img 
                            key={`${src}-${idx}`} 
                            src={src} 
                            alt={`carousel-item-${idx}`} 
                            style={{
                                width: idx === 1 ? '450px' : '250px', 
                                height: idx === 1 ? '250px' : '150px',
                                objectFit: 'contain',
                                transition: 'all 0.4s ease-in-out',
                                opacity: idx === 1 ? 1 : 0.5,
                                transform: idx === 1 ? 'scale(1.1)' : 'scale(1)',
                                filter: idx === 1 ? 'drop-shadow(0 10px 15px rgba(96, 225, 203, 0.3))' : 'none',
                                borderRadius: '20px',
                                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                                padding: '10px'
                            }} 
                        />
                    ))}
                </div>
                <button 
                    style={arrowBtnStyle} 
                    onClick={handleNext}
                    onMouseEnter={(e) => e.target.style.color = '#7BC0E3'}
                    onMouseLeave={(e) => e.target.style.color = '#60E1CB'}
                >
                    &gt;
                </button>
            </div>
        </div>
    );
}

export default HeaderAboutWork;