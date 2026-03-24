import React, { Suspense, useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, Float, Sphere, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

const NeuralObject = () => {
  const meshRef = useRef();
  const pointsRef = useRef();
  
  // Use simple geometry for performance
  const geometry = useMemo(() => new THREE.IcosahedronGeometry(1.2, 1), []);
  
  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    
    // Slow Rotation
    if (meshRef.current) {
      meshRef.current.rotation.y = time * 0.1;
      meshRef.current.rotation.x = time * 0.05;
    }
    
    // Floating Sine Wave
    if (meshRef.current) {
      meshRef.current.position.y = Math.sin(time * 0.5) * 0.1;
    }
  });

  return (
    <group>
      {/* Wireframe Sphere */}
      <mesh ref={meshRef} geometry={geometry}>
        <meshBasicMaterial 
          color="#f77fbe" 
          wireframe 
          transparent 
          opacity={0.15} 
          blending={THREE.AdditiveBlending}
        />
      </mesh>

      {/* Pulsating Vertices (Data Nodes) */}
      <Points positions={geometry.attributes.position.array} stride={3}>
        <PointMaterial
          transparent
          color="#f77fbe"
          size={0.03}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={0.4}
          blending={THREE.AdditiveBlending}
        />
      </Points>

      {/* Minimal Ambient Particles */}
      <Points positions={new Float32Array([...Array(300)].map(() => (Math.random() - 0.5) * 4))} stride={3}>
        <PointMaterial
          transparent
          color="#ffffff"
          size={0.005}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={0.2}
        />
      </Points>
    </group>
  );
};

const Background3D = () => {
  return (
    <div className="fixed inset-0 z-[-2] pointer-events-none opacity-60">
      <Canvas camera={{ position: [0, 0, 3], fov: 45 }}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} color="#f77fbe" intensity={1} />
          <NeuralObject />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Background3D;
