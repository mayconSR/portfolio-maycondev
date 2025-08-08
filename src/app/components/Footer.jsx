import Link from 'next/link'
import { FiGithub, FiLinkedin } from 'react-icons/fi'

export default function Footer() {
  return (
    <footer className="w-full border-t border-blue-100/60 dark:border-slate-800/60 bg-transparent py-3 text-xs sm:text-sm">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center px-4 gap-2 md:gap-0">
        <div className="flex items-center gap-2 text-slate-700 dark:text-slate-200">
          <span>© {new Date().getFullYear()} Maycon Rodrigues.</span>
          <span className="hidden sm:inline">Todos os direitos reservados.</span>
        </div>

        <div className="flex items-center gap-3 text-slate-700 dark:text-slate-200">
          <span className="text-slate-300 dark:text-slate-600">|</span>
          <span>
            Built with{' '}
            <Link href="https://nextjs.org" target="_blank" className="underline font-semibold text-blue-700 dark:text-cyan-400">
              Next.js
            </Link>{' '}
            &amp;{' '}
            <Link href="https://tailwindcss.com" target="_blank" className="underline font-semibold text-cyan-600 dark:text-cyan-300">
              TailwindCSS
            </Link>
          </span>
          <Link href="https://github.com/seu-usuario" target="_blank" aria-label="GitHub" className="ml-3 hover:text-blue-700 dark:hover:text-cyan-400 transition">
            <FiGithub size={18} />
          </Link>
          <Link href="https://linkedin.com/in/seu-usuario" target="_blank" aria-label="LinkedIn" className="hover:text-blue-700 dark:hover:text-cyan-400 transition">
            <FiLinkedin size={18} />
          </Link>
        </div>
      </div>
    </footer>
  )
}
