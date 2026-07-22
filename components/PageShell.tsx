import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { SmoothScroll } from '@/components/SmoothScroll';

export function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <SmoothScroll>
      <div className="App min-h-screen bg-brand-navy text-white">
        <a
          href="#main"
          className="absolute left-4 top-4 z-[100] -translate-y-[200%] rounded bg-brand-cyan px-4 py-2 text-sm font-medium text-brand-navy transition-transform focus:translate-y-0"
        >
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </div>
    </SmoothScroll>
  );
}
