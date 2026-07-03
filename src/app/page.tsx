import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import SetupSteps from '@/components/SetupSteps';
import Economy from '@/components/Economy';
import TerminalInstall from '@/components/TerminalInstall';
import SiblingProduct from '@/components/SiblingProduct';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#0a0a1a]">
      <Header />
      <Hero />
      <Features />
      <SetupSteps />
      <Economy />
      <SiblingProduct />
      <TerminalInstall />
      <Footer />
    </main>
  );
}
