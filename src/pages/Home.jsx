import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, useGLTF } from '@react-three/drei';

const Island = () => {
    const gltf = useGLTF(import.meta.env.BASE_URL + 'island/floating_island.gltf');
    return <primitive object={gltf.scene} scale={1.5} />;
}

const Home = () => {
    return (
        <div className="canvas-wrapper">
        <Canvas camera={{ position: [50, 10, 25], fov: 50 }}>
            <ambientLight intensity={0.5} />
            <directionalLight position={[5, 5, 5]} intensity={1} />
            <OrbitControls />
            <Environment preset="sunset" />
            <Island />
        </Canvas>
        </div>
    );
};

export default Home;