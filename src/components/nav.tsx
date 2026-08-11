import { useState } from "react";
import { Link } from "react-router-dom";

const Nav = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const closeMenu = () => {
        setMenuOpen(false);
    };

    return (
        <>
            <header
                className="
                    w-full
                    h-[68px] sm:h-[76px]
                    px-4 sm:px-7 lg:px-[5vw]
                    flex
                    items-center
                    justify-between
                    border-b
                    border-[#d9d9d0]
                    bg-[#f5f5ee]
                    relative
                    z-[100]
                "
            >

                {/* Logo */}
                <Link
                    to="/"
                    onClick={closeMenu}
                    className="
                        flex
                        items-center
                        gap-1.5 sm:gap-2
                        text-[#111111]
                        font-['Manrope']
                        text-[18px] sm:text-[21px]
                        font-bold
                        tracking-[-0.06em]
                        shrink-0
                    "
                >
                    <img
                        src="/logo.png"
                        alt="Zientra"
                        className="
                            w-[18px] h-[18px]
                            sm:w-5 sm:h-5
                            object-contain
                        "
                    />

                    <b>zientra</b>
                </Link>


                {/* Desktop Navigation */}
                <nav
                    className="
                        hidden
                        md:flex
                        items-center
                        gap-5
                        lg:gap-[34px]
                        ml-auto
                        mr-6
                        lg:mr-8
                    "
                >
                    <Link
                        to="/why-zientra"
                        className="
                            text-[#74746d]
                            hover:text-[#111111]
                            text-[12px]
                            lg:text-[14px]
                            whitespace-nowrap
                            transition-colors
                        "
                    >
                        Why Zientra?
                    </Link>

                    <Link
                        to="/about"
                        className="
                            text-[#74746d]
                            hover:text-[#111111]
                            text-[12px]
                            lg:text-[14px]
                            whitespace-nowrap
                            transition-colors
                        "
                    >
                        About
                    </Link>
                </nav>


                {/* Desktop CTA */}
                <a
                    href="/#waitlist"
                    className="
                        hidden
                        md:flex
                        items-center
                        gap-1 sm:gap-2
                        px-3
                        lg:px-4
                        py-2
                        lg:py-2.5
                        border
                        border-[#111111]
                        rounded
                        text-[#111111]
                        text-[11px]
                        lg:text-[14px]
                        font-medium
                        whitespace-nowrap
                        hover:bg-[#111111]
                        hover:text-[#f5f5ee]
                        transition-colors
                        shrink-0
                    "
                >
                    Join waitlist

                    <span className="text-xs lg:text-sm">
                        ↗
                    </span>
                </a>


                {/* Mobile Hamburger */}
                <button
                    type="button"
                    onClick={() => setMenuOpen(true)}
                    aria-label="Open menu"
                    className="
                        md:hidden
                        flex
                        items-center
                        justify-center
                        w-9
                        h-9
                        text-[#111111]
                        cursor-pointer
                    "
                >
                    <div className="flex flex-col gap-[5px]">
                        <span className="block w-5 h-[1.5px] bg-[#111111]" />
                        <span className="block w-5 h-[1.5px] bg-[#111111]" />
                    </div>
                </button>

            </header>


            {/* Mobile Menu */}
            <div
                className={`
                    fixed
                    inset-0
                    z-[200]
                    bg-[#f5f5ee]
                    flex
                    flex-col
                    transform
                    transition-transform
                    duration-500
                    ease-[cubic-bezier(0.22,1,0.36,1)]
                    ${menuOpen
                        ? "translate-x-0"
                        : "translate-x-full"
                    }
                `}
            >

                {/* Menu Header */}
                <div
                    className="
                        h-[68px]
                        px-4
                        flex
                        items-center
                        justify-between
                        border-b
                        border-[#d9d9d0]
                    "
                >

                    <Link
                        to="/"
                        onClick={closeMenu}
                        className="
                            flex
                            items-center
                            gap-1.5
                            text-[#111111]
                            font-['Manrope']
                            text-[18px]
                            font-bold
                            tracking-[-0.06em]
                        "
                    >
                        <img
                            src="/logo.png"
                            alt="Zientra"
                            className="w-[18px] h-[18px] object-contain"
                        />

                        <b>zientra</b>
                    </Link>


                    {/* Close */}
                    <button
                        type="button"
                        onClick={closeMenu}
                        aria-label="Close menu"
                        className="
                            w-9
                            h-9
                            flex
                            items-center
                            justify-center
                            text-[#111111]
                            text-2xl
                            font-light
                            cursor-pointer
                        "
                    >
                        ×
                    </button>

                </div>


                {/* Menu Content */}
                <div
                    className="
                        flex
                        flex-col
                        flex-1
                        px-6
                        pt-20
                    "
                >

                    <Link
                        to="/why-zientra"
                        onClick={closeMenu}
                        className="
                            py-5
                            border-b
                            border-[#d9d9d0]
                            font-['Manrope']
                            text-[36px]
                            tracking-[-0.05em]
                            text-[#111111]
                        "
                    >
                        Why Zientra?
                    </Link>


                    <Link
                        to="/about"
                        onClick={closeMenu}
                        className="
                            py-5
                            border-b
                            border-[#d9d9d0]
                            font-['Manrope']
                            text-[36px]
                            tracking-[-0.05em]
                            text-[#111111]
                        "
                    >
                        About
                    </Link>


                    <a
                        href="/#waitlist"
                        onClick={closeMenu}
                        className="
                            mt-10
                            w-fit
                            flex
                            items-center
                            gap-3
                            bg-[#111111]
                            !text-[#f5f5ee]
                            px-5
                            py-3.5
                            rounded
                            text-sm
                            hover:bg-[#111111]
                            hover:!text-[#f5f5ee]
                        "
                    >
                        <span className="!text-[#f5f5ee]">
                            Join waitlist
                        </span>

                        <span className="!text-[#f5f5ee]">
                            ↗
                        </span>
                    </a>

                </div>

            </div>
        </>
    );
};

export default Nav;