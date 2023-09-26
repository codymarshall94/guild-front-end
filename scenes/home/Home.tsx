import About from "./components/about/About";
import Hero from "./components/hero/Hero";
import Involved from "./components/involved/Involved";
import Resources from "./components/resources/Resources";

export default function Home() {
  return (
    <main className="flex flex-col">
      <Hero />
      <About />
      <Resources />
      <Involved />
    </main>
  );
}
