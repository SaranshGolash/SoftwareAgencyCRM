import React from 'react';

function HeaderYourIdea() {
    const sectionStyle = {
        padding: '100px 20px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif'
    };

    const headerContainerStyle = {
        maxWidth: '850px',
        textAlign: 'center',
        marginBottom: '80px'
    };

    const titleStyle = {
        fontSize: '46px',
        fontWeight: '800',
        marginBottom: '25px',
        color: '#FFFFFF'
    };

    const descriptionStyle = {
        fontSize: '18px',
        lineHeight: '1.7',
        color: 'grey',
        fontWeight: '500'
    };

    const gridStyle = {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '40px',
        maxWidth: '1200px',
        width: '100%'
    };

    const cardStyle = {
        backgroundColor: '#F5F5F0',
        padding: '50px 35px 40px 35px',
        borderRadius: '20px',
        position: 'relative',
        transition: 'all 0.3s ease',
        cursor: 'default',
        border: '1px solid transparent'
    };

    const numberStyle = {
        position: 'absolute',
        top: '-30px',
        left: '35px',
        fontSize: '32px',
        fontWeight: '900',
        color: '#FFFFFF',
        backgroundColor: '#D4AF37', // Gold Accent
        width: '60px',
        height: '60px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '50%',
        boxShadow: '0 8px 20px rgba(212, 175, 55, 0.4)',
        transition: 'transform 0.3s ease'
    };

    const stepTitleStyle = {
        fontSize: '24px',
        fontWeight: 'bold',
        marginTop: '10px',
        marginBottom: '15px',
        color: '#202A44'
    };

    const stepDescStyle = {
        fontSize: '16px',
        color: '#666666',
        lineHeight: '1.6'
    };

    const steps = [
        {
            number: '1',
            title: 'Your Idea',
            description: 'In order for us at Codedex Solutions to know that we are a good fit for your project we always start with screening questions in order to make sure that we are a suitable match for your company.'
        },
        {
            number: '2',
            title: 'Strategy meeting',
            description: 'This meeting will be a meeting where we together go over our proposed strategy on how we can reach your website goals. Here we will establish a project update system where you will be able to follow the whole process from start to finish.'
        },
        {
            number: '3',
            title: 'Agile and Scrum framework',
            description: 'In this step we will have a team meeting with the project manager and the lead developer and designer. Then we will be working using and agile and scrum framework in order to make sure to deliver your project on time and within budget.'
        },
        {
            number: '4',
            title: 'Your website goes live',
            description: 'The final checks of the website will happen, we will make sure that all tracking pixels, links and user interface is compatible with all different devices. We will also perform a few different tests to make sure that the website is optimised for user experience.'
        }
    ];

    return (
        <section style={sectionStyle}>
            <div style={headerContainerStyle}>
                <h2 style={titleStyle}>Your idea into reality</h2>
                <p style={descriptionStyle}>
                    We start every web development project with a project manager from Codedex Solutions interviewing you about the goal with the project. This is for us to be able to come up with a solution for your SaaS business, estimate a timeline, and come up with a budget.
                </p>
            </div>

            <div style={gridStyle}>
                {steps.map((step, index) => (
                    <div 
                        key={index} 
                        style={cardStyle}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.transform = 'translateY(-10px)';
                            e.currentTarget.style.backgroundColor = '#FFFFFF';
                            e.currentTarget.style.boxShadow = '0 15px 35px rgba(32, 42, 68, 0.08)';
                            e.currentTarget.style.borderColor = 'rgba(212, 175, 55, 0.2)';
                            e.currentTarget.querySelector('.step-number').style.transform = 'scale(1.1)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.transform = 'translateY(0)';
                            e.currentTarget.style.backgroundColor = '#F5F5F0';
                            e.currentTarget.style.boxShadow = 'none';
                            e.currentTarget.style.borderColor = 'transparent';
                            e.currentTarget.querySelector('.step-number').style.transform = 'scale(1)';
                        }}
                    >
                        <div className="step-number" style={numberStyle}>{step.number}</div>
                        <h3 style={stepTitleStyle}>{step.title}</h3>
                        <p style={stepDescStyle}>{step.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default HeaderYourIdea;
