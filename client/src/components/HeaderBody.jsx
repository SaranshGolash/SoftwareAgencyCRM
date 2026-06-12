import Button from "./Button";
function HeaderBody() {

    const HeaderStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'start',
        flexFlow: 'column nowrap',
        gap: '5px'
    };

    const headerBodyStyle = {
        color: '#FFFFFF',
        paddingTop: '10px',
        fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
        fontWeight: 'bold',
        fontSize: '34px'
    };

    const btnStyle1 = {
        backgroundColor: '#60E1CB',
        color: 'white',
        padding: '10px',
        paddingLeft: '20px',
        paddingRight: '20px',
        border: 'none',
        borderRadius: '20px',
        cursor: 'pointer',
        margin: 'none',
        fontSize:'14px',
    };

    const btnStyle2 = {
        backgroundColor: '#FFFFFF',
        color: '#60E1CB',
        padding: '10px',
        paddingLeft: '20px',
        paddingRight: '20px',
        border: '1px solid rgba(182, 255, 245, 1)',
        borderRadius: '20px',
        cursor: 'pointer',
        margin: 'none',
        fontSize:'14px',
    };

    const imageWrapperStyle = {
        position: 'relative',
        maxWidth: '450px',
        width: '40%',
        flexShrink: 0,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '40px',
    };

    const patternBackgroundStyle = {
        position: 'absolute',
        top: 0, left: 0, right: 0, bottom: 0,
        backgroundImage: 'linear-gradient(rgba(96, 225, 203, 0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(96, 225, 203, 0.4) 1px, transparent 1px)',
        backgroundSize: '30px 30px',
        backgroundPosition: 'center center',
        maskImage: 'radial-gradient(circle at center, black 30%, transparent 80%)',
        WebkitMaskImage: 'radial-gradient(circle at center, black 30%, transparent 80%)',
        zIndex: 0,
    };

    const glowStyle = {
        position: 'absolute',
        top: '50%', left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '90%', height: '90%',
        background: 'radial-gradient(circle, rgba(96, 225, 203, 0.2) 0%, transparent 70%)',
        filter: 'blur(30px)',
        zIndex: 0,
    };

    return (
        <div className="main" style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '35px', paddingLeft: '60px', paddingRight: '60px'}}>
            <div className="header-body" style={HeaderStyle}>
                <h1 style={headerBodyStyle}>We help you create<br/>your <span style={{color:"#60E1CB"}}>website</span></h1>
                <p style={{color: 'grey', fontSize: '16px', fontFamily: 'Verdana, Geneva, sans-serif', fontWeight: '500'}}>We are a team of passionate developers who love building websites<br/>We help businesses create stunning, user-friendly, and responsive<br/>websites that stand out from the competition.</p>
                <div style={{display: 'flex', gap: '10px'}}>
                <Button textbtn={"Get Started"} href={'/services'} style={btnStyle1}/>
                <Button textbtn={"Contact Us"} href={'/contact'} style={btnStyle2}/>
                </div>
            </div>
            <div style={imageWrapperStyle}>
                <div style={glowStyle}></div>
                <div style={patternBackgroundStyle}></div>
                <img src="/images/Values.png" alt="Values" style={{ width: '100%', height: 'auto', display: 'block', position: 'relative', zIndex: 1 }} />
            </div>
        </div>
    );
}

export default HeaderBody;