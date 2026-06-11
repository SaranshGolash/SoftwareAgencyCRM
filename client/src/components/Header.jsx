import React from "react";
import NavBar from "./NavBar";
import HeaderBody from "./HeaderBody";

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
        <HeaderBody />
        </>
    );
}

export default Header;