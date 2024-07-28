import About from "./components/About";
import Projects from "./components/Projects";
import Experiences from "./components/Experiences";
import Navbar from "./components/Navbar";


export default function Home() {
  return (
    <main className="lg:grid lg:grid-cols-5 text-gray-400">
        <Navbar />
        <div className="lg:col-span-3 mx-12 sm:mx-20 lg:mt-32">
          <About />
          <Experiences />
          <Projects />
        </div>
    </main>

  );
}
