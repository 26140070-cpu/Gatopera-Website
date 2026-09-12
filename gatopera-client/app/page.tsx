import Link from "next/link";
import TitleBar from "@/components/TitleBar";
import FeaturePanel from "@/components/FeaturePanel";
import Particles from "@/components/Particles";

export default function Home() {
  const skills = [
    "Java", "Reverse Engineering", "Deobfuscation", "Fabric Loader", 
    "Mixins", "Bytecode Analysis", "Gradle", "Python", 
    "PyTorch", "JavaScript", "React", "SQLite"
  ];

  const mainProjects = [
    {
      title: "Gatopera Client (v1.4.3)",
      description: "Cliente completo para Minecraft 1.20.4 (Fabric 0.15.7+). Arquitectura masiva con ~90 módulos estructurados en 7 categorías (Combat, Player, Movement, Render, Exploit, Misc, Client). Destaca por su integración nativa con Baritone API 1.2 para auto-navegación y bypasses complejos como HitboxDesync, PacketFly y TPAura.",
      tags: ["Java", "Fabric API", "Baritone API", "GPL-3.0", "cc.gatopera.dev"],
      link: "https://github.com/26140070-cpu/Gatopera-Client"
    },
    {
      title: "Helium Addon (v1.0.2)",
      description: "Addon avanzado para Meteor Client (MC 1.21.11). Implementa lógica de combate separada con un planner/executor propio (AutoCev, MaceTpAura). Cuenta con más de 30 módulos utilitarios, manipulación profunda de Mixins (pantallas de título, red, HUD) y un robusto sistema de temas visuales (JJSTheme, LambdaTheme).",
      tags: ["Java", "Meteor API", "Mixins", "CC0-1.0", "com.helium"],
      link: "https://github.com/26140070-cpu"
    }
  ];

  const secondaryProjects = [
    {
      title: "Ingeniería Inversa & Desofuscación",
      description: "Análisis profundo (RE), crackeo y desofuscación de más de 4 clientes y addons populares de Minecraft. Experiencia en bypass de protecciones, mapeo de código y análisis estructural de archivos JAR mediante herramientas avanzadas de línea de comandos.",
      tags: ["Reverse Engineering", "Java Bytecode", "Deobfuscation", "Security"],
    },
    {
      title: "Motor de Ajedrez con IA",
      description: "Desarrollo de bots de ajedrez integrando Stockfish con redes neuronales construidas en PyTorch, aplicando conceptos de aprendizaje por refuerzo.",
      tags: ["Python", "PyTorch", "Stockfish", "AI"],
    },
    {
      title: "Motor Gráfico Web 3D",
      description: "Juego de navegador construido desde cero utilizando Three.js, implementando lógicas de físicas y perspectivas fluidas en primera y tercera persona.",
      tags: ["JavaScript", "Three.js", "HTML/CSS"],
    },
    {
      title: "Arquitectura Solar Network",
      description: "Administración y configuración integral de un servidor estructurado, incluyendo integración con tiendas web Tebex, DeluxeMenus, MyCommand y LuckPerms.",
      tags: ["Java", "YAML", "Tebex", "Server Admin"],
    },
    {
      title: "E-commerce & Discord Dashboard",
      description: "Bot automatizado con panel de control web e integración de base de datos SQLite para la gestión y monitoreo de inventarios en tiempo real.",
      tags: ["Python", "Discord.py", "SQLite", "Web Panel"],
    },
    {
      title: "Math & Geometry Scripting",
      description: "Conjunto de herramientas y scripts automatizados en Python diseñados para verificar reducciones de términos algebraicos y resolver cálculos geométricos.",
      tags: ["Python", "Algorithms", "Math Automation"],
    }
  ];

  return (
    <main className="relative min-h-screen overflow-hidden selection:bg-gatopera-purple/30 selection:text-white">
      {/* Background Effects */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-gatopera-purple/10 blur-[120px] animate-blob" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-accent-blue/10 blur-[120px] animate-blob animation-delay-2000" />
      <Particles count={70} />

      <TitleBar />

      <div className="relative z-10 px-6 pt-32 pb-20 mx-auto max-w-6xl">
        {/* Hero Section */}
        <section className="min-h-[70vh] flex flex-col justify-center items-start">
          <div className="inline-block mb-4 px-4 py-1.5 rounded-full border border-white/10 glass-panel">
            <span className="text-sm font-medium bg-clip-text text-transparent bg-gradient-to-r from-gatopera-purple to-accent-blue font-mono">
              cc.gatopera.dev | com.helium | RE
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 font-[family-name:var(--font-space)]">
            Ingeniería Inversa y <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-500 animate-text-shimmer bg-[length:200%_auto]">
              Sistemas Complejos.
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mb-10 leading-relaxed">
            Especializado en el desarrollo de clientes, manipulación de bytecode (Mixins), desofuscación de software y motores de inteligencia artificial.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link 
              href="#main-projects"
              className="px-8 py-4 rounded-xl bg-white text-black font-bold hover:bg-gray-200 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.3)]"
            >
              Explorar Clientes
            </Link>
            <Link 
              href="https://github.com/26140070-cpu"
              target="_blank"
              className="px-8 py-4 rounded-xl glass-panel text-white font-bold hover:bg-white/10 transition-colors flex items-center gap-2"
            >
              GitHub <span className="text-xl">↗</span>
            </Link>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20 border-t border-white/5">
          <h2 className="text-3xl font-bold mb-8 font-[family-name:var(--font-space)]">Stack & Tecnologías</h2>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill) => (
              <div key={skill} className="glass-panel px-6 py-3 rounded-xl border border-white/5 hover:border-gatopera-purple/40 hover:-translate-y-1 transition-all cursor-default">
                <span className="font-medium text-gray-200">{skill}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Main Projects Section (Gatopera & Helium) */}
        <section id="main-projects" className="py-20 border-t border-white/5">
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-4 font-[family-name:var(--font-space)]">Desarrollos Principales</h2>
            <p className="text-gray-400 max-w-xl">
              Proyectos de ingeniería a gran escala en el ecosistema de Minecraft, enfocados en inyección de código, optimización de renderizado y lógica de combate.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {mainProjects.map((project, index) => (
              <div key={index} className="transform hover:scale-[1.02] transition-transform duration-300">
                <FeaturePanel 
                  title={project.title}
                  description={project.description}
                  tags={project.tags}
                  link={project.link}
                />
              </div>
            ))}
          </div>
        </section>

        {/* Secondary Projects Section */}
        <section id="projects" className="py-20 border-t border-white/5">
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-4 font-[family-name:var(--font-space)]">Análisis, IA & Desarrollo Web</h2>
            <p className="text-gray-400 max-w-xl">
              Exploración de vulnerabilidades, crackeo, automatización, bases de datos y desarrollo gráfico 3D.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {secondaryProjects.map((project, index) => (
              <FeaturePanel 
                key={index}
                title={project.title}
                description={project.description}
                tags={project.tags}
              />
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
          <p>© {new Date().getFullYear()} @26140070-cpu. Todos los derechos reservados.</p>
          <div className="flex gap-4">
            <Link href="https://github.com/26140070-cpu" className="hover:text-white transition-colors">GitHub</Link>
          </div>
        </footer>
      </div>
    </main>
  );
}