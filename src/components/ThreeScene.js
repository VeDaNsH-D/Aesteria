import { Canvas, useFrame } from '@react-three/fiber';
import { Icosahedron, Stars } from '@react-three/drei';
import { useRef } from 'react';

function RotatingShape() {
  const meshRef = useRef();

  useFrame((state, delta) => {
    meshRef.current.rotation.x += delta * 0.1;
    meshRef.current.rotation.y += delta * 0.2;
  });

  return (
    <Icosahedron ref={meshRef} args={[1.5, 0]}>
      <meshStandardMaterial color={'#100821'} wireframe={true} emissive={'var(--accent-magenta)'} emissiveIntensity={2} />
    </Icosahedron>
  );
}

export default function ThreeScene() {
  return (
    <Canvas style={{ position: 'absolute', top: 0, left: 0, zIndex: 1 }}>
      <ambientLight intensity={0.1} />
      <pointLight color="cyan" position={[-10, -10, -10]} intensity={1.5} />
      <pointLight color="magenta" position={[10, 10, 10]} intensity={1.5} />
      <RotatingShape />
      <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
    </Canvas>
  );
}
