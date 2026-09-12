import Link from "next/link";

export default function TitleBar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 glass-panel border-b-0 border-white/5">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-gatopera-purple to-accent-blue flex items-center justify-center shadow-lg shadow-gatopera-purple/20 group-hover:shadow-gatopera-purple/40 transition-all">
            <span className="text-xl font-black text-white">{">_"}</span>
          </div>
          <span className="text-xl font-bold tracking-tight text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-gatopera-purple group-hover:to-accent-blue transition-all">
            cpu.dev
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <a href="#skills" className="text-gray-400 hover:text-white transition-colors text-sm font-medium">Skills</a>
          <a href="#projects" className="text-gray-400 hover:text-white transition-colors text-sm font-medium">Projects</a>
          <Link 
            href="https://github.com/26140070-cpu" 
            target="_blank"
            className="relative inline-flex h-10 overflow-hidden rounded-lg p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
          >
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-background px-6 py-1 text-sm font-medium text-white backdrop-blur-3xl transition-all hover:bg-background/80">
              GitHub Profile
            </span>
          </Link>
        </div>
      </div>
    </nav>
  );
}