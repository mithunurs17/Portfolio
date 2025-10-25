import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Education } from '@/components/Education';
import { Skills } from '@/components/Skills';
import { Projects } from '@/components/Projects';
import { Achievements } from '@/components/Achievements';
import { Blog } from '@/components/Blog';
import { Footer } from '@/components/Footer';
import { FloatingConnectButton } from '@/components/FloatingConnectButton';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Education />
        <Skills />
        <Projects />
        <Achievements />
        <Blog />
      </main>
      <Footer />
      <FloatingConnectButton />
    </div>
  );
}
