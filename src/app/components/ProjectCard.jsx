export default function ProjectCard({ title, description, link, tech }) {
  return (
    <div className="rounded-2xl shadow-md border dark:border-[#1e293b] p-5 bg-white dark:bg-[#10172a] hover:shadow-xl transition">
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-700 dark:text-gray-300 mb-2">{description}</p>
      <div className="flex flex-wrap gap-2 mb-2">
        {tech?.map(t => (
          <span key={t} className="text-xs bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-200 px-2 py-0.5 rounded">{t}</span>
        ))}
      </div>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 dark:text-blue-400 hover:underline text-sm"
      >
        View Project
      </a>
    </div>
  );
}
