interface FeaturePanelProps {
  title: string;
  description: string;
}

export default function FeaturePanel({ title, description }: FeaturePanelProps) {
  return (
    <div className="bg-background-purple rounded-xl p-6 border border-border-purple hover:border-gatopera-purple transition-all duration-300 hover:-translate-y-1">
      <h3 className="text-lg font-bold text-white mb-2">{title}</h3>
      <p className="text-sm text-gray-400 leading-relaxed">{description}</p>
    </div>
  );
}