import Link from "next/link";

export default function TitleBar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/80 border-b border-border-purple">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gatopera-purple rounded-lg flex items-center justify-center">
            <span className="text-xl font-black text-white">G</span>
          </div>
          <span className="text-xl font-bold text-white">Gatopera</span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-gray-300 hover:text-gatopera-purple transition-colors text-sm font-medium">
            Home
          </Link>
          <Link href="https://github.com/26140070-cpu/Gatopera-Client" className="text-gray-300 hover:text-gatopera-purple transition-colors text-sm font-medium">
            GitHub
          </Link>
          <Link 
            href="https://github.com/26140070-cpu/Gatopera-Client" 
            className="bg-gatopera-purple hover:bg-gatopera-purple-dark text-white px-5 py-2.5 rounded-lg text-sm font-semibold transition-colors"
          >
            Download
          </Link>
        </div>
      </div>
    </nav>
  );
}