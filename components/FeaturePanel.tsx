interface FeaturePanelProps { index: string; title: string; version?: string; description: string; tags: string[]; link?: string; stat?: string; featured?: boolean; }
export default function FeaturePanel({ index, title, version, description, tags, link, stat, featured }: FeaturePanelProps) {
  const content = <><div className="project-top"><span>{index}</span>{version && <code>{version}</code>}{link && <b aria-hidden="true">↗</b>}</div><div className="project-content"><h3>{title}</h3><p>{description}</p></div>{stat && <strong>{stat}</strong>}<div className="project-tags">{tags.map((tag) => <span key={tag}>{tag}</span>)}</div></>;
  return link ? <a className={`project-card${featured ? " featured" : ""}`} href={link} target="_blank" rel="noreferrer">{content}</a> : <article className="project-card">{content}</article>;
}
