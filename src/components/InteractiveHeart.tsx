import HeartModel from './HeartModel';

import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

export default function InteractiveHeart() {
  return (
    <div className="w-full h-108 cursor-grab">
      <Canvas camera={{ position: [0, 0, 3], fov: 50 }}>
        <Suspense fallback={null}>
          <ambientLight intensity={3} />
          <directionalLight position={[10, 10, 5]} intensity={1.5} />
          <HeartModel scale={1.5} /> 
          <OrbitControls 
            enableZoom={false} 
            enablePan={false} 
            autoRotate 
            autoRotateSpeed={1.5} 
          />
          
        </Suspense>
      </Canvas>
    </div>
  );
}