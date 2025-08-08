'use client'
import Header from './components/Header'
import Footer from './components/Footer'
import NeuralNetworkBg from './components/NeuralNetworkBg'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { 
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiTypescript,
  SiTailwindcss,
  SiGoogle
} from "react-icons/si"
import { MdAccessibility } from "react-icons/md"

// Não exporte metadata aqui! Use page.metadata.js ao lado.

const skillData = [
  { name: 'React', icon: <SiReact className="text-cyan-400" size={20} /> },
  { name: 'Next.js', icon: <SiNextdotjs className="text-gray-900 dark:text-gray-100" size={20} /> },
  { name: 'Node.js', icon: <SiNodedotjs className="text-green-600" size={20} /> },
  { name: 'TypeScript', icon: <SiTypescript className="text-blue-500" size={20} /> },
  { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-sky-400" size={20} /> },
  { name: 'SEO', icon: <SiGoogle className="text-yellow-500" size={20} /> },
  { name: 'Accessibility', icon: <MdAccessibility className="text-purple-500" size={20} /> }
]

export default function Home() {
  return (
    <div className="relative flex flex-col min-h-screen">
      <NeuralNetworkBg />
      <Header />
      <main className="flex-1 flex flex-col items-center justify-center px-2">
        <section className="w-full max-w-3xl text-center mt-6 md:mt-10 mb-8 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: -28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, type: 'spring' }}
            className="flex justify-center mb-4"
          >
            <span className="inline-block px-4 py-1 rounded-full bg-gradient-to-r from-blue-600 to-cyan-400 text-white font-semibold text-xs shadow-md animate-pulse">
              Top React & Next.js Developer
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.32, type: 'spring' }}
            className="text-3xl sm:text-4xl md:text-6xl font-extrabold mb-4 tracking-tight bg-gradient-to-r from-blue-700 via-cyan-500 to-purple-600 bg-clip-text text-transparent drop-shadow-[0_4px_24px_rgba(0,126,255,0.4)]"
          >
            Hi, I&apos;m Maycon
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.44, type: 'spring' }}
            className="text-lg sm:text-xl md:text-2xl text-gray-700 dark:text-gray-300 mt-4 mb-8 font-medium"
          >
            I create <span className="font-bold text-blue-600 dark:text-blue-400">exceptional</span> digital experiences<br />
            using <span className="font-semibold">React</span>, <span className="font-semibold">Next.js</span> & <span className="font-semibold">Node.js</span>
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.56, type: 'spring' }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-10"
          >
            <Link
              href="/projects"
              className="bg-gradient-to-r from-blue-600 to-cyan-400 text-white py-3 px-8 rounded-xl font-bold shadow-lg hover:scale-105 hover:shadow-xl transition"
            >
              See My Projects
            </Link>
            <Link
              href="/contact"
              className="bg-white border border-blue-500 text-blue-700 py-3 px-8 rounded-xl font-bold shadow-md hover:bg-blue-50 transition"
            >
              Contact Me
            </Link>
          </motion.div>
          <motion.span
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.68, type: 'spring' }}
            className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-green-100 text-green-700 font-semibold text-xs shadow animate-pulse"
          >
            <span className="h-2 w-2 rounded-full bg-green-500 animate-ping inline-block"></span>
            Available for new projects
          </motion.span>
        </section>

        {/* Skills pills como texto + ícone */}
        <motion.section
          className="flex flex-wrap justify-center gap-3 md:gap-6 mb-10"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.08, delayChildren: 0.85 } }
          }}
        >
          {skillData.map(skill => (
            <SkillPill key={skill.name} name={skill.name} icon={skill.icon} />
          ))}
        </motion.section>
      </main>
      <Footer />
    </div>
  )
}

function SkillPill({ name, icon }) {
  return (
    <motion.span
      variants={{
        hidden: { opacity: 0, y: 18, scale: 0.98 },
        visible: { opacity: 1, y: 0, scale: 1, transition: { type: 'spring', stiffness: 120 } }
      }}
      className="
        flex items-center gap-2
        px-3 py-1.5 md:px-4 md:py-2
        rounded-xl
        bg-white/70 dark:bg-white/10
        text-gray-800 dark:text-gray-100
        text-sm font-medium
        shadow
        border border-blue-100 dark:border-blue-900
        transition
        select-none
        mb-2
      "
      style={{
        letterSpacing: '0.03em'
      }}
    >
      {icon}
      {name}
    </motion.span>
  )
}
