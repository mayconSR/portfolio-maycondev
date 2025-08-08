'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'
import ThemeToggle from './ThemeToggle'

export default function Header() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const isPT = pathname.startsWith('/pt')

  const links = [
    { href: isPT ? '/pt' : '/', label: isPT ? 'Início' : 'Home' },
    { href: isPT ? '/pt/projects' : '/projects', label: isPT ? 'Projetos' : 'Projects' },
    { href: isPT ? '/pt/contact' : '/contact', label: isPT ? 'Contato' : 'Contact' },
  ]

  return (
    <header className="w-full border-b border-blue-100/60 dark:border-slate-800/60 bg-transparent fixed top-0 left-0 z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3 md:py-4">
        {/* Logo */}
        <Link
          href={isPT ? '/pt' : '/'}
          className="text-xl font-extrabold tracking-tight bg-gradient-to-r from-blue-600 to-cyan-400 bg-clip-text text-transparent"
        >
          Maycon Dev
        </Link>

        {/* Navegação desktop */}
        <nav className="hidden md:flex ml-auto gap-4 items-center">
          {links.map(link => (
            <Link
              key={link.href}
              href={link.href}
              className={`px-3 py-2 rounded-lg font-medium transition 
                ${pathname === link.href
                  ? 'bg-gradient-to-r from-blue-600 to-cyan-400 text-white shadow'
                  : 'text-blue-700 dark:text-blue-200 hover:bg-white/40 dark:hover:bg-white/10'
                }`}
            >
              {link.label}
            </Link>
          ))}

          {/* Idioma */}
          {!isPT ? (
            <Link href="/pt" className="ml-1 px-3 py-1 rounded-lg font-medium text-blue-700 dark:text-blue-200 hover:bg-white/40 dark:hover:bg-white/10 transition">
              PT
            </Link>
          ) : (
            <Link href="/" className="ml-1 px-3 py-1 rounded-lg font-medium text-blue-700 dark:text-blue-200 hover:bg-white/40 dark:hover:bg-white/10 transition">
              EN
            </Link>
          )}

          {/* Toggle de tema */}
          <ThemeToggle className="ml-1 border-slate-200/60 dark:border-slate-700/60 hover:bg-white/40 dark:hover:bg-white/10" />
        </nav>

        {/* Botão menu mobile */}
        <button
          onClick={() => setOpen(true)}
          aria-label="Abrir menu"
          className="md:hidden p-2 rounded-lg border border-slate-200/60 dark:border-slate-700/60 hover:bg-white/40 dark:hover:bg-white/10 transition text-blue-700 dark:text-blue-200"
        >
          <FiMenu size={22} />
        </button>
      </div>

      {/* Menu mobile (painel com fundo para leitura) */}
      {open && (
        <div className="fixed inset-0 z-40 bg-black/60 md:hidden flex flex-col">
          <nav className="bg-white dark:bg-[#0b1220] border-b border-blue-100 dark:border-slate-800 p-6 rounded-b-2xl flex flex-col gap-3 shadow-lg relative">
            {/* Fechar */}
            <button
              onClick={() => setOpen(false)}
              aria-label="Fechar menu"
              className="absolute top-3 right-3 text-blue-700 dark:text-blue-200 hover:bg-slate-100 dark:hover:bg-slate-800/60 p-2 rounded transition"
            >
              <FiX size={28} />
            </button>

            {links.map(link => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 py-2 rounded-lg font-medium transition 
                  ${pathname === link.href
                    ? 'bg-gradient-to-r from-blue-600 to-cyan-400 text-white shadow'
                    : 'text-blue-700 hover:bg-blue-50 dark:text-blue-200 dark:hover:bg-slate-800/60'
                  }`}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}

            <div className="flex items-center gap-2 mt-3">
              {!isPT ? (
                <Link href="/pt" onClick={() => setOpen(false)} className="px-3 py-1 rounded-lg font-medium text-blue-700 hover:bg-blue-50 dark:text-blue-200 dark:hover:bg-slate-800/60 transition">
                  PT
                </Link>
              ) : (
                <Link href="/" onClick={() => setOpen(false)} className="px-3 py-1 rounded-lg font-medium text-blue-700 hover:bg-blue-50 dark:text-blue-200 dark:hover:bg-slate-800/60 transition">
                  EN
                </Link>
              )}
              <ThemeToggle className="border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800/60" />
            </div>
          </nav>

          {/* Clicar fora fecha */}
          <button className="flex-1" onClick={() => setOpen(false)} aria-label="Fechar menu"></button>
        </div>
      )}
    </header>
  )
}
