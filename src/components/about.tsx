import { motion, type Variants } from "framer-motion";
import Nav from "./nav";
import { Link } from "react-router-dom";

const fadeUp: Variants = {
    hidden: {
        opacity: 0,
        y: 30
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

const stagger: Variants = {
    hidden: {},

    visible: {
        transition: {
            staggerChildren: 0.12
        }
    }
};

const About = () => {

    return (

        <div className="about-page">

            <Nav />

            <main>

                {/* 
                    HERO
                 */}

                <section className="about-hero">

                    <motion.div
                        className="about-hero-inner"

                        variants={stagger}

                        initial="hidden"

                        animate="visible"
                    >

                        <motion.div
                            className="section-meta"
                            variants={fadeUp}
                        >

                            <span>
                                01
                            </span>

                            ABOUT ZIENTRA

                        </motion.div>


                        <motion.h1
                            variants={fadeUp}
                        >

                            Build faster.

                            <br />

                            <span>
                                Evolve faster.
                            </span>

                        </motion.h1>


                        <motion.p
                            className="about-lead"
                            variants={fadeUp}
                        >

                            Zientra is a collaborative engineering
                            workspace where teams and AI work together
                            to write code, evolve projects, and solve
                            real-world problems faster.

                        </motion.p>

                    </motion.div>

                </section>


                {/* 
                    WHAT IS ZIENTRA
                */}

                <motion.section
                    className="about-section"

                    initial="hidden"

                    whileInView="visible"

                    viewport={{
                        once: true,
                        amount: 0.2
                    }}

                    variants={stagger}
                >

                    <div className="section-meta">

                        <span>
                            02
                        </span>

                        WHAT IS ZIENTRA?

                    </div>


                    <div className="about-grid">

                        <motion.h2 variants={fadeUp}>

                            One workspace.

                            <br />

                            <span>
                                Everyone working together.
                            </span>

                        </motion.h2>


                        <motion.div
                            className="about-copy"
                            variants={fadeUp}
                        >

                            <p>
                                Zientra brings the tools needed to
                                build software into one collaborative
                                engineering environment.
                            </p>

                            <p>
                                Teams can communicate, write code,
                                manage work, and collaborate with AI
                                agents inside the same workspace.
                            </p>

                            <p>
                                Instead of constantly switching between
                                a chat, code editor, task manager and AI
                                assistant, the development workflow
                                stays connected.
                            </p>

                        </motion.div>

                    </div>

                </motion.section>


                {/* 
                    VISION
                 */}

                <motion.section
                    className="vision"

                    initial={{
                        opacity: 0,
                        y: 40
                    }}

                    whileInView={{
                        opacity: 1,
                        y: 0
                    }}

                    viewport={{
                        once: true,
                        amount: 0.2
                    }}

                    transition={{
                        duration: 0.8,
                        ease: [0.22, 1, 0.36, 1]
                    }}
                >

                    <div className="section-meta">

                        <span>
                            03
                        </span>

                        OUR VISION

                    </div>


                    <div className="vision-content">

                        <h2>

                            Build rapidly.

                            <br />

                            <span>
                                Solve more.
                            </span>

                        </h2>


                        <p>

                            We want to make software development
                            radically faster by reducing the friction
                            between people, code, and AI.

                        </p>


                        <p>

                            Teams should be able to identify a problem,
                            discuss it, write the solution, test it,
                            and iterate — without constantly breaking
                            their flow.

                        </p>


                        <p>

                            Whether you're building a product,
                            maintaining an existing system,
                            experimenting with new technology,
                            or contributing to open source,
                            Zientra is built to help teams move faster.

                        </p>


                        <p>

                            Humans bring the decisions, creativity
                            and engineering judgment.
                            AI accelerates the work.
                            Zientra brings them together.

                        </p>

                    </div>

                </motion.section>


                {/* 
                    WHAT WE ARE BUILDING
                 */}

                <motion.section
                    className="about-section"

                    initial={{
                        opacity: 0
                    }}

                    whileInView={{
                        opacity: 1
                    }}

                    viewport={{
                        once: true,
                        amount: 0.2
                    }}

                    transition={{
                        duration: 0.8
                    }}
                >

                    <div className="section-meta">

                        <span>
                            04
                        </span>

                        WHAT WE'RE BUILDING

                    </div>


                    <div className="building-list">


                        {/* 01 */}

                        <motion.div
                            className="building-item"

                            whileHover={{
                                x: 6
                            }}

                            transition={{
                                duration: 0.2
                            }}
                        >

                            <span>
                                01
                            </span>

                            <div>

                                <h3>
                                    Collaborative engineering
                                </h3>

                                <p>
                                    Give teams a shared environment
                                    where developers can communicate,
                                    write code and work on problems
                                    together in real time.
                                </p>

                            </div>

                        </motion.div>


                        {/* 02 */}

                        <motion.div
                            className="building-item"

                            whileHover={{
                                x: 6
                            }}

                            transition={{
                                duration: 0.2
                            }}
                        >

                            <span>
                                02
                            </span>

                            <div>

                                <h3>
                                    AI teammates
                                </h3>

                                <p>
                                    AI agents that don't just answer
                                    questions, but actively participate
                                    in the engineering process alongside
                                    the team.
                                </p>

                            </div>

                        </motion.div>


                        {/* 03 */}

                        <motion.div
                            className="building-item"

                            whileHover={{
                                x: 6
                            }}

                            transition={{
                                duration: 0.2
                            }}
                        >

                            <span>
                                03
                            </span>

                            <div>

                                <h3>
                                    Rapid iteration
                                </h3>

                                <p>
                                    Reduce the friction between
                                    identifying a problem, implementing
                                    a solution, testing it and improving
                                    it again.
                                </p>

                            </div>

                        </motion.div>


                        {/* 04 */}

                        <motion.div
                            className="building-item"

                            whileHover={{
                                x: 6
                            }}

                            transition={{
                                duration: 0.2
                            }}
                        >

                            <span>
                                04
                            </span>

                            <div>

                                <h3>
                                    Open collaboration
                                </h3>

                                <p>
                                    Build an environment that can support
                                    startups, engineering teams,
                                    independent developers and open
                                    source contributors.
                                </p>

                            </div>

                        </motion.div>


                    </div>

                </motion.section>


                {/* 
                    FOUNDERS
                 */}

                <motion.section
                    className="founders"

                    initial={{
                        opacity: 0,
                        y: 40
                    }}

                    whileInView={{
                        opacity: 1,
                        y: 0
                    }}

                    viewport={{
                        once: true,
                        amount: 0.2
                    }}

                    transition={{
                        duration: 0.8
                    }}
                >

                    <div className="section-meta">

                        <span>
                            05
                        </span>

                        THE PEOPLE

                    </div>


                    <div className="founders-intro">

                        <h2>

                            Built by

                            <br />

                            <span>
                                builders.
                            </span>

                        </h2>

                        <p>

                            Zientra is being built by developers
                            who believe engineering teams should
                            be able to move faster, collaborate
                            better and spend more time solving
                            meaningful problems.

                        </p>

                    </div>


                    <div className="founder-grid">


                        {/* SAHIL */}

                        <motion.div
                            className="founder-card"

                            whileHover={{
                                y: -4
                            }}
                        >

                            <div className="founder-number">
                                01
                            </div>

                            <h3>
                                Sahil Adit
                            </h3>

                            <span>
                                Co-Founder
                            </span>

                            <p>
                                Building the product, engineering
                                the platform and shaping the technical
                                direction of Zientra.
                            </p>

                        </motion.div>


                        {/* SHIVRAJ */}

                        <motion.div
                            className="founder-card"

                            whileHover={{
                                y: -4
                            }}
                        >

                            <div className="founder-number">
                                02
                            </div>

                            <h3>
                                Shivraj Patil
                            </h3>

                            <span>
                                Co-Founder
                            </span>

                            <p>
                                Building Zientra alongside the team
                                and helping shape the product,
                                direction and vision.
                            </p>

                        </motion.div>


                    </div>

                </motion.section>


                {/* 
                    CLOSING
                 */}

                <motion.section
                    className="about-closing"

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
                        duration: 0.8
                    }}
                >

                    <p>
                        THE GOAL IS SIMPLE.
                    </p>

                    <h2>

                        Build rapidly.

                        <br />

                        <span>
                            Solve real problems.
                        </span>

                    </h2>

                </motion.section>

            </main>


            {/* 
                FOOTER
             */}

            <footer>

                <div>
                    © 2026 Zientra
                </div>

                <div className="footer-links">

                    <a href="#">
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

export default About;