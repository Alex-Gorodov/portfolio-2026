import { Canvas, useFrame } from "@react-three/fiber";
import { useEffect, useMemo, useRef } from "react";
import * as THREE from "three";
import { useGlobalMouse } from "../../Hooks/useGlobalMouse";
import { Html, useProgress } from "@react-three/drei";
import { Suspense } from "react";

function Loader() {
  const { progress } = useProgress();

  return (
    <Html center>
      <div style={{
        color: "white",
        fontSize: "14px",
        fontFamily: "sans-serif",
        opacity: 0.8
      }}>
        Loading {progress.toFixed(0)}%
      </div>
    </Html>
  );
}

function Orb() {
  const group = useRef<THREE.Group>(null);
  const particles = useRef<THREE.Points>(null);
  const scrollY = useRef(0);
  const smoothScroll = useRef(0);

  const pointer = useGlobalMouse();
  useEffect(() => {
    const onScroll = () => {
      scrollY.current = window.scrollY;
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // smooth energy value (ONLY source of truth)
  const energy = useRef(1);

  // generate particles once (IMPORTANT FIX)
  const particleCount = 250;

  const positions = useMemo(() => {
    const arr = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3;

      const radius = 1.5 + Math.random() * 1.8;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.random() * Math.PI;

      arr[i3] = radius * Math.sin(phi) * Math.cos(theta);
      arr[i3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      arr[i3 + 2] = radius * Math.cos(phi);
    }

    return arr;
  }, []);

  useFrame((state, delta) => {
    if (!group.current || !particles.current) return;

    const t = state.clock.elapsedTime;

    // -----------------------------
    // 1. SMOOTH POINTER
    // -----------------------------
    pointer.current.current.x += (pointer.target.current.x - pointer.current.current.x) * 0.06;
    pointer.current.current.y += (pointer.target.current.y - pointer.current.current.y) * 0.06;

    // -----------------------------
    // 2. SOFT FOLLOW (NOT LOCKED)
    // -----------------------------
    const px = pointer.current.current.x;
    const py = pointer.current.current.y;

    group.current.position.x += (px * 1.2 - group.current.position.x) * 0.4;
    group.current.position.y += (py * 0.9 - group.current.position.y) * 0.4;

    // -----------------------------
    // 3. NATURAL FLOATING MOTION
    // -----------------------------
    group.current.rotation.y += delta * 0.2;
    group.current.rotation.x = Math.sin(t * 0.4) * 0.25;

    // -----------------------------
    // 4. ENERGY SYSTEM (CLICK GROWTH)
    // -----------------------------
    const targetScale = 1 + (energy.current - 1) * 0.9;

    group.current.scale.x += (targetScale - group.current.scale.x) * 0.08;
    group.current.scale.y += (targetScale - group.current.scale.y) * 0.08;
    group.current.scale.z += (targetScale - group.current.scale.z) * 0.08;

    // smooth return to baseline
    energy.current += (1 - energy.current) * 0.02;

    // -----------------------------
    // 5. PARTICLES MOTION
    // -----------------------------
    particles.current.rotation.y = t * 0.08;
    particles.current.rotation.x = t * 0.03;

    // -----------------------------
    // 6. SCROLL (FIXED BEHAVIOR)
    // -----------------------------

    const scroll = scrollY.current * 0.001;

    // smooth scroll (inertia)
    smoothScroll.current += (scroll - smoothScroll.current) * 0.6;

    // limit influence so it never flies away forever
    const bounded = THREE.MathUtils.clamp(smoothScroll.current, -1.8, 6);

    // auto-return force (KEY PART)
    const returnForce = THREE.MathUtils.lerp(bounded, 0, 0.02);

    // POSITION Y
    group.current.position.y = THREE.MathUtils.lerp(
      group.current.position.y,
      -returnForce * 2.2,
      0.08
    );

    // POSITION X (keep motion but not escape screen)
    const wave = Math.sin(returnForce * 3.5) * 10.2;

    group.current.position.x = THREE.MathUtils.lerp(
      group.current.position.x,
      wave,
      0.08
    );

    // ROTATION
    group.current.rotation.y = THREE.MathUtils.lerp(
      group.current.rotation.y,
      returnForce * 10.5,
      0.06
    );

    // -----------------------------
    // MOUSE ROTATION (NEW)
    // -----------------------------
    const mouseRotX = py * 0.6;
    const mouseRotY = px * 0.8;

    group.current.rotation.x = THREE.MathUtils.lerp(
      group.current.rotation.x,
      mouseRotX,
      0.06
    );

    group.current.rotation.y = THREE.MathUtils.lerp(
      group.current.rotation.y,
      mouseRotY,
      0.06
    );
  });

  return (
    <group
      ref={group}
      onClick={() => {
        energy.current += 0.02;
      }}
    >

      {/* WIREFRAME STRUCTURE */}
      <mesh position={[-1, 1, 0]}>
        <sphereGeometry args={[1, 24, 24]}/>
        <meshBasicMaterial
          wireframe
          color="#009baa"
          transparent
          opacity={0.18}
        />
      </mesh>

      <mesh position={[3, 0, 0]}>
        <sphereGeometry args={[1, 32, 32]}/>
        <meshBasicMaterial
          wireframe
          color="#9959ff"
          transparent
          opacity={0.18}
        />
      </mesh>

      {/* PARTICLES */}
      <points ref={particles}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            array={positions}
            count={particleCount}
            itemSize={3}
          />
        </bufferGeometry>

        <pointsMaterial
          size={0.02}
          color="#00eaff"
          transparent
          opacity={0.85}
        />
      </points>

      {/* PARTICLES */}
      <points ref={particles}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            array={positions}
            count={particleCount}
            itemSize={3}
          />
        </bufferGeometry>

        <pointsMaterial
          size={0.02}
          color="#be3cd8"
          transparent
          opacity={0.55}
        />
      </points>
    </group>
  );
}

export default function ThreeSphere() {
  return (
    <Canvas camera={{ position: [0, 0, 4] }}>
      <ambientLight intensity={0.6} />
      <directionalLight position={[3, 3, 3]} intensity={1} />
      <pointLight position={[-3, -2, -2]} intensity={0.5} />
      <Orb />
    </Canvas>
  );
}

