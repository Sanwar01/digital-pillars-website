"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

export function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
        buttonRef.current?.focus();
      }
    }

    function onPointerDown(event: PointerEvent) {
      const target = event.target as Node;
      if (
        !buttonRef.current?.contains(target) &&
        !menuRef.current?.contains(target)
      ) {
        setIsOpen(false);
      }
    }

    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", onPointerDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", onPointerDown);
    };
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-navy-950/95 backdrop-blur-xl">
      <nav className="container-page flex min-h-[78px] items-center justify-between gap-4" aria-label="Primary navigation">
        <Link href="/" className="inline-flex items-center gap-3 font-black uppercase text-white no-underline">
          <span className="grid h-11 w-11 place-items-center rounded-[10px] bg-gradient-to-br from-pillar-cyan to-pillar-blue text-sm shadow-blue">
            DP
          </span>
          <span>Digital Pillars</span>
        </Link>

        <button
          ref={buttonRef}
          className="grid h-11 w-11 place-items-center rounded-lg border border-white/20 md:hidden"
          type="button"
          aria-expanded={isOpen}
          aria-controls="primary-menu"
          onClick={() => setIsOpen((value) => !value)}
        >
          <span className="sr-only">Toggle navigation</span>
          <span className="grid gap-1.5" aria-hidden="true">
            <span className="block h-0.5 w-5 bg-white" />
            <span className="block h-0.5 w-5 bg-white" />
            <span className="block h-0.5 w-5 bg-white" />
          </span>
        </button>

        <ul
          ref={menuRef}
          id="primary-menu"
          className={`absolute left-4 right-4 top-[78px] flex-col items-stretch gap-1 rounded-lg border border-white/10 bg-navy-950 p-3 shadow-lift md:static md:flex md:flex-row md:items-center md:border-0 md:bg-transparent md:p-0 md:shadow-none ${
            isOpen ? "flex" : "hidden md:flex"
          }`}
        >
          {navItems.map((item) => {
            const isActive =
              item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);

            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={isActive ? "page" : undefined}
                  onClick={() => setIsOpen(false)}
                  className="flex min-h-11 items-center justify-center rounded-lg px-4 py-2 font-bold text-blue-100 no-underline hover:bg-pillar-blue/15 hover:text-white aria-[current=page]:bg-pillar-blue/15 aria-[current=page]:text-white"
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
          <li>
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="mt-2 flex min-h-11 items-center justify-center rounded-lg bg-pillar-blue px-5 py-2 font-extrabold text-white no-underline shadow-blue hover:bg-[#2f86ff] md:ml-4 md:mt-0"
            >
              Book Consultation
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
