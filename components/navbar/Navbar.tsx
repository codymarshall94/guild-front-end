import React from "react";
import Image from "next/image";
import Link from "next/link";

interface LinkItem {
  id: number;
  name: string;
  path: string;
}

const links: LinkItem[] = [
  {
    id: 1,
    name: "About",
    path: "#about",
  },
  {
    id: 2,
    name: "Resources",
    path: "#resources",
  },
  {
    id: 3,
    name: "Get Involved",
    path: "#involved",
  },
];

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4 fixed top-12 left-0 w-11/12 z-50 transition-all duration-300 rounded-[90px] bg-white bg-opacity-50">
      <Image
        src="/logo/logo_location.png"
        alt="logo"
        width={200}
        height={100}
      />
      <div className="hidden lg:flex space-x-6">
        {links.map((link) => (
          <Link
            key={link.id}
            href={link.path}
            className="text-[#00000066] hover:text-blue-500 transition-colors duration-300"
          >
            {link.name}
          </Link>
        ))}
      </div>
    </nav>
  );
}
