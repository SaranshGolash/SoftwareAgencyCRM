function FooterList(item1, item2, item3) {
    return(
        <ul>
            <li>{item1}</li>
            <li>{item2}</li>
            <li>{item3}</li>
        </ul>
    );
}

function Footer() {

    const workList = ['Blog', 'How We Work', 'Testimonials'];
    const servicesList = ['Web Development', 'AI Automation & Integration', 'Search Engine Optimization'];
    const businessSolutions = ['Partnership', 'About Project', 'Corporate'];

    return(
        <>
        <div className="Footer-main">
            <div className="footer-first-column">
                <img src="" alt="" />
                <span>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</span>
            </div>
            <div className="footer-second-column">
                <div className="footer-work-section">
                    <span>Work</span>
                    <FooterList item1={workList[0]} item2={workList[1]} item3={workList[2]}/>
                </div>
                <div className="footer-services-section">
                    <span>Services</span>
                    <FooterList item1={servicesList[0]} item2={servicesList[1]} item3={servicesList[2]}/>
                </div>
                <div className="footer-business-section">
                    <span>Business</span>
                    <FooterList item1={businessSolutions[0]} item2={businessSolutions[1]} item3={businessSolutions[2]}/>
                </div>
            </div>
        </div>
        <div className="footer-copyright">
            <span>©CodedexSolutions. 2026</span>
            <span>Made with 💖 by Saransh Golash </span>
        </div>
        </>
    );
}

export default Footer;