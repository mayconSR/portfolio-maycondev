import Link from "next/link"
import { FiGithub, FiLinkedin } from "react-icons/fi"

export default function Footer() {
  return (
    <footer className="w-full border-t border-blue-100 dark:border-blue-900 bg-white/90 dark:bg-neutral-900/80 py-3 text-xs sm:text-sm">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center px-4 gap-2 md:gap-0">
        <div className="flex items-center gap-2">
          <span>© {new Date().getFullYear()} Maycon Rodrigues.</span>
          <span className="hidden sm:inline">Todos os direitos reservados.</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-gray-400">|</span>
          <span>
            Built with <Link href="https://nextjs.org" target="_blank" className="underline font-semibold text-blue-700">Next.js</Link> &amp; <Link href="https://tailwindcss.com" target="_blank" className="underline font-semibold text-cyan-500">TailwindCSS</Link>
          </span>
          <Link href="https://github.com/mayconsr" target="_blank" aria-label="GitHub" className="ml-3 hover:text-blue-700 transition">
            <FiGithub size={18} />
          </Link>
          <Link href="https://linkedin.com/in/seu-usuario" target="_blank" aria-label="LinkedIn" className="hover:text-blue-700 transition">
            <FiLinkedin size={18} />
          </Link>
        </div>
      </div>
    </footer>
  )
}
