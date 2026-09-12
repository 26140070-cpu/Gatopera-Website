interface FeaturePanelProps {
  title: string;
  description: string;
  tags: string[];
  link?: string;
}

export default function FeaturePanel({ title, description, tags, link }: FeaturePanelProps) {
  return (
    <div className="group glass-panel rounded-2xl p-6 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(139,92,246,0.15)] hover:border-gatopera-purple/50 flex flex-col h-full">
      <div className="flex-1">
        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-gatopera-purple transition-colors">{title}</h3>
        <p className="text-sm text-gray-400 leading-relaxed mb-6">{description}</p>
      </div>
      <div className="flex flex-wrap gap-2 mt-auto">
        {tags.map((tag) => (
          <span key={tag} className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-xs font-medium text-gray-300">
            {tag}
          </span>
        ))}
      </div>
      {link && (
        <a href={link} target="_blank" rel="noopener noreferrer" className="mt-5 text-sm font-bold text-accent-blue hover:text-gatopera-purple transition-colors flex items-center gap-1">
          Ver código &rarr;
        </a>
      )}
    </div>
  );
}