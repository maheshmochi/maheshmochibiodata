import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Terminal } from 'lucide-react';

interface TerminalModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function TerminalModal({
  isOpen,
  onClose
}: TerminalModalProps) {

  const [input, setInput] = useState('');

  const [output, setOutput] = useState<
    { type: 'cmd' | 'text'; text: string }[]
  >([
    {
      type: 'text',
      text: 'Welcome to MaheshOS v1.0.0 (Interactive Mode)'
    },
    {
      type: 'text',
      text: "Type 'help' to see available commands. Type 'exit' to close."
    }
  ]);

  const containerRef =
    useRef<HTMLDivElement>(null);

  const inputRef =
    useRef<HTMLInputElement>(null);


  /* =================================
     FOCUS + AUTO SCROLL
  ================================= */

  useEffect(() => {

    if (isOpen) {

      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);

      if (containerRef.current) {
        containerRef.current.scrollTop =
          containerRef.current.scrollHeight;
      }
    }

  }, [isOpen, output]);


  /* =================================
     COMMAND HANDLER
  ================================= */

  const handleCommand = (cmd: string) => {

    const cleanCmd =
      cmd.trim().toLowerCase();


    /* Show command */

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
          'Available commands: about, skills, projects, education, contact, github, clear, exit';

        break;


      /* ================================
         ABOUT
      ================================= */

      case 'about':

        response =
          'Mahesh - Frontend Developer and B.Sc. IT student at HNGU.\nBuilding responsive web applications using React.js, JavaScript, HTML5 and CSS3.\nLearning, building and improving through real-world projects.';

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
         EXIT
      ================================= */

      case 'exit':

        onClose();

        return;


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

    <AnimatePresence>

      {isOpen && (

        <motion.div
          initial={{
            opacity: 0
          }}

          animate={{
            opacity: 1
          }}

          exit={{
            opacity: 0
          }}

          transition={{
            duration: 0.3
          }}

          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-12"

          onClick={onClose}
        >

          {/* =================================
              BACKDROP
          ================================= */}

          <div className="absolute inset-0 bg-black/60 backdrop-blur-md" />


          {/* =================================
              TERMINAL WINDOW
          ================================= */}

          <motion.div
            initial={{
              scale: 0.9,
              y: 20,
              opacity: 0
            }}

            animate={{
              scale: 1,
              y: 0,
              opacity: 1
            }}

            exit={{
              scale: 0.9,
              y: 20,
              opacity: 0
            }}

            transition={{
              type: 'spring',
              damping: 25,
              stiffness: 300
            }}

            className="relative w-full max-w-4xl h-[80vh] md:h-[70vh] rounded-2xl overflow-hidden glass-panel border border-[#9d4edd]/50 shadow-[0_0_50px_rgba(157,78,221,0.2)] flex flex-col"

            onClick={(e) =>
              e.stopPropagation()
            }
          >

            {/* =================================
                TERMINAL HEADER
            ================================= */}

            <div className="bg-[#0f0f13]/90 px-4 py-3 flex items-center border-b border-white/10 shrink-0">

              {/* Window Controls */}

              <div className="flex gap-2">

                <button
                  onClick={onClose}
                  aria-label="Close terminal"
                  className="w-3 h-3 rounded-full bg-red-500 hover:bg-red-400 transition-colors"
                />

                <div className="w-3 h-3 rounded-full bg-yellow-500" />

                <div className="w-3 h-3 rounded-full bg-green-500" />

              </div>


              {/* Terminal Title */}

              <div className="flex-1 text-center flex justify-center items-center gap-2 text-sm text-white/60 font-mono">

                <Terminal
                  size={14}
                  className="text-[#9d4edd]"
                />

                mahesh-terminal

              </div>


              {/* Close Button */}

              <button
                onClick={onClose}
                aria-label="Close terminal"
                className="text-white/40 hover:text-white transition-colors"
              >

                <X size={18} />

              </button>

            </div>


            {/* =================================
                TERMINAL BODY
            ================================= */}

            <div
              ref={containerRef}
              className="bg-[#1a1b26]/80 p-6 font-mono text-sm sm:text-base flex-1 overflow-y-auto custom-scrollbar"

              onClick={() =>
                inputRef.current?.focus()
              }
            >

              {/* Terminal Output */}

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

                <span className="mr-2 shrink-0">

                  guest@mahesh-terminal:~$

                </span>


                <input
                  ref={inputRef}

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


              <div className="h-4" />

            </div>

          </motion.div>

        </motion.div>

      )}

    </AnimatePresence>
  );
}