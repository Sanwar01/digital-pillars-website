import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-navy-950 py-10 text-blue-100">
      <div className="container-page flex flex-col justify-between gap-8 md:flex-row">
        <div>
          <Link href="/" className="inline-flex items-center gap-3 font-black uppercase text-white no-underline">
            <span className="grid h-11 w-11 place-items-center rounded-[10px] bg-gradient-to-br from-pillar-cyan to-pillar-blue text-sm">
              DP
            </span>
            <span>Digital Pillars</span>
          </Link>
          <p className="mt-4 max-w-md">
            Websites, software, AI automation and strategy for UK local businesses.
          </p>
          <p className="mt-3">
            <a className="text-white" href="mailto:hello@digitalpillars.co.uk">
              hello@digitalpillars.co.uk
            </a>
          </p>
        </div>
        <nav className="flex flex-wrap items-center gap-4" aria-label="Footer navigation">
          <Link href="/services">Services</Link>
          <Link href="/work">Work</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </div>
    </footer>
  );
}
