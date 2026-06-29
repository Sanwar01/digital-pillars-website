import type { ReactNode } from "react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <>
      <a
        href="#main"
        className="absolute left-4 top-[-100px] z-[60] rounded-lg bg-pillar-blue px-4 py-3 font-extrabold text-white focus:top-4"
      >
        Skip to content
      </a>
      <Header />
      <main id="main">{children}</main>
      <Footer />
    </>
  );
}
