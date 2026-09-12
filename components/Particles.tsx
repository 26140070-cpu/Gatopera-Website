"use client";
export default function Particles({ count = 40 }: { count?: number }) { return <div className="noise" style={{ opacity: Math.min(count / 400, 0.14) }} aria-hidden="true" />; }
