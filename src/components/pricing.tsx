
import { motion, type Variants } from "framer-motion";
import { Link } from "react-router-dom";
import Nav from "./nav";
import "./PricingPage.css";

type Feature = {
    name: string;
    free: boolean;
    pro: boolean;
};

type FeatureGroup = {
    title: string;
    features: Feature[];
};

const fadeUp: Variants = {
    hidden: {
        opacity: 0,
        y: 30,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
        },
    },
};

const stagger: Variants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.12,
        },
    },
};

// Edit the feature availability here.
const featureGroups: FeatureGroup[] = [
    {
        title: "Workspace & collaboration",
        features: [
            { name: "Create and manage rooms", free: true, pro: true },
            { name: "Invite team members", free: true, pro: true },
            { name: "Real-time collaboration", free: true, pro: true },
            { name: "Room messaging", free: true, pro: true },
        ],
    },
    {
        title: "Meet Your AI Teammates",
        features: [
            { name: "@coder - Develops features and refactors in your style", free: true, pro: true },
            { name: "@debugger - Finds root causes from errors and terminal", free: true, pro: true },
            { name: "@reviewer - Flags defects and style drifts, proposes fixes", free: true, pro: true },
            { name: "@architect - Plans structure and module boundaries before you build", free: false, pro: true },
            { name: "@tester - Writes unit tests that match your conventions", free: false, pro: true },
            { name: "@security - Audits code for vulnerabilities and unsafe patterns", free: false, pro: true },
            { name: "@docs - Writes docs and comments in your voice", free: false, pro: true },
        ],
    },
    {
        title: "AI Agents",
        features: [
            { name: "Access to prebuilt agents", free: true, pro: true },
            { name: "Custom AI agents", free: false, pro: true },
            { name: "Agent-to-agent collaboration", free: false, pro: true },
            { name: "Advanced agent orchestration", free: false, pro: true },
        ],
    },
    {
        title: "Development",
        features: [
            { name: "Collaborative code editor", free: true, pro: true },
            { name: "GitHub integration", free: true, pro: true },
            { name: "AI-assisted development", free: true, pro: true },
            { name: "Advanced development workflows", free: false, pro: true },
        ],
    },
    {
        title: "Memory & automation",
        features: [
            { name: "Project memory", free: true, pro: true },
            { name: "Persistent team memory", free: false, pro: true },
            { name: "Automated task delegation", free: false, pro: true },
        ],
    },
    {
        title: "Usage & support",
        features: [
            { name: "Usage limits", free: true, pro: true },
            { name: "Usage analytics", free: false, pro: true },
            { name: "Priority support", free: false, pro: true },
        ],
    },
];

