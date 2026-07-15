import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';

export function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="App min-h-screen bg-[#050506] text-white">
      <Header />
      <main id="main">{children}</main>
      <Footer />
    </div>
  );
}
