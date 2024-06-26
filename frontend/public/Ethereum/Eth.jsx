// Model.jsx
import React, { useEffect } from 'react';
import { useGLTF } from '@react-three/drei';
import { useThree } from '@react-three/fiber';

export default function Model(props) {
  const { nodes, materials } = useGLTF('/Ethereum/eth.gltf'); // Ensure the correct path

  // Adjust scale of the model
  const scale = 0.01; // Example scale value, adjust as needed
  if (materials['default']) {
    materials['default'].color.set('#915EFF'); // Set color to purple
  }

  // Access three.js camera and controls
  const { camera, gl } = useThree();

  useEffect(() => {
    // Reset camera position and rotation on component mount (or page reload)
    camera.position.set(4, 49.5,2 ); // Example initial position
    camera.lookAt(15,3, 20); // Example initial look at origin
  }, [camera]);

  return (
    <group {...props} dispose={null} scale={[scale, scale, scale]}>
      <mesh geometry={nodes.Object_2.geometry} material={materials['default']} rotation={[-Math.PI / 30, 20, 0]} />
     
    </group>
  );
}

useGLTF.preload('/Ethereum/eth.gltf'); // Ensure the correct path
