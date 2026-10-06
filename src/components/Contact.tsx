import { useTranslation } from 'react-i18next';
import { motion } from 'motion/react';
import { Mail, Github, Linkedin, MessageCircle } from 'lucide-react';

export default function Contact() {
  const { t } = useTranslation();

  return (
    <section
      id="contact"
      className="py-24 relative px-6 z-10 bg-gradient-to-t from-[#1a0b2e]/50 to-transparent"
    >
      <div
        className="max-w-4xl mx-auto"
        itemScope
        itemType="https://schema.org/Person"
      >
        <meta itemProp="name" content="Mahesh" />
        <meta
          itemProp="email"
          content="parmarmahesh.b1234@gmail.com"
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
            Let's <span className="text-gradient">Connect</span>
          </h2>

          <p className="text-white/60 max-w-lg mx-auto text-lg">
            I'm currently looking for frontend development internship and
            junior opportunities. If you'd like to discuss a project,
            opportunity, or simply connect, feel free to reach out!
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
          
          {/* Email */}
          <motion.a
            href="mailto:parmarmahesh.b1234@gmail.com"
            aria-label="Send an email to Mahesh"
            itemProp="email"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-3 px-8 py-4 glass-panel rounded-full hover:border-[#9d4edd]/50 transition-colors"
          >
            <Mail
              className="text-[#9d4edd]"
              size={24}
              aria-hidden="true"
            />

            <span className="text-white font-medium">
              Email Me
            </span>
          </motion.a>

          {/* LinkedIn */}
          <motion.a
            href="https://linkedin.com/in/maheshmochi"
            aria-label="Connect with Mahesh on LinkedIn"
            itemProp="sameAs"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-3 px-8 py-4 glass-panel rounded-full hover:border-[#0A66C2]/50 transition-colors"
          >
            <Linkedin
              className="text-[#0A66C2]"
              size={24}
              aria-hidden="true"
            />

            <span className="text-white font-medium">
              LinkedIn
            </span>
          </motion.a>

          {/* GitHub */}
          <motion.a
            href="https://github.com/maheshmochi"
            aria-label="Visit Mahesh GitHub Profile"
            itemProp="sameAs"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-3 px-8 py-4 glass-panel rounded-full hover:border-white/30 transition-colors"
          >
            <Github
              className="text-white"
              size={24}
              aria-hidden="true"
            />

            <span className="text-white font-medium">
              GitHub
            </span>
          </motion.a>

        </div>

        <footer className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          
          <p className="text-white/40 text-sm font-mono">
            © {new Date().getFullYear()} Mahesh. All rights reserved.
          </p>

          <div className="flex gap-4 text-white/50">

            {/* GitHub */}
            <a
              href="https://github.com/maheshmochi"
              aria-label="Mahesh GitHub Profile"
              itemProp="sameAs"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              <Github size={20} aria-hidden="true" />
            </a>

            {/* LinkedIn */}
            <a
              href="https://linkedin.com/in/maheshmochi"
              aria-label="Mahesh LinkedIn Profile"
              itemProp="sameAs"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              <Linkedin size={20} aria-hidden="true" />
            </a>

          </div>
        </footer>
      </div>
    </section>
  );
}