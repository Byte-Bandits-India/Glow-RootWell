"use client";

import React, { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";
import "lenis/dist/lenis.css";

interface SmoothScrollProviderProps {
  children: React.ReactNode;
}

export const SmoothScrollProvider: React.FC<SmoothScrollProviderProps> = ({ children }) => {
  const pathname = usePathname();
  const isAuthPage = pathname?.startsWith("/login") || pathname?.startsWith("/signup");
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    // Disable Lenis on authentication pages to guarantee native form interactions
    if (isAuthPage) {
      if (lenisRef.current) {
        lenisRef.current.destroy();
        lenisRef.current = null;
        delete (window as unknown as { __lenis?: Lenis }).__lenis;
      }
      return;
    }

    const lenis = new Lenis({
      // Built-in high-precision RAF loop synchronized with browser vsync
      autoRaf: true,
      // Continuous linear interpolation (lower = silkier, buttery smooth glide)
      lerp: 0.08,
      // Gentle, controlled mouse wheel response to eliminate harsh notched clicks on PC
      wheelMultiplier: 0.95,
      // 1:1 natural touch response without hypersensitivity
      touchMultiplier: 1,
      smoothWheel: true,
      // Seamless touch & mobile inertia sync
      syncTouch: true,
      syncTouchLerp: 0.075,
      touchInertiaExponent: 1.6,
      overscroll: true,
      stopInertiaOnNavigate: true,
      anchors: {
        offset: -80,
      },
    });

    lenisRef.current = lenis;
    (window as unknown as { __lenis?: Lenis }).__lenis = lenis;

    // Smoothly intercept hashtag anchor links across the app
    const handleAnchorClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest("a");
      if (!target) return;
      const href = target.getAttribute("href");

      if (href && (href.startsWith("/#") || href.startsWith("#"))) {
        const id = href.replace(/^\/?#/, "");
        const element = document.getElementById(id);
        if (element) {
          e.preventDefault();
          lenis.scrollTo(element, { offset: -80 });
          window.history.pushState(null, "", `#${id}`);
        }
      }
    };

    document.addEventListener("click", handleAnchorClick);

    return () => {
      document.removeEventListener("click", handleAnchorClick);
      lenis.destroy();
      lenisRef.current = null;
      delete (window as unknown as { __lenis?: Lenis }).__lenis;
    };
  }, [isAuthPage]);

  // Recalculate dimensions & smoothly reset scroll position on route transitions
  useEffect(() => {
    if (isAuthPage || !lenisRef.current) return;
    lenisRef.current.scrollTo(0, { immediate: true });
    const timer = setTimeout(() => {
      lenisRef.current?.resize();
    }, 60);
    return () => clearTimeout(timer);
  }, [pathname, isAuthPage]);

  return <>{children}</>;
};
