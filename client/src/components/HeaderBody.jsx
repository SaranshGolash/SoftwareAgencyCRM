import React from "react";
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
        backgroundColor: 'rgba(255, 255, 255, 1)',
        color: 'black',
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
    }

    return (
        <div className="main" style={{display: 'flex', justifyContent: 'left', alignItems: 'center', paddingTop: '35px', paddingLeft: '60px'}}>
            <div className="header-body" style={HeaderStyle}>
                <h1 style={headerBodyStyle}>We help you create<br/>your <span style={{color:"#60E1CB"}}>website</span></h1>
                <p style={{fontSize: '16px', fontFamily: 'Verdana, Geneva, sans-serif', fontWeight: '400'}}>We are a team of passionate developers who love building websites<br/>We help businesses create stunning, user-friendly, and responsive<br/>websites that stand out from the competition.</p>
                <div style={{display: 'flex', gap: '10px'}}>
                <Button textbtn={"Get Started"} href={'/services'} style={btnStyle1}/>
                <Button textbtn={"Contact Us"} href={'/contact'} style={btnStyle2}/>
                </div>
            </div>
        </div>
    );
}

export default HeaderBody;