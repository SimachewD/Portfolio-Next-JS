import About from "./components/About";
import Projects from "./components/Projects";
import Experiences from "./components/Experiences";


export default function Home() {
  return (
    <div className="lg:col-span-3 mx-12 sm:mx-20 lg:mt-32">
      <About />
      <Experiences />
      <Projects />
    </div>
  );
}
