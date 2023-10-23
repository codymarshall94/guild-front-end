import Image from "next/image";

const buttons = [
  {
    id: 1,
    name: "Be a Guest Speaker",
    color: "from-[#CB9B3D66] to-[#FF656566]",
  },
  {
    id: 2,
    name: "Become a Server Mod",
    color: "from-[#2D1F8366] to-[#C224B266]",
  },
];

export default function Involved() {
  return (
    <section className="relative flex flex-col justify-center items-center min-h-min w-full p-24" id="involved">
      <Image
        src="/homepage/footer-background.png"
        alt="hero background"
        fill
        style={{ objectFit: "cover", objectPosition: "top" }}
      />
      <div className="flex flex-col z-40">
        <h2 className="font-bold text-center text-2xl md:text-4xl pb-8">
          Get Involved
        </h2>
        <div className="flex flex-col md:flex-row gap-8">
          {buttons.map((button) => (
            <button
              className={`bg-gradient-to-br px-8 py-4 border border-white shadow-[0px_0px_7px_0px_#00000070] rounded-lg ${button.color}`}
            >
              <span className="text-white font-bold tracking-wider">
                {button.name}
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
