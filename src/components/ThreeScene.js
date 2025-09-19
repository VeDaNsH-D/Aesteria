import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, Stars, Sparkles } from '@react-three/drei';
import { EffectComposer, Bloom } from '@react-three/postprocessing';
import { useRef } from 'react';
import { gsap } from 'gsap';

// This component loads and animates your custom 3D model
function Model() {
  const { scene } = useGLTF('/tech_core.glb'); // Make sure this path is correct
  const modelRef = useRef();

  useFrame((state) => {
    // This makes the model subtly follow the mouse
    const x = (state.mouse.x * Math.PI) / 8;
    const y = (state.mouse.y * Math.PI) / 8;

    gsap.to(modelRef.current.rotation, {
      y: x,
      x: -y,
      duration: 1,
      ease: 'power2.out'
    });

    // Continue the base rotation
    modelRef.current.rotation.y += 0.001;
  });

  // We clone the scene to avoid issues with multiple renders
  return <primitive ref={modelRef} object={scene.clone()} scale={1.2} />;
}

export default function ThreeScene() {
  return (
    <Canvas
      style={{ position: 'absolute', top: 0, left: 0, zIndex: 1, background: '#010108' }}
      camera={{ position: [0, 0, 5], fov: 60 }}
    >
      <ambientLight intensity={0.2} />
      <directionalLight position={[5, 5, 5]} intensity={1} color={'#00ffff'} />
      <directionalLight position={[-5, -5, -5]} intensity={1} color={'#ff00ff'} />

      <Model />

      <Stars radius={100} depth={50} count={6000} factor={4} saturation={0} fade speed={1} />
      <Sparkles count={200} scale={5} size={3} speed={0.4} color={'#ff00ff'} />

      <EffectComposer>
        <Bloom
          luminanceThreshold={0}
          luminanceSmoothing={0.9}
          height={300}
          intensity={1.5}
        />
      </EffectComposer>
    </Canvas>
  );
}
