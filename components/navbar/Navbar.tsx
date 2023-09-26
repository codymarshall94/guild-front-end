"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

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
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div className="relative">
      <nav className="flex justify-between items-center z-50 fixed top-12 inset-x-0 mx-auto left-0 w-11/12 bg-[#FFFFFF66] p-4 rounded-[90px]">
        <Image
          src="/logo/logo_location.png"
          alt="logo"
          width={200}
          height={100}
        />

        {/* Desktop Menu */}
        <div className="hidden lg:flex space-x-6">
          {links.map((link) => (
            <Link key={link.id} href={link.path} className="text-[#00000066]">
              {link.name}
            </Link>
          ))}
        </div>

        <button
          className="lg:hidden text-[#00000066]"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
    </div>
  );
}
