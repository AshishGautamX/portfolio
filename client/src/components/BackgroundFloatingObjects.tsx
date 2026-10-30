import { useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

export default function BackgroundFloatingObjects() {
  // Normalized pointer coordinates from -1 to 1
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // High-smoothness physics springs to react organically with pointer
  const springConfig = { stiffness: 45, damping: 25, mass: 0.8 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handlePointerMove = (e: PointerEvent) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 2;
      const y = (e.clientY / innerHeight - 0.5) * 2;
      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    return () => window.removeEventListener("pointermove", handlePointerMove);
  }, [mouseX, mouseY]);

  // Pointer-reactive transformations for each depth layer
  // Object 1: Hero Top-Right Wireframe Polyhedron
  const obj1X = useTransform(smoothX, (v) => v * -38);
  const obj1Y = useTransform(smoothY, (v) => v * -28);
  const obj1Rotate = useTransform(smoothX, (v) => v * 18);

  // Object 2: Upper Mid-Left Orbital Gyro Rings
  const obj2X = useTransform(smoothX, (v) => v * 42);
  const obj2Y = useTransform(smoothY, (v) => v * 32);
  const obj2Rotate = useTransform(smoothY, (v) => v * -22);

  // Object 3: Mid-Right Distributed Graph Matrix
  const obj3X = useTransform(smoothX, (v) => v * -48);
  const obj3Y = useTransform(smoothY, (v) => v * 38);

  // Object 4: Lower-Left Isometric Computing Lattice
  const obj4X = useTransform(smoothX, (v) => v * 36);
  const obj4Y = useTransform(smoothY, (v) => v * -30);

  // Ambient interactive cursor glow tracking
  const glowX = useTransform(smoothX, (v) => `calc(50% + ${v * 45}vw)`);
  const glowY = useTransform(smoothY, (v) => `calc(50% + ${v * 45}vh)`);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0 select-none">
      
      {/* Interactive Cursor Reactive Glow (Gentle & Hardware-Accelerated) */}
      <motion.div
        className="absolute w-[36rem] h-[36rem] rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl opacity-15 dark:opacity-20 bg-radial from-amber-500/30 via-violet-500/15 to-transparent pointer-events-none transition-opacity"
        style={{
          left: glowX,
          top: glowY,
        }}
      />

      {/* Static Atmospheric Depth Glows */}
      <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-violet-600/5 dark:bg-violet-500/5 blur-3xl" />
      <div className="absolute top-1/2 -right-40 w-[28rem] h-[28rem] rounded-full bg-amber-500/5 dark:bg-amber-400/5 blur-3xl" />

      {/* ─── Object 1: Hero Area Wireframe Polyhedron (Top-Right) - Desktop Only ─── */}
      <motion.div
        style={{ x: obj1X, y: obj1Y, rotate: obj1Rotate }}
        className="hidden md:block absolute top-[8%] right-[8%] lg:right-[14%] w-24 h-24 lg:w-32 lg:h-32 opacity-25 dark:opacity-35 pointer-events-none"
      >
        <motion.div
          animate={{
            y: [0, -14, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 24,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="w-full h-full"
        >
          <svg viewBox="0 0 100 100" fill="none" className="w-full h-full stroke-current text-foreground">
            <polygon points="50,10 90,30 90,70 50,90 10,70 10,30" strokeWidth="1" strokeDasharray="3 3" />
            <line x1="50" y1="10" x2="50" y2="90" strokeWidth="0.8" />
            <line x1="10" y1="30" x2="90" y2="70" strokeWidth="0.8" />
            <line x1="10" y1="70" x2="90" y2="30" strokeWidth="0.8" />
            <circle cx="50" cy="50" r="3" fill="currentColor" />
          </svg>
        </motion.div>
      </motion.div>

      {/* ─── Object 2: Activity & Telemetry Orbital Gyro (Upper Mid-Left) - Desktop Only ─── */}
      <motion.div
        style={{ x: obj2X, y: obj2Y, rotate: obj2Rotate }}
        className="hidden md:block absolute top-[28%] left-[4%] lg:left-[8%] w-20 h-20 lg:w-28 lg:h-28 opacity-20 dark:opacity-30 pointer-events-none"
      >
        <motion.div
          animate={{
            y: [0, 18, 0],
            rotate: [0, -180, -360],
          }}
          transition={{
            duration: 28,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="w-full h-full"
        >
          <svg viewBox="0 0 100 100" fill="none" className="w-full h-full stroke-current text-amber-500/80">
            <circle cx="50" cy="50" r="42" strokeWidth="1" strokeDasharray="4 4" />
            <circle cx="50" cy="50" r="24" strokeWidth="0.8" />
            <ellipse cx="50" cy="50" rx="42" ry="18" strokeWidth="0.8" strokeDasharray="2 2" transform="rotate(30 50 50)" />
            <circle cx="50" cy="8" r="3" fill="currentColor" />
          </svg>
        </motion.div>
      </motion.div>

      {/* ─── Object 3: Projects Area Distributed Graph Matrix (Mid-Right) - Desktop Only ─── */}
      <motion.div
        style={{ x: obj3X, y: obj3Y }}
        className="hidden md:block absolute top-[52%] right-[5%] lg:right-[10%] w-24 h-24 lg:w-32 lg:h-32 opacity-20 dark:opacity-30 pointer-events-none"
      >
        <motion.div
          animate={{
            y: [0, -16, 0],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="w-full h-full"
        >
          <svg viewBox="0 0 100 100" fill="none" className="w-full h-full stroke-current text-foreground">
            <rect x="25" y="25" width="50" height="50" strokeWidth="1" transform="rotate(45 50 50)" />
            <rect x="35" y="35" width="30" height="30" strokeWidth="0.8" strokeDasharray="2 2" transform="rotate(45 50 50)" />
            <line x1="50" y1="15" x2="50" y2="85" strokeWidth="0.8" strokeDasharray="3 3" />
            <line x1="15" y1="50" x2="85" y2="50" strokeWidth="0.8" strokeDasharray="3 3" />
            <circle cx="50" cy="50" r="3" fill="#f59e0b" />
          </svg>
        </motion.div>
      </motion.div>

      {/* ─── Object 4: Skills & Experience Computing Lattice (Lower-Left) - Desktop Only ─── */}
      <motion.div
        style={{ x: obj4X, y: obj4Y }}
        className="hidden md:block absolute top-[72%] left-[6%] lg:left-[11%] w-20 h-20 lg:w-28 lg:h-28 opacity-20 dark:opacity-30 pointer-events-none"
      >
        <motion.div
          animate={{
            y: [0, 15, 0],
            rotate: [0, -45, 0],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="w-full h-full"
        >
          <svg viewBox="0 0 100 100" fill="none" className="w-full h-full stroke-current text-amber-500/70">
            <polygon points="50,15 85,35 85,75 50,95 15,75 15,35" strokeWidth="1" strokeDasharray="4 2" />
            <polygon points="50,30 70,42 70,68 50,80 30,68 30,42" strokeWidth="0.8" />
            <circle cx="50" cy="50" r="2.5" fill="currentColor" />
          </svg>
        </motion.div>
      </motion.div>

      {/* ─── Pointer-Reactive Floating Node Particles ─── */}
      {[
        { top: "12%", left: "22%", size: "w-1.5 h-1.5", factor: 20, duration: 12 },
        { top: "24%", left: "78%", size: "w-2 h-2", factor: -25, duration: 16 },
        { top: "42%", left: "15%", size: "w-1.5 h-1.5", factor: 30, duration: 14 },
        { top: "60%", left: "85%", size: "w-2 h-2", factor: -20, duration: 19 },
        { top: "78%", left: "30%", size: "w-1.5 h-1.5", factor: 25, duration: 15 },
        { top: "90%", left: "70%", size: "w-2 h-2", factor: -18, duration: 17 },
      ].map((p, i) => {
        // Individual particle transform responding to pointer
        const px = useTransform(smoothX, (v) => v * p.factor);
        const py = useTransform(smoothY, (v) => v * p.factor);

        return (
          <motion.div
            key={i}
            style={{ top: p.top, left: p.left, x: px, y: py }}
            className={`absolute rounded-full bg-foreground/25 dark:bg-foreground/35 ${p.size}`}
            animate={{
              y: [0, -18, 0],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        );
      })}

    </div>
  );
}
