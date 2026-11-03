
import { useTranslation } from 'react-i18next';
import { motion } from 'motion/react';
import {
  Terminal,
  Code2,
  Database,
  Rocket,
  Sparkles,
  ArrowUpRight,
  GraduationCap,
  Braces,
  Zap,
} from 'lucide-react';

const cards = [
  {
    number: '01',
    icon: Terminal,
    title: 'Frontend Engineering',
    desc: 'Building modern, responsive, and interactive interfaces using React.js, JavaScript, HTML5, and CSS3.',
    tags: ['React.js', 'JavaScript', 'Tailwind CSS'],
    color: '#a855f7',
  },
  {
    number: '02',
    icon: Code2,
    title: 'Modern Web Development',
    desc: 'Creating seamless web experiences with reusable components, modern UI architecture, and smooth animations.',
    tags: ['UI/UX', 'Responsive UI', 'Animations'],
    color: '#8b5cf6',
  },
  {
    number: '03',
    icon: Database,
    title: 'Backend & Database',
    desc: 'Working with PHP and MySQL to develop functional applications with authentication and database integration.',
    tags: ['PHP', 'MySQL', 'API'],
    color: '#c084fc',
  },
  {
    number: '04',
    icon: Rocket,
    title: 'Learning & Building',
    desc: 'Exploring new technologies, strengthening programming fundamentals, and building real-world projects.',
    tags: ['DSA', 'Problem Solving', 'Projects'],
    color: '#d946ef',
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 45 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: 'easeOut' as const },
  },
};

