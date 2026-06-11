import React from "react";
import NavBar from "./NavBar";
import HeaderBody from "./HeaderBody";
import HeaderServices from "./HeaderServices";

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
        <HeaderServices />
        </>
    );
}

export default Header;