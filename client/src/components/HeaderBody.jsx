import React from "react";
import Button from "./Button";
function HeaderBody() {

    const HeaderStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'start',
        flexFlow: 'column nowrap',
        gap: '10px'
    };

    const headerBodyStyle = {
        backgroundColor: 'rgba(255, 255, 255, 1)',
        color: 'black',
        paddingTop: '10px',
        fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
        fontWeight: 'bold',
        fontSize: '30px'
    };

    const btnStyle = {
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

    return (
        <div className="main">
            <div className="header-body" style={HeaderStyle}>
                <h1 style={headerBodyStyle}>We help you create<br/>your <span style={{color:"#60E1CB"}}>website</span></h1>
                <p>We are a team of passionate developers who love building websites. We help businesses create stunning, user-friendly, and responsive websites that stand out from the competition.</p>
                <Button textbtn={"Get Started"} href={'/services'} style={btnStyle}/>
            </div>
        </div>
    );
}

export default HeaderBody;