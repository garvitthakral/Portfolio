import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  CameraControls,
  PerspectiveCamera,
  Environment,
} from "@react-three/drei";
import Express from "../../Models/Express";
import MongoDB from "../../Models/MongoDB";
import React3D from "../../Models/React2";
import Node from "../../Models/Node";
import GlowingBall from "../Components/GlowingBall";

const Technologia = () => {
  return (
    <div className=" h-[200px] mt-10">
      <Canvas shadows>
        <PerspectiveCamera
          makeDefault
          fov={35}
          position={[3, 0, 21]}
          rotation={[0, 0, Math.PI / 4]}
        />
        <Suspense fallback={null}>
          <MongoDB />
          <Express />
          <React3D />
          <Node />
        </Suspense>
        <ambientLight intensity={1} />
        <Environment preset="city" />
        <CameraControls enabled={false} />
      </Canvas>
      <div className="lg:block sm:hidden absolute z-[-1] left-[-130px]">
      <GlowingBall color="#8425dc" size={100}/>
      </div>
    </div>
  );
};

export default Technologia;
