import { Suspense, useMemo, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Icosahedron, Stars } from '@react-three/drei';

const reducedMotion =
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function CoreShape() {
  const meshRef = useRef(null);
  useFrame((_, delta) => {
    if (reducedMotion || !meshRef.current) return;
    meshRef.current.rotation.x += delta * 0.08;
    meshRef.current.rotation.y += delta * 0.12;
  });

  return (
    <Float speed={reducedMotion ? 0 : 1.4} rotationIntensity={reducedMotion ? 0 : 0.6} floatIntensity={reducedMotion ? 0 : 1.1}>
      <Icosahedron ref={meshRef} args={[1.25, 1]}>
        <MeshDistortMaterial
          color="#7c3aed"
          emissive="#2e1065"
          emissiveIntensity={0.5}
          roughness={0.05}
          metalness={0.75}
          distort={0.22}
          speed={reducedMotion ? 0 : 1.6}
          flatShading
        />
      </Icosahedron>
    </Float>
  );
}

function Rig() {
  useFrame((state) => {
    if (reducedMotion) return;
    state.camera.position.x += (state.mouse.x * 0.6 - state.camera.position.x) * 0.03;
    state.camera.position.y += (state.mouse.y * 0.4 - state.camera.position.y) * 0.03;
    state.camera.lookAt(0, 0, 0);
  });
  return null;
}

export default function Scene3D() {
  const dpr = useMemo(() => (typeof window !== 'undefined' ? Math.min(window.devicePixelRatio, 2) : 1), []);

  return (
    <Canvas
      dpr={dpr}
      camera={{ position: [0, 0, 7], fov: 38 }}
      gl={{ antialias: true, alpha: true }}
      aria-hidden="true"
    >
      <Suspense fallback={null}>
        <ambientLight intensity={0.25} />
        <pointLight position={[3.5, 3.5, 4.5]} intensity={4.5} color="#e9d5ff" />
        <pointLight position={[-4, -2.5, -2]} intensity={1.4} color="#7c3aed" />
        <pointLight position={[-1, -3, 3.5]} intensity={0.9} color="#f0abfc" />
        <CoreShape />
        <Stars radius={20} depth={30} count={reducedMotion ? 400 : 1200} factor={2} fade speed={reducedMotion ? 0 : 0.6} />
        <Rig />
      </Suspense>
    </Canvas>
  );
}
