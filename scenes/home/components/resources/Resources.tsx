const resources = [
  {
    id: 1,
    name: "Front End Skill Matrix",
    color: "from-[#6D96FF] to-[#65E3FF]",
  },
  {
    id: 2,
    name: "Our Discord Channel",
    color: "from-[#48A5AB] to-[#00FFD1]",
  },
  {
    id: 3,
    name: "Schedule a Mock Interview",
    color: "from-[#FF886D] to-[#6599FF]",
  },
  {
    id: 4,
    name: "Guide to Getting Hired",
    color: "from-[#D96DFF] to-[#6865FF]",
  },
];

export default function Resources() {
  return (
    <section className="flex flex-col justify-center min-h-screen w-full">
      <h2 className="font-bold text-center text-2xl md:text-4xl pb-4">
        Resources
      </h2>
      <div className="flex flex-row justify-center gap-4">
        {resources.map((resource) => (
          <div
            key={resource.id}
            className="flex justify-center items-center h-[300px] w-[300px] shadow-[0px_0px_8px_0px__#00000030]"
          >
            <h3
              className={`text-2xl text-center font-bold bg-gradient-to-br ${resource.color} bg-clip-text text-transparent`}
            >
              {resource.name}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
}
