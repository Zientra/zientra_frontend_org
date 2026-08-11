import { motion, type Variants } from "framer-motion";
import Nav from "./nav";

const container: Variants = {
    hidden: {},

    visible: {
        transition: {
            staggerChildren: 0.12
        }
    }
};

const item: Variants = {
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

const WhyZientra = () => {

    return (
        <>
        <Nav></Nav>
        <motion.section
            className="why-zientra"
            id="why-zientra"

            initial="hidden"

            whileInView="visible"

            viewport={{
                once: true,
                amount: 0.12
            }}

            variants={container}
        >

            {/* HEADER */}

            <motion.div
                className="section-meta"
                variants={item}
            >

                <span>
                    0
                </span>

                WHY ZIENTRA?

            </motion.div>


            <motion.div
                className="why-header"
                variants={item}
            >

                <h2>

                    AI agents are powerful.

                    <br />

                    <span>
                        The system around them matters.
                    </span>

                </h2>

                <p>

                    Zientra isn't just another place to run
                    an AI coding agent. It's an environment
                    designed around how teams actually build,
                    evolve and solve problems.

                </p>

            </motion.div>


            {/* REASONS */}

            <div className="why-list">


                {/* =========================
                    01 — GOAL CENTRIC
                ========================= */}

                <motion.div
                    className="why-item"
                    variants={item}
                >

                    <div className="why-number">
                        01
                    </div>


                    <div className="why-content">

                        <h3>
                            Goal-centric engineering
                        </h3>

                        <h4>
                            Don't just complete tasks.
                            Work toward the goal.
                        </h4>

                        <p>

                            Most agent workflows are focused on
                            individual tasks — fix this bug, write
                            this function, implement this feature.

                        </p>

                        <p>

                            Zientra is designed around the larger
                            objective. You provide the goal and
                            the context, and the work becomes a
                            collection of steps moving toward
                            that outcome.

                        </p>

                        <p>

                            Specialized agents can then contribute
                            where they are most useful — coding,
                            security, testing, research and more —
                            while remaining aligned with the same
                            overall goal.

                        </p>


                        <div className="goal-flow">

                            <span>
                                Team Goal
                            </span>

                            <span>→</span>

                            <span>
                                Engineering Work
                            </span>

                            <span>→</span>

                            <span>
                                Goal Achieved
                            </span>

                        </div>

                    </div>

                </motion.div>


                {/* =========================
                    02 — CONTEXT
                ========================= */}

                <motion.div
                    className="why-item"
                    variants={item}
                >

                    <div className="why-number">
                        02
                    </div>


                    <div className="why-content">

                        <h3>
                            Persistent organizational context
                        </h3>

                        <h4>
                            Your team shouldn't have to
                            explain itself every time.
                        </h4>

                        <p>

                            Projects accumulate knowledge:
                            architectural decisions, product
                            requirements, technical constraints,
                            conventions and lessons from previous work.

                        </p>

                        <p>

                            Zientra is designed to preserve this
                            organizational context so AI can work
                            with a deeper understanding of the
                            environment around the code.

                        </p>

                        <div className="context-tags">

                            <span>
                                Architecture
                            </span>

                            <span>
                                Decisions
                            </span>

                            <span>
                                Requirements
                            </span>

                            <span>
                                Conventions
                            </span>

                            <span>
                                Team knowledge
                            </span>

                        </div>

                    </div>

                </motion.div>


                {/* =========================
                    03 — WORK GRAPH
                ========================= */}

                <motion.div
                    className="why-item why-work-graph"
                    variants={item}
                >

                    <div className="why-number">
                        03
                    </div>


                    <div className="why-content">

                        <h3>
                            The Work Graph
                        </h3>

                        <h4>
                            Don't just know what changed.
                            Know why it changed.
                        </h4>

                        <p>

                            A coding agent can know which files
                            it modified. Zientra aims to understand
                            how that work connects to the larger
                            engineering process.

                        </p>


                        {/* GRAPH */}

                        <div className="work-graph">

                            <div className="graph-node">
                                Customer Requirement
                            </div>

                            <div className="graph-line" />

                            <div className="graph-node">
                                Product Decision
                            </div>

                            <div className="graph-line" />

                            <div className="graph-node">
                                Engineering Task
                            </div>

                            <div className="graph-line" />

                            <div className="graph-node">
                                Implementation Agent
                            </div>

                            <div className="graph-split">

                                <div>

                                    <div className="graph-line" />

                                    <div className="graph-node">
                                        Security Agent
                                    </div>

                                </div>


                                <div>

                                    <div className="graph-line" />

                                    <div className="graph-node">
                                        QA Agent
                                    </div>

                                </div>

                            </div>


                            <div className="graph-line" />

                            <div className="graph-node graph-human">
                                Human Approval
                            </div>

                            <div className="graph-line" />

                            <div className="graph-node graph-final">
                                Deployment
                            </div>

                        </div>


                        <div className="graph-questions">

                            <p>
                                Why was this code written?
                            </p>

                            <p>
                                Which requirement caused it?
                            </p>

                            <p>
                                Who approved it?
                            </p>

                            <p>
                                Which agent reviewed it?
                            </p>

                        </div>

                    </div>

                </motion.div>


                {/* =========================
                    04 — HUMAN LOOP
                ========================= */}

                <motion.div
                    className="why-item"
                    variants={item}
                >

                    <div className="why-number">
                        04
                    </div>


                    <div className="why-content">

                        <h3>
                            Humans in the execution loop
                        </h3>

                        <h4>
                            AI works with the team.
                            Not instead of it.
                        </h4>

                        <p>

                            Developers shouldn't have to hand a
                            task to an agent and disappear until
                            the result comes back.

                        </p>

                        <p>

                            In Zientra, humans can see what agents
                            are doing, participate in the process,
                            provide direction, review work and make
                            decisions alongside them.

                        </p>


                        <div className="human-loop">

                            <span>
                                Human
                            </span>

                            <span>↕</span>

                            <span>
                                AI Agent
                            </span>

                            <span>↕</span>

                            <span>
                                Human
                            </span>

                            <span>↕</span>

                            <span>
                                Specialized Agents
                            </span>

                        </div>

                    </div>

                </motion.div>


                {/* =========================
                    05 — SPECIALIZED AGENTS
                ========================= */}

                <motion.div
                    className="why-item"
                    variants={item}
                >

                    <div className="why-number">
                        05
                    </div>


                    <div className="why-content">

                        <h3>
                            Specialized agents
                        </h3>

                        <h4>
                            Different problems need
                            different expertise.
                        </h4>

                        <p>

                            Instead of relying on one general-purpose
                            agent to handle everything, Zientra can
                            bring specialized agents into the same
                            engineering workflow.

                        </p>


                        <div className="agent-grid">

                            <div>
                                <strong>
                                    Coding
                                </strong>

                                <span>
                                    Implementation
                                </span>
                            </div>

                            <div>
                                <strong>
                                    Security
                                </strong>

                                <span>
                                    Vulnerability review
                                </span>
                            </div>

                            <div>
                                <strong>
                                    QA
                                </strong>

                                <span>
                                    Testing & edge cases
                                </span>
                            </div>

                            <div>
                                <strong>
                                    Research
                                </strong>

                                <span>
                                    Technical investigation
                                </span>
                            </div>

                        </div>

                    </div>

                </motion.div>

            </div>


            {/* CLOSING */}

            <motion.div
                className="why-closing"
                variants={item}
            >

                <p>
                    THE DIFFERENCE
                </p>

                <h3>

                    It's not just about
                    <br />

                    <span>
                        better agents.
                    </span>

                </h3>

                <p>

                    It's about building the system
                    around them.

                </p>

            </motion.div>

        </motion.section>
        </>
    );
};

export default WhyZientra;