import { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'motion/react';
import { Terminal } from 'lucide-react';

export default function TerminalSection() {
  const { t } = useTranslation();

  const [input, setInput] = useState('');

  const [output, setOutput] = useState<
    { type: 'cmd' | 'text'; text: string }[]
  >([
    {
      type: 'text',
      text: 'Welcome to MaheshOS v1.0.0'
    },
    {
      type: 'text',
      text: "Type 'help' to see available commands."
    }
  ]);

  const containerRef =
    useRef<HTMLDivElement>(null);

  /* =================================
     AUTO SCROLL
  ================================= */

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop =
        containerRef.current.scrollHeight;
    }
  }, [output]);


  /* =================================
     COMMAND HANDLER
  ================================= */

  const handleCommand = (cmd: string) => {
    const cleanCmd =
      cmd.trim().toLowerCase();

    /* Add command to terminal */

    if (cleanCmd !== '') {
      setOutput((prev) => [
        ...prev,
        {
          type: 'cmd',
          text: `guest@mahesh-terminal:~$ ${cleanCmd}`
        }
      ]);
    }

    let response = '';

    switch (cleanCmd) {

      /* ================================
         HELP
      ================================= */

      case 'help':
        response =
          'Available commands: about, skills, projects, contact, education, github, clear';
        break;


      /* ================================
         ABOUT
      ================================= */

      case 'about':
        response =
          'Mahesh - Frontend Developer and B.Sc. IT student at HNGU.\nBuilding responsive web applications with React.js, JavaScript, HTML5 and CSS3.\nLearning every day. Building real projects. Improving continuously.';
        break;


      /* ================================
         SKILLS
      ================================= */

      case 'skills':
        response =
          '> Frontend: React.js, JavaScript, HTML5, CSS3\n> Backend: PHP, MySQL\n> Programming: Java, C, C++\n> Tools: Git, GitHub, VS Code\n> Learning: OOPs, DSA';
        break;


      /* ================================
         PROJECTS
      ================================= */

      case 'projects':
        response =
          '1. React.js Portfolio Website\n2. Food Delivery Application\n3. 15 Days OOPs Journey';
        break;


      /* ================================
         EDUCATION
      ================================= */

      case 'education':
        response =
          'B.Sc. Information Technology\nHemchandracharya North Gujarat University (HNGU)\nExpected Graduation: 2027';
        break;


      /* ================================
         CONTACT
      ================================= */

      case 'contact':
        response =
          'Email: parmarmahesh.b1234@gmail.com\nGitHub: github.com/maheshmochi\nLinkedIn: linkedin.com/in/maheshmochi';
        break;


      /* ================================
         GITHUB
      ================================= */

      case 'github':
        response =
          'GitHub: github.com/maheshmochi\nBuilding projects and learning in public.';
        break;


      /* ================================
         CLEAR
      ================================= */

      case 'clear':
        setOutput([]);
        return;


      /* ================================
         EMPTY
      ================================= */

      case '':
        return;


      /* ================================
         UNKNOWN COMMAND
      ================================= */

      default:
        response =
          `Command not found: ${cleanCmd}. Type 'help' for available commands.`;
    }


    /* Add response */

    setOutput((prev) => [
      ...prev,
      {
        type: 'text',
        text: response
      }
    ]);
  };


  return (

    <section className="py-24 relative px-6 z-10">

      <div className="max-w-4xl mx-auto">

        {/* =================================
            SECTION TITLE
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

          className="text-center mb-12"
        >

          <h2 className="text-3xl font-display font-bold text-white flex items-center justify-center gap-3">

            <Terminal
              size={32}
              className="text-[#9d4edd]"
            />

            {t('terminal.title')}

          </h2>

        </motion.div>


        {/* =================================
            TERMINAL WINDOW
        ================================= */}

        <motion.div
          initial={{
            opacity: 0,
            scale: 0.95
          }}

          whileInView={{
            opacity: 1,
            scale: 1
          }}

          viewport={{
            once: true
          }}

          className="rounded-xl overflow-hidden glass-panel border border-[#9d4edd]/30 shadow-[0_0_30px_rgba(157,78,221,0.15)] backdrop-blur-xl"
        >

          {/* =================================
              TERMINAL HEADER
          ================================= */}

          <div className="bg-[#1a1b26]/80 px-4 py-3 flex items-center border-b border-white/10">

            {/* Window buttons */}

            <div className="flex gap-2">

              <div className="w-3 h-3 rounded-full bg-red-500" />

              <div className="w-3 h-3 rounded-full bg-yellow-500" />

              <div className="w-3 h-3 rounded-full bg-green-500" />

            </div>


            {/* Terminal title */}

            <div className="flex-1 text-center text-xs text-white/50 font-mono">

              guest@mahesh-terminal:~

            </div>

          </div>


          {/* =================================
              TERMINAL BODY
          ================================= */}

          <div
            ref={containerRef}
            className="bg-[#1a1b26]/50 p-6 font-mono text-sm h-80 overflow-y-auto custom-scrollbar"
          >

            {/* Output */}

            {output.map((line, i) => (

              <div
                key={i}
                className={`
                  mb-2
                  ${
                    line.type === 'cmd'
                      ? 'text-[#e0c3fc]'
                      : 'text-[#a9b1d6] whitespace-pre-wrap leading-relaxed'
                  }
                `}
              >

                {line.text}

              </div>

            ))}


            {/* =================================
                COMMAND INPUT
            ================================= */}

            <form
              onSubmit={(e) => {

                e.preventDefault();

                handleCommand(input);

                setInput('');

              }}

              className="flex items-center text-[#e0c3fc] mt-2"
            >

              <span className="mr-2 whitespace-nowrap">

                guest@mahesh-terminal:~$

              </span>


              <input
                type="text"
                value={input}

                onChange={(e) =>
                  setInput(e.target.value)
                }

                className="flex-1 bg-transparent outline-none border-none text-[#a9b1d6] min-w-0"

                autoComplete="off"

                spellCheck="false"

                aria-label="Terminal command"
              />

            </form>

          </div>

        </motion.div>

      </div>

    </section>
  );
}