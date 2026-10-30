import { useState, useEffect, useCallback } from "react";

function getBezier(t: number, p0: number, p1: number, p2: number, p3: number): number {
  const u = 1 - t;
  const tt = t * t;
  const uu = u * u;
  const uuu = uu * u;
  const ttt = tt * t;

  return uuu * p0 + 3 * uu * t * p1 + 3 * u * tt * p2 + ttt * p3;
}

// Smooth easeInOutQuad for natural fluid acceleration & deceleration
function easeInOutQuad(x: number): number {
  return x < 0.5 ? 2 * x * x : 1 - Math.pow(-2 * x + 2, 2) / 2;
}

export default function TravelingAvatar() {
  const [coords, setCoords] = useState<{
    heroX: number;
    heroY: number;
    heroSize: number;
    navX: number;
    navY: number;
    navSize: number;
  } | null>(null);

  const [scrollY, setScrollY] = useState(0);

  const updatePositions = useCallback(() => {
    const heroAnchor = document.getElementById("hero-avatar-anchor");
    const navAnchor = document.getElementById("nav-avatar-anchor");

    if (!heroAnchor) return;

    const heroRect = heroAnchor.getBoundingClientRect();
    const heroInitialTop = heroRect.top + window.scrollY;
    const heroInitialLeft = heroRect.left + window.scrollX;
    const heroSize = heroRect.width;

    const isMobile = window.innerWidth < 640;
    const paddingLeft = isMobile ? 16 : 24;

    let navX = paddingLeft;
    let navY = 16;
    let navSize = 32;

    if (navAnchor) {
      const navRect = navAnchor.getBoundingClientRect();
      if (navRect.left > 0) {
        navX = navRect.left;
        navY = navRect.top;
        navSize = 32;
      } else {
        const navContainer = navAnchor.closest(".max-w-5xl");
        if (navContainer) {
          const cRect = navContainer.getBoundingClientRect();
          navX = cRect.left + paddingLeft;
        }
      }
    }

    setCoords({
      heroX: heroInitialLeft,
      heroY: heroInitialTop,
      heroSize: heroSize || (isMobile ? 128 : 208),
      navX,
      navY,
      navSize,
    });
  }, []);

  useEffect(() => {
    updatePositions();

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    const handleResize = () => {
      updatePositions();
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize, { passive: true });

    // Multi-stage measurement to capture initial paint, fonts, and responsive layout
    const t1 = setTimeout(updatePositions, 50);
    const t2 = setTimeout(updatePositions, 200);
    const t3 = setTimeout(updatePositions, 600);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [updatePositions]);

  if (!coords) return null;

  // Flight path animation triggers over 0px to 170px of scroll
  const flightDistance = 170;
  const rawProgress = Math.max(0, Math.min(scrollY / flightDistance, 1));
  const t = easeInOutQuad(rawProgress);

  const isDesktop = typeof window !== "undefined" && window.innerWidth >= 768;

  const P0 = { x: coords.heroX, y: coords.heroY };
  const P3 = { x: coords.navX, y: coords.navY };

  const dx = P3.x - P0.x;
  const dy = P3.y - P0.y;

  // Bezier control points precisely tailored to user's red path drawing
  let P1: { x: number; y: number };
  let P2: { x: number; y: number };

  if (isDesktop) {
    // Desktop: upward arc sweeping across the upper screen from right into top-left navbar
    P1 = {
      x: P0.x + dx * 0.25,
      y: Math.min(P0.y, P3.y) + Math.abs(dy) * 0.25,
    };
    P2 = {
      x: P0.x + dx * 0.75,
      y: P3.y - 8,
    };
  } else {
    // Mobile: smooth sweeping arc from center up-left into mobile top bar
    P1 = {
      x: P0.x + dx * 0.2,
      y: Math.min(P0.y, P3.y) + Math.abs(dy) * 0.35,
    };
    P2 = {
      x: P0.x + dx * 0.7,
      y: P3.y - 6,
    };
  }

  const currentX = getBezier(t, P0.x, P1.x, P2.x, P3.x);
  const currentY = getBezier(t, P0.y, P1.y, P2.y, P3.y);
  const currentSize = coords.heroSize + (coords.navSize - coords.heroSize) * t;

  // Adaptive active status green dot size
  const dotSize = Math.max(7, 14 - t * 7);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      style={{
        position: "fixed",
        left: `${currentX}px`,
        top: `${currentY}px`,
        width: `${currentSize}px`,
        height: `${currentSize}px`,
        zIndex: 55,
        willChange: "transform, left, top, width, height",
        transform: "translateZ(0)",
      }}
      onClick={handleClick}
      className="pointer-events-auto cursor-pointer rounded-full select-none"
      title="Ashish Gautam · Click to return to top"
    >
      <div
        className={`w-full h-full rounded-full bg-card relative transition-all duration-150 ${
          t > 0.85
            ? "border border-border shadow-xs hover:border-foreground/50"
            : "border-2 border-border p-1 shadow-md hover:scale-[1.02]"
        }`}
      >
        <img
          src="/ashish.jpeg"
          alt="Ashish Gautam"
          className="w-full h-full object-cover rounded-full"
        />

        {/* Live Green Status Beacon */}
        <span
          style={{
            width: `${dotSize}px`,
            height: `${dotSize}px`,
            bottom: t > 0.85 ? "0px" : "3px",
            right: t > 0.85 ? "0px" : "4px",
          }}
          className="absolute rounded-full bg-emerald-500 border border-background shadow-xs pointer-events-none"
        />
      </div>
    </div>
  );
}
