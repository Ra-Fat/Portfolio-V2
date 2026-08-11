"use client";

import React, { useEffect, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

type SphereInCubeProps = {
  position: [number, number, number];
  size?: number;
  color: string;
};

function SphereInCube({ position, size = 3, color }: SphereInCubeProps) {
  const sphereRef = useRef<THREE.Mesh>(null);
  const cubeRef = useRef<THREE.Mesh>(null);

  useFrame((_, delta) => {
    if (sphereRef.current) {
      sphereRef.current.rotation.y -= delta * 0.3;
      sphereRef.current.rotation.z -= delta * 0.3;
    }
    if (cubeRef.current) {
      cubeRef.current.rotation.x += delta * 0.3;
      cubeRef.current.rotation.y += delta * 0.3;
    }
  });

  return (
    <group position={position}>
      <mesh ref={cubeRef}>
        <boxGeometry args={[size, size, size]} />
        <meshBasicMaterial color={color} wireframe transparent opacity={0.12} />
      </mesh>
      <mesh ref={sphereRef}>
        <sphereGeometry args={[size / 2, 16, 12]} />
        <meshBasicMaterial color={color} wireframe transparent opacity={0.12} />
      </mesh>
    </group>
  );
}

function GroundGrid({ color }: { color: string }) {
  const planeLength = 60;
  const plane1Ref = useRef<THREE.Mesh>(null);
  const plane2Ref = useRef<THREE.Mesh>(null);
  const { scene } = useThree();

  useEffect(() => {
    const prevFog = scene.fog;
    scene.fog = new THREE.Fog(new THREE.Color(color).getHex(), 10, 30);
    return () => {
      scene.fog = prevFog;
    };
  }, [scene, color]);

  useFrame((_, delta) => {
    const speed = 2 * delta;
    if (!plane1Ref.current || !plane2Ref.current) return;

    plane1Ref.current.position.z += speed;
    plane2Ref.current.position.z += speed;

    if (plane1Ref.current.position.z > planeLength) {
      plane1Ref.current.position.z = plane2Ref.current.position.z - planeLength;
    }
    if (plane2Ref.current.position.z > planeLength) {
      plane2Ref.current.position.z = plane1Ref.current.position.z - planeLength;
    }
  });

  return (
    <>
      <mesh ref={plane1Ref} rotation={[-Math.PI / 2, 0, 0]} position={[0, -4, 0]}>
        <planeGeometry args={[planeLength, planeLength, 40, 40]} />
        <meshBasicMaterial color={color} wireframe transparent opacity={0.08} />
      </mesh>
      <mesh ref={plane2Ref} rotation={[-Math.PI / 2, 0, 0]} position={[0, -4, -planeLength]}>
        <planeGeometry args={[planeLength, planeLength, 40, 40]} />
        <meshBasicMaterial color={color} wireframe transparent opacity={0.08} />
      </mesh>
    </>
  );
}

/** Slowly pulls the camera back over the first ~300px of scroll, matching the original scroll-dolly effect */
function ScrollDolly() {
  const { camera } = useThree();

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY < 300) {
        camera.position.z = 5 + scrollY * 0.01;
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [camera]);

  return null;
}

type Props = {
  /** Wireframe line color — dark gray/black reads best on your white hero */
  color?: string;
  /** Show the perspective floor grid beneath the objects */
  showGround?: boolean;
  /** Slightly zoom out as the person scrolls the first ~300px */
  scrollZoom?: boolean;
  /** How far out from center the left/right objects sit — increase to push them further to the edges */
  sideOffset?: number;
  /** How high up the objects sit — increase to push them toward the top of the viewport */
  topOffset?: number;
  /** Size of each sphere-in-cube pair — lower this to make them smaller */
  size?: number;
  className?: string;
};

/**
 * Full decorative background scene: two faint sphere-in-cube pairs
 * flanking the hero content, plus an optional infinite ground grid
 * with fog for depth. Renders behind your text — pointer-events are
 * disabled so it never blocks clicks.
 */
export const HeroWireframeDecor = ({
  color = "#1A1A1A",
  showGround = true,
  scrollZoom = true,
  sideOffset = 8,
  topOffset = 4.5,
  size = 3,
  className,
}: Props) => {
  return (
    <div className={className} style={{ pointerEvents: "none" }}>
      <Canvas
        camera={{ position: [0, 0, 5], fov: 90 }}
        gl={{ alpha: true, antialias: true }}
        dpr={[1, 1.5]}
      >
        {scrollZoom && <ScrollDolly />}
        <SphereInCube position={[-sideOffset, topOffset, -2]} size={size} color={color} />
        <SphereInCube position={[sideOffset, topOffset, -2]} size={size} color={color} />
        {showGround && <GroundGrid color={color} />}
      </Canvas>
    </div>
  );
};