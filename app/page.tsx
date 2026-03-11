import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Allan Khelifi | Software Developer',
  description: 'Software developer specialising in Java, JavaScript, React, and Node.js.',
};
export default function Home() {
  return (
      <>
        <Navbar />
        <main>
          <Hero />
          <About />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </>
  );
}
