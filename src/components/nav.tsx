import { Link } from "react-router-dom";

const Nav = () => {
    return (
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


            {/* Navigation */}
            <nav
                className="
                    flex
                    items-center
                    gap-3 sm:gap-5 lg:gap-[34px]
                    ml-auto
                    mr-3 sm:mr-6 lg:mr-8
                "
            >
                <Link
                    to="/why-zientra"
                    className="
                        text-[#74746d]
                        hover:text-[#111111]
                        text-[10px] sm:text-[12px] lg:text-[14px]
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
                        text-[10px] sm:text-[12px] lg:text-[14px]
                        whitespace-nowrap
                        transition-colors
                    "
                >
                    About
                </Link>
            </nav>


            {/* CTA */}
            <a
                href="/#waitlist"
                className="
                    flex
                    items-center
                    gap-1 sm:gap-2
                    px-2.5 sm:px-3 lg:px-4
                    py-1.5 sm:py-2.5
                    border
                    border-[#111111]
                    rounded
                    text-[#111111]
                    text-[9px] sm:text-[11px] lg:text-[14px]
                    font-medium
                    whitespace-nowrap
                    hover:bg-[#111111]
                    hover:text-[#f5f5ee]
                    transition-colors
                    shrink-0
                "
            >
                Join waitlist

                <span className="text-[10px] sm:text-xs lg:text-sm">
                    ↗
                </span>
            </a>

        </header>
    );
};

export default Nav;