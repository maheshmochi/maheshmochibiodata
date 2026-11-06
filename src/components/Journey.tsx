
import { motion } from 'motion/react';
import {
  GraduationCap,
  Code2,
  Layers3,
  BrainCircuit,
  ArrowUpRight,
  Sparkles,
} from 'lucide-react';

import './Journey.css';

const journey = [
  {
    number: '01',
    date: '2024 — 2027',
    title: 'B.Sc. Information Technology',
    subtitle: 'Hemchandracharya North Gujarat University',
    description:
      'Currently pursuing B.Sc. IT, building an academic foundation in computer science, programming, software development, and information technology.',
    icon: GraduationCap,
    tags: ['B.Sc. IT', 'HNGU', 'Graduating 2027'],
    status: 'Currently Studying',
  },
  {
    number: '02',
    date: 'PROGRAMMING FOUNDATION',
    title: 'Learning Programming & Backend',
    subtitle: 'Core Programming Concepts',
    description:
      'Developing programming knowledge with PHP, understanding backend logic, object-oriented programming, and database connectivity while strengthening programming fundamentals.',
    icon: Code2,
    tags: ['PHP', 'OOP', 'Programming Logic'],
    status: 'Ongoing',
  },
  {
    number: '03',
    date: 'WEB DEVELOPMENT',
    title: 'Exploring Modern Web Technologies',
    subtitle: 'Frontend & Backend Development',
    description:
      'Learning to create complete web experiences using modern frontend technologies and backend programming while exploring different database technologies.',
    icon: Layers3,
    tags: ['HTML5', 'CSS3', 'JavaScript', 'React.js'],
    status: 'Ongoing',
  },
  {
    number: '04',
    date: 'CONTINUOUS LEARNING',
    title: 'Expanding Technical Knowledge',
    subtitle: 'Databases & Problem Solving',
    description:
      'Improving database knowledge through MySQL and exploring MongoDB fundamentals while practicing problem solving and Data Structures & Algorithms.',
    icon: BrainCircuit,
    tags: ['MySQL', 'MongoDB Basics', 'DSA'],
    status: 'In Progress',
  },
];

export default function Journey() {
  return (
    <section className="journey-section" id="journey">
      <div className="journey-container">

        {/* Heading */}
        <motion.div
          className="journey-heading"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="journey-eyebrow">
            <Sparkles size={14} />
            THE PATH SO FAR
          </span>

          <h2>
            My <span>Journey.</span>
          </h2>

          <p>
            My academic background, programming foundations,
            and continuous learning journey in web development.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="journey-timeline">
          <div className="journey-line" />

          {journey.map((item, index) => {
            const ItemIcon = item.icon;

            return (
              <motion.article
                className="journey-item"
                key={item.number}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.12,
                }}
              >
                <div className="journey-marker">
                  <span>{item.number}</span>
                </div>

                <div className="journey-card">

                  <div className="journey-card-top">
                    <span className="journey-date">
                      {item.date}
                    </span>

                    <span className="journey-status">
                      <span />
                      {item.status}
                    </span>
                  </div>

                  <div className="journey-card-main">

                    <div className="journey-icon">
                      <ItemIcon size={23} strokeWidth={1.7} />
                    </div>

                    <div className="journey-content">
                      <h3>{item.title}</h3>

                      <h4>{item.subtitle}</h4>

                      <p>{item.description}</p>

                      <div className="journey-tags">
                        {item.tags.map((tag) => (
                          <span key={tag}>{tag}</span>
                        ))}
                      </div>
                    </div>

                    <span className="journey-arrow">
                      <ArrowUpRight size={19} />
                    </span>

                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="journey-bottom"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <span>THE JOURNEY CONTINUES</span>

            <h3>Learning Beyond the Frontend.</h3>

            <p>
              Exploring frontend, backend, and database
              technologies while continuously improving my skills.
            </p>
          </div>

          <a href="#contact">
            Let's Connect
            <ArrowUpRight size={17} />
          </a>
        </motion.div>

      </div>
    </section>
  );
}
