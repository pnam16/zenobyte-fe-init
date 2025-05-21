import Link from "next/link";
import React from "react";
import {Button} from "@ui/button";

function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-800 bg-zinc-900/95 backdrop-blur px-4 py-4">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-xl font-bold tracking-tighter text-white">ART&CLIMATE</span>
        </Link>
        <nav className="hidden md:flex items-center space-x-6 text-sm">
          <Link href="#" className="text-zinc-400 hover:text-white">
            Home
          </Link>
          <Link href="#" className="text-zinc-400 hover:text-white">
            About
          </Link>
          <Link href="#" className="text-zinc-400 hover:text-white">
            Program
          </Link>
          <Link href="#" className="text-zinc-400 hover:text-white">
            Artists
          </Link>
          <Link href="#" className="text-zinc-400 hover:text-white">
            Gallery
          </Link>
          <Link href="#" className="text-zinc-400 hover:text-white">
            News
          </Link>
          <Link href="#" className="text-zinc-400 hover:text-white">
            Contact
          </Link>
        </nav>
        <div className="flex items-center space-x-4">
          <Button size="sm" className="bg-teal-600 hover:bg-teal-700">
            Register
          </Button>
          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="icon" className="text-zinc-400 hover:text-white">
              <span className="sr-only">Language</span>
              <span className="text-sm">EN</span>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
