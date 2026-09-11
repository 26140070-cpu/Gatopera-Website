import Link from "next/link";
import TitleBar from "@/components/TitleBar";
import FeaturePanel from "@/components/FeaturePanel";
import Particles from "@/components/Particles";

export default function Home() {
  const features = ["Powerful", "Customizable", "Advanced", "Efficient", "Enhanced", "Optimized"];
  const hacks = ["KillAura", "Speed", "Flight", "ESP", "NoFall", "Velocity", "AutoArmor", "ChestESP"];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Gatopera Client",
    description: "Free, open-source utility client for Minecraft with advanced features and full customization.",
    url: "https://github.com/26140070-cpu/Gatopera-Client",
    applicationCategory: "GameApplication",
    operatingSystem: "Minecraft Java Edition"
  };

  return (
    <main className="bg-landing bg-cover bg-fixed m-0 py-0 min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Particles count={80} />

      <div className="z-10 relative">
        <TitleBar />

        <div className="mx-auto my-20 sm:my-32 md:my-44 w-11/12 sm:w-4/5 md:w-3/5 px-4 text-center">
          <h1 className="sr-only">Gatopera Client - Minecraft Utility Mod</h1>
          <div className="mx-auto my-8 w-48 h-48 bg-gatopera-purple rounded-2xl flex items-center justify-center logo-bounce logo-glow">
            <span className="text-6xl font-black text-white">G</span>
          </div>
          <p className="text-center text-2xl sm:text-3xl text-gray-300">The utility client that is</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gatopera-purple to-purple-400 my-4">
            {features.join(" & ")}
          </h2>
          <p className="text-center text-lg sm:text-xl md:text-2xl text-gray-400 m-auto max-w-2xl">
            Gain the upper edge with Gatopera, the no-BS Minecraft client that does not compromise. 
            Providing powerful features while maintaining smooth performance.
          </p>

          <div className="flex gap-3 sm:gap-4 mt-12 sm:mt-16 md:mt-20 mb-5 justify-center flex-wrap">
            <div className="bg-background-purple min-w-[140px] sm:min-w-[180px] rounded-lg py-4 sm:py-6 px-6 sm:px-10 border border-border-purple w-auto text-center">
              <p className="block text-3xl sm:text-4xl font-bold text-gatopera-purple">1.0.0</p>
              <p className="text-sm sm:text-base text-gray-400">Latest Version</p>
            </div>
            <div className="bg-background-purple min-w-[140px] sm:min-w-[180px] rounded-lg py-4 sm:py-6 px-6 sm:px-10 border border-border-purple w-auto text-center">
              <p className="block text-3xl sm:text-4xl font-bold text-gatopera-purple">{hacks.length}+</p>
              <p className="text-sm sm:text-base text-gray-400">Available Modules</p>
            </div>
          </div>

          <div className="shadow-lg cursor-pointer rounded-xl bg-gradient-to-r from-gatopera-purple to-gatopera-purple-dark p-4 sm:p-5 m-auto max-w-[350px] w-full text-lg sm:text-xl text-center font-bold text-white hover:scale-105 transition-transform">
            <Link href="https://github.com/26140070-cpu/Gatopera-Client">
              Download Gatopera Client
            </Link>
          </div>
        </div>

        <div className="bg-background text-center py-8 sm:py-10">
          <div className="mx-auto w-11/12 max-w-[1200px] px-4">
            <h2 className="mb-1 text-3xl sm:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-gatopera-purple to-purple-400 font-bold">
              Key Features
            </h2>
            <p className="text-sm sm:text-base mb-8 text-gray-400">
              Discover what makes Gatopera Client the perfect choice
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
              <FeaturePanel title="Extensive Module Collection" description="Access over 50 specialized modifications designed to enhance your gameplay." />
              <FeaturePanel title="Advanced Command System" description="Take full control with our intuitive command system. Customize settings and manage your experience." />
              <FeaturePanel title="Customizable UI" description="Make Gatopera truly yours with extensive UI customization options. Adjust layouts and colors." />
              <FeaturePanel title="Performance Optimization" description="Enjoy seamless, lagless gameplay with our highly optimized codebase." />
            </div>

            <h2 className="mb-1 text-3xl sm:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-gatopera-purple to-purple-400 font-bold">
              Available Modules
            </h2>
            <p className="text-sm sm:text-base mb-8 text-gray-400">
              Browse our comprehensive collection of hacks.
            </p>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-3 mb-16">
              {hacks.map((hack) => (
                <Link 
                  key={hack} 
                  href="https://github.com/26140070-cpu/Gatopera-Client"
                  className="px-3 py-2 rounded-xl border border-border-purple text-sm text-center bg-gradient-to-br from-background-purple to-gatopera-purple/20 text-gray-300 transition-transform hover:-translate-y-1 hover:scale-105 hover:text-white"
                >
                  {hack}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-4 text-center py-8 sm:py-10">
          <div className="mx-auto w-11/12 sm:w-4/5 md:w-3/4 px-4">
            <div className="bg-black/30 rounded-xl p-6 sm:p-8 mb-6 border border-border-purple">
              <h2 className="m-auto text-center text-3xl sm:text-4xl font-bold text-white">Open Source</h2>
              <p className="text-sm sm:text-base mt-4 text-gray-400">
                Gatopera Client is fully open source and community-driven. Anyone can contribute, review the code, or fork the project on{" "}
                <a href="https://github.com/26140070-cpu/Gatopera-Client" className="text-gatopera-purple hover:underline">
                  GitHub
                </a>
                . A huge thank you to everyone who has helped make Gatopera better.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-background text-center py-5 px-4 border-t border-border-purple">
          <p className="text-sm sm:text-base text-gray-500">
            Website for Gatopera Client. Open Source.
          </p>
        </div>
      </div>
    </main>
  );
}