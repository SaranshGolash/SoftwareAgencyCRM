import NavBar from "./NavBar";
import HeaderBody from "./HeaderBody";
import HeaderServices from "./HeaderServices";
import HeaderAboutWork from "./HeaderAboutWork";

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
        </div>
        </>
    );
}

export default Header;