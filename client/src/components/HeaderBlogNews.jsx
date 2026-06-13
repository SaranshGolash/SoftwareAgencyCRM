import { useState } from "react";
import Button from "./Button";

function HeaderBlogNews() {
    const newsOverview = [
        "On Codedex blog we will review the latest trends in web design and development. We will also share tips and tricks to help you create a website that stands out from the competition.",
        "",
        "",
        "",
        ""
    ];

    const newsData = [
        { id: 1, title: "Why Your SaaS Business should use WordPress", description: "A content management system like WordPress can help you build a highly engaging website for your SaaS business, with little to no effort.", link: "/news/1" },
        { id: 2, title: "How AI is changing SaaS Development", description: "Artificial intelligence is reshaping how software as a service operates, providing automated insights and streamlining complex workflows.", link: "/news/2" },
        { id: 3, title: "Top 10 Tips for Better UI/UX", description: "Learn the core principles of user interface design that will help retain users, increase conversion rates, and build brand loyalty.", link: "/news/3" },
        { id: 4, title: "Optimizing React Performance", description: "Discover advanced techniques for optimizing your React applications to deliver lightning-fast experiences for your users.", link: "/news/4" },
        { id: 5, title: "Why Next.js is the New Standard", description: "Next.js brings server-side rendering, static site generation, and file-based routing to the React ecosystem, making it a top choice.", link: "/news/5" },
        { id: 6, title: "Building Scalable APIs with Node", description: "A comprehensive guide on structuring your Node.js backend to handle high traffic and complex data interactions efficiently.", link: "/news/6" }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        if (currentIndex < newsData.length - 3) {
            setCurrentIndex((prev) => prev + 1);
        }
    };

    const handlePrev = () => {
        if (currentIndex > 0) {
            setCurrentIndex((prev) => prev - 1);
        }
    };

    const headerBlogNewsMainStyle = {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexFlow: 'row nowrap',
        gap: '50px',
        padding: '100px 20px',
        maxWidth: '1200px',
        margin: '0 auto',
        width: '100%',
        boxSizing: 'border-box'
    };

    const titleSectionStyle = {
        flex: '0 0 30%',
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        position: 'relative'
    };

    const titleStyle = {
        fontSize: '46px',
        fontWeight: '800',
        color: '#FFFFFF',
        margin: '0'
    };

    const subtitleStyle = {
        color: '#7BC0E3',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        letterSpacing: '2px',
        fontSize: '14px'
    };

    const descriptionStyle = {
        color: '#A0AEC0',
        lineHeight: '1.7',
        fontSize: '16px',
        marginBottom: '20px',
        display: 'flex',
        flexDirection: 'column',
        gap: '10px'
    };

    const btnStyle = {
        color: '#7BC0E3',
        background: 'transparent',
        textDecoration: 'none',
        border: '1px solid #7BC0E3',
        padding: '12px 24px',
        borderRadius: '20px',
        cursor: 'pointer',
        fontSize: '14px',
        alignSelf: 'flex-start',
        transition: 'all 0.3s'
    };

    const newsSectionStyle = {
        flex: '1',
        display: 'flex',
        flexDirection: 'column',
        minWidth: 0,
        gap: '20px'
    };

    const controlsStyle = {
        display: 'flex',
        gap: '15px',
        justifyContent: 'flex-end',
        width: '100%'
    };

    const arrowBtnStyle = {
        width: '40px',
        height: '40px',
        borderRadius: '50%',
        border: '1px solid rgba(123, 192, 227, 0.4)',
        background: 'rgba(255, 255, 255, 0.05)',
        color: '#7BC0E3',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer',
        fontSize: '18px',
        transition: 'all 0.3s ease',
        backdropFilter: 'blur(5px)'
    };

    const cardsContainerStyle = {
        display: 'flex',
        gap: '20px',
        width: '100%'
    };

    const cardStyle = {
        flex: '0 0 calc(33.333% - 13.33px)',
        backgroundColor: '#FFFFFF',
        borderRadius: '24px',
        padding: '35px 30px',
        display: 'flex',
        flexDirection: 'column',
        boxShadow: '0 10px 40px rgba(0, 0, 0, 0.08)',
        boxSizing: 'border-box',
        minHeight: '320px',
        transition: 'transform 0.3s ease',
        cursor: 'pointer',
        justifyContent: 'flex-start'
    };

    const cardTitleStyle = {
        margin: '0 0 20px 0',
        fontSize: '22px',
        color: '#202A44',
        lineHeight: '1.4',
        fontWeight: '800'
    };

    const cardDescStyle = {
        color: '#718096',
        fontSize: '15px',
        lineHeight: '1.6',
        marginBottom: 'auto'
    };

    const readMoreStyle = {
        color: '#7BC0E3',
        fontSize: '15px',
        fontWeight: 'bold',
        textDecoration: 'none',
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        marginTop: '25px',
        transition: 'all 0.3s'
    };

    const dotsContainerStyle = {
        display: 'flex',
        gap: '12px',
        marginTop: '20px',
        justifyContent: 'center'
    };

    const getDotStyle = (isActive) => ({
        width: '12px',
        height: '12px',
        borderRadius: '50%',
        backgroundColor: isActive ? '#7BC0E3' : 'rgba(123, 192, 227, 0.3)',
        cursor: 'pointer',
        transition: 'all 0.3s ease'
    });

    const visibleCards = newsData.slice(currentIndex, currentIndex + 3);

    return (
        <div className="header-blog-news-main" style={headerBlogNewsMainStyle}>
            <div className="header-blog-news-title-section" style={titleSectionStyle}>
                <span style={subtitleStyle}>Our Blog</span>
                <h3 style={titleStyle}>News & Articles</h3>
                
                <div style={descriptionStyle}>
                    {newsOverview.map((news, idx) => (
                        news ? <span key={idx}>{news}</span> : null
                    ))}
                </div>
                
                <Button textbtn={'See All'} href={'/news'} style={btnStyle}/>
            </div>
            <div className="news-section" style={newsSectionStyle}>
                <div style={controlsStyle}>
                    {currentIndex > 0 && (
                        <button 
                            style={arrowBtnStyle} 
                            onClick={handlePrev}
                            onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(123, 192, 227, 0.2)'; }}
                            onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)'; }}
                        >
                            &lt;
                        </button>
                    )}
                    {currentIndex < newsData.length - 3 && (
                        <button 
                            style={arrowBtnStyle} 
                            onClick={handleNext}
                            onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(123, 192, 227, 0.2)'; }}
                            onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)'; }}
                        >
                            &gt;
                        </button>
                    )}
                </div>
                <div style={cardsContainerStyle}>
                    {visibleCards.map((news) => (
                        <div 
                            key={news.id} 
                            style={cardStyle}
                            onMouseEnter={(e) => { 
                                e.currentTarget.style.transform = 'translateY(-10px)'; 
                                const arrow = e.currentTarget.querySelector('.arrow');
                                if(arrow) arrow.style.transform = 'translateX(5px)';
                            }}
                            onMouseLeave={(e) => { 
                                e.currentTarget.style.transform = 'translateY(0)'; 
                                const arrow = e.currentTarget.querySelector('.arrow');
                                if(arrow) arrow.style.transform = 'translateX(0)';
                            }}
                        >
                            <h4 style={cardTitleStyle}>{news.title}</h4>
                            <p style={cardDescStyle}>{news.description}</p>
                            <a href={news.link} style={readMoreStyle}>
                                Read More <span className="arrow" style={{ transition: 'transform 0.3s' }}>⟶</span>
                            </a>
                        </div>
                    ))}
                </div>
                <div style={dotsContainerStyle}>
                    {Array.from({ length: Math.ceil(newsData.length / 3) }).map((_, idx) => (
                        <div 
                            key={idx} 
                            style={getDotStyle(Math.floor(currentIndex / 3) === idx)} 
                            onClick={() => setCurrentIndex(idx * 3)}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default HeaderBlogNews;