import { useTranslation } from 'react-i18next';
import { motion } from 'motion/react';
import { ExternalLink, Github } from 'lucide-react';

export default function Projects() {
  const { t } = useTranslation();

const projects = [
  {
    title: 'React.js Portfolio Website',
    desc: 'A responsive personal portfolio website built with React.js and modern frontend technologies. Designed for mobile, tablet, and desktop with a clean UI, smooth animations, and interactive sections.',
    tech: ['React.js', 'JavaScript', 'HTML5', 'CSS3', 'Vite'],
    github: 'https://github.com/maheshmochi',
    live: 'https://myportfolioweb-d0cb.onrender.com',
    status: 'Live'
  },
  {
    title: 'Cartin Craft Website',
    desc: 'A modern and responsive e-commerce website for Cartin Craft, featuring a clean interface, product-focused sections, interactive components, and a smooth shopping experience across desktop and mobile devices.',
    tech: ['React.js', 'JavaScript', 'HTML5', 'CSS3', 'Responsive Design'],
    github: 'https://github.com/maheshmochi',
    live: '#',
    status: 'Currently Working • Not Deployed'
  }
];

  return (
    <section
      id="projects"
      className="py-24 relative px-6 z-10"
    >
      <div className="max-w-6xl mx-auto">

        {/* ================================
            SECTION HEADER
        ================================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30
          }}
          whileInView={{
            opacity: 1,
            y: 0
          }}
          viewport={{
            once: true,
            margin: '-100px'
          }}
          transition={{
            duration: 0.8
          }}
          className="mb-16 md:flex justify-between items-end"
        >

          <div>

            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-4">
              {t('projects.title')}

              <span className="text-[#9d4edd]">
                .
              </span>
            </h2>

            <p className="text-white/60 font-mono text-sm uppercase tracking-widest">
              // selected works
            </p>

          </div>

          {/* Desktop GitHub */}
          <a
            href="https://github.com/maheshmochi"
            target="_blank"
            rel="noreferrer"
            className="hidden md:flex items-center gap-2 text-[#9d4edd] hover:text-white transition-colors font-mono hover:scale-105"
          >
            View all on GitHub

            <ExternalLink size={16} />
          </a>

        </motion.div>


        {/* ================================
            PROJECT GRID
        ================================= */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {projects.map((project, idx) => (

            <motion.article
              key={idx}

              initial={{
                opacity: 0,
                y: 30
              }}

              whileInView={{
                opacity: 1,
                y: 0
              }}

              viewport={{
                once: true,
                margin: '-50px'
              }}

              transition={{
                duration: 0.5,
                delay: idx * 0.1
              }}

              className="group glass-panel rounded-2xl overflow-hidden flex flex-col border border-white/5 hover:border-[#9d4edd]/30 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_15px_40px_rgba(157,78,221,0.15)]"
            >

              {/* ================================
                  PROJECT PREVIEW
              ================================= */}

              <div className="h-48 bg-[#9d4edd]/10 relative overflow-hidden flex items-center justify-center p-6">

                {/* Background glow */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />

                <div className="absolute w-32 h-32 bg-[#9d4edd]/20 blur-3xl rounded-full group-hover:scale-150 transition-transform duration-700" />

                {/* Project number */}
                <span className="absolute top-4 right-5 text-white/10 text-5xl font-display font-bold">
                  0{idx + 1}
                </span>

                {/* Project short title */}
                <h3 className="relative text-2xl font-display font-bold text-white/50 group-hover:text-white group-hover:scale-110 transition-all duration-500 z-20 text-center">
                  {project.title.split(' ')[0]}
                </h3>

              </div>


              {/* ================================
                  PROJECT CONTENT
              ================================= */}

              <div className="p-6 flex-1 flex flex-col">

                <h3 className="text-xl font-bold text-white mb-3">
                  {project.title}
                </h3>

                <p className="text-white/60 text-sm leading-relaxed mb-6 flex-1">
                  {project.desc}
                </p>


                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">

                  {project.tech.map((tech, i) => (

                    <span
                      key={i}
                      className="px-3 py-1 glass-panel border border-white/5 text-white/80 text-xs rounded-full font-mono hover:border-[#9d4edd]/30 hover:text-[#d9b8ff] transition-colors"
                    >
                      {tech}
                    </span>

                  ))}

                </div>


                {/* ================================
                    PROJECT LINKS
                ================================= */}

                <div className="flex items-center justify-between pt-4 border-t border-white/10">

                  {/* Live */}
                  {project.live !== '#' ? (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`View live demo of ${project.title}`}
                      className="flex items-center gap-2 text-sm text-white/80 hover:text-[#9d4edd] transition-colors"
                    >
                      <ExternalLink size={16} />

                      {t('projects.live')}
                    </a>
                  ) : (
                    <span className="flex items-center gap-2 text-sm text-white/30 cursor-not-allowed">
                      <ExternalLink size={16} />

                      Coming Soon
                    </span>
                  )}


                  {/* GitHub */}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`View ${project.title} source code on GitHub`}
                    className="flex items-center gap-2 text-sm text-white/80 hover:text-[#9d4edd] transition-colors"
                  >
                    <Github size={16} />

                    {t('projects.github')}
                  </a>

                </div>

              </div>

            </motion.article>

          ))}

        </div>


        {/* ================================
            MOBILE GITHUB LINK
        ================================= */}

        <div className="mt-8 text-center md:hidden">

          <a
            href="https://github.com/maheshmochi"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-[#9d4edd] hover:text-white transition-colors"
          >
            View all on GitHub

            <ExternalLink size={16} />
          </a>

        </div>

      </div>
    </section>
  );
}