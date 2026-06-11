import React from "react";
import Button from "./Button";
function HeaderBody() {

    const headerBodyStyle = {
        backgroundColor: 'rgba(255, 255, 255, 1)',
        color: 'black',
        paddingTop: '10px',
    };

    const btnStyle = {
        backgroundColor: '#60E1CB',
        color: 'white',
        padding: '10px',
        border: 'none',
        borderRadius: '20px',
        cursor: 'pointer',
        margin: '5px',
    };

    return (
        <div className="main">
            <div className="header-body">
                <h1 style={headerBodyStyle}>We help you create your <span style={{color:"#60E1CB"}}>website</span></h1>
                <p>We are a team of passionate developers who love building websites. We help businesses create stunning, user-friendly, and responsive websites that stand out from the competition.</p>
                <Button textbtn={"Get Started"} href={'/services'} style={btnStyle}/>
            </div>
        </div>
    );
}

export default HeaderBody;