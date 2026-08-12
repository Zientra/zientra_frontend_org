import { motion, type Variants } from "framer-motion";

import Nav from "./nav";
import Hero from "./hero";
import { Link } from "react-router-dom";

const Home = () => {

    const fadeUp: Variants = {

        hidden: {
            opacity: 0,
            y: 24
        },

        visible: {
            opacity: 1,
            y: 0,

            transition: {
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1]
            }
        }

    };


    const sectionReveal: Variants = {

        hidden: {
            opacity: 0,
            y: 45
        },

        visible: {
            opacity: 1,
            y: 0,

            transition: {
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1]
            }
        }

    };


    return (

        <div className="app">

            <Nav />

            <main>

                <Hero />


                <motion.section
    className="product"
    id="product"
    variants={sectionReveal}
    initial="hidden"
    whileInView="visible"
    viewport={{
        once: true,
        amount: 0.2
    }}
>
    <div className="section-meta">
        <span>01</span>
        PRODUCT
    </div>

    <div className="product-intro">
        <motion.h2 variants={fadeUp}>
            One place to
            <br />
            <span>build.</span>
        </motion.h2>

        <motion.p variants={fadeUp}>
            Code, conversations, tasks and
            AI agents — working together inside
            the same room.
        </motion.p>
    </div>


    {/* PRODUCT SCREENSHOTS */}

    <div className="workspace-images">

    <motion.img
        src="/code_editor.png"
        alt="Zientra collaborative editor"
        className="workspace-image workspace-image-one"
        initial={{
            opacity: 0,
            y: 40
        }}
        whileInView={{
            opacity: 1,
            y: 0
        }}
        viewport={{
            once: true
        }}
        transition={{
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1]
        }}
    />

    <motion.img
        src="/room_join.png"
        alt="Zientra workspace"
        className="workspace-image workspace-image-two"
        initial={{
            opacity: 0,
            y: 60
        }}
        whileInView={{
            opacity: 1,
            y: 0
        }}
        viewport={{
            once: true
        }}
        transition={{
            delay: 0.15,
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1]
        }}
    />

    <p className="workspace-status">
        <span />
        IN DEVELOPMENT
    </p>

</div>

</motion.section>

                <motion.section
                    className="statement"
                    id="about"

                    initial={{
                        opacity: 0
                    }}

                    whileInView={{
                        opacity: 1
                    }}

                    viewport={{
                        once: true,
                        amount: 0.25
                    }}

                    transition={{
                        duration: 0.8
                    }}
                >

                    <div className="section-meta">

                        <span>
                            02
                        </span>

                        THE IDEA

                    </div>


                    <div className="statement-content">

                        <motion.h2

                            initial={{
                                opacity: 0,
                                y: 35
                            }}

                            whileInView={{
                                opacity: 1,
                                y: 0
                            }}

                            viewport={{
                                once: true
                            }}

                            transition={{
                                duration: 0.8,
                                ease: [0.22, 1, 0.36, 1]
                            }}
                        >

                            AI shouldn't be

                            <br />

                            <span>
                                another tab.
                            </span>

                        </motion.h2>


                        <motion.p

                            initial={{
                                opacity: 0,
                                y: 20
                            }}

                            whileInView={{
                                opacity: 1,
                                y: 0
                            }}

                            viewport={{
                                once: true
                            }}

                            transition={{
                                delay: 0.15,
                                duration: 0.7
                            }}
                        >

                            Zientra brings AI into the same
                            environment where your team already
                            works.

                        </motion.p>

                    </div>

                </motion.section>

                <motion.section
                    className="final-cta"

                    initial={{
                        opacity: 0
                    }}

                    whileInView={{
                        opacity: 1
                    }}

                    viewport={{
                        once: true,
                        amount: 0.25
                    }}

                    transition={{
                        duration: 0.8
                    }}
                >

                    <p>
                        READY TO BUILD?
                    </p>


                    <motion.h2

                        initial={{
                            opacity: 0,
                            y: 35
                        }}

                        whileInView={{
                            opacity: 1,
                            y: 0
                        }}

                        viewport={{
                            once: true
                        }}

                        transition={{
                            duration: 0.8,
                            ease: [0.22, 1, 0.36, 1]
                        }}
                    >

                        Build something

                        <br />

                        <span>
                            together.
                        </span>

                    </motion.h2>


                    <motion.a
                        href="#waitlist"
                        className="final-button"

                        whileHover={{
                            y: -3
                        }}

                        whileTap={{
                            scale: 0.97
                        }}
                    >

                        Join the waitlist

                        <motion.span
                            whileHover={{
                                x: 5
                            }}
                        >
                            →
                        </motion.span>

                    </motion.a>

                </motion.section>

            </main>


            <footer>

                <div>
                    © 2026 Zientra
                </div>


                <div className="footer-links">

                    <a href="https://github.com/sahiladit/zientra" target="_blank">
                        GitHub
                    </a>

                    <a href="#">
                        X
                    </a>

                    <Link to="/contact">
                        Contact
                    </Link>

                </div>

            </footer>

        </div>
    );
};

export default Home;