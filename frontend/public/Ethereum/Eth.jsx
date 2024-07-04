import React, { useEffect, useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

export default function Model(props) {
  const { nodes, materials } = useGLTF('/Ethereum/eth.gltf'); // Ensure the correct path

  // Adjust scale of the model
  const scale = 0.01; // Example scale value, adjust as needed
  if (materials['default']) {
    materials['default'].color.set('#915EFF'); // Set color to purple
  }

  // Animation variables
  const meshRef = useRef();

  // UseFrame to animate movement
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01; // Rotate on x-axis
      meshRef.current.rotation.y += 0.02; // Rotate on y-axis
      meshRef.current.rotation.z += 0.01; // Rotate on z-axis
    }
  });

  return (
    <group {...props} dispose={null} scale={[scale, scale, scale]}>
      <mesh ref={meshRef} geometry={nodes.Object_2.geometry} material={materials['default']} />
    </group>
  );
}

useGLTF.preload('/Ethereum/eth.gltf'); // Ensure the correct path