const Pricing = () => {
    return (
        <div className="pricing-page">
            <Nav />

            <main>
                {/* HERO */}
                <section className="pricing-hero">
                    <motion.div
                        className="pricing-hero-inner"
                        variants={stagger}
                        initial="hidden"
                        animate="visible"
                    >
                        <motion.div
                            className="section-meta"
                            variants={fadeUp}
                        >
                            <span>01</span>
                            PLANS & PRICING
                        </motion.div>

                        <motion.h1 variants={fadeUp}>
                            Build faster.
                            <br />
                            <span>Scale together.</span>
                        </motion.h1>

                        <motion.p
                            className="pricing-lead"
                            variants={fadeUp}
                        >
                            Start building with your team and AI.
                            Choose the plan that fits the way you work.
                        </motion.p>
                    </motion.div>
                </section>

                {/* PLAN CARDS */}
                <motion.section
                    className="pricing-plans"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.15 }}
                    variants={stagger}
                >
                    <div className="section-meta">
                        <span>02</span>
                        CHOOSE YOUR PLAN
                    </div>

                    <div className="pricing-plan-grid">
                        <motion.article
                            className="plan-card"
                            variants={fadeUp}
                            whileHover={{ y: -5 }}
                            transition={{ duration: 0.25 }}
                        >
                            <div className="plan-card-top">
                                <span className="plan-index">01 / START HERE</span>
                                <span className="plan-symbol">○</span>
                            </div>

                            <h2>Free<span>.</span></h2>

                            <p className="plan-description">
                                Everything you need to start bringing
                                people and AI together.
                            </p>

                            <div className="plan-price">
                                <strong>$0</strong>
                                <span> / forever</span>
                            </div>

                            <ul className="plan-highlights">
                                <li>Core collaborative workspace</li>
                                <li>Essential development tools</li>
                                <li>Get started at no cost</li>
                            </ul>

                            <Link
                                to="/signup"
                                className="plan-button plan-button-outline"
                            >
                                Get started <span>↗</span>
                            </Link>
                        </motion.article>

                        <motion.article
                            className="plan-card plan-card-pro"
                            variants={fadeUp}
                            whileHover={{ y: -5 }}
                            transition={{ duration: 0.25 }}
                        >
                            <div className="plan-card-top">
                                <span className="plan-index">
                                    02 / FOR MORE
                                </span>
                                <span className="plan-symbol">✳</span>
                            </div>

                            <h2>Pro<span>.</span></h2>

                            <p className="plan-description">
                                More room to build, orchestrate AI agents,
                                and take your team's workflow further.
                            </p>

                            <div className="plan-price">
                                <strong>Coming soon</strong>
                            </div>

                            <ul className="plan-highlights">
                                <li>Expanded AI capabilities</li>
                                <li>Advanced team workflows</li>
                                <li>More control over your workspace</li>
                            </ul>

                            <a
                                href="#comparison"
                                className="plan-button plan-button-dark"
                            >
                                Explore the differences <span>↓</span>
                            </a>
                        </motion.article>
                    </div>
                </motion.section>

                {/* FEATURE COMPARISON */}
                <motion.section
                    className="pricing-comparison"
                    id="comparison"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    variants={stagger}
                >
                    <motion.div
                        className="section-meta"
                        variants={fadeUp}
                    >
                        <span>03</span>
                        FEATURE COMPARISON
                    </motion.div>

                    <div className="comparison-intro">
                        <motion.h2 variants={fadeUp}>
                            Every detail.
                            <br />
                            <span>Side by side.</span>
                        </motion.h2>

                        <motion.p variants={fadeUp}>
                            See what comes with each plan and decide
                            what works best for your team.
                        </motion.p>
                    </div>

                    <motion.div
                        className="comparison-table-wrap"
                        variants={fadeUp}
                    >
                        <table className="pricing-table">
                            <thead>
                                <tr>
                                    <th scope="col" className="feature-heading">
                                        WHAT'S INCLUDED
                                    </th>
                                    <th scope="col">FREE</th>
                                    <th scope="col" className="pro-heading">
                                        PRO <span>✳</span>
                                    </th>
                                </tr>
                            </thead>

                            {featureGroups.map((group, groupIndex) => (
                                <tbody key={group.title}>
                                    <tr className="comparison-group">
                                        <th colSpan={3} scope="colgroup">
                                            <span>
                                                {String(groupIndex + 1).padStart(2, "0")}
                                            </span>
                                            {group.title}
                                        </th>
                                    </tr>

                                    {group.features.map((feature) => (
                                        <tr key={feature.name}>
                                            <th
                                                scope="row"
                                                className="comparison-feature"
                                            >
                                                {feature.name}
                                            </th>

                                            <td>
                                                <span
                                                    className={
                                                        feature.free
                                                            ? "feature-yes"
                                                            : "feature-no"
                                                    }
                                                    aria-label={
                                                        feature.free
                                                            ? "Included"
                                                            : "Not included"
                                                    }
                                                >
                                                    {feature.free ? "✓" : "—"}
                                                </span>
                                            </td>

                                            <td className="pro-cell">
                                                <span
                                                    className={
                                                        feature.pro
                                                            ? "feature-yes"
                                                            : "feature-no"
                                                    }
                                                    aria-label={
                                                        feature.pro
                                                            ? "Included"
                                                            : "Not included"
                                                    }
                                                >
                                                    {feature.pro ? "✓" : "—"}
                                                </span>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            ))}
                        </table>
                    </motion.div>

                    <p className="comparison-note">
                        Plan features are subject to change as Zientra evolves.
                    </p>
                </motion.section>

                {/* CLOSING CTA */}
                <motion.section
                    className="pricing-closing"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.25 }}
                    transition={{
                        duration: 0.8,
                        ease: [0.22, 1, 0.36, 1],
                    }}
                >
                    <div className="section-meta">
                        <span>04</span>
                        YOUR NEXT STEP
                    </div>

                    <h2>
                        Great work starts
                        <br />
                        <span>with a team.</span>
                    </h2>

                    <p>
                        Bring your people, your code, and your AI
                        teammates into one place.
                    </p>

                    <Link to="/signup" className="pricing-closing-button">
                        Start building <span>→</span>
                    </Link>
                </motion.section>
            </main>

            <footer>
                <div>© 2026 Zientra</div>

                <div className="footer-links">
                    <a
                        href="https://github.com/Zientra/zientra_frontend_org"
                        target="_blank"
                        rel="noreferrer"
                    >
                        GitHub
                    </a>

                    {/* <a href="#">X</a> */}
                    <Link to="/terms">Terms</Link>
                    <Link to="/privacy">Privacy</Link>
                    <Link to="/contact">Contact</Link>
                </div>
            </footer>
        </div>
    );
};

export default Pricing;
