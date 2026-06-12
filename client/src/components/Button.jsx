function Button({textbtn, href, style}) {
    return(
        <button style={style} href={href}>{textbtn}</button>
    ); 
}

export default Button;