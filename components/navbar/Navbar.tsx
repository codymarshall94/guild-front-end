import Image from "next/image";
import Link from "next/link";
import React from "react";

const links = [
  {
    id: 1,
    name: "About",
    path: "about",
  },
  {
    id: 2,
    name: "Resources",
    path: "resources",
  },
  {
    id: 3,
    name: "Get Involved",
    path: "involved",
  },
];

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center z-50 fixed top-[55px] inset-x-0 mx-auto left-0 w-11/12  bg-[#FFFFFF66] p-4 rounded-[90px] z-50">
      <Image
        src="/logo/logo_location.png"
        alt="logo"
        width={200}
        height={100}
      />
      <menu className="flex gap-4">
        {links.map((link) => (
          <Link key={link.id} href={link.path} className="text-[#00000066]">
            {link.name}
          </Link>
        ))}
      </menu>
    </nav>
  );
}
