import { Link } from "react-router-dom";

const Nav = () => {

    return (

        <header className="navbar">

            <Link
                to="/"
                className="logo flex justify-around gap-2 items-center"
            >

                <img
                    src="/logo.png"
                    className="h-5 w-5"
                    alt="Zientra"
                />

                <b>
                    zientra
                </b>

            </Link>


            <nav className="nav-links">

                <Link to="/why-zientra">
                    Why Zientra ?
                </Link>

                <Link to="/about">
                    About
                </Link>

            </nav>


            <a
                href="/#waitlist"
                className="nav-cta"
            >

                Join waitlist

                <span>
                    ↗
                </span>

            </a>

        </header>

    );
};

export default Nav;