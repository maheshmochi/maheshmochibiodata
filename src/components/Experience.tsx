
import { useTranslation } from 'react-i18next';
import { motion } from 'motion/react';

import {
  Briefcase,
  Code2,
  Database,
  Server,
  Globe,
  GitBranch,
} from 'lucide-react';

const milestones = [
  {
    type: 'frontend',
    title: 'Frontend Development',
    org: 'Modern Web Interface Development',
    date: 'PRACTICAL DEVELOPMENT',
    desc: 'Building responsive and interactive websites using React.js, JavaScript, HTML5, and CSS3. Focusing on modern UI design, reusable components, smooth animations, and user-friendly experiences.',
    skills: ['React.js', 'JavaScript', 'HTML5', 'CSS3'],
  },
  {
    type: 'backend',
    title: 'PHP Backend Development',
    org: 'Server-Side Programming',
    date: 'BACKEND DEVELOPMENT',
    desc: 'Good command of PHP for server-side programming, handling backend logic, processing form data, managing application functionality, and connecting web applications with databases.',
    skills: ['PHP', 'Backend Logic', 'Form Handling'],
  },
  {
    type: 'database',
    title: 'Database Management',
    org: 'SQL & NoSQL Database Technologies',
    date: 'DATABASE KNOWLEDGE',
    desc: 'Working with MySQL for relational database management and understanding database connectivity. Also exploring MongoDB fundamentals, document-based storage, and basic NoSQL concepts.',
    skills: ['MySQL', 'MongoDB Basics', 'Database Connectivity'],
  },
  {
    type: 'web',
    title: 'Complete Website Development',
    org: 'Practical Website Projects',
    date: 'PROJECT IMPLEMENTATION',
    desc: 'Combining frontend interfaces with backend functionality to develop practical websites. Working with responsive layouts, user interactions, forms, and application features.',
    skills: ['Frontend', 'PHP', 'MySQL', 'Responsive Design'],
  },
  {
    type: 'deployment',
    title: 'Version Control & Deployment',
    org: 'GitHub & Vercel',
    date: 'DEVELOPMENT WORKFLOW',
    desc: 'Managing project updates with Git and GitHub, maintaining code repositories, and deploying frontend websites through Vercel to make projects accessible online.',
    skills: ['Git', 'GitHub', 'Vercel', 'Deployment'],
  },
];

const getIcon = (type: string) => {
  switch (type) {
    case 'frontend':
      return <Code2 size={20} />;

    case 'backend':
      return <Server size={20} />;

    case 'database':
      return <Database size={20} />;

    case 'web':
      return <Globe size={20} />;

    case 'deployment':
      return <GitBranch size={20} />;

    default:
      return <Briefcase size={20} />;
  }
};

export default function Experience() {
  const { t } = useTranslation();

  return (
    <section
      id="experience"
      className="py-24 relative px-6 z-10 bg-gradient-to-b from-black/50 to-transparent"
    >
      <div className="max-w-4xl mx-auto">

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#9d4edd]/30 bg-[#9d4edd]/10 text-[#c084fc] text-xs font-semibold tracking-widest mb-5">
            MY TECHNICAL EXPERIENCE
          </span>

          <h2 className="text-3xl md:text-5xl font-display font-bold text-white">
            {t('experience.title')}
          </h2>

          <p className="text-white/50 mt-4 max-w-2xl mx-auto">
            My practical development knowledge across frontend,
            backend programming, databases, and modern web technologies.
          </p>
        </motion.div>

        {/* Technical Experience Timeline */}
        <div className="relative">

          {/* Timeline Line */}
          <div className="absolute left-[20px] md:left-[28px] top-4 bottom-4 w-px bg-gradient-to-b from-[#9d4edd]/10 via-[#9d4edd]/50 to-transparent" />

          {milestones.map((item, idx) => (
            <motion.div
              key={item.type}
              initial={{ opacity: 0, x: -20, y: 20 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{
                duration: 0.5,
                delay: idx * 0.1,
              }}
              className="relative flex items-start mb-12 group"
            >

              {/* Timeline Icon */}
              <div className="sticky top-24 z-10 flex-shrink-0 w-[40px] md:w-[56px] flex justify-center mt-6">

                <div className="w-10 h-10 rounded-full bg-[#050505] border border-[#9d4edd]/30 flex items-center justify-center text-[#9d4edd] group-hover:bg-[#9d4edd]/20 group-hover:border-[#9d4edd] group-hover:shadow-[0_0_15px_rgba(157,78,221,0.5)] transition-all duration-300">
                  {getIcon(item.type)}
                </div>

              </div>

              {/* Experience Card */}
              <div className="ml-4 md:ml-8 flex-1">

                <article className="glass-panel p-6 md:p-8 rounded-2xl border border-white/5 group-hover:border-[#9d4edd]/30 transition-colors relative overflow-hidden">

                  {/* Background Glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#9d4edd]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                  {/* Number Watermark */}
                  <div className="absolute -top-4 -right-4 p-4 opacity-5 text-white group-hover:opacity-10 transition-opacity pointer-events-none">
                    <div className="text-8xl font-display font-bold leading-none">
                      {String(idx + 1).padStart(2, '0')}
                    </div>
                  </div>

                  <div className="relative z-10">

                    {/* Category */}
                    <span className="inline-block px-3 py-1 rounded-full bg-white/5 text-white/70 text-xs font-mono mb-4 border border-white/10 group-hover:bg-[#9d4edd]/10 group-hover:text-[#e0c3fc] group-hover:border-[#9d4edd]/30 transition-colors">
                      {item.date}
                    </span>

                    {/* Title */}
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-2 group-hover:text-gradient transition-all">
                      {item.title}
                    </h3>

                    {/* Organization */}
                    <p className="text-[#9d4edd] text-sm md:text-base font-semibold mb-4 uppercase tracking-wider">
                      {item.org}
                    </p>

                    {/* Description */}
                    <p className="text-white/60 text-sm md:text-base leading-relaxed max-w-2xl">
                      {item.desc}
                    </p>

                    {/* Technology Tags */}
                    <div className="flex flex-wrap gap-2 mt-5">
                      {item.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1.5 rounded-lg bg-[#9d4edd]/10 border border-[#9d4edd]/20 text-[#d8b4fe] text-xs font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                  </div>

                </article>

              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}
