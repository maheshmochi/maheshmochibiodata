import React from "react";
import { motion } from "motion/react";
import {
  Award,
  Sparkles,
  ExternalLink,
  FileText,
  Code2,
  BrainCircuit,
  ArrowUpRight,
} from "lucide-react";

import "./Certificates.css";

const certificates = [
  {
    id: "01",
    category: "ARTIFICIAL INTELLIGENCE",
    title: "Introduction to Generative AI",
    description:
      "An introduction to Generative AI concepts and how AI can support creative thinking, productivity, and practical applications.",
    issuer: "Certificate of Completion",
    keywords: ["Generative AI", "AI Fundamentals", "Technology"],
    icon: BrainCircuit,
    accent: "purple",
    file: "https://myportfolioweb-d0cb.onrender.com/Introduction%20to%20Generative%20AI.pdf",
  },
  {
    id: "02",
    category: "WEB DEVELOPMENT",
    title: "Introduction to Web Development with ChatGPT",
    description:
      "Exploring web development fundamentals and using ChatGPT as a learning and development assistant for coding practice and problem-solving.",
    issuer: "Certificate of Completion",
    keywords: ["Web Development", "ChatGPT", "Coding"],
    icon: Code2,
    accent: "cyan",
    file: "https://myportfolioweb-d0cb.onrender.com/Introduction%20to%20Web%20Development%20with%20ChatGPT.pdf",
  },
];

const Certificates = () => {
  return (
    <section className="certificates-section" id="certificates">
      <div className="certificates-container">
        {/* Section Heading */}
        <motion.div
          className="certificates-heading"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <span className="cert-eyebrow">
            <Sparkles size={15} />
            LEARNING & ACHIEVEMENTS
          </span>

          <h2>
            My <span>Certificates</span>
          </h2>

          <p>
            Continuous learning, practical knowledge, and new skills
            to grow as a developer.
          </p>
        </motion.div>

        {/* Statistics */}
        <motion.div
          className="cert-stats"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="cert-stat">
            <strong>{String(certificates.length).padStart(2, "0")}</strong>
            <span>Certificates</span>
          </div>

          <div className="cert-stat-divider" />

          <div className="cert-stat">
            <strong>02</strong>
            <span>Learning Areas</span>
          </div>

          <div className="cert-stat-divider" />

          <div className="cert-stat">
            <strong>∞</strong>
            <span>Keep Learning</span>
          </div>
        </motion.div>

        {/* Certificate Cards */}
        <div className="certificates-grid">
          {certificates.map((certificate, index) => {
            const CertificateIcon = certificate.icon;

            return (
              <motion.article
                className={`cert-card cert-${certificate.accent}`}
                key={certificate.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.12,
                }}
              >
                <div className="cert-card-top">
                  <span className="cert-number">
                    CERT_{certificate.id}
                  </span>

                  <span className="cert-award-icon">
                    <Award size={19} />
                  </span>
                </div>

                <div className="cert-illustration">
                  <div className="cert-illustration-glow" />
                  <FileText className="cert-file-icon" size={43} />
                  <CertificateIcon
                    className="cert-sub-icon"
                    size={22}
                  />
                </div>

                <span className="cert-category">
                  {certificate.category}
                </span>

                <h3>{certificate.title}</h3>

                <p className="cert-description">
                  {certificate.description}
                </p>

                <div className="cert-keywords">
                  {certificate.keywords.map((keyword) => (
                    <span key={keyword}>{keyword}</span>
                  ))}
                </div>

                <div className="cert-card-footer">
                  <div className="cert-issuer">
                    <span className="cert-status-dot" />
                    <span>{certificate.issuer}</span>
                  </div>

                  <a
                    href={certificate.file}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cert-view-btn"
                    aria-label={`View ${certificate.title} certificate`}
                  >
                    View Certificate
                    <ArrowUpRight size={16} />
                  </a>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Bottom Message */}
        <motion.div
          className="cert-bottom-note"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Sparkles size={17} />
          <p>
            <strong>Always learning.</strong> Turning knowledge into
            practical skills through continuous learning and projects.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Certificates;
