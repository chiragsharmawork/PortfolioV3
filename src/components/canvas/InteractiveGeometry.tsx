"use client";

import { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Icosahedron, Float, PresentationControls, Torus, Sparkles } from "@react-three/drei";
import * as THREE from "three";
import { useTheme } from "next-themes";

function AstaCore() {
  const coreRef = useRef<THREE.Mesh>(null);
  const ring1Ref = useRef<THREE.Mesh>(null);
  const ring2Ref = useRef<THREE.Mesh>(null);
  const ring3Ref = useRef<THREE.Mesh>(null);
  
  const [hovered, setHovered] = useState(false);
  
  const { theme, systemTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  const isDark = currentTheme === "dark";

  useFrame((state, delta) => {
    const speed = hovered ? 3 : 1; // Speed up when hovered

    if (coreRef.current) {
      coreRef.current.rotation.y += delta * 0.5 * speed;
      coreRef.current.rotation.x += delta * 0.2 * speed;
    }
    if (ring1Ref.current) {
      ring1Ref.current.rotation.x += delta * 0.8 * speed;
      ring1Ref.current.rotation.y += delta * 0.2 * speed;
    }
    if (ring2Ref.current) {
      ring2Ref.current.rotation.y += delta * 0.6 * speed;
      ring2Ref.current.rotation.z += delta * 0.3 * speed;
    }
    if (ring3Ref.current) {
      ring3Ref.current.rotation.z += delta * 0.7 * speed;
      ring3Ref.current.rotation.x += delta * 0.4 * speed;
    }
  });

  // Colors for light/dark mode
  const coreColor = isDark ? "#0F0" : "#000000"; 
  const ringColor = isDark ? "#0F0" : "#000000";
  const particleColor = isDark ? "#0F0" : "#000000";

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <PresentationControls
        global={false} 
        cursor={true} 
        snap={true} 
        speed={1} 
        zoom={1} 
        rotation={[0, 0, 0]} 
        polar={[-Math.PI / 4, Math.PI / 4]} 
        azimuth={[-Math.PI / 4, Math.PI / 4]}
      >
        <group
          onPointerOver={() => setHovered(true)}
          onPointerOut={() => setHovered(false)}
        >
          {/* Inner Geometric Core */}
          <Icosahedron ref={coreRef} args={[1, 1]}>
            <meshStandardMaterial 
              color={coreColor} 
              wireframe={true} 
              emissive={coreColor}
              emissiveIntensity={hovered ? 0.8 : 0.2}
            />
          </Icosahedron>

          {/* Inner Solid Core to hide back-face wireframes */}
          <Icosahedron args={[0.95, 1]}>
            <meshBasicMaterial color={isDark ? "#000000" : "#FFFFFF"} />
          </Icosahedron>

          {/* Orbiting Gyroscope Rings */}
          <Torus ref={ring1Ref} args={[1.5, 0.02, 16, 100]} rotation={[Math.PI / 2, 0, 0]}>
            <meshStandardMaterial color={ringColor} emissive={ringColor} emissiveIntensity={0.5} />
          </Torus>
          
          <Torus ref={ring2Ref} args={[1.8, 0.02, 16, 100]} rotation={[0, Math.PI / 2, 0]}>
            <meshStandardMaterial color={ringColor} emissive={ringColor} emissiveIntensity={0.5} />
          </Torus>

          <Torus ref={ring3Ref} args={[2.1, 0.02, 16, 100]} rotation={[0, 0, Math.PI / 2]}>
            <meshStandardMaterial color={ringColor} emissive={ringColor} emissiveIntensity={0.5} />
          </Torus>

          {/* Floating Data Particles */}
          <Sparkles 
            count={150} 
            scale={5} 
            size={hovered ? 3 : 1.5} 
            speed={hovered ? 0.8 : 0.2} 
            opacity={0.8} 
            color={particleColor} 
          />
        </group>
      </PresentationControls>
    </Float>
  );
}

export default function InteractiveGeometry() {
  return (
    <div className="w-full h-full min-h-[300px] cursor-grab active:cursor-grabbing">
      <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
        <ambientLight intensity={1} />
        {/* We removed the Environment preset="city" to get rid of the weird photorealistic reflections */}
        <AstaCore />
      </Canvas>
    </div>
  );
}