export default function About() {
  const { t } = useTranslation();

  return (
    <section
      id="about"
      className="relative z-10 overflow-hidden px-6 py-28 md:py-36"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-[-150px] w-[350px] h-[350px] rounded-full bg-purple-600/10 blur-[120px]" />
        <div className="absolute bottom-10 right-[-150px] w-[350px] h-[350px] rounded-full bg-violet-500/10 blur-[120px]" />
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)',
            backgroundSize: '55px 55px',
            maskImage:
              'linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)',
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto">

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-purple-500/25 bg-purple-500/[0.08] mb-7">
            <Sparkles size={14} className="text-purple-400" />
            <span className="text-[11px] tracking-[0.22em] uppercase font-semibold text-purple-300">
              About Me / Developer
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-7xl font-display font-bold text-white tracking-tight leading-tight mb-7">
            {t('about.title')}
            <br />
            <span className="bg-gradient-to-r from-purple-400 via-fuchsia-300 to-violet-500 bg-clip-text text-transparent">
              Beyond The Code.
            </span>
          </h2>

          <p className="text-white/60 text-base md:text-lg leading-[1.9] max-w-3xl mx-auto">
            I'm Mahesh, a B.Sc. IT student at Hemchandracharya North Gujarat
            University (HNGU), graduating in 2027. I'm passionate about
            Frontend Development and enjoy building modern, responsive web
            applications using React.js and JavaScript. I'm continuously
            strengthening my programming fundamentals, learning Data
            Structures and Algorithms (DSA), and improving my skills through
            real-world projects.
          </p>

          {/* Status */}
          <div className="flex flex-wrap justify-center items-center gap-4 mt-9">
            <div className="flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-white/[0.04] border border-white/10">
              <span className="relative flex w-2 h-2">
                <span className="absolute inline-flex w-full h-full rounded-full bg-green-400 opacity-70 animate-ping" />
                <span className="relative inline-flex w-2 h-2 rounded-full bg-green-400" />
              </span>
              <span className="text-xs text-white/75">
                Currently Learning & Building
              </span>
            </div>

            <div className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/[0.04] border border-white/10">
              <GraduationCap size={15} className="text-purple-400" />
              <span className="text-xs text-white/75">
                B.Sc. IT · HNGU · 2027
              </span>
            </div>
          </div>
        </motion.div>

        {/* Developer Code Card */}
        <motion.div
          initial={{ opacity: 0, y: 25, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto mb-20"
        >
          <div className="relative rounded-2xl border border-white/10 bg-[#111019]/80 backdrop-blur-xl overflow-hidden shadow-[0_20px_80px_rgba(139,92,246,0.08)]">
            <div className="flex items-center justify-between px-5 py-4 border-b border-white/[0.07]">
              <div className="flex gap-2">
                <span className="w-3 h-3 rounded-full bg-red-400/80" />
                <span className="w-3 h-3 rounded-full bg-yellow-400/80" />
                <span className="w-3 h-3 rounded-full bg-green-400/80" />
              </div>
              <span className="text-xs text-white/35 font-mono">
                developer.ts
              </span>
              <Braces size={17} className="text-purple-400" />
            </div>

            <div className="p-6 md:p-8 font-mono text-sm md:text-base leading-9 overflow-x-auto">
              <p className="text-white/30">// A little about me</p>
              <p>
                <span className="text-purple-400">const</span>{' '}
                <span className="text-sky-300">developer</span>{' '}
                <span className="text-white">= {'{'}</span>
              </p>
              <p className="pl-6">
                <span className="text-fuchsia-300">name</span>
                <span className="text-white">: </span>
                <span className="text-green-300">"Mahesh"</span>,
              </p>
              <p className="pl-6">
                <span className="text-fuchsia-300">role</span>
                <span className="text-white">: </span>
                <span className="text-green-300">"Frontend Developer"</span>,
              </p>
              <p className="pl-6">
                <span className="text-fuchsia-300">education</span>
                <span className="text-white">: </span>
                <span className="text-green-300">"B.Sc. IT"</span>,
              </p>
              <p className="pl-6">
                <span className="text-fuchsia-300">passion</span>
                <span className="text-white">: </span>
                <span className="text-green-300">"Building Experiences"</span>,
              </p>
              <p className="pl-6">
                <span className="text-fuchsia-300">mindset</span>
                <span className="text-white">: </span>
                <span className="text-green-300">"Always Learning"</span>
              </p>
              <p className="text-white">{'};'}</p>
            </div>
          </div>
        </motion.div>

        {/* Skills Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-5 mb-10"
        >
          <div>
            <p className="text-purple-400 text-xs tracking-[0.25em] uppercase font-bold mb-3">
              What I Do
            </p>
            <h3 className="text-3xl md:text-4xl font-bold text-white">
              My Expertise<span className="text-purple-400">.</span>
            </h3>
          </div>

          <p className="text-sm text-white/40 max-w-sm leading-relaxed">
            Exploring technologies and turning creative ideas into meaningful
            digital experiences.
          </p>
        </motion.div>

        {/* Expertise Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-70px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {cards.map((card) => {
            const Icon = card.icon;

            return (
              <motion.div
                key={card.number}
                variants={cardVariants}
                whileHover={{
                  y: -10,
                  rotateX: 3,
                  rotateY: -3,
                  transition: { duration: 0.3 },
                }}
                style={{ transformStyle: 'preserve-3d' }}
                className="group relative rounded-2xl border border-white/[0.09] bg-gradient-to-b from-white/[0.055] to-white/[0.015] p-7 overflow-hidden transition-all duration-500 hover:border-purple-400/40 hover:shadow-[0_20px_60px_rgba(139,92,246,0.12)]"
              >
                {/* Hover Glow */}
                <div
                  className="absolute -top-20 -right-20 w-40 h-40 rounded-full blur-[70px] opacity-0 group-hover:opacity-25 transition-opacity duration-500"
                  style={{ backgroundColor: card.color }}
                />

                <div className="relative flex items-center justify-between mb-10">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center border"
                    style={{
                      backgroundColor: `${card.color}15`,
                      borderColor: `${card.color}40`,
                    }}
                  >
                    <Icon
                      size={26}
                      style={{ color: card.color }}
                      strokeWidth={1.7}
                    />
                  </div>

                  <span className="text-sm font-mono text-white/25 group-hover:text-purple-300 transition-colors">
                    /{card.number}
                  </span>
                </div>

                <h4 className="relative text-xl font-bold text-white mb-4 group-hover:text-purple-200 transition-colors">
                  {card.title}
                </h4>

                <p className="relative text-sm text-white/50 leading-[1.8] min-h-[105px]">
                  {card.desc}
                </p>

                <div className="relative flex flex-wrap gap-2 mt-7">
                  {card.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] tracking-wide text-white/55 px-2.5 py-1.5 rounded-md bg-white/[0.045] border border-white/[0.07] group-hover:border-purple-400/20 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-purple-500 to-fuchsia-400 group-hover:w-full transition-all duration-500" />
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-20 relative rounded-3xl overflow-hidden border border-purple-500/20 bg-gradient-to-r from-purple-500/[0.10] via-[#171021] to-fuchsia-500/[0.08] p-8 md:p-12"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/10 blur-[100px] rounded-full" />

          <div className="relative flex flex-col md:flex-row items-center justify-between gap-7">
            <div>
              <div className="flex items-center gap-2 text-purple-300 text-xs tracking-[0.2em] uppercase mb-4">
                <Zap size={14} />
                <span>Have an idea?</span>
              </div>

              <h3 className="text-2xl md:text-4xl font-bold text-white mb-3">
                Let's Build Something Amazing.
              </h3>

              <p className="text-sm text-white/50">
                Turning imagination into interactive digital experiences.
              </p>
            </div>

            <motion.a
              href="#contact"
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.96 }}
              className="flex items-center gap-3 px-7 py-4 rounded-xl bg-gradient-to-r from-purple-600 to-violet-600 text-white text-sm font-semibold shadow-lg shadow-purple-900/30 hover:shadow-purple-500/30 transition-shadow whitespace-nowrap"
            >
              Let's Connect
              <ArrowUpRight size={18} />
            </motion.a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
