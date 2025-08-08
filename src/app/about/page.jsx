export const metadata = {
  title: "About - Maycon Rodrigues",
  description: "Learn more about Maycon Rodrigues, a Front-End Developer specialized in React and Next.js.",
};

import Header from '../components/Header';
import Footer from '../components/Footer';

export default function About() {
  return (
    <>
      <Header />
      <main className="container mx-auto max-w-3xl py-16 flex-1">
        <h1 className="text-3xl font-bold mb-4">About Me</h1>
        <p className="mb-4 text-gray-700 dark:text-gray-300">
          I'm a passionate front-end developer focused on creating interactive, accessible, and high-performance web applications.
        </p>
        <ul className="mb-6 space-y-1">
          <li>• 💻 5+ years working with React and JavaScript frameworks</li>
          <li>• 🚀 Strong experience with Next.js, Node.js, TailwindCSS</li>
          <li>• 🛠️ Skilled in building scalable and maintainable codebases</li>
          <li>• 🤝 Team player, always up for learning and sharing knowledge</li>
        </ul>
        <p className="text-gray-700 dark:text-gray-300">
          When I'm not coding, you can find me gaming, reading tech blogs, or learning new things!
        </p>
      </main>
      <Footer />
    </>
  );
}
