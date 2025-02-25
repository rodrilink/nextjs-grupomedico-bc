"use client";

import Link from "next/link";
import { Button } from "@/components/atoms/Button";
import { useState } from "react";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="grid-areas-header bg-gray-800 text-white p-3">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold text-blue-600">
          Grupo Medico Quirúrgico de Baja California
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          <Link href="/about" className="text-gray-600 hover:text-blue-600">
            About
          </Link>
          <Link href="/contact" className="text-gray-600 hover:text-blue-600">
            Contact
          </Link>
          <Button variant="secondary" size="sm">
            Get Started
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-lg hover:bg-gray-100"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
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
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute w-full bg-white shadow-lg py-2">
          <Link
            href="/about"
            className="block px-4 py-2 text-gray-600 hover:bg-gray-100"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="block px-4 py-2 text-gray-600 hover:bg-gray-100"
          >
            Contact
          </Link>
          <div className="px-4 py-2">
            <Button variant="secondary" size="sm" className="w-full">
              Get Started
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};
