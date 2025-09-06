import Header from '@/components/header';
import Hero from '@/components/hero';
import About from '@/components/about';
import Projects from '@/components/projects';
import Github from '@/components/github';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main>
        <Hero />
        <div className="container mx-auto px-4 md:px-6">
          <section id="about" className="py-16 md:py-24">
            <About />
          </section>
          <section id="projects" className="py-16 md:py-24">
            <Projects />
          </section>
          <section id="github" className="py-16 md:py-20">
            <Github />
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
