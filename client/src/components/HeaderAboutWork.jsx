import Button from "./Button";

function HeaderAboutWork() {

    const btnStyle = {
        background: 'none',
        margin: 'none',
        border: '1px solid #7BC0E3',
        color: '#7BC0E3',
        padding: '5px 10px',
        borderRadius: '20px',
        cursor: 'pointer',
        fontSize: '12px',
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

    const titleStyle = {
        color: '#FFFFFF',
        paddingTop: '10px',
        fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
        fontWeight: 'bold',
        fontSize: '34px'
    };

    return (
        <div className="aboutwork-main" style={aboutWorkStyle}>
            <div className="aboutwork-title" style={aboutWorkTitleStyle}>
                <span style={{color: '#7BC0E3'}}>Portfolio</span>
                <h3 style={titleStyle}>Our Great <span style={{color: '#60E1CB'}}>Work</span></h3>
                <div className="aboutwork-btn">
                    <Button textbtn={'Website Development'} href={''} style={btnStyle}/>
                    <Button textbtn={'AI Automation & Integration'} href={''} style={btnStyle}/>
                    <Button textbtn={'Search Engine Optimization'} href={''} style={btnStyle}/>
                </div>
            </div>
        </div>
    );
}

export default HeaderAboutWork;