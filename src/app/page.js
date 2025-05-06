import Header from "./components/Header"
import Hero from "./components/Hero"
import Cars from "./components/Cars"
import About from "./components/About"
import Why from "./components/Why"
import Testimonials from "./components/Testimonials"
import Cta from "./components/Cta"
import Footer from "./components/Footer"
import BackToTopBtn from "./components/BackToTopBtn"

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Cars />
      <About />
      <Why />
      <Testimonials />
      <Cta />
      <Footer />
      <BackToTopBtn />
    </main>
  );
}
