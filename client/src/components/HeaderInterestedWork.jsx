function HeaderInterestedWork() {
    const sectionStyle = {
        padding: '100px 20px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif'
    };

    const containerStyle = {
        backgroundColor: '#202A44',
        padding: '70px 40px',
        borderRadius: '24px',
        maxWidth: '950px',
        width: '100%',
        textAlign: 'center',
        boxShadow: '0 20px 40px rgba(32, 42, 68, 0.15)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '15px',
        position: 'relative',
        overflow: 'hidden'
    };

    const titleStyle = {
        color: '#FFFFFF',
        fontSize: '46px',
        fontWeight: '800',
        margin: '0',
        zIndex: 1
    };

    const subtitleStyle = {
        color: '#AAB4D0', 
        fontSize: '20px',
        margin: '0 0 30px 0',
        zIndex: 1
    };

    const emailBtnStyle = {
        backgroundColor: '#D4AF37',
        color: '#202A44',
        padding: '18px 45px',
        borderRadius: '50px',
        textDecoration: 'none',
        fontSize: '22px',
        fontWeight: 'bold',
        display: 'inline-block',
        transition: 'all 0.3s ease',
        boxShadow: '0 8px 25px rgba(212, 175, 55, 0.4)',
        zIndex: 1
    };

    // A subtle decorative background circle to make it look premium
    const decorationStyle = {
        position: 'absolute',
        top: '-100px',
        right: '-50px',
        width: '300px',
        height: '300px',
        borderRadius: '50%',
        backgroundColor: 'rgba(212, 175, 55, 0.05)',
        zIndex: 0
    };

    return (
        <section style={sectionStyle}>
            <div style={containerStyle}>
                <div style={decorationStyle}></div>
                <h2 style={titleStyle}>Interested to work with us ?</h2>
                <p style={subtitleStyle}>Send a line here get and update daily</p>
                <a 
                    href="mailto:CodedexSolutions@example.com" 
                    style={emailBtnStyle}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translateY(-5px) scale(1.02)';
                        e.currentTarget.style.boxShadow = '0 15px 30px rgba(212, 175, 55, 0.6)';
                        e.currentTarget.style.backgroundColor = '#E5C048'; // Slightly lighter gold on hover
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translateY(0) scale(1)';
                        e.currentTarget.style.boxShadow = '0 8px 25px rgba(212, 175, 55, 0.4)';
                        e.currentTarget.style.backgroundColor = '#D4AF37';
                    }}
                >
                    CodedexSolutions@example.com
                </a>
            </div>
        </section>
    );
}

export default HeaderInterestedWork;
