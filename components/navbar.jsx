"use client";

import Link from "next/link";
import SearchBar from "./SearchBar";

export default function Navbar() {
  return (
    <nav className="w-full bg-black border-b border-gray-800 px-8 py-4 flex items-center justify-between">

      {/* Logo */}
      <Link href="/">
        <h1 className="text-2xl font-bold text-red-500 cursor-pointer">
          CineAI
        </h1>
      </Link>

      {/* Search Bar (your existing component) */}
      <div className="w-[400px]">
        <SearchBar />
      </div>

    </nav>
  );
}