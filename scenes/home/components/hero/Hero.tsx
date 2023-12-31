import Image from "next/image";
import MeetupCard from "./components/meetup-card/MeetupCard";

const join = [
  {
    id: 1,
    name: "When",
    virtual: "Every Sunday, 5:00 PM PST",
    person: "Every Other Saturday, 5:00 PM PST",
  },
  {
    id: 2,
    name: "Where",
    virtual: "FEG Discord Channel",
    person: "Hacker Dogo in Mountain View",
  },
];

export default function Hero() {
  return (
    <section className="flex min-h-screen w-full">
      <Image
        src="/homepage/hero-img.png"
        alt="hero background"
        fill
        style={{ objectFit: "cover", objectPosition: "bottom" }}
      />

      <div className="flex flex-col justify-center relative z-40 w-full p-8 md:p-16">
        <h1 className="leading-20 text-4xl md:text-6xl bg-gradient-to-bl from-neutral-900 to-purple-700 bg-clip-text text-transparent pt-8 md:pt-0">
          <span className="font-bold">Connect</span> with people,
          <br />
          <span className="font-bold">grow</span> your skills,
          <br />
          &amp; <span className="font-bold">Improve</span> the web.
        </h1>

        <div className="flex flex-col justify-center items-center gap-4 pt-24">
          <h2 className="font-bold text-center text-2xl md:text-4xl">
            Join Us
          </h2>
          <div className="flex flex-col lg:flex-row justify-center gap-4 w-full max-w-screen-xl">
            {join.map(({ id, name, virtual, person }) => (
              <MeetupCard
                title={name}
                virtual={virtual}
                person={person}
                key={id}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
