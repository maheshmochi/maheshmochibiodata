import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  alpha: number;
  decay: number;
}

export default function ParticleCursor() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) return;

    const ctx = canvas.getContext('2d');

    if (!ctx) return;

    let animationFrameId: number;

    let width = window.innerWidth;
    let height = window.innerHeight;

    const particles: Particle[] = [];

    const mouse = {
      x: -1000,
      y: -1000,
    };

    /* =================================
       CANVAS SETUP
    ================================= */

    const resizeCanvas = () => {
      width = window.innerWidth;
      height = window.innerHeight;

      const dpr = Math.min(window.devicePixelRatio || 1, 2);

      canvas.width = width * dpr;
      canvas.height = height * dpr;

      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    resizeCanvas();

    /* =================================
       CREATE PARTICLE
    ================================= */

    const createParticle = (): Particle => {
      return {
        x: mouse.x,
        y: mouse.y,

        size: Math.random() * 3 + 1,

        speedX: Math.random() * 2 - 1,
        speedY: Math.random() * 2 - 1,

        alpha: Math.random() * 0.8 + 0.2,

        decay: Math.random() * 0.025 + 0.015,
      };
    };

    /* =================================
       MOUSE MOVE
    ================================= */

    const handleMouseMove = (event: MouseEvent) => {
      mouse.x = event.clientX;
      mouse.y = event.clientY;

      // Create a few particles behind the cursor
      for (let i = 0; i < 3; i++) {
        particles.push(createParticle());
      }

      // Prevent unlimited particle growth
      if (particles.length > 180) {
        particles.splice(0, particles.length - 180);
      }
    };

    /* =================================
       PARTICLE UPDATE
    ================================= */

    const updateParticles = () => {
      for (let i = particles.length - 1; i >= 0; i--) {
        const particle = particles[i];

        particle.x += particle.speedX;
        particle.y += particle.speedY;

        particle.size *= 0.96;

        particle.alpha -= particle.decay;

        if (
          particle.alpha <= 0 ||
          particle.size <= 0.2
        ) {
          particles.splice(i, 1);
        }
      }
    };

    /* =================================
       PARTICLE DRAW
    ================================= */

    const drawParticles = () => {
      for (const particle of particles) {
        ctx.beginPath();

        ctx.fillStyle = `hsla(
          271,
          75%,
          60%,
          ${particle.alpha}
        )`;

        ctx.shadowBlur = 10;
        ctx.shadowColor = 'rgba(157, 78, 221, 0.5)';

        ctx.arc(
          particle.x,
          particle.y,
          particle.size,
          0,
          Math.PI * 2
        );

        ctx.fill();
      }

      // Reset shadow for better performance
      ctx.shadowBlur = 0;
    };

    /* =================================
       ANIMATION
    ================================= */

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      updateParticles();
      drawParticles();

      animationFrameId = requestAnimationFrame(animate);
    };

    /* =================================
       EVENTS
    ================================= */

    window.addEventListener('resize', resizeCanvas);
    window.addEventListener('mousemove', handleMouseMove);

    animate();

    /* =================================
       CLEANUP
    ================================= */

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);

      cancelAnimationFrame(animationFrameId);

      particles.length = 0;
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-50"
      aria-hidden="true"
    />
  );
}