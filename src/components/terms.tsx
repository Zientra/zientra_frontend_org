import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Nav from "./nav";
import "./LegalPage.css";

const Terms = () => {
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
                        LEGAL / TERMS OF SERVICE
                    </div>

                    <h1>
                        Terms &<br />
                        <span>Conditions.</span>
                    </h1>

                    <p className="legal-intro">
                        Please read these terms carefully before using
                        Zientra and its collaborative workspace.
                    </p>

                    <p className="legal-updated">
                        Last updated: October 23, 2026
                    </p>

                    <section>
                        <h2>01. Acceptance of Terms</h2>
                        <p>
                            By accessing or using Zientra, you agree to
                            these Terms & Conditions. If you do not agree
                            with these terms, please do not use the service.
                        </p>
                    </section>

                    <section>
                        <h2>02. Our Service</h2>
                        <p>
                            Zientra is a collaborative workspace designed
                            to help developers work together with AI agents.
                            Features may evolve as the platform develops.
                        </p>
                    </section>

                    <section>
                        <h2>03. User Responsibilities</h2>
                        <p>
                            You agree to use Zientra lawfully, protect your
                            account credentials, and avoid activities that
                            disrupt the service or compromise other users.
                        </p>
                    </section>

                    <section>
                        <h2>04. Code & User Content</h2>
                        <p>
                            You retain ownership of content you create or
                            submit, subject to any rights you grant us to
                            operate the service. You are responsible for
                            ensuring that you have the necessary rights to
                            content you upload or share.
                        </p>
                    </section>

                    <section>
                        <h2>05. AI-Generated Output</h2>
                        <p>
                            AI-generated code and suggestions may contain
                            errors. Review and test outputs before using
                            them, particularly in production environments.
                        </p>
                    </section>

                    <section>
                        <h2>06. Availability & Changes</h2>
                        <p>
                            We may update, modify, or discontinue features
                            as the platform evolves. We will make reasonable
                            efforts to communicate significant changes.
                        </p>
                    </section>

                    <section>
                        <h2>07. Contact</h2>
                        <p>
                            If you have questions about these terms, please
                            contact us through our{" "}
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

export default Terms;