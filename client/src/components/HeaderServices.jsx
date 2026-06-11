import React from "react";
import Button from "./Button";
import Card from 'react-bootstrap/Card';

const btnStyle = {
    color: "#60E1CB",
    TextDecoration: 'none',
    border: 'none',
    margin: 'none',
    background: 'none',
    cursor: 'pointer',
    fontSize: '14px'
}

function ServiceCard({serviceName, serviceDescription, serviceImage, serviceId, serviceCardStyle}) {
  return (
    <Card style={serviceCardStyle}>
      <Card.Img variant="top" src={serviceImage} style={{width:"50px", height:"50px", paddingLeft: "15px", paddingTop: "10px"}} />
      <Card.Body>
        <Card.Title>{serviceName}</Card.Title>
        <Card.Text>
          {serviceDescription}
        </Card.Text>
        <Button textbtn={'Read More ➞'} href={`/services/${serviceId}`} style={btnStyle}/>
      </Card.Body>
    </Card>
  );
}

function HeaderServices() {
    const HeaderStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
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

    const serviceCardStyle = {
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'start',
        flexFlow: 'column nowrap',
        gap: '5px',
        width: '18rem'
    }

    return (
        <div className="services-main" style={{margin: '20px'}}>
            <div className="services body" style={HeaderStyle}>
                <h1 style={headerBodyStyle}>Our <span style={{color:"#60E1CB"}}>Services</span></h1>
                <span style={{color:'#FFFFFF'}}>We provide the most affordable services</span>
                <div className="services-card" style={{display: 'flex', justifyContent: 'flex-start', flexFlow: 'row nowrap', gap: '20px'}}>
                    <ServiceCard 
                    serviceName={"Website Development"}
                    serviceDescription={"We build stunning, user-friendly, and responsive websites that stand out from the competition."}
                    serviceImage={"/images/Web.png"}
                    serviceId={"1"}
                    serviceCardStyle={serviceCardStyle}
                    />
                    <ServiceCard 
                    serviceName={"Mobile App Development"}
                    serviceDescription={"We build stunning, user-friendly, and responsive websites that stand out from the competition."}
                    serviceImage={"/images/Mobile.png"}
                    serviceId={"2"}
                    serviceCardStyle={serviceCardStyle}
                    />
                    <ServiceCard 
                    serviceName={"AI Automation and Integration"}
                    serviceDescription={"We build stunning, user-friendly, and responsive websites that stand out from the competition."}
                    serviceImage={"/images/AI.png"}
                    serviceId={"3"}
                    serviceCardStyle={serviceCardStyle}
                    />
                </div>
            </div>
        </div>
    );
}

export default HeaderServices;
