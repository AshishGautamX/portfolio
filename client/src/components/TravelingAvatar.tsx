import { useState, useEffect, useRef, useCallback } from "react";

function getBezier(t: number, p0: number, p1: number, p2: number, p3: number): number {
  const u = 1 - t;
  const tt = t * t;
  const uu = u * u;
  const uuu = uu * u;
  const ttt = tt * t;

  return uuu * p0 + 3 * uu * t * p1 + 3 * u * tt * p2 + ttt * p3;
}

// Smooth cubic ease in-out for natural, fluid acceleration and deceleration
function easeInOutCubic(x: number): number {
  return x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2;
}

interface GeometryState {
  heroX: number;
  heroY: number;
  heroSize: number;
  navX: number;
  navY: number;
  navSize: number;
  isDesktop: boolean;
}

export default function TravelingAvatar() {
  const [geom, setGeom] = useState<GeometryState | null>(null);
  const avatarRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLSpanElement>(null);

  const measure = useCallback(() => {
    const heroAnchor = document.getElementById("hero-avatar-anchor");
    const navAnchor = document.getElementById("nav-avatar-anchor");

    if (!heroAnchor || !navAnchor) return;

    const heroRect = heroAnchor.getBoundingClientRect();
    const navRect = navAnchor.getBoundingClientRect();

    // Calculate document-absolute origin for hero anchor
    const heroInitialTop = heroRect.top + window.scrollY;
    const heroInitialLeft = heroRect.left + window.scrollX;
    const heroSize = heroRect.width || (window.innerWidth < 640 ? 128 : 208);

    // Nav anchor is fixed to the top viewport
    const navX = navRect.left;
    const navY = navRect.top;
    const navSize = navRect.width || 32;

    const isDesktop = window.innerWidth >= 768;

    setGeom({
      heroX: heroInitialLeft,
      heroY: heroInitialTop,
      heroSize,
      navX,
      navY,
      navSize,
      isDesktop,
    });
  }, []);

  useEffect(() => {
    measure();

    const handleResize = () => {
      measure();
    };

    window.addEventListener("resize", handleResize, { passive: true });

    // Multi-stage measurement to capture initial layout, CSS hydration, and web fonts
    const t1 = setTimeout(measure, 50);
    const t2 = setTimeout(measure, 200);
    const t3 = setTimeout(measure, 600);

    if (document.fonts) {
      document.fonts.ready.then(measure).catch(() => {});
    }

    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [measure]);

  // Silky 60/120 FPS GPU-hardware transform update loop
  useEffect(() => {
    if (!geom) return;

    const flightDistance = geom.isDesktop ? 200 : 170;
    const targetScale = geom.navSize / geom.heroSize;

    const P0 = { x: geom.heroX, y: geom.heroY };
    const P3 = { x: geom.navX, y: geom.navY };

    const dx = P3.x - P0.x;
    const dy = P3.y - P0.y;

    let P1: { x: number; y: number };
    let P2: { x: number; y: number };

    if (geom.isDesktop) {
      // Desktop: graceful sweeping arc ascending to upper screen and gliding into navbar
      P1 = {
        x: P0.x + dx * 0.22,
        y: P0.y + dy * 0.55,
      };
      P2 = {
        x: P0.x + dx * 0.75,
        y: P3.y - 10,
      };
    } else {
      // Mobile: smooth arc swooping from center-top into top-left bar
      P1 = {
        x: P0.x + dx * 0.25,
        y: P0.y + dy * 0.45,
      };
      P2 = {
        x: P0.x + dx * 0.8,
        y: P3.y - 6,
      };
    }

    let rafId: number | null = null;

    const updateTransform = () => {
      const currentScroll = Math.max(0, window.scrollY);
      const rawProgress = Math.min(1, currentScroll / flightDistance);
      const t = easeInOutCubic(rawProgress);

      const currentX = getBezier(t, P0.x, P1.x, P2.x, P3.x);
      const currentY = getBezier(t, P0.y, P1.y, P2.y, P3.y);
      const currentScale = 1 + (targetScale - 1) * t;

      if (avatarRef.current) {
        avatarRef.current.style.transform = `translate3d(${currentX.toFixed(2)}px, ${currentY.toFixed(2)}px, 0) scale(${currentScale.toFixed(4)})`;
      }

      if (dotRef.current) {
        // Keep beacon dot crisp and legible (approx 8px) even when avatar scales down
        const dotScale = (14 - t * 6) / (14 * currentScale);
        dotRef.current.style.transform = `scale(${dotScale.toFixed(3)})`;
      }

      if (innerRef.current) {
        if (t > 0.85) {
          innerRef.current.classList.add("avatar-docked");
        } else {
          innerRef.current.classList.remove("avatar-docked");
        }
      }
    };

    const onScroll = () => {
      if (rafId === null) {
        rafId = requestAnimationFrame(() => {
          updateTransform();
          rafId = null;
        });
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    updateTransform();

    return () => {
      window.removeEventListener("scroll", onScroll);
      if (rafId !== null) {
        cancelAnimationFrame(rafId);
      }
    };
  }, [geom]);

  if (!geom) return null;

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      ref={avatarRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: `${geom.heroSize}px`,
        height: `${geom.heroSize}px`,
        transformOrigin: "top left",
        zIndex: 55,
        willChange: "transform",
        pointerEvents: "auto",
        cursor: "pointer",
      }}
      onClick={handleClick}
      className="rounded-full select-none"
      title="Ashish Gautam · Click to return to top"
    >
      <div
        ref={innerRef}
        className="w-full h-full rounded-full bg-card relative border-2 border-border p-1 shadow-md hover:scale-[1.02] transition-[border-color,box-shadow] duration-200"
      >
        <img
          src="/ashish.jpeg"
          alt="Ashish Gautam"
          className="w-full h-full object-cover rounded-full"
          loading="eager"
        />

        {/* Live Green Status Beacon */}
        <span
          ref={dotRef}
          style={{
            width: "14px",
            height: "14px",
            bottom: "4px",
            right: "6px",
            transformOrigin: "bottom right",
          }}
          className="absolute rounded-full bg-emerald-500 border border-background shadow-xs pointer-events-none"
        />
      </div>
    </div>
  );
}
