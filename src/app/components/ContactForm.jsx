'use client'
import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("Sending...");
    setTimeout(() => setStatus("Message sent! (demo only)"), 1000);
  };

  return (
    <form className="space-y-4 max-w-lg mx-auto" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Your Name"
        className="w-full border rounded p-2 dark:bg-[#10172a] dark:border-[#1e293b] dark:text-gray-100"
        required
      />
      <input
        type="email"
        placeholder="Your Email"
        className="w-full border rounded p-2 dark:bg-[#10172a] dark:border-[#1e293b] dark:text-gray-100"
        required
      />
      <textarea
        placeholder="Your Message"
        className="w-full border rounded p-2 dark:bg-[#10172a] dark:border-[#1e293b] dark:text-gray-100"
        rows={5}
        required
      />
      <button
        type="submit"
        className="bg-blue-600 dark:bg-blue-500 text-white py-2 px-6 rounded hover:bg-blue-700 dark:hover:bg-blue-600 transition"
      >
        Send Message
      </button>
      {status && <div className="text-green-600 dark:text-green-400">{status}</div>}
    </form>
  );
}
