'use client'
import Header from '../components/Header'
import Footer from '../components/Footer'
import NeuralNetworkBg from '../components/NeuralNetworkBg'
import { motion } from 'framer-motion'
import { SiReact, SiNextdotjs, SiNodedotjs, SiTypescript, SiTailwindcss } from "react-icons/si"
import Link from 'next/link'

const projects = [
  {
    title: "Modern Portfolio",
    description: "A beautiful, animated portfolio with dark/light themes, perfect Lighthouse score and advanced SEO.",
    stack: [<SiReact key="react" className="text-cyan-400" size={20} />, <SiNextdotjs key="next" className="text-gray-900 dark:text-gray-100" size={20} />, <SiTailwindcss key="tw" className="text-sky-400" size={20} />],
    link: "https://maycondev.com.br",
    github: "https://github.com/seu-usuario/portfolio"
  },
  {
    title: "Business Landing Page",
    description: "Responsive landing page for service companies with fast load, SEO and conversion-focused design.",
    stack: [<SiNextdotjs key="next" className="text-gray-900 dark:text-gray-100" size={20} />, <SiTailwindcss key="tw" className="text-sky-400" size={20} />],
    link: "https://bpainting.com",
    github: ""
  },
  {
    title: "API Restful Example",
    description: "Node.js REST API with TypeScript and full test coverage, ready for production.",
    stack: [<SiNodedotjs key="node" className="text-green-600" size={20} />, <SiTypescript key="ts" className="text-blue-500" size={20} />],
    link: "",
    github: "https://github.com/seu-usuario/api-rest-example"
  }
]

export default function ProjectsPage() {
  return (
    <div className="relative flex flex-col min-h-screen">
      <NeuralNetworkBg />
      <Header />
      <main className="flex-1 flex flex-col items-center justify-center px-2">
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, type: 'spring' }}
          className="w-full max-w-4xl mx-auto mt-8 md:mt-14 mb-8 md:mb-14 text-center"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-blue-700 via-cyan-500 to-purple-600 bg-clip-text text-transparent">
            Projects
          </h1>
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-10">
            Here are some of the projects that I built using modern technologies and best practices.
          </p>
          <div className="grid gap-8 md:grid-cols-2">
            {projects.map((proj, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15, type: 'spring' }}
                className="rounded-2xl bg-white/80 dark:bg-neutral-900/70 border border-blue-100 dark:border-blue-900 shadow-lg p-6 flex flex-col items-start hover:scale-[1.03] hover:shadow-xl transition"
              >
                <div className="flex gap-3 mb-2">{proj.stack}</div>
                <h2 className="text-xl font-bold mb-1 text-blue-700 dark:text-cyan-400">{proj.title}</h2>
                <p className="text-gray-700 dark:text-gray-300 mb-4">{proj.description}</p>
                <div className="flex gap-3 mt-auto">
                  {proj.link && <Link href={proj.link} target="_blank" className="text-white bg-gradient-to-r from-blue-600 to-cyan-400 px-4 py-2 rounded-lg font-semibold shadow hover:scale-105 transition">Live</Link>}
                  {proj.github && <Link href={proj.github} target="_blank" className="text-blue-700 dark:text-blue-300 underline font-medium">GitHub</Link>}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </main>
      <Footer />
    </div>
  )
}
