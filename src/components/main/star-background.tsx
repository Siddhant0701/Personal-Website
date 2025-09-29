"use client";

import { Points, PointMaterial } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, Suspense, type ComponentProps, useMemo, useEffect } from "react";
import type { Points as PointsType } from "three";
import { Sphere, Vector3 } from "three";

export const StarBackground = (props: Partial<ComponentProps<typeof Points>>) => {
  const ref = useRef<PointsType | null>(null);
  
  const sphere = useMemo(() => {
    const count = 5000;
    const len = Math.floor(count / 3) * 3;
    const positions = new Float32Array(len);
    for (let i = 0; i < len; i += 3) {
      const radius = Math.random() * 1.2;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const x = radius * Math.sin(phi) * Math.cos(theta);
      const y = radius * Math.sin(phi) * Math.sin(theta);
      const z = radius * Math.cos(phi);
      positions[i] = Number.isNaN(x) || !isFinite(x) ? 0 : x;
      positions[i + 1] = Number.isNaN(y) || !isFinite(y) ? 0 : y;
      positions[i + 2] = Number.isNaN(z) || !isFinite(z) ? 0 : z;
    }
    return positions;
  }, []);

  useFrame((_state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  useEffect(() => {
    if (ref.current && ref.current.geometry) {
      const geom = ref.current.geometry;
      geom.computeBoundingSphere();
      if (!geom.boundingSphere || Number.isNaN(geom.boundingSphere.radius) || !isFinite(geom.boundingSphere.radius)) {
        geom.boundingSphere = new Sphere(new Vector3(0, 0, 0), 1.2);
      }
    }
  }, [sphere]);

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points
        ref={ref}
        stride={3}
        positions={sphere}
        frustumCulled
        {...props}
      >
        <PointMaterial
          transparent
          color="#fff"
          size={0.002}
          sizeAttenuation
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

export const StarsCanvas = () => (
  <div className="w-full h-auto fixed inset-0 -z-10">
    <Canvas camera={{ position: [0, 0, 1] }}>
      <Suspense fallback={null}>
        <StarBackground />
      </Suspense>
    </Canvas>
  </div>
);