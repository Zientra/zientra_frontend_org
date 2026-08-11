

const Nav = () => {
    return (
        <header className="navbar">

                <a href="#" className="logo">
                    zientra
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
