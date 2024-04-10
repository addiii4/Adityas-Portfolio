import React from 'react'
import { Canvas } from '@react-three/fiber';
import { useState, Suspense } from 'react';
import Loader from '../components/loader';
import Island from '../models/island';
import Sky from '../models/sky';
import Plane from '../models/plane'

const Home = () => {
  const [isRotating, setisRotating] = useState(false);
  
  const adjustIslandForScreen = () => {
    let screenScale = null;
    let screenPosition = [0, -6.5, -43];
    let rotation = [0.1, 4.7, 0];

    if(window.innerWidth < 768) {
      screenScale = [0.9, 0.9, 0.9];
    } else {
      screenScale = [1, 1, 1];
    }
    return [screenScale, screenPosition, rotation];
  }

  const [islandScale, islandPosition, islandRotation] = adjustIslandForScreen();

  return (
    <section className="w-full h-screen relative">
      <div className="absolute top-28 left-0 right-0 z-10 flex items-center justify-center">
        POPUP
      </div>
      <Canvas
        className={`w-full h-screen bg-transparent ${
          isRotating ? "cursor-grabbing" : "cursor-grab"
        }`}
        camera={{ near: 0.1, far: 1000 }}
      >
        <Suspense fallback={<Loader />}>
          <directionalLight position={[1, 1, 1]} intensity={2} />
          <ambientLight intensity={0.5} />
          <hemisphereLight
            skyColor="#b1e1ff"
            groundColor="#000000"
            intensity={1}
          />
          <Sky />
          <Island
            position={islandPosition}
            scale={islandScale}
            rotation={islandRotation}
            isRotating={isRotating}
            setisRotating={setisRotating}
          />
          <Plane />
        </Suspense>
      </Canvas>
    </section>
  );
}

export default Home