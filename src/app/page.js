import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
       <div className="container mt-24 mx-auto px-12 py-4">
       <Hero /> 
       <About />
       <Projects />
       <Footer />
       </div>
    </main>
  );
}
