import Navbar from '../sections/Navbar';
import Hero from '../sections/Hero';
import About from '../sections/About';
import Services from '../sections/Services';
import Differentials from '../sections/Differentials';
import Portfolio from '../sections/Portfolio';
import Process from '../sections/Process';
import Contact from '../sections/Contact';
import Footer from '../sections/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Differentials />
        <Portfolio />
        <Process />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
