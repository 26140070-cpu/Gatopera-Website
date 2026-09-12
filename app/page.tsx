import Link from "next/link";
import TitleBar from "@/components/TitleBar";
import FeaturePanel from "@/components/FeaturePanel";
import Particles from "@/components/Particles";

const skills = ["Java", "Fabric Loader", "Mixins", "Bytecode", "Reverse Engineering", "Deobfuscation", "Gradle", "Python", "PyTorch", "JavaScript", "React", "SQLite"];
const mainProjects = [
  { index: "01", title: "Gatopera Client", version: "v1.4.3 · Minecraft 1.20.4", description: "Cliente Fabric con cerca de 90 módulos organizados en siete categorías. Integra Baritone para navegación autónoma y reúne sistemas de movimiento, combate, render y explotación en una sola arquitectura.", tags: ["Java", "Fabric API", "Baritone", "GPL-3.0"], link: "https://github.com/26140070-cpu/Gatopera-Client", stat: "~90 módulos" },
  { index: "02", title: "Helium Addon", version: "v1.0.2 · Minecraft 1.21.11", description: "Addon avanzado para Meteor con planner y executor de combate independientes, más de 30 módulos utilitarios, Mixins profundos y un sistema completo de temas visuales.", tags: ["Java", "Meteor API", "Mixins", "CC0-1.0"], link: "https://github.com/26140070-cpu", stat: "30+ módulos" },
];
const otherProjects = [
  { index: "03", title: "Ingeniería inversa", description: "Análisis, mapeo y desofuscación de clientes y addons mediante inspección estructural de JARs y bytecode Java.", tags: ["RE", "Bytecode", "Security"] },
  { index: "04", title: "Motor de ajedrez con IA", description: "Bots de ajedrez que conectan Stockfish con redes neuronales construidas en PyTorch y aprendizaje por refuerzo.", tags: ["Python", "PyTorch", "Stockfish"] },
  { index: "05", title: "Motor gráfico web 3D", description: "Juego de navegador construido con Three.js, físicas propias y cámaras fluidas en primera y tercera persona.", tags: ["Three.js", "JavaScript", "WebGL"] },
  { index: "06", title: "Solar Network", description: "Arquitectura de servidor con tienda Tebex, menús, comandos y permisos integrados en una experiencia consistente.", tags: ["Java", "YAML", "Server Admin"] },
  { index: "07", title: "E-commerce & Discord", description: "Bot automatizado con dashboard web e inventario monitorizado en tiempo real mediante SQLite.", tags: ["Python", "Discord.py", "SQLite"] },
  { index: "08", title: "Math scripting", description: "Herramientas para verificar reducciones algebraicas y automatizar cálculos geométricos reproducibles.", tags: ["Python", "Algorithms", "Math"] },
];

export default function Home() {
  return <main>
    <Particles count={42} /><TitleBar />
    <section className="hero shell" aria-labelledby="hero-title">
      <div className="hero-copy">
        <p className="eyebrow"><span>PORTFOLIO / 2026</span> Java · RE · sistemas</p>
        <h1 id="hero-title">Código cerca<br />del <em>metal.</em></h1>
        <p className="hero-lede">Diseño software que inspecciona, modifica y construye sistemas complejos: desde bytecode de Minecraft hasta motores de IA.</p>
        <div className="hero-actions"><Link className="button button-primary" href="#work">Ver proyectos <span>↓</span></Link><Link className="button button-ghost" href="https://github.com/26140070-cpu" target="_blank" rel="noreferrer">GitHub <span>↗</span></Link></div>
      </div>
      <div className="hero-console" aria-label="Resumen técnico">
        <div className="console-bar"><span /><span /><span /><code>profile.sys</code></div>
        <div className="console-body"><p><b>$</b> whoami</p><p className="console-output">26140070-cpu</p><p><b>$</b> cat focus.txt</p><p className="console-output">reverse_engineering<br />minecraft_clients<br />intelligent_systems</p><p><b>$</b> status</p><p className="console-ready"><i /> AVAILABLE_TO_BUILD</p></div>
        <span className="console-mark">G/</span>
      </div>
      <p className="hero-side">SCROLL TO INSPECT · SCROLL TO INSPECT ·</p>
    </section>
    <section className="ticker" aria-label="Tecnologías"><div>{[...skills, ...skills].map((skill, index) => <span key={`${skill}-${index}`}>{skill}<i>✳</i></span>)}</div></section>
    <section id="work" className="section shell">
      <header className="section-heading"><p className="eyebrow">01 / TRABAJO DESTACADO</p><h2>Sistemas que<br /><em>hacen cosas.</em></h2><p>Proyectos vivos, construidos para resolver problemas reales y explorar los límites del software.</p></header>
      <div className="featured-grid">{mainProjects.map((project) => <FeaturePanel key={project.title} {...project} featured />)}</div>
    </section>
    <section id="archive" className="section archive shell">
      <header className="section-heading compact"><p className="eyebrow">02 / ARCHIVO</p><h2>Más experimentos.</h2></header>
      <div className="archive-grid">{otherProjects.map((project) => <FeaturePanel key={project.title} {...project} />)}</div>
    </section>
    <section id="stack" className="stack-section shell"><div><p className="eyebrow">03 / HERRAMIENTAS</p><h2>El stack cambia.<br /><em>La curiosidad no.</em></h2></div><ul>{skills.map((skill, index) => <li key={skill}><span>{String(index + 1).padStart(2, "0")}</span>{skill}</li>)}</ul></section>
    <footer className="footer shell"><div><span className="footer-mark">G/</span><p>¿Tienes algo difícil<br />que construir?</p></div><Link href="https://github.com/26140070-cpu" target="_blank" rel="noreferrer">Hablemos en GitHub <span>↗</span></Link><small>© {new Date().getFullYear()} 26140070-cpu</small></footer>
  </main>;
}
