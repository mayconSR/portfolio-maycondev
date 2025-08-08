export const metadata = {
  title: "Contact - Maycon Rodrigues",
  description: "Get in touch with Maycon Rodrigues, Front-End Developer.",
};

import Header from '../components/Header';
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';

export default function Contact() {
  return (
    <>
      <Header />
      <main className="container mx-auto max-w-2xl py-16 flex-1">
        <h1 className="text-3xl font-bold mb-6 text-center">Contact Me</h1>
        <p className="mb-8 text-gray-700 dark:text-gray-300 text-center">
          Want to work together or have a question? Send me a message!
        </p>
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
