
import { useState } from "react";
import { motion, type Variants } from "framer-motion";
import {
  ArrowDownToLine,
  Check,
  Monitor,
  Terminal,
} from "lucide-react";
import Nav from "./nav";
import "./download.css";
import AppleIcon from "@mui/icons-material/Apple";

type Platform = "windows" | "macos" | "linux" | "unknown";

const INSTALLERS: Record<Platform, string> = {
  windows: "PASTE_WINDOWS_BLOB_URL_HERE",
  macos: "PASTE_MAC_BLOB_URL_HERE",
  linux: "PASTE_LINUX_BLOB_URL_HERE",
  unknown: "",
};

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 32, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.75,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

function detectPlatform(): Platform {
  const ua = navigator.userAgent.toLowerCase();
  const nav = navigator as Navigator & {
    userAgentData?: { platform?: string };
  };

  const platform =
    nav.userAgentData?.platform?.toLowerCase() ||
    navigator.platform?.toLowerCase() ||
    "";

  if (platform.includes("win") || ua.includes("windows")) {
    return "windows";
  }

  if (platform.includes("mac") || ua.includes("macintosh")) {
    return "macos";
  }

  if (platform.includes("linux") || ua.includes("linux")) {
    return "linux";
  }

  return "unknown";
}

function OSIcon({ platform }: { platform: Platform }) {
  if (platform === "macos") {
    return <AppleIcon />;
  }

  if (platform === "linux") {
    return <Terminal size={25} strokeWidth={1.6} />;
  }

  return <Monitor size={25} strokeWidth={1.6} />;
}

export default function Download() {
  const [platform] = useState<Platform>(detectPlatform);

  const platformName: Record<Platform, string> = {
    windows: "Windows",
    macos: "macOS",
    linux: "Linux",
    unknown: "your device",
  };

  const installerTitle: Record<Platform, string> = {
    windows: "Zientra for Windows",
    macos: "Zientra for Mac",
    linux: "Zientra for Linux",
    unknown: "Zientra Desktop",
  };

  const downloadUrl = INSTALLERS[platform];

  const isConfigured = Boolean(
    downloadUrl &&
      downloadUrl.startsWith("https://") &&
      !downloadUrl.includes("PASTE_")
  );

  return (
    <div className="download-page">
      <Nav />

      <main>
        <motion.section
          className="download-hero"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            className="download-eyebrow"
            variants={fadeUp}
          >
            <span className="download-eyebrow-dot" />
            THE ZIENTRA DESKTOP APP
          </motion.div>

          <motion.h1 variants={fadeUp}>
            Your workspace.
            <br />
            <span>Ready to build.</span>
          </motion.h1>

          <motion.p
            className="download-description"
            variants={fadeUp}
          >
            Code, conversations, tasks and AI agents — working
            together in one collaborative environment.
            Download Zientra and build together.
          </motion.p>

          <motion.div
            className="download-release-meta"
            variants={fadeUp}
          >
            <span className="download-prerelease">
              <span />
              PRE-RELEASE
            </span>

            <span className="download-meta-divider" />
            <span>v0.1.0</span>
            <span className="download-meta-divider" />
            <span>14-day free trial</span>
          </motion.div>

          

          <motion.section
            className="download-featured"
            variants={cardVariants}
            whileHover={{
              y: -5,
              transition: { duration: 0.25 },
            }}
          >
            <div className="download-featured-top">
              <span>YOUR DOWNLOAD</span>
              <span className="download-version">v0.1.0</span>
            </div>

            <div className="download-installer">
              <motion.div
                className="download-installer-icon"
                whileHover={{ rotate: 5, scale: 1.06 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <OSIcon platform={platform} />
              </motion.div>

              <div className="download-installer-copy">
                <h2>{installerTitle[platform]}</h2>
                <p>
                  {isConfigured
                    ? "Installer ready to download"
                    : "Installer is not configured yet."}
                </p>
              </div>
            </div>

            {isConfigured ? (
              <motion.a
                className="download-primary-button"
                href={downloadUrl}
                whileHover={{
                  y: -2,
                  scale: 1.015,
                }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
              >
                <ArrowDownToLine size={19} />
                Download for {platformName[platform]}
              </motion.a>
            ) : (
              <button
                type="button"
                className="download-primary-button download-disabled"
                disabled
              >
                Releasing Soon
              </button>
            )}

            <div className="download-trust">
              <span>
                <Check size={14} /> Pre-release v0.1.0
              </span>
              <span>
                <Check size={14} /> 14-day free trial
              </span>
            </div>
          </motion.section>

          <motion.p
            className="download-footnote"
            variants={fadeUp}
          >
            Zientra is currently in pre-release. Features and
            experience may change as development continues.
          </motion.p>
        </motion.section>

        <motion.section
          className="download-trial"
          initial={{ opacity: 0, y: 45 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <motion.div
            className="download-trial-number"
            initial={{ opacity: 0, scale: 0.7 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{
              delay: 0.2,
              duration: 0.65,
              type: "spring",
              stiffness: 120,
            }}
          >
            14
          </motion.div>

          <motion.div
            className="download-trial-copy"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.span variants={fadeUp}>
              PRE-RELEASE · v0.1.0
            </motion.span>

            <motion.h2 variants={fadeUp}>
              Start building.
              <br />
              <span>Your first 14 days are free.</span>
            </motion.h2>

            <motion.p variants={fadeUp}>
              Experience Zientra with a 14-day free trial.
              Bring your code, conversations and collaborative
              workflow together in one place.
            </motion.p>
          </motion.div>
        </motion.section>
      </main>

      <motion.footer
        className="download-footer"
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.6 }}
      >
        <a href="/" className="download-footer-brand">
          <img src="/logo_nobg.png" alt="" />
          <strong>zientra</strong>
        </a>

        <span>© 2026 Zientra · Pre-release v0.1.0</span>

        <a
          href="https://github.com/Zientra"
          target="_blank"
          rel="noreferrer"
        >
          GitHub ↗
        </a>
      </motion.footer>
    </div>
  );
}
