"use client";

import React, {
  useRef,
  Suspense,
  forwardRef,
  useImperativeHandle,
  useMemo,
  ComponentPropsWithoutRef,
} from "react";
import dynamic from "next/dynamic";
import { useFrame } from "@react-three/fiber";
import { inSphere } from "maath/random";
import * as THREE from "three";

// Dynamically load to prevent SSR issues
const Canvas = dynamic(
  () => import("@react-three/fiber").then((mod) => ({ default: mod.Canvas })),
  { ssr: false }
);

const Points = dynamic(
  () => import("@react-three/drei").then((mod) => ({ default: mod.Points })),
  { ssr: false }
);

const PointMaterial = dynamic(
  () =>
    import("@react-three/drei").then((mod) => ({
      default: mod.PointMaterial,
    })),
  { ssr: false }
);

// Particles Component
const Particles = forwardRef<THREE.Group, ComponentPropsWithoutRef<"group">>(
  (props, ref) => {
    const internalRef = useRef<THREE.Group>(null);

    // Memoized positions array
    const sphere = useMemo(() => {
      const count = 666 * 3;
      const array = new Float32Array(count);
      inSphere(array, { radius: 1.5 });

      for (let i = 0; i < array.length; i++) {
        if (isNaN(array[i])) {
          console.warn(`NaN at ${i}, resetting.`);
          array[i] = 0;
        }
      }

      return array;
    }, []);

    const geometry = useMemo(() => {
      const geo = new THREE.BufferGeometry();
      geo.setAttribute(
        "position",
        new THREE.BufferAttribute(sphere, 3)
      );
      return geo;
    }, [sphere]);

    useImperativeHandle(ref, () => internalRef.current!);

    useFrame((_, delta) => {
      if (internalRef.current) {
        internalRef.current.rotation.x -= delta / 100;
        internalRef.current.rotation.y -= delta / 150;
      }
    });

    return (
      <group ref={internalRef} rotation={[0, 0, Math.PI / 4]} {...props}>
        <Points frustumCulled={false}>
          <bufferGeometry attach="geometry" {...geometry} />
          <PointMaterial
            transparent
            color="#00ffff"
            size={0.005}
            sizeAttenuation
            depthWrite={false}
          />
        </Points>
      </group>
    );
  }
);
Particles.displayName = "Particles";

// Scene wrapper
const Scene = () => (
  <Suspense fallback={null}>
    <Particles />
  </Suspense>
);

// Main exported component
const ParticleBackground = forwardRef<HTMLDivElement>((props, ref) => (
  <div
    ref={ref}
    className="fixed inset-0 pointer-events-none opacity-30 z-[-1]"
    {...props}
  >
    <Canvas camera={{ position: [0, 0, 1] }} gl={{ antialias: false }}>
      <Scene />
    </Canvas>
  </div>
));
ParticleBackground.displayName = "ParticleBackground";

export default ParticleBackground;
