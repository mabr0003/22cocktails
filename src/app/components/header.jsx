"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="py-6 px-4 relative z-50">
      <div className="content flex items-center justify-between border-b pb-5" style={{ borderColor: "var(--text)" }}>
        <a href="/">
          <img src="/images/logo.svg" alt="22Cocktails logo" width={200} />
        </a>

        {!menuOpen && (
          <button className="md:hidden z-50 relative" onClick={() => setMenuOpen(true)} aria-label="Open menu">
            <Menu size={28} />
          </button>
        )}

        <nav className="hidden md:block">
          <ul className="flex gap-6 text-2xl">
            <li>
              <a href="/cocktailkort">Cocktailkort</a>
            </li>
            <li>
              <a href="/about">Om</a>
            </li>
            <li>
              <a href="/blog">Blog</a>
            </li>
          </ul>
        </nav>
      </div>

      <div
        className={`fixed inset-0 bg-white text-black flex flex-col items-center justify-center gap-8 transition-all duration-300 ease-in-out z-40
        ${menuOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-full pointer-events-none"}`}
      >
        <button className="absolute top-6 right-6 z-50" onClick={() => setMenuOpen(false)} aria-label="Close menu">
          <X size={32} />
        </button>

        <nav>
          <ul className="flex flex-col items-center gap-6 text-xl">
            <li>
              <a href="/cocktailkort" onClick={() => setMenuOpen(false)}>
                Cocktailkort
              </a>
            </li>
            <li>
              <a href="/about" onClick={() => setMenuOpen(false)}>
                Om
              </a>
            </li>
            <li>
              <a href="/blog" onClick={() => setMenuOpen(false)}>
                Blog
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
