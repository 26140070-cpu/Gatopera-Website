"use client";

import { useMemo, useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Float } from "@react-three/drei";
import * as THREE from "three";

const ACID = "#c9ff36";

function WireframeNode({ reduceMotion }: { reduceMotion: boolean }) {
  const meshRef = useRef<THREE.Mesh>(null);
  const targetRotation = useRef({ x: 0, y: 0 });

  useFrame((state, delta) => {
    if (!meshRef.current) return;
    if (reduceMotion) return;
    targetRotation.current.x = state.pointer.y * 0.25;
    targetRotation.current.y = state.pointer.x * 0.35;
    meshRef.current.rotation.x += delta * 0.08 + (targetRotation.current.x - meshRef.current.rotation.x) * 0.02;
    meshRef.current.rotation.y += delta * 0.1 + (targetRotation.current.y - meshRef.current.rotation.y) * 0.02;
  });

  const geometry = useMemo(() => new THREE.IcosahedronGeometry(1.6, 1), []);

  return (
    <Float speed={reduceMotion ? 0 : 1.2} rotationIntensity={reduceMotion ? 0 : 0.3} floatIntensity={reduceMotion ? 0 : 0.7}>
      <mesh ref={meshRef} geometry={geometry}>
        <meshBasicMaterial color={ACID} wireframe transparent opacity={0.45} />
      </mesh>
    </Float>
  );
}

function ParticleField({ reduceMotion }: { reduceMotion: boolean }) {
  const pointsRef = useRef<THREE.Points>(null);
  const positions = useMemo(() => {
    const count = 220;
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const radius = 2.4 + Math.random() * 2.2;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);
      arr[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      arr[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      arr[i * 3 + 2] = radius * Math.cos(phi);
    }
    return arr;
  }, []);

  useFrame((_, delta) => {
    if (!pointsRef.current || reduceMotion) return;
    pointsRef.current.rotation.y += delta * 0.02;
  });

  return (
    <Points ref={pointsRef} positions={positions} stride={3}>
      <PointMaterial color={ACID} size={0.028} sizeAttenuation transparent depthWrite={false} opacity={0.35} />
    </Points>
  );
}

export default function Scene3D() {
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduceMotion(query.matches);
    const listener = (event: MediaQueryListEvent) => setReduceMotion(event.matches);
    query.addEventListener("change", listener);
    return () => query.removeEventListener("change", listener);
  }, []);

  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 42 }}
      gl={{ alpha: true, antialias: true }}
      dpr={[1, 1.5]}
      style={{ background: "transparent" }}
    >
      <WireframeNode reduceMotion={reduceMotion} />
      <ParticleField reduceMotion={reduceMotion} />
    </Canvas>
  );
}
