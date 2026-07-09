"use client";

import { ParallaxProvider } from "react-scroll-parallax";
import GlowCursor from "@/components/GlowCursor";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      <GlowCursor />
      <ParallaxProvider>{children}</ParallaxProvider>
    </>
  );
}
