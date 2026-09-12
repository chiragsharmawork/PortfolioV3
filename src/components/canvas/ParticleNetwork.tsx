"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";

// Helper to generate points on a sphere
function generateSpherePoints(count: number, radius: number) {
  const points = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    const u = Math.random();
    const v = Math.random();
    const theta = u * 2.0 * Math.PI;
    const phi = Math.acos(2.0 * v - 1.0);
    const r = Math.cbrt(Math.random()) * radius;
    const sinPhi = Math.sin(phi);
    
    points[i * 3] = r * sinPhi * Math.cos(theta);
    points[i * 3 + 1] = r * sinPhi * Math.sin(theta);
    points[i * 3 + 2] = r * Math.cos(phi);
  }
  return points;
}

function ParticleCloud() {
  const ref = useRef<any>(null);
  // 5000 particles in a sphere of radius 1.5
  const sphere = useMemo(() => generateSpherePoints(5000, 1.5), []);

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#22c55e" // Bright green
          size={0.03} // Even larger
          sizeAttenuation={true}
          depthWrite={false}
          opacity={0.9} 
        />
      </Points>
    </group>
  );
}

export default function ParticleNetwork() {
  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-20 md:opacity-100" style={{ minHeight: '100%' }}>
      <Canvas camera={{ position: [0, 0, 4] }}>
        <ParticleCloud />
      </Canvas>
    </div>
  );
}
