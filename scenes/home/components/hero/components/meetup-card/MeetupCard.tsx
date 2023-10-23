function MeetupItem({ name, event }: { name: string; event: string }) {
  const pillClassName = name !== "Virtual" ? "bg-[#59D7FF]" : "bg-[#59B4FF]";

  return (
    <div className="flex flex-row items-center bg-[#FFFFFFC9] rounded-2xl">
      <div
        className={`text-center text-white p-2 rounded-2xl w-[100px] ${pillClassName} whitespace-nowrap`}
      >
        {name}
      </div>
      <p className="text-[#000000A1] px-4 whitespace-nowrap">{event}</p>
    </div>
  );
}

export default function MeetupCard({
  title,
  virtual,
  person,
}: {
  title: string;
  virtual: string;
  person: string;
}) {
  return (
    <div className="p-4 border border-[#FFFFFFE5] rounded-md backdrop-blur bg-white/25 max-w-full text-xs md:text-lg">
      <h3 className="font-bold text-center pb-4 text-[#0000008A]">
        {title.toUpperCase()}
      </h3>
      <div className="flex flex-col gap-4">
        <MeetupItem name="Virtual" event={virtual} />
        <MeetupItem name="In-Person" event={person} />
      </div>
    </div>
  );
}
