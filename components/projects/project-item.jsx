function ProjectItem({ name, lib, description, href }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col p-5 rounded-lg bg-surface-200 shadow-md transition-transform duration-300 hover:scale-[1.03] hover:shadow-lg"
    >
      <div className="text-surface-600 mb-2 text-xs font-medium tracking-widest uppercase">
        {lib}
      </div>
      <h1 className="mb-2 text-lg font-semibold">{name}</h1>
      <p className="text-surface-600 text-sm leading-relaxed">{description}</p>
    </a>
  );
}

export default ProjectItem;
