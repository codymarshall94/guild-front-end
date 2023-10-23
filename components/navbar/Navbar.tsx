"use client";

import React, { useState, useRef, useEffect } from "react";
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
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        closeMenu();
      }
    };

    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

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
            <Link
              key={link.id}
              href={link.path}
              className="text-[#00000066] hover:text-blue-500 transition-colors duration-300"
            >
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
      <div
        ref={menuRef}
        className={`lg:hidden fixed top-0 inset-x-0 transform transition-transform ${
          menuOpen ? "translate-y-0 shadow-lg" : "-translate-y-full"
        } bg-white p-4 z-50`}
      >
        {links.map((link) => (
          <Link
            key={link.id}
            href={link.path}
            className="block py-2 text-[#00000066] hover:text-blue-500 transition-colors duration-300"
            onClick={closeMenu}
          >
            {link.name}
          </Link>
        ))}
      </div>
    </div>
  );
}
