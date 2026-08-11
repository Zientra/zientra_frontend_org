import { motion, type Variants } from "framer-motion";
import { useState } from 'react';
import type { FormEvent } from "react";

  const heroContainer: Variants = {
      hidden: {},

      visible: {
          transition: {
              staggerChildren: 0.12
          }
      }
  };

    const heroItem: Variants = {
      hidden: {
          opacity: 0,
          y: 20
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

const Hero = () => {

    const [email, setEmail] = useState("");
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!email.trim()) return;

        setSubmitted(true);
        setEmail("");
    };

    return (
        <section className="hero">

                    <motion.div
                        className="hero-inner"

                        variants={heroContainer}

                        initial="hidden"

                        animate="visible"
                    >

                        <motion.div
                            className="eyebrow"
                            variants={heroItem}
                        >

                            <span className="status-dot" />

                            THE COLLABORATIVE WORKSPACE

                        </motion.div>

                        <motion.h1
                            variants={heroItem}
                        >

                            Build together.

                            <br />

                            <span>
                                With AI.
                            </span>

                        </motion.h1>

                        <motion.p
                            className="hero-description"
                            variants={heroItem}
                        >

                            A shared workspace where teams
                            can code, communicate, and build
                            alongside intelligent agents.

                        </motion.p>


                        <motion.form
                            className="waitlist"
                            id="waitlist"

                            variants={heroItem}

                            onSubmit={handleSubmit}

                            whileHover={{
                                scale: 1.01
                            }}

                            transition={{
                                duration: 0.25
                            }}
                        >

                            <input
                                type="email"
                                placeholder="Enter your email"
                                value={email}

                                onChange={(e) =>
                                    setEmail(e.target.value)
                                }

                                required
                            />

                            <motion.button
                                type="submit"

                                whileHover={{
                                    y: -2
                                }}

                                whileTap={{
                                    scale: 0.97
                                }}
                            >

                                {submitted
                                    ? "You're on the list"
                                    : "Join waitlist"}

                                {!submitted && (
                                    <motion.span
                                        initial={{
                                            x: 0
                                        }}

                                        whileHover={{
                                            x: 4
                                        }}
                                    >
                                        →
                                    </motion.span>
                                )}

                            </motion.button>

                        </motion.form>


                        <motion.p
                            className="waitlist-note"
                            variants={heroItem}
                        >

                            Early access · No spam

                        </motion.p>

                    </motion.div>

                    <motion.div
                        className="hero-glow"
                        animate={{
                            opacity: [0.35, 0.55, 0.35],
                            scale: [1, 1.04, 1]
                        }}

                        transition={{
                            duration: 8,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    />

                </section>
    );
}

export default Hero;
