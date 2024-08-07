import About from "./components/About";
import Projects from "./components/Projects";
import Experiences from "./components/Experiences";
import Navbar from "./components/Navbar";


export default function Home() {
  return (
    <main className="lg:grid lg:grid-cols-5 text-gray-400 min-h-screen">
      <div className="lg:col-span-2"><Navbar /></div>
      <div className="lg:col-span-3 lg:pr-12 sm:mx-20 lg:mt-24 flex flex-col">
        <About />
        <Experiences />
        <Projects />
        <p className="text-sm mt-auto text-center">copyright &copy; 2024 Simachew Denekew</p>
      </div>
    </main>


  );
}
