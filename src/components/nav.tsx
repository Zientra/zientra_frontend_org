

const Nav = () => {
    return (
        <header className="navbar">

                
                <a href="#" className="logo flex justify-around gap-2 items-center">
                    <img src="./logo.png" className="h-5 w-5"></img>
                    <b>zientra</b>
                </a>

                <nav className="nav-links">
                    <a href="#product">Product</a>
                    <a href="#about">About</a>
                </nav>

                <a
                    href="#waitlist"
                    className="nav-cta"
                >
                    Join waitlist
                    <span>↗</span>
                </a>

            </header>
    );
}

export default Nav;
