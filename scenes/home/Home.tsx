import About from "./components/about/About";
import Hero from "./components/hero/Hero";
import Resources from "./components/resources/Resources";

export default function Home() {
  return (
    <main className="flex flex-col">
      <Hero />
      <About />
      <Resources />
    </main>
  );
}
