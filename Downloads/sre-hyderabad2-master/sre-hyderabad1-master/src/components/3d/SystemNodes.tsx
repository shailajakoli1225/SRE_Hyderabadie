import { useRef, useMemo, Suspense } from 'react';
import { Canvas, useFrame, extend, Object3DNode } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';

// Extend Three.js types for R3F
extend({ Line_: THREE.Line })

declare module '@react-three/fiber' {
  interface ThreeElements {
    line_: Object3DNode<THREE.Line, typeof THREE.Line>
  }
}

function Node({ position, delay = 0 }: { position: [number, number, number]; delay?: number }) {
  const materialRef = useRef<THREE.MeshBasicMaterial>(null);
  
  useFrame((state) => {
    if (materialRef.current) {
      materialRef.current.opacity = 0.3 + Math.sin(state.clock.elapsedTime * 2 + delay) * 0.2;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0} floatIntensity={0.5}>
      <mesh position={position}>
        <sphereGeometry args={[0.08, 16, 16]} />
        <meshBasicMaterial ref={materialRef} color="#2dd4bf" transparent opacity={0.5} />
      </mesh>
    </Float>
  );
}

function ConnectionLine({ start, end }: { start: [number, number, number]; end: [number, number, number] }) {
  const lineRef = useRef<THREE.Line>(null);
  
  const geometry = useMemo(() => {
    const points = [
      new THREE.Vector3(...start),
      new THREE.Vector3(...end)
    ];
    return new THREE.BufferGeometry().setFromPoints(points);
  }, [start, end]);

  const material = useMemo(() => {
    return new THREE.LineBasicMaterial({ color: '#2dd4bf', transparent: true, opacity: 0.15 });
  }, []);

  return <primitive ref={lineRef} object={new THREE.Line(geometry, material)} />;
}

function NodesScene() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.03;
    }
  });

  const nodes: [number, number, number][] = useMemo(() => [
    [-2, 1, -1],
    [2, 0.5, -2],
    [-1.5, -1, -1.5],
    [1, 1.5, -1],
    [0, -0.5, -2],
    [-0.5, 0, -1],
    [1.5, -1, -1],
    [-2.5, 0, -2],
    [2.5, 1, -1.5],
    [0, 2, -1],
  ], []);

  const connections = useMemo(() => [
    [nodes[0], nodes[3]],
    [nodes[1], nodes[4]],
    [nodes[2], nodes[5]],
    [nodes[3], nodes[6]],
    [nodes[5], nodes[1]],
    [nodes[7], nodes[0]],
    [nodes[8], nodes[1]],
    [nodes[9], nodes[3]],
    [nodes[4], nodes[6]],
  ], [nodes]);

  return (
    <group ref={groupRef}>
      {nodes.map((pos, i) => (
        <Node key={i} position={pos} delay={i * 0.5} />
      ))}
      {connections.map((conn, i) => (
        <ConnectionLine key={i} start={conn[0]} end={conn[1]} />
      ))}
    </group>
  );
}

export function SystemNodes() {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 60 }}
      style={{ pointerEvents: 'none' }}
      dpr={[1, Math.min(window.devicePixelRatio || 1, 1.5)]}
      performance={{ min: 0.5 }}
      gl={{ antialias: false, alpha: true }}
    >
      <Suspense fallback={null}>
        <ambientLight intensity={0.5} />
        <NodesScene />
      </Suspense>
    </Canvas>
  );
}
