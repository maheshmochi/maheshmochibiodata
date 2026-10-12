
import { useTranslation } from 'react-i18next';
import { motion } from 'motion/react';
import {
  ExternalLink,
  Github,
  ShoppingBag,
  Code2,
  Globe,
  ArrowUpRight,
  Sparkles
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
      accent: 'portfolio'
    },
    {
      title: 'Cartin Craft',
      category: 'E-COMMERCE PROJECT',
      number: '02',
      desc: 'A modern e-commerce experience focused on product discovery, elegant product presentation, responsive layouts, and intuitive shopping interactions. The project is being developed with reusable UI components and a clean, user-friendly storefront.',
      tech: [
        'React.js',
        'JavaScript',
        'HTML5',
        'CSS3',
        'Responsive Design'
      ],
      github: 'https://github.com/maheshmochi',
      live: null,
      status: 'In Development',
      icon: ShoppingBag,
      accent: 'commerce'
    },
    {
  title: 'Lazeez Food Delivery',
  category: 'FOOD DELIVERY PROJECT',
  number: '03',
  desc:
    'A food delivery web application built with React.js and PHP, designed to provide a smooth food browsing experience with an intuitive interface and responsive design. MySQL is used for database management.',
  tech: ['React.js', 'PHP', 'MySQL', 'JavaScript', 'HTML5', 'CSS3'],
  github: 'https://github.com/maheshmochi',
  live: null,
  status: 'In Development',
  icon: ShoppingBag,
  accent: 'food',
}
  ];

  return (
    <section
      id="projects"
      className="relative z-10 overflow-hidden px-6 py-24 md:py-28"
    >
      <div className="mx-auto max-w-6xl">

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="mb-14 flex flex-col gap-6 md:mb-16 md:flex-row md:items-end md:justify-between"
        >
          <div>
            <div className="mb-4 flex items-center gap-2 font-mono text-xs uppercase tracking-[0.22em] text-[#b58aff]">
              <Sparkles size={15} />
              <span>Things I've been building</span>
            </div>

            <h2 className="mb-4 font-display text-3xl font-bold text-white md:text-5xl">
              {t('projects.title')}
              <span className="text-[#9d4edd]">.</span>
            </h2>

            <p className="max-w-xl text-sm leading-7 text-white/55 md:text-base">
              A collection of projects built while exploring modern
              frontend development, responsive interfaces, and practical
              web experiences.
            </p>
          </div>

          <a
            href="https://github.com/maheshmochi"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 self-start rounded-xl border border-white/10 px-5 py-3 font-mono text-sm text-white/75 transition-all hover:border-[#9d4edd]/50 hover:bg-[#9d4edd]/10 hover:text-white md:inline-flex"
          >
            <Github size={17} />
            Explore GitHub
            <ArrowUpRight size={15} />
          </a>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 gap-7 md:grid-cols-2">

          {projects.map((project, idx) => {
            const ProjectIcon = project.icon;

            return (
              <motion.article
                key={project.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.55, delay: idx * 0.12 }}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/[0.09] bg-[#10111b] transition-all duration-300 hover:-translate-y-1.5 hover:border-[#9d4edd]/40 hover:shadow-[0_20px_60px_rgba(100,40,160,0.13)]"
              >

                {/* Project Visual */}
                <div
                  className={`relative flex h-56 items-center justify-center overflow-hidden border-b border-white/[0.07] ${
                    project.accent === 'commerce'
                      ? 'bg-[#141b19]'
                      : 'bg-[#171426]'
                  }`}
                >
                  <div
                    className={`absolute -right-10 -top-14 h-48 w-48 rounded-full blur-[75px] transition-all duration-700 group-hover:scale-125 ${
                      project.accent === 'commerce'
                        ? 'bg-emerald-400/20'
                        : 'bg-[#9d4edd]/25'
                    }`}
                  />

                  <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:28px_28px] opacity-50" />

                  <span className="absolute right-5 top-4 font-mono text-5xl font-bold text-white/[0.06]">
                    {project.number}
                  </span>

                  <div className="relative z-10 flex flex-col items-center gap-4 transition-transform duration-500 group-hover:scale-105">

                    <div
                      className={`grid h-20 w-20 place-items-center rounded-2xl border shadow-2xl ${
                        project.accent === 'commerce'
                          ? 'border-emerald-300/20 bg-emerald-300/10 text-emerald-200'
                          : 'border-purple-300/20 bg-purple-400/10 text-purple-200'
                      }`}
                    >
                      <ProjectIcon size={36} strokeWidth={1.4} />
                    </div>

                    <div className="text-center">
                      <p className="mb-1 font-mono text-[10px] tracking-[0.2em] text-white/45">
                        {project.category}
                      </p>

                      <h3 className="text-xl font-bold text-white">
                        {project.title}
                      </h3>
                    </div>
                  </div>

                  <div className="absolute bottom-4 left-5 flex items-center gap-2">
                    <span
                      className={`h-2 w-2 rounded-full ${
                        project.status === 'Live'
                          ? 'bg-emerald-400'
                          : 'bg-amber-400'
                      }`}
                    />
                    <span className="font-mono text-[10px] text-white/65">
                      {project.status}
                    </span>
                  </div>

                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Open ${project.title} live website`}
                      className="absolute bottom-3 right-4 z-20 grid h-9 w-9 place-items-center rounded-full border border-white/15 bg-black/30 text-white transition-all hover:rotate-45 hover:bg-[#9d4edd]"
                    >
                      <ArrowUpRight size={17} />
                    </a>
                  )}
                </div>

                {/* Project Details */}
                <div className="flex flex-1 flex-col p-6 md:p-7">

                  <p className="mb-6 flex-1 text-sm leading-7 text-white/60">
                    {project.desc}
                  </p>

                  {/* Technology Tags */}
                  <div className="mb-6 flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md border border-white/[0.08] bg-white/[0.035] px-2.5 py-1.5 font-mono text-[10px] text-white/65 transition-colors hover:border-[#9d4edd]/40 hover:text-[#d9b8ff]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Project Actions */}
                  <div className="flex flex-wrap items-center gap-3 border-t border-white/[0.08] pt-5">

                    {project.live ? (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg bg-[#9d4edd] px-4 py-3 text-sm font-semibold text-white transition-all hover:bg-[#ad6af0]"
                      >
                        <Globe size={16} />
                        Live Website
                        <ExternalLink size={14} />
                      </a>
                    ) : (
                      <span className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg border border-amber-300/15 bg-amber-300/[0.05] px-4 py-3 text-xs font-medium text-amber-200/80">
                        <span className="h-1.5 w-1.5 rounded-full bg-amber-300" />
                        Currently Building
                      </span>
                    )}

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View ${project.title} GitHub repository`}
                      className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/10 px-4 py-3 text-sm text-white/75 transition-colors hover:border-white/25 hover:bg-white/[0.05] hover:text-white"
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
          className="mt-12 flex flex-col items-center justify-center gap-4 text-center"
        >
          <p className="text-sm text-white/45">
            Always learning. Always building.
          </p>

          <a
            href="https://github.com/maheshmochi"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-[#b58aff] transition-colors hover:text-white"
          >
            Discover more on GitHub
            <ExternalLink size={15} />
          </a>
        </motion.div>

      </div>
    </section>
  );
}
