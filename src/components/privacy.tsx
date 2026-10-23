import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Nav from "./nav";
import "./LegalPage.css";

const Privacy = () => {
    return (
        <div className="legal-page">
            <Nav />

            <main className="legal-main">
                <motion.div
                    className="legal-content"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="legal-meta">
                        LEGAL / PRIVACY POLICY
                    </div>

                    <h1>
                        Your work.<br />
                        <span>Your privacy.</span>
                    </h1>

                    <p className="legal-intro">
                        This policy explains how Zientra may collect,
                        use, and protect information when you use our
                        collaborative workspace.
                    </p>

                    <p className="legal-updated">
                        Last updated: October 23, 2026
                    </p>

                    <section>
                        <h2>01. Information We Collect</h2>
                        <p>
                            Depending on the features you use, we may
                            collect account information, workspace details,
                            content you submit, and technical information
                            needed to operate and secure the service.
                        </p>
                    </section>

                    <section>
                        <h2>02. How We Use Information</h2>
                        <p>
                            Information may be used to provide and maintain
                            Zientra, enable collaboration, improve features,
                            troubleshoot issues, and protect the platform
                            against misuse.
                        </p>
                    </section>

                    <section>
                        <h2>03. Workspace & Code Data</h2>
                        <p>
                            Content you create or share may be processed
                            to provide workspace, collaboration, and AI
                            functionality. Avoid submitting sensitive
                            information unless the service is designed
                            and configured to handle it appropriately.
                        </p>
                    </section>

                    <section>
                        <h2>04. AI Processing & Third Parties</h2>
                        <p>
                            Some features may rely on third-party providers
                            for hosting, infrastructure, or AI processing.
                            Where applicable, information may be processed
                            by those providers to deliver the requested
                            functionality.
                        </p>
                    </section>

                    <section>
                        <h2>05. Data Security & Retention</h2>
                        <p>
                            We use appropriate measures intended to protect
                            information. No system can guarantee absolute
                            security. Information may be retained for as
                            long as necessary to provide the service or
                            meet applicable legal obligations.
                        </p>
                    </section>

                    <section>
                        <h2>06. Your Choices</h2>
                        <p>
                            You may contact us to ask about accessing,
                            correcting, or deleting personal information,
                            subject to applicable law and our operational
                            requirements.
                        </p>
                    </section>

                    <section>
                        <h2>07. Policy Updates</h2>
                        <p>
                            We may update this policy as Zientra evolves.
                            Material changes should be reflected by updating
                            the revision date and communicating them where
                            required.
                        </p>
                    </section>

                    <section>
                        <h2>08. Contact</h2>
                        <p>
                            For privacy-related questions, please reach
                            out through our{" "}
                            <Link to="/contact">contact page</Link>.
                        </p>
                    </section>
                </motion.div>
            </main>

            <footer>
                <div>© 2026 Zientra</div>

                <div className="footer-links">
                    <Link to="/terms">Terms</Link>
                    <Link to="/privacy">Privacy</Link>
                    <Link to="/contact">Contact</Link>
                </div>
            </footer>
        </div>
    );
};

export default Privacy;