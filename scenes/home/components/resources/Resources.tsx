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
    <section
      className="flex flex-col justify-center items-center min-h-screen w-full"
      id="resources"
    >
      <h2 className="font-bold text-center text-2xl md:text-4xl pb-4">
        Resources
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 max-w-screen-xl gap-4 p-4">
        {resources.map((resource) => (
          <div
            key={resource.id}
            className="flex justify-center items-center p-4 md:h-[250px] sm:h-[200px] lg:h-[300px] shadow-[0px_0px_8px_0px__#00000030]"
          >
            <h3
              className={`md:text-2xl text-center font-bold bg-gradient-to-br ${resource.color} bg-clip-text text-transparent`}
            >
              {resource.name}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
}
