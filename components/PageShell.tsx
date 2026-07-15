import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { SmoothScroll } from '@/components/SmoothScroll';

export function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <SmoothScroll>
      <div className="App min-h-screen bg-brand-navy text-white">
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </div>
    </SmoothScroll>
  );
}
