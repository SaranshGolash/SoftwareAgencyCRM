import Button from "./Button";
import Card from 'react-bootstrap/Card';

const btnStyle = {
    color: "#60E1CB",
    background: 'none',
    TextDecoration: 'none',
    border: 'none',
    margin: 'none',
    cursor: 'pointer',
    fontSize: '14px',
    position: 'absolute',
    bottom: '5px',
    left: '15px',
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
        width: '18rem',
    }

    return (
        <div className="services-main" style={{margin: '20px'}}>
            <div className="services body" style={HeaderStyle}>
                <h1 style={headerBodyStyle}>Our <span style={{color:"#60E1CB"}}>Services</span></h1>
                <span style={{color:'#FFFFFF'}}>We provide the most affordable services</span>
                <div className="services-card" style={{display: 'flex', justifyContent: 'center', flexFlow: 'row wrap', gap: '20px', marginTop:"60px", maxWidth: '950px'}}>
                    <ServiceCard 
                    serviceName={"Website Development"}
                    serviceDescription={"Building stunning, user-friendly, and responsive websites that stand out from the competition."}
                    serviceImage={"/images/Web.png"}
                    serviceId={"1"}
                    serviceCardStyle={serviceCardStyle}
                    />
                    <ServiceCard 
                    serviceName={"Mobile App Development"}
                    serviceDescription={"Creating high-performing and scalable mobile applications for iOS and Android platforms tailored to your business needs."}
                    serviceImage={"/images/Mobile.png"}
                    serviceId={"2"}
                    serviceCardStyle={serviceCardStyle}
                    />
                    <ServiceCard 
                    serviceName={"AI Automation and Integration"}
                    serviceDescription={"Leveraging artificial intelligence to streamline your business operations, enhance productivity, and unlock new growth opportunities."}
                    serviceImage={"/images/AI.png"}
                    serviceId={"3"}
                    serviceCardStyle={serviceCardStyle}
                    />
                    <ServiceCard 
                    serviceName={"Search Engine Optimization"}
                    serviceDescription={"Boost your website's visibility and attract organic traffic with our expert SEO strategies and proven techniques."}
                    serviceImage={"/images/SEO.png"}
                    serviceId={"4"}
                    serviceCardStyle={serviceCardStyle}
                    />
                    <ServiceCard 
                    serviceName={"SAP Consultations and Implementations"}
                    serviceDescription={"Unlock the full potential of SAP with our expert consultation and implementation services tailored to your business needs."}
                    serviceImage={"/images/AI.png"}
                    serviceId={"5"}
                    serviceCardStyle={serviceCardStyle}
                    />
                    <ServiceCard 
                    serviceName={"Wordpress Plugin"}
                    serviceDescription={"Custom plugin development to extend functionality and enhance user experience for WordPress websites."}
                    serviceImage={"/images/AI.png"}
                    serviceId={"6"}
                    serviceCardStyle={serviceCardStyle}
                    />
                </div>
            </div>
        </div>
    );
}

export default HeaderServices;
