function Button({textbtn, href, style, ...props}) {
    return(
        <button style={style} href={href} {...props}>{textbtn}</button>
    ); 
}

export default Button;