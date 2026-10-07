import React, { useState } from 'react';
import { motion } from 'motion/react';

import {
  Code2,
  Database,
  GitBranch,
  Wrench,
  Sparkles,
  Terminal,
  Layers3,
} from 'lucide-react';
import './skills.css';

const skillGroups = [
  {
    id: 'frontend',
    title: 'Frontend',
    icon: Code2,
    skills: ['HTML5', 'CSS3', 'JavaScript', 'React.js'],
  },
  {
    id: 'backend',
    title: 'Backend & Database',
    icon: Database,
    skills: ['PHP', 'MySQL', 'MongoDB'],
  },
  {
    id: 'programming',
    title: 'Programming',
    icon: Terminal,
    skills: ['Java', 'C', 'C++'],
  },
  {
    id: 'tools',
    title: 'Tools & Version Control',
    icon: GitBranch,
    skills: ['Git', 'GitHub', 'VS Code'],
  },
  {
    id: 'ai',
    title: 'AI & Development',
    icon: Sparkles,
    skills: ['AI Tools', 'API Integration', 'Problem Solving'],
  },
];

const orbitSkills = [
  {
    name: 'React.js',
    className: 'skills-orbit-item skills-orbit-item-1',
  },
  {
    name: 'JavaScript',
    className: 'skills-orbit-item skills-orbit-item-2',
  },
  {
    name: 'HTML5',
    className: 'skills-orbit-item skills-orbit-item-3',
  },
  {
    name: 'CSS3',
    className: 'skills-orbit-item skills-orbit-item-4',
  },
  {
    name: 'PHP',
    className: 'skills-orbit-item skills-orbit-item-5',
  },
  {
    name: 'MySQL',
    className: 'skills-orbit-item skills-orbit-item-6',
  },
];

export default function Skills() {
  const [activeSkill, setActiveSkill] = useState('React.js');

  return (
    <section
      id="skills"
      className="skills-section relative py-24 md:py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="skills-bg-glow skills-bg-glow-one" />
      <div className="skills-bg-glow skills-bg-glow-two" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="skills-heading text-center mb-16"
        >
          <div className="skills-eyebrow">
            <Layers3 size={16} />
            <span>TECHNICAL EXPERTISE</span>
          </div>

          <h2 className="skills-title">
            Skills & <span>Technologies</span>
          </h2>

          <p className="skills-description">
            Technologies and tools I use to build responsive, modern and
            user-focused web applications.
          </p>
        </motion.div>

        {/* Main Layout */}
        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-20 items-center">
          {/* Left - Orbital System */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="skills-orbit-wrapper"
          >
            <div className="skills-orbit">
              {/* Orbit Rings */}
              <div className="skills-orbit-ring skills-orbit-ring-outer" />
              <div className="skills-orbit-ring skills-orbit-ring-middle" />
              <div className="skills-orbit-ring skills-orbit-ring-inner" />

              {/* Center */}
              <motion.div
                className="skills-orbit-center"
                animate={{
                  boxShadow: [
                    '0 0 20px rgba(157,78,221,0.25)',
                    '0 0 50px rgba(157,78,221,0.5)',
                    '0 0 20px rgba(157,78,221,0.25)',
                  ],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                <Code2 size={42} />
                <span>DEV</span>
              </motion.div>

              {/* Orbit Skills */}
              {orbitSkills.map((skill, index) => (
                <motion.button
                  key={skill.name}
                  type="button"
                  className={`${skill.className} ${
                    activeSkill === skill.name
                      ? 'skills-orbit-item-active'
                      : ''
                  }`}
                  onClick={() => setActiveSkill(skill.name)}
                  onMouseEnter={() => setActiveSkill(skill.name)}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: index * 0.08,
                    duration: 0.5,
                  }}
                  whileHover={{ scale: 1.12 }}
                >
                  {skill.name}
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Right - Technical Skills */}
          <div className="skills-content">
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7 }}
              className="skills-panel"
            >
              <div className="skills-panel-header">
                <div>
                  <span className="skills-panel-label">
                    TECHNICAL SKILLS
                  </span>

                  <h3 className="skills-panel-title">
                    My Development Stack
                  </h3>
                </div>

                <div className="skills-panel-icon">
                  <Wrench size={20} />
                </div>
              </div>

              <div className="skills-groups">
                {skillGroups.map((group, index) => {
                  const Icon = group.icon;

                  return (
                    <motion.div
                      key={group.id}
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        delay: index * 0.08,
                        duration: 0.5,
                      }}
                      className="skills-group"
                    >
                      <div className="skills-group-header">
                        <div className="skills-group-icon">
                          <Icon size={17} />
                        </div>

                        <h4>{group.title}</h4>
                      </div>

                      <div className="skills-tags">
                        {group.skills.map((skill) => (
                          <motion.button
                            key={skill}
                            type="button"
                            onMouseEnter={() => setActiveSkill(skill)}
                            onClick={() => setActiveSkill(skill)}
                            className={`skills-tag ${
                              activeSkill === skill
                                ? 'skills-tag-active'
                                : ''
                            }`}
                            whileHover={{ y: -2 }}
                            transition={{ duration: 0.2 }}
                          >
                            {skill}
                          </motion.button>
                        ))}
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>

            {/* Active Skill */}
            <motion.div
              key={activeSkill}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="skills-active-card"
            >
              <div className="skills-active-dot" />

              <div>
                <span>Currently Exploring</span>
                <strong>{activeSkill}</strong>
              </div>

              <Sparkles size={20} />
            </motion.div>
          </div>
        </div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="skills-stats"
        >
          <div className="skills-stat">
            <strong>04+</strong>
            <span>Frontend Technologies</span>
          </div>

          <div className="skills-stat">
            <strong>03+</strong>
            <span>Backend & Database</span>
          </div>

          <div className="skills-stat">
            <strong>03+</strong>
            <span>Programming Languages</span>
          </div>

          <div className="skills-stat">
            <strong>10+</strong>
            <span>Development Skills</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}