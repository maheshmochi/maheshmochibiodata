import { useEffect, useRef, useState } from "react";
import { Music2, Play, Pause } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [showLabel, setShowLabel] = useState(false);
  const [autoPlayBlocked, setAutoPlayBlocked] = useState(false);

  // Try to start music when the website opens
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = 0.45;

    const startMusic = async () => {
      try {
        await audio.play();
        setIsPlaying(true);
        setAutoPlayBlocked(false);
      } catch {
        // Browser may block autoplay with sound
        setIsPlaying(false);
        setAutoPlayBlocked(true);
      }
    };

    void startMusic();

    return () => {
      audio.pause();
    };
  }, []);

  const toggleMusic = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (audio.paused) {
      try {
        await audio.play();
        setIsPlaying(true);
        setAutoPlayBlocked(false);
      } catch {
        setIsPlaying(false);
        setAutoPlayBlocked(true);
      }
    } else {
      audio.pause();
      setIsPlaying(false);
    }
  };

  return (
    <>
      <audio
        ref={audioRef}
        src="/background_music.mp3"
        loop
        preload="auto"
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      />

      <motion.div
        className="fixed bottom-5 right-5 z-[100] flex items-center gap-3"
        initial={{ opacity: 0, y: 24, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        {/* Music information */}
        <AnimatePresence>
          {showLabel && (
            <motion.div
              initial={{ opacity: 0, x: 15, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: 10, scale: 0.95 }}
              className="rounded-2xl border border-white/10 bg-[#100d1c]/95 px-4 py-3 shadow-2xl backdrop-blur-xl"
            >
              <p className="text-sm font-semibold text-white">
                Background Music
              </p>

              <p className="mt-1 text-xs text-white/50">
                {isPlaying
                  ? "♪ Now playing"
                  : autoPlayBlocked
                    ? "Click play to start"
                    : "Music paused"}
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Animated vinyl disc */}
        <motion.button
          type="button"
          onClick={toggleMusic}
          onMouseEnter={() => setShowLabel(true)}
          onMouseLeave={() => setShowLabel(false)}
          onFocus={() => setShowLabel(true)}
          onBlur={() => setShowLabel(false)}
          aria-label={isPlaying ? "Turn music off" : "Turn music on"}
          title={isPlaying ? "Turn music off" : "Turn music on"}
          className="group relative flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-white/15 bg-[#171126]/90 shadow-[0_0_30px_rgba(157,78,221,0.25)] backdrop-blur-xl transition-all duration-300 hover:scale-110 hover:border-purple-400/70 hover:shadow-[0_0_35px_rgba(157,78,221,0.5)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400"
          whileTap={{ scale: 0.92 }}
        >
          {/* Outer glow */}
          {isPlaying && (
            <motion.span
              className="absolute inset-0 rounded-full border border-purple-400/70"
              animate={{ scale: [1, 1.28], opacity: [0.6, 0] }}
              transition={{
                duration: 1.8,
                repeat: Infinity,
                ease: "easeOut",
              }}
            />
          )}

          {/* Record */}
          <motion.div
            className="relative flex h-10 w-10 items-center justify-center rounded-full border border-white/20"
            animate={{ rotate: isPlaying ? 360 : 0 }}
            transition={{
              duration: 4,
              repeat: isPlaying ? Infinity : 0,
              ease: "linear",
            }}
            style={{
              background:
                "repeating-radial-gradient(circle, #282033 0px, #171126 2px, #30203f 3px, #171126 5px)",
            }}
          >
            <div className="flex h-5 w-5 items-center justify-center rounded-full border border-purple-300/50 bg-gradient-to-br from-purple-500 to-fuchsia-600 shadow-[0_0_12px_rgba(168,85,247,0.65)]">
              <Music2 size={11} className="text-white" />
            </div>
          </motion.div>

          {/* Play / pause indicator */}
          <span className="absolute -bottom-0.5 -right-0.5 flex h-6 w-6 items-center justify-center rounded-full border-2 border-[#100d1c] bg-purple-500 text-white shadow-lg">
            {isPlaying ? (
              <Pause size={11} fill="currentColor" />
            ) : (
              <Play size={11} fill="currentColor" />
            )}
          </span>
        </motion.button>
      </motion.div>
    </>
  );
}
