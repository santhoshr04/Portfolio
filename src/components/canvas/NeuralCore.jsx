import { Suspense, useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, PointMaterial, Points, Preload } from "@react-three/drei";
import * as THREE from "three";

const orbitNodes = [
  { position: [2.25, 0.25, 0.1], color: "#c084fc", size: 0.16 },
  { position: [-1.8, 1.35, -0.35], color: "#22d3ee", size: 0.13 },
  { position: [-2.05, -1.05, 0.35], color: "#f472b6", size: 0.18 },
  { position: [1.35, -1.7, -0.2], color: "#818cf8", size: 0.12 },
  { position: [0.35, 2.05, -0.6], color: "#34d399", size: 0.1 },
];

const CoreScene = () => {
  const systemRef = useRef();
  const innerRef = useRef();
  const particles = useMemo(() => {
    const positions = new Float32Array(420 * 3);

    for (let index = 0; index < 420; index += 1) {
      const radius = 2.7 + Math.random() * 1.8;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      positions[index * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[index * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[index * 3 + 2] = radius * Math.cos(phi);
    }

    return positions;
  }, []);

  useFrame((state, delta) => {
    if (!systemRef.current || !innerRef.current) return;

    systemRef.current.rotation.y += delta * 0.12;
    systemRef.current.rotation.x = THREE.MathUtils.lerp(
      systemRef.current.rotation.x,
      state.pointer.y * 0.16,
      0.04,
    );
    systemRef.current.rotation.z = THREE.MathUtils.lerp(
      systemRef.current.rotation.z,
      -state.pointer.x * 0.1,
      0.04,
    );
    innerRef.current.rotation.x += delta * 0.18;
    innerRef.current.rotation.y -= delta * 0.22;
  });

  return (
    <group ref={systemRef}>
      <ambientLight intensity={0.45} />
      <pointLight position={[2, 2, 3]} intensity={18} color="#8b5cf6" distance={8} />
      <pointLight position={[-3, -1, 2]} intensity={12} color="#06b6d4" distance={7} />

      <group ref={innerRef}>
        <mesh>
          <icosahedronGeometry args={[1.12, 5]} />
          <meshStandardMaterial
            color="#1c0f38"
            emissive="#7c3aed"
            emissiveIntensity={1.4}
            metalness={0.75}
            roughness={0.18}
          />
        </mesh>
        <mesh scale={1.16}>
          <icosahedronGeometry args={[1.12, 2]} />
          <meshBasicMaterial color="#d8b4fe" wireframe transparent opacity={0.38} />
        </mesh>
        <mesh scale={0.72}>
          <octahedronGeometry args={[1, 2]} />
          <meshBasicMaterial color="#ffffff" wireframe transparent opacity={0.28} />
        </mesh>
      </group>

      <mesh rotation={[Math.PI / 2.7, 0.25, 0.2]}>
        <torusGeometry args={[1.75, 0.012, 12, 180]} />
        <meshBasicMaterial color="#a855f7" transparent opacity={0.7} />
      </mesh>
      <mesh rotation={[-Math.PI / 3.2, 0.5, -0.45]}>
        <torusGeometry args={[2.2, 0.009, 12, 180]} />
        <meshBasicMaterial color="#22d3ee" transparent opacity={0.42} />
      </mesh>
      <mesh rotation={[0.25, Math.PI / 2.5, 0.8]}>
        <torusGeometry args={[2.55, 0.008, 12, 180]} />
        <meshBasicMaterial color="#f472b6" transparent opacity={0.28} />
      </mesh>

      {orbitNodes.map((node, index) => (
        <group key={node.color} position={node.position}>
          <mesh>
            <sphereGeometry args={[node.size, 24, 24]} />
            <meshStandardMaterial
              color={node.color}
              emissive={node.color}
              emissiveIntensity={2.8}
              roughness={0.1}
            />
          </mesh>
          <mesh scale={1.8 + index * 0.08}>
            <sphereGeometry args={[node.size, 16, 16]} />
            <meshBasicMaterial color={node.color} transparent opacity={0.12} />
          </mesh>
        </group>
      ))}
    </group>
  );
};

const NeuralCoreCanvas = () => (
  <Canvas
    style={{ width: "100%", height: "100%", display: "block" }}
    resize={{ scroll: false, debounce: { scroll: 0, resize: 0 } }}
    dpr={[1, 1.5]}
    camera={{ position: [0, 0, 7.4], fov: 42 }}
    gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
  >
    <Suspense fallback={null}>
      <CoreScene />
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        enableDamping
        dampingFactor={0.06}
        rotateSpeed={0.45}
      />
      <Preload all />
    </Suspense>
  </Canvas>
);

export default NeuralCoreCanvas;
