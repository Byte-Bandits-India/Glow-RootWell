"use client";

import React, { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";

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
      // Continuous linear interpolation for silky desktop wheel glide
      lerp: 0.09,
      // Smooth mouse wheel response on desktop
      wheelMultiplier: 1,
      // Only smooth mouse wheel on desktop; keep mobile touch 100% native
      smoothWheel: true,
      // Disable touch interception so mobile uses 100% native 120Hz kinetic scroll
      syncTouch: false,
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
