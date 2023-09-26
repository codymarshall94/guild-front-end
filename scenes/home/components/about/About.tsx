export default function About() {
  return (
    <section className="flex justify-center w-full">
      <div className="flex flex-col w-1/2 gap-12">
        <h2 className="font-bold text-center text-2xl md:text-4xl">About</h2>
        <p className="text-center">
          The Front End Guild is group of developers who love to chat about all
          things code. Our online community and in-person meetings allow you to
          get involved whenever/however makes sense for you.
        </p>
        <p className="text-center">
          The Guild is a great place to share knowledge, develop skills, and
          make meaningful connections in the industry. Whether you are seasoned
          veteran or just getting started, we would love to have you a part of
          our community.
        </p>{" "}
        <p className="text-center">
          {" "}
          Interested in joining an event? While we having regular, in-person
          meetings in the heart of Silicon Valley, our weekly virtual meetings
          are joined by developers from around the world.
        </p>
      </div>
    </section>
  );
}
