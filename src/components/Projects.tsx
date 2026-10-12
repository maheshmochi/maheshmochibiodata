import { useTranslation } from 'react-i18next';
import { motion } from 'motion/react';
import {
  ExternalLink,
  Github,
  ShoppingBag,
  Code2,
  Globe,
  ArrowUpRight,
  Sparkles,
  Utensils,
} from 'lucide-react';


export default function Projects() {
  const { t } = useTranslation();

  const projects = [
    {
      title: 'React.js Portfolio Website',
      category: 'PERSONAL PROJECT',
      number: '01',
      desc: 'A modern, responsive developer portfolio showcasing my skills, projects, and frontend development journey. Features a clean interface, smooth animations, and layouts optimized for mobile, tablet, and desktop.',
      tech: ['React.js', 'JavaScript', 'Tailwind CSS', 'Vite'],
      github: 'https://github.com/maheshmochi',
      live: 'https://myportfolioweb-d0cb.onrender.com',
      status: 'Live',
      icon: Code2,
      accent: 'portfolio',
    },
    {
      title: 'Cartin Craft',
      category: 'E-COMMERCE PROJECT',
      number: '02',
      desc: 'A modern e-commerce experience focused on product discovery, elegant product presentation, responsive layouts, and intuitive shopping interactions. Built around reusable UI components and a user-friendly storefront.',
      tech: [
        'React.js',
        'JavaScript',
        'HTML5',
        'CSS3',
        'Responsive Design',
      ],
      github: 'https://github.com/maheshmochi',
      live: null,
      status: 'In Development',
      icon: ShoppingBag,
      accent: 'commerce',
    },
    {
      title: 'Lazeez Food Delivery',
      category: 'FOOD DELIVERY PROJECT',
      number: '03',
      desc: 'A food delivery web application built with React.js and PHP, designed to provide a smooth food browsing experience with an intuitive interface and responsive design. MySQL is used for database management.',
      tech: ['React.js', 'PHP', 'MySQL', 'JavaScript', 'HTML5', 'CSS3'],
      github: 'https://github.com/maheshmochi',
      live: null,
      status: 'In Development',
      icon: Utensils,
      accent: 'food',
    },
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="projects-heading"
        >
          <div className="projects-heading-content">
            <div className="projects-eyebrow">
              <Sparkles size={15} />
              <span>Things I've been building</span>
            </div>

            <h2>
              {t('projects.title')}
              <span className="projects-title-dot">.</span>
            </h2>

            <p>
              A collection of projects built while exploring modern
              frontend development, responsive interfaces, and practical
              web experiences.
            </p>
          </div>

          <a
            href="https://github.com/maheshmochi"
            target="_blank"
            rel="noopener noreferrer"
            className="projects-github-link"
          >
            <Github size={17} />
            Explore GitHub
            <ArrowUpRight size={15} />
          </a>
        </motion.div>

        {/* Project Statistics */}
        <motion.div
          className="projects-stats"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="projects-stat">
            <strong>03</strong>
            <span>Featured Projects</span>
          </div>

          <div className="projects-stat-divider" />

          <div className="projects-stat">
            <strong>01</strong>
            <span>Live Website</span>
          </div>

          <div className="projects-stat-divider" />

          <div className="projects-stat">
            <strong>02</strong>
            <span>In Development</span>
          </div>
        </motion.div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {projects.map((project, idx) => {
            const ProjectIcon = project.icon;

            return (
              <motion.article
                key={project.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.55, delay: idx * 0.12 }}
                className={`project-card project-${project.accent}`}
              >
                {/* Visual Header */}
                <div className="project-visual">
                  <div className="project-glow" />
                  <div className="project-grid-pattern" />

                  <span className="project-number">
                    {project.number}
                  </span>

                  <div className="project-visual-content">
                    <div className="project-icon-box">
                      <ProjectIcon size={36} strokeWidth={1.5} />
                    </div>

                    <div className="project-visual-text">
                      <p>{project.category}</p>
                      <h3>{project.title}</h3>
                    </div>
                  </div>

                  <div className="project-status">
                    <span
                      className={`project-status-dot ${
                        project.status === 'Live' ? 'is-live' : ''
                      }`}
                    />
                    <span>{project.status}</span>
                  </div>

                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Open ${project.title} live website`}
                      className="project-quick-link"
                    >
                      <ArrowUpRight size={18} />
                    </a>
                  )}
                </div>

                {/* Project Information */}
                <div className="project-details">
                  <p className="project-description">{project.desc}</p>

                  <div className="project-tech-list">
                    {project.tech.map((tech) => (
                      <span key={tech}>{tech}</span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="project-actions">
                    {project.live ? (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-live-button"
                      >
                        <Globe size={16} />
                        Live Website
                        <ExternalLink size={14} />
                      </a>
                    ) : (
                      <span className="project-building-label">
                        <span />
                        Currently Building
                      </span>
                    )}

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View ${project.title} GitHub repository`}
                      className="project-code-button"
                    >
                      <Github size={17} />
                      Code
                    </a>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Bottom Link */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="projects-bottom"
        >
          <p>Always learning. Always building.</p>

          <a
            href="https://github.com/maheshmochi"
            target="_blank"
            rel="noopener noreferrer"
          >
            Discover more on GitHub
            <ExternalLink size={15} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
