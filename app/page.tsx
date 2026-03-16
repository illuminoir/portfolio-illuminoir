import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Footer from '@/components/Footer';
import ProjectsContact from "@/components/ProjectsContact";

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
                <section id="projectsContact-contact">
                    <ProjectsContact />
                    <Footer />
                </section>

                <div id="scroll-end" />
            </main>
        </>
    );
}
