import { useState, useEffect } from 'react';

function HeaderHappyWork() {
    const [activeIndex, setActiveIndex] = useState(0);

    const ratings = [
        {
            rating: 5,
            description: 'This company is amazing! They built a great website for us and we are very happy with the result. The team was very professional and easy to work with from start to finish.',
            prfPic: '',
            name: 'Somasree Nandi',
            role: 'Owner, Nandi Enterprises'
        },
        {
            rating: 5,
            description: 'Codedex Solutions transformed our online presence. Their attention to detail and modern design approach completely elevated our brand. Highly recommend their services!',
            prfPic: '',
            name: 'Michael Chen',
            role: 'CEO, TechFlow SaaS'
        },
        {
            rating: 5,
            description: 'The agile methodology they used kept us in the loop throughout the entire development process. The final product was delivered on time and exceeded our expectations.',
            prfPic: '',
            name: 'Sarah Jenkins',
            role: 'Marketing Director, CloudSync'
        },
        {
            rating: 5,
            description: 'Exceptional service and outstanding communication. They delivered a robust, scalable web application that perfectly meets our business needs. We will definitely work with them again.',
            prfPic: '',
            name: 'David R.',
            role: 'Founder, StartupX'
        }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % ratings.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [ratings.length]);

    const handlePrev = () => {
        setActiveIndex((prev) => (prev === 0 ? ratings.length - 1 : prev - 1));
    };

    const handleNext = () => {
        setActiveIndex((prev) => (prev + 1) % ratings.length);
    };

    const sectionStyle = {
        padding: '100px 20px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
        width: '100%',
        overflow: 'hidden',
        position: 'relative'
    };

    const headerContainerStyle = {
        textAlign: 'center',
        marginBottom: '60px'
    };

    const subtitleStyle = {
        color: '#7BC0E3',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        letterSpacing: '2px',
        fontSize: '14px',
        marginBottom: '10px',
        display: 'block'
    };

    const titleStyle = {
        fontSize: '46px',
        fontWeight: '800',
        color: '#FFFFFF',
        margin: 0
    };

    const highlightStyle = {
        color: '#60E1CB'
    };

    const carouselWrapperStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '30px',
        maxWidth: '1000px',
        width: '100%',
        position: 'relative'
    };

    const trackContainerStyle = {
        overflow: 'hidden',
        width: '100%',
        maxWidth: '800px',
        padding: '20px 0'
    };

    const trackStyle = {
        display: 'flex',
        transition: 'transform 0.6s cubic-bezier(0.25, 1, 0.5, 1)',
        transform: `translateX(-${activeIndex * 100}%)`,
    };

    const cardContainerStyle = {
        minWidth: '100%',
        display: 'flex',
        justifyContent: 'center',
        padding: '0 10px'
    };

    const cardStyle = {
        background: 'linear-gradient(145deg, #ffffff, #f0f0f0)',
        padding: '40px',
        borderRadius: '24px',
        boxShadow: '0 15px 35px rgba(0, 0, 0, 0.15)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: '100%',
        maxWidth: '500px',
        minHeight: '320px',
        position: 'relative',
        border: '1px solid rgba(255, 255, 255, 0.4)'
    };

    const ratingContainerStyle = {
        display: 'flex',
        alignItems: 'center',
        marginBottom: '20px',
        gap: '10px'
    };

    const starStyle = {
        color: '#FFD700',
        fontSize: '22px',
        textShadow: '0 2px 4px rgba(255, 215, 0, 0.3)'
    };

    const quoteStyle = {
        fontSize: '18px',
        color: '#4A5568',
        lineHeight: '1.8',
        fontStyle: 'italic',
        marginBottom: '30px',
        flexGrow: 1
    };

    const profileContainerStyle = {
        display: 'flex',
        alignItems: 'center',
        gap: '15px'
    };

    const avatarStyle = {
        width: '60px',
        height: '60px',
        borderRadius: '50%',
        background: 'linear-gradient(135deg, #7BC0E3, #60E1CB)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#FFFFFF',
        fontWeight: 'bold',
        fontSize: '24px',
        boxShadow: '0 4px 10px rgba(96, 225, 203, 0.4)'
    };

    const nameStyle = {
        fontWeight: 'bold',
        color: '#2D3748',
        margin: 0,
        fontSize: '18px'
    };

    const roleStyle = {
        color: '#718096',
        margin: 0,
        fontSize: '14px',
        marginTop: '4px'
    };

    const buttonStyle = {
        background: 'rgba(255, 255, 255, 0.1)',
        border: '1px solid #7BC0E3',
        borderRadius: '50%',
        width: '50px',
        height: '50px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer',
        color: '#60E1CB',
        fontSize: '24px',
        transition: 'all 0.3s ease',
        flexShrink: 0,
        backdropFilter: 'blur(5px)'
    };

    const dotContainerStyle = {
        display: 'flex',
        justifyContent: 'center',
        gap: '10px',
        marginTop: '40px'
    };

    const getDotStyle = (index) => ({
        width: activeIndex === index ? '30px' : '10px',
        height: '10px',
        borderRadius: '5px',
        backgroundColor: activeIndex === index ? '#60E1CB' : 'rgba(255, 255, 255, 0.3)',
        transition: 'all 0.3s ease',
        cursor: 'pointer'
    });

    return (
        <section style={sectionStyle}>
            <div style={headerContainerStyle}>
                <span style={subtitleStyle}>Testimonial</span>
                <h2 style={titleStyle}>Our <span style={highlightStyle}>Happy Clients</span></h2>
            </div>
            
            <div style={carouselWrapperStyle}>
                <button 
                    style={buttonStyle} 
                    onClick={handlePrev}
                    onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.2)'; e.currentTarget.style.transform = 'scale(1.1)'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.1)'; e.currentTarget.style.transform = 'scale(1)'; }}
                >
                    &#10094;
                </button>

                <div style={trackContainerStyle}>
                    <div style={trackStyle}>
                        {ratings.map((data, idx) => (
                            <div key={idx} style={cardContainerStyle}>
                                <div style={cardStyle}>
                                    <div>
                                        <div style={ratingContainerStyle}>
                                            <div style={{ display: 'flex', gap: '4px' }}>
                                                {Array.from({ length: data.rating }).map((_, i) => (
                                                    <span key={i} style={starStyle}>★</span>
                                                ))}
                                            </div>
                                            <span style={{ fontWeight: 'bold', color: '#2D3748', marginLeft: '5px', fontSize: '18px' }}>{data.rating}.0</span>
                                        </div>
                                        
                                        <p style={quoteStyle}>"{data.description}"</p>
                                    </div>
                                    
                                    <div style={profileContainerStyle}>
                                        {data.prfPic ? (
                                            <img src={data.prfPic} alt={data.name} style={avatarStyle} />
                                        ) : (
                                            <div style={avatarStyle}>
                                                {data.name.charAt(0)}
                                            </div>
                                        )}
                                        <div>
                                            <p style={nameStyle}>{data.name}</p>
                                            <p style={roleStyle}>{data.role}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <button 
                    style={buttonStyle} 
                    onClick={handleNext}
                    onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.2)'; e.currentTarget.style.transform = 'scale(1.1)'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.1)'; e.currentTarget.style.transform = 'scale(1)'; }}
                >
                    &#10095;
                </button>
            </div>

            <div style={dotContainerStyle}>
                {ratings.map((_, idx) => (
                    <div 
                        key={idx} 
                        style={getDotStyle(idx)} 
                        onClick={() => setActiveIndex(idx)}
                    />
                ))}
            </div>
        </section>
    );
}

export default HeaderHappyWork;