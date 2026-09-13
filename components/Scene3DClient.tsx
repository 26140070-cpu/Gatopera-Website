"use client";

import dynamic from "next/dynamic";

const Scene3D = dynamic(() => import("./Scene3D"), { ssr: false, loading: () => null });

export default function Scene3DClient({ className }: { className?: string }) {
  return (
    <div className={className} aria-hidden="true">
      <Scene3D />
    </div>
  );
}
