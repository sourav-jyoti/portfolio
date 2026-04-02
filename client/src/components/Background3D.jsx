import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';

function BlockGroup() {
  const ref = useRef();
  
  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.y += delta * 0.1;
      ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
    }
  });

  return (
    <group ref={ref}>
      {/* Central big block */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[1.5, 0.4, 1.2]} />
        <meshStandardMaterial color="#b0b0b0" roughness={0.3} metalness={0.6} />
      </mesh>
      
      {/* Side blocks */}
      <mesh position={[1, 0.2, 0.2]}>
        <boxGeometry args={[0.8, 0.3, 0.6]} />
        <meshStandardMaterial color="#999" roughness={0.4} metalness={0.5} />
      </mesh>
      
      <mesh position={[-0.8, -0.3, 0.4]}>
        <boxGeometry args={[0.6, 0.3, 0.5]} />
        <meshStandardMaterial color="#888" roughness={0.4} metalness={0.5} />
      </mesh>
      
      <mesh position={[0.2, 0.4, -0.5]}>
        <boxGeometry args={[0.7, 0.2, 0.6]} />
        <meshStandardMaterial color="#a0a0a0" roughness={0.3} metalness={0.6} />
      </mesh>
      
      <mesh position={[-0.5, 0.5, 0]}>
        <boxGeometry args={[0.5, 0.2, 0.4]} />
        <meshStandardMaterial color="#a0a0a0" roughness={0.3} metalness={0.6} />
      </mesh>

      {/* Floating lines */}
      <mesh position={[0, -0.2, 0.8]}>
        <boxGeometry args={[2.5, 0.02, 0.02]} />
        <meshBasicMaterial color="#444" />
      </mesh>
      <mesh position={[0.2, 0.1, 0.9]}>
        <boxGeometry args={[1.5, 0.02, 0.02]} />
        <meshBasicMaterial color="#555" />
      </mesh>
    </group>
  );
}

export default function Background3D() {
  return (
    <Canvas camera={{ position: [0, 1.5, 4], fov: 45 }} gl={{ antialias: true }}>
      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 5, 5]} intensity={1.5} color="#ffffff" />
      <directionalLight position={[-5, 5, -5]} intensity={0.8} color="#00E5FF" />
      <directionalLight position={[0, -5, 5]} intensity={0.5} color="#D946EF" />
      <BlockGroup />
    </Canvas>
  );
}
