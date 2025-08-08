"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const linksEN = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];
const linksPT = [
  { href: "/pt", label: "Início" },
  { href: "/pt/projects", label: "Projetos" },
  { href: "/pt/about", label: "Sobre" },
  { href: "/pt/contact", label: "Contato" },
];

export default function Header() {
  const pathname = usePathname();
  const isPT = pathname.startsWith("/pt");
  const links = isPT ? linksPT : linksEN;
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 bg-white/80 dark:bg-neutral-900/80 border-b border-blue-100 dark:border-blue-900 backdrop-blur-md shadow-sm">
      <div className="max-w-5xl mx-auto flex items-center px-4 h-16">
        <Link
          href={isPT ? "/pt" : "/"}
          className="font-bold text-lg bg-gradient-to-r from-blue-700 via-cyan-500 to-blue-400 bg-clip-text text-transparent drop-shadow"
        >
          Maycon Dev
        </Link>
        {/* Desktop Nav */}
        <nav className="hidden md:flex ml-auto gap-4">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`px-3 py-1 rounded-lg font-medium transition 
                ${
                  pathname === link.href
                    ? "bg-gradient-to-r from-blue-600 to-cyan-400 text-white shadow"
                    : "hover:bg-blue-50 dark:hover:bg-blue-900/50 text-blue-700 dark:text-blue-200"
                }`}
            >
              {link.label}
            </Link>
          ))}
          {!isPT && (
            <Link
              href="/pt"
              className="ml-2 px-3 py-1 rounded-lg font-medium text-blue-700 hover:bg-blue-50 transition"
            >
              PT
            </Link>
          )}
          {isPT && (
            <Link
              href="/"
              className="ml-2 px-3 py-1 rounded-lg font-medium text-blue-700 hover:bg-blue-50 transition"
            >
              EN
            </Link>
          )}
        </nav>
        {/* Mobile Menu Button */}
        <button
          className="md:hidden ml-auto p-2 rounded-lg text-blue-700 hover:bg-blue-50 dark:hover:bg-blue-900/50"
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
        >
          {open ? <FiX size={28} /> : <FiMenu size={28} />}
        </button>
        {/* Mobile Nav */}
        {open && (
          <div className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden flex flex-col">
            <nav className="bg-white dark:bg-neutral-900 border-b border-blue-100 dark:border-blue-900 p-6 rounded-b-2xl flex flex-col gap-3 shadow-lg relative">
              <button
                onClick={() => setOpen(false)}
                aria-label="Fechar menu"
                className="absolute top-3 right-3 text-blue-700 dark:text-blue-100 hover:bg-blue-50 dark:hover:bg-blue-900/40 p-2 rounded transition md:hidden"
              >
                <FiX size={28} />
              </button>
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3 py-2 rounded-lg font-medium transition w-fit
            ${
              pathname === link.href
                ? "bg-gradient-to-r from-blue-600 to-cyan-400 text-white shadow"
                : "hover:bg-blue-50 dark:hover:bg-blue-900/50 text-blue-700 dark:text-blue-200"
            }`}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="flex gap-2 mt-3">
                {!isPT && (
                  <Link
                    href="/pt"
                    className="px-3 py-1 rounded-lg font-medium text-blue-700 hover:bg-blue-50 transition"
                    onClick={() => setOpen(false)}
                  >
                    PT
                  </Link>
                )}
                {isPT && (
                  <Link
                    href="/"
                    className="px-3 py-1 rounded-lg font-medium text-blue-700 hover:bg-blue-50 transition"
                    onClick={() => setOpen(false)}
                  >
                    EN
                  </Link>
                )}
              </div>
            </nav>
            {/* O clique fora do menu fecha o menu também */}
            <button
              className="flex-1"
              onClick={() => setOpen(false)}
              aria-label="Fechar menu"
            ></button>
          </div>
        )}
      </div>
    </header>
  );
}
