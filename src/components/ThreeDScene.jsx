import React, { useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sparkles, useGLTF } from "@react-three/drei";

function Planet(props) {
  const { nodes, materials } = useGLTF(
    "./model/space_exploration_wlp_series_8.glb"
  );
  return (
    <group {...props} dispose={null} scale={0.5}>
      <group rotation={[-Math.PI / 2, 0, 16.5]}>
        <group position={[0, 2, -2]} rotation={[0.1, -0.7, 0.5]} scale={7}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.planet001_1.geometry}
            material={materials.scene}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.planet001_2.geometry}
            material={materials.scene}
          />
        </group>
      </group>
    </group>
  );
}

function ThreeDScene() {
  return (
    <>
      <Canvas
        className="bg-black rounded-3xl"
        camera={{
          position: [0, 3, -10],
        }}
        style={{
          position: "relative",
          top: 0,
          margin: 0,
          width: "100%",
          height: "400px",
          cursor: "pointer",
        }}
      >
        <ambientLight intensity={2} />
        <pointLight position={[10, 10, 10]} />
        <Planet />
        <OrbitControls
          autoRotate={true}
          enableRotate={true}
          enableZoom={true}
        />
        <Sparkles
          count={200}
          speed={0.2}
          size={50}
          opacity={1}
          scale={[500, 500, 500]}
        />
      </Canvas>
      <a
        href="https://sketchfab.com/3d-models/space-exploration-wlp-series-8-91964c1ce1a34c3985b6257441efa500"
        target="_blank"
        className="hover:underline"
      >
        <h1 className="text-sm italic text-gray-700 font-montserrat">
          3D Asset made by Shapernode
        </h1>
      </a>
    </>
  );
}

export default ThreeDScene;

useGLTF.preload("./model/space_exploration_wlp_series_8.glb");
