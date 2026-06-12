import NavBar from "./NavBar";
import HeaderBody from "./HeaderBody";
import HeaderServices from "./HeaderServices";
import HeaderAboutWork from "./HeaderAboutWork";
import HeaderYourIdea from "./HeaderYourIdea";
import HeaderInterestedWork from "./HeaderInterestedWork";

function Header() {
    const links = [
        {
            text:"Home",
            href:"/",
        },
        {
            text:"About",
            href:"/about",
        },
        {
            text:"Contact",
            href:"/contact",
        }
    ];
    return (
        <>
        <NavBar links={links}/>
        <div style={{display:'flex', flexDirection:'column', gap:'100px'}}>
            <HeaderBody />
            <HeaderServices />
            <HeaderAboutWork />
            <HeaderYourIdea />
            <HeaderInterestedWork />
        </div>
        </>
    );
}

export default Header;