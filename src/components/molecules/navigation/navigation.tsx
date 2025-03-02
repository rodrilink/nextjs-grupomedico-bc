"use client";

import { useState } from "react";
import Link from "next/link";
import { MENU_ITEMS } from "@/app/constants";
import Image from "next/image";

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
      <Link href="/" className="text-xl font-bold text-blue-600">
        <Image
          src="/logo.png"
          alt="Grupo Medico Quirúrgico de Baja California."
          width={200}
          height={76}
          priority={true}
        />
      </Link>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center gap-6">
        {MENU_ITEMS.map((item) => (
          <Link
            key={item.path}
            href={item.path}
            className="text-white hover:text-blue-600"
          >
            {item.label}
          </Link>
        ))}
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden p-2 rounded-lg hover:bg-gray-100"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-expanded={isMenuOpen}
        aria-label="Toggle navigation menu"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-white shadow-lg py-4">
          <div className="flex flex-col items-center gap-4">
            {MENU_ITEMS.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className="text-gray-600 hover:text-blue-600"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
